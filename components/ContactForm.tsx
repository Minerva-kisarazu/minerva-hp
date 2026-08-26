'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import Link from 'next/link';

const gradeOptions = [
  '小学1年',
  '小学2年',
  '小学3年',
  '小学4年',
  '小学5年',
  '小学6年',
  '中学1年',
  '中学2年',
  '中学3年',
  '高校1年',
  '高校2年',
  '高校3年',
];

const consultationOptions = [
  '無料学習診断レポート付き体験授業（80分）の申し込み',
  '現在の学習状況についての個別相談希望',
  '資料請求・その他お問い合わせ',
];

type FormState = {
  name: string;
  grade: string;
  schoolName: string;
  phone: string;
  consultation: string[];
  message: string;
};

type FieldName = keyof FormState;

const emptyForm: FormState = {
  name: '',
  grade: '',
  schoolName: '',
  phone: '',
  consultation: [],
  message: '',
};

// 全角で入力されることが多いため、桁数を数える前に半角へ寄せる
const toHalfWidth = (value: string) =>
  value
    .replace(/[０-９]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0xfee0))
    .replace(/[ー－―‐−]/g, '-');

const countDigits = (value: string) => (toHalfWidth(value).match(/\d/g) ?? []).length;

const inputClassName =
  'w-full px-4 py-3.5 rounded-lg border bg-white text-base text-slate-900 outline-none transition-colors focus:border-brand-900 focus:ring-2 focus:ring-accent-500/30';

const errorInputClassName = 'border-red-500';
const normalInputClassName = 'border-slate-300';

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  // ボット対策用（画面上は非表示）。値が入っていたら送信成功扱いにして実送信しない
  const [website, setWebsite] = useState('');

  const clearError = (field: FieldName) => {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    clearError(name as FieldName);
  };

  const handleCheckboxChange = (option: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      consultation: checked
        ? [...prev.consultation, option]
        : prev.consultation.filter((item) => item !== option),
    }));
    clearError('consultation');
  };

  const validate = (): Partial<Record<FieldName, string>> => {
    const nextErrors: Partial<Record<FieldName, string>> = {};

    if (!formData.name.trim()) {
      nextErrors.name = 'お名前を入力してください';
    }

    if (!formData.grade) {
      nextErrors.grade = 'お子様の学年を選択してください';
    }

    const phoneDigits = countDigits(formData.phone);
    if (!formData.phone.trim()) {
      nextErrors.phone = '電話番号を入力してください';
    } else if (phoneDigits < 10 || phoneDigits > 11) {
      nextErrors.phone = '電話番号は市外局番からの10桁または11桁でご入力ください';
    }

    if (formData.consultation.length === 0) {
      nextErrors.consultation = 'ご相談内容を1つ以上選択してください';
    }

    return nextErrors;
  };

  const focusFirstError = (nextErrors: Partial<Record<FieldName, string>>) => {
    const order: FieldName[] = ['name', 'grade', 'phone', 'consultation'];
    const firstField = order.find((field) => nextErrors[field]);
    if (!firstField) return;

    const target = document.getElementById(
      firstField === 'consultation' ? 'consultation-0' : firstField
    );
    target?.focus();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      focusFirstError(nextErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          website,
        }),
      });

      const result = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

      if (!response.ok || !result?.ok) {
        setSubmitError(
          result?.error ||
            '送信に失敗しました。時間をおいて再度お試しいただくか、お電話でご連絡ください。'
        );
        return;
      }

      setFormData(emptyForm);
      setWebsite('');
      setIsSubmitted(true);
    } catch {
      setSubmitError(
        '送信に失敗しました。通信環境をご確認のうえ、再度お試しいただくか、お電話でご連絡ください。'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto bg-white p-8 sm:p-12 rounded-xl border border-slate-200 shadow-sm text-center">
        <svg
          className="mx-auto h-16 w-16 text-green-600"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-8 mb-6">
          お申し込みありがとうございます
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          お申し込みを受け付けました。2営業日以内にお電話または公式LINEにて、体験授業の日程についてご連絡いたします。
        </p>
        <p className="text-base text-slate-600 leading-relaxed mb-10">
          ご不明な点がございましたら、お気軽にお電話（
          <a href="tel:0368206929" className="underline underline-offset-2 hover:text-accent-700">
            03-6820-6929
          </a>
          ）でもお問い合わせください。
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-brand-900 hover:bg-[#004840] text-white font-bold px-8 py-4 rounded-lg transition-colors shadow-md"
        >
          ホームに戻る
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="relative max-w-2xl mx-auto">
      <h2 className="sr-only">お申し込みフォーム</h2>

      <div className="space-y-8">
        <div>
          <label htmlFor="name" className="block text-base font-bold mb-2">
            お名前
            <span className="text-red-600 ml-1">必須</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="例：山田 太郎"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={`${inputClassName} ${errors.name ? errorInputClassName : normalInputClassName}`}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="mt-2 text-sm text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="grade" className="block text-base font-bold mb-2">
            お子様の学年
            <span className="text-red-600 ml-1">必須</span>
          </label>
          <select
            id="grade"
            name="grade"
            value={formData.grade}
            onChange={handleInputChange}
            aria-invalid={Boolean(errors.grade)}
            aria-describedby={errors.grade ? 'grade-error' : undefined}
            className={`${inputClassName} ${errors.grade ? errorInputClassName : normalInputClassName}`}
          >
            <option value="">選択してください</option>
            {gradeOptions.map((grade) => (
              <option key={grade} value={grade}>
                {grade}
              </option>
            ))}
          </select>
          {errors.grade && (
            <p id="grade-error" role="alert" className="mt-2 text-sm text-red-600">
              {errors.grade}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="schoolName" className="block text-base font-bold mb-2">
            学校名
            <span className="text-slate-500 font-medium ml-1">任意</span>
          </label>
          <input
            type="text"
            id="schoolName"
            name="schoolName"
            value={formData.schoolName}
            onChange={handleInputChange}
            placeholder="例：木更津市立金田中学校"
            className={`${inputClassName} ${normalInputClassName}`}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-base font-bold mb-2">
            電話番号
            <span className="text-red-600 ml-1">必須</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            inputMode="tel"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="例：090-1234-5678"
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            className={`${inputClassName} ${errors.phone ? errorInputClassName : normalInputClassName}`}
          />
          {errors.phone && (
            <p id="phone-error" role="alert" className="mt-2 text-sm text-red-600">
              {errors.phone}
            </p>
          )}
        </div>

        <fieldset
          aria-invalid={Boolean(errors.consultation)}
          aria-describedby={errors.consultation ? 'consultation-error' : undefined}
        >
          <legend className="block text-base font-bold mb-2">
            ご相談内容
            <span className="text-red-600 ml-1">必須</span>
            <span className="text-slate-500 font-medium ml-1">複数選択可</span>
          </legend>
          <div className="space-y-2">
            {consultationOptions.map((option, index) => (
              <label
                key={option}
                htmlFor={`consultation-${index}`}
                className="flex items-start gap-3 p-3 rounded-lg border border-slate-200 bg-white cursor-pointer hover:border-accent-500 transition-colors"
              >
                <input
                  type="checkbox"
                  id={`consultation-${index}`}
                  name="consultation"
                  value={option}
                  checked={formData.consultation.includes(option)}
                  onChange={(event) => handleCheckboxChange(option, event.target.checked)}
                  className="mt-1 w-5 h-5 accent-brand-900 flex-shrink-0"
                />
                <span className="text-slate-800 leading-relaxed">{option}</span>
              </label>
            ))}
          </div>
          {errors.consultation && (
            <p id="consultation-error" role="alert" className="mt-2 text-sm text-red-600">
              {errors.consultation}
            </p>
          )}
        </fieldset>

        <div>
          <label htmlFor="message" className="block text-base font-bold mb-2">
            メッセージ・具体的なお悩み
            <span className="text-slate-500 font-medium ml-1">任意</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleInputChange}
            placeholder="例：家で勉強せず、テストでの計算ミスが多いです。ノートの書き方から直したいと考えています。"
            className={`${inputClassName} ${normalInputClassName} leading-relaxed resize-y`}
          />
        </div>

        {/* honeypot: 視覚的に隠すが、アクセシビリティ上も通常操作では触れない */}
        <div className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
          />
        </div>

        <div className="bg-slate-100 border border-slate-200 rounded-lg p-5">
          <h3 className="font-bold text-base mb-2">個人情報の取り扱いについて</h3>
          <p className="text-base text-slate-700 leading-relaxed">
            お申し込み情報は、体験授業の実施に必要な範囲内で保護し、第三者に開示することはありません。また、電話での営業は行っておりません。
          </p>
        </div>

        {submitError && (
          <p role="alert" className="text-center text-sm sm:text-base text-red-600 leading-relaxed">
            {submitError}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-brand-900 hover:bg-[#004840] disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg transition-colors shadow-md text-base sm:text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500"
        >
          {isSubmitting ? '送信中...' : '無料体験・学習相談を申し込む'}
        </button>
        <p className="mt-3 text-center text-base text-slate-600 leading-relaxed">
          送信後、日程調整についてご連絡します。
        </p>
      </div>
    </form>
  );
}
