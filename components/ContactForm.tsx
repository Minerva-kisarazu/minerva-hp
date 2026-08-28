'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import {
  CONTACT_INQUIRY_STORAGE_KEY,
  GRADE_OPTIONS,
  INQUIRY_TYPE_OPTIONS,
  REFERRAL_SOURCE_OPTIONS,
  validateContactInquiry,
  type ContactFieldName,
  type ContactInquiryData,
} from '@/lib/contactInquiry';

type FormState = {
  studentLastName: string;
  studentFirstName: string;
  studentLastNameKana: string;
  studentFirstNameKana: string;
  grade: string;
  schoolName: string;
  guardianName: string;
  email: string;
  phone: string;
  inquiryTypes: string[];
  message: string;
  referralSource: string;
};

const emptyForm: FormState = {
  studentLastName: '',
  studentFirstName: '',
  studentLastNameKana: '',
  studentFirstNameKana: '',
  grade: '',
  schoolName: '',
  guardianName: '',
  email: '',
  phone: '',
  inquiryTypes: [],
  message: '',
  referralSource: '',
};

const TRIAL_INQUIRY_OPTION = '体験授業について相談したい';

const inputClassName =
  'w-full min-w-0 px-4 py-3.5 rounded-lg border bg-white text-base text-slate-900 outline-none transition-colors focus:border-brand-900 focus:ring-2 focus:ring-accent-500/30';

const errorInputClassName = 'border-red-500';
const normalInputClassName = 'border-slate-300';

const fieldOrder: ContactFieldName[] = [
  'studentLastName',
  'studentFirstName',
  'studentLastNameKana',
  'studentFirstNameKana',
  'grade',
  'schoolName',
  'guardianName',
  'email',
  'phone',
  'inquiryTypes',
];

function RequiredMark() {
  return <span className="text-red-600 ml-1">必須</span>;
}

function OptionalMark() {
  return <span className="text-slate-500 font-medium ml-1">任意</span>;
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-2 text-sm text-red-600">
      {message}
    </p>
  );
}

export default function ContactForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<ContactFieldName, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [website, setWebsite] = useState('');

  const wantsTrial = formData.inquiryTypes.includes(TRIAL_INQUIRY_OPTION);

  const clearError = (field: ContactFieldName) => {
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
    clearError(name as ContactFieldName);
  };

  const handleInquiryTypeChange = (option: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      inquiryTypes: checked
        ? [...prev.inquiryTypes, option]
        : prev.inquiryTypes.filter((item) => item !== option),
    }));
    clearError('inquiryTypes');
  };

  const focusFirstError = (nextErrors: Partial<Record<ContactFieldName, string>>) => {
    const firstField = fieldOrder.find((field) => nextErrors[field]);
    if (!firstField) return;

    const target = document.getElementById(
      firstField === 'inquiryTypes' ? 'inquiryTypes-0' : firstField
    );
    target?.focus();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validated = validateContactInquiry(formData);
    if ('errors' in validated) {
      setErrors(validated.errors);
      focusFirstError(validated.errors);
      return;
    }

    setErrors({});
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
        | { ok?: boolean; error?: string; inquiry?: ContactInquiryData }
        | null;

      if (!response.ok || !result?.ok || !result.inquiry) {
        setSubmitError(
          result?.error ||
            '送信に失敗しました。時間をおいて再度お試しいただくか、お電話でご連絡ください。'
        );
        return;
      }

      try {
        sessionStorage.setItem(CONTACT_INQUIRY_STORAGE_KEY, JSON.stringify(result.inquiry));
      } catch {
        // sessionStorage 不可環境でも完了ページへ進む
      }

      setFormData(emptyForm);
      setWebsite('');
      router.push('/contact/thanks');
    } catch {
      setSubmitError(
        '送信に失敗しました。通信環境をご確認のうえ、再度お試しいただくか、お電話でご連絡ください。'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="relative">
      <div className="mb-8 sm:mb-10 space-y-4">
        <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold leading-relaxed border-b border-slate-300 pb-5">
          まずはお気軽にご相談ください。
        </h2>
        <p className="body-text">
          料金や指導内容についてのご質問、お子さまの学習についてのご相談、資料請求など、まずはお気軽にお問い合わせください。
        </p>
      </div>

      <div className="space-y-10">
        <fieldset className="form-fieldset">
          <legend className="form-legend">生徒情報</legend>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="studentLastName" className="block text-base font-bold mb-2">
                生徒姓
                <RequiredMark />
              </label>
              <input
                type="text"
                id="studentLastName"
                name="studentLastName"
                value={formData.studentLastName}
                onChange={handleInputChange}
                placeholder="例：山田"
                autoComplete="family-name"
                aria-invalid={Boolean(errors.studentLastName)}
                aria-describedby={errors.studentLastName ? 'studentLastName-error' : undefined}
                className={`${inputClassName} ${errors.studentLastName ? errorInputClassName : normalInputClassName}`}
              />
              <FieldError id="studentLastName-error" message={errors.studentLastName} />
            </div>
            <div>
              <label htmlFor="studentFirstName" className="block text-base font-bold mb-2">
                生徒名
                <RequiredMark />
              </label>
              <input
                type="text"
                id="studentFirstName"
                name="studentFirstName"
                value={formData.studentFirstName}
                onChange={handleInputChange}
                placeholder="例：太郎"
                autoComplete="given-name"
                aria-invalid={Boolean(errors.studentFirstName)}
                aria-describedby={errors.studentFirstName ? 'studentFirstName-error' : undefined}
                className={`${inputClassName} ${errors.studentFirstName ? errorInputClassName : normalInputClassName}`}
              />
              <FieldError id="studentFirstName-error" message={errors.studentFirstName} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="studentLastNameKana" className="block text-base font-bold mb-2">
                姓（カナ）
                <RequiredMark />
              </label>
              <input
                type="text"
                id="studentLastNameKana"
                name="studentLastNameKana"
                value={formData.studentLastNameKana}
                onChange={handleInputChange}
                placeholder="例：ヤマダ"
                autoComplete="off"
                aria-invalid={Boolean(errors.studentLastNameKana)}
                aria-describedby={
                  errors.studentLastNameKana ? 'studentLastNameKana-error' : undefined
                }
                className={`${inputClassName} ${errors.studentLastNameKana ? errorInputClassName : normalInputClassName}`}
              />
              <FieldError id="studentLastNameKana-error" message={errors.studentLastNameKana} />
            </div>
            <div>
              <label htmlFor="studentFirstNameKana" className="block text-base font-bold mb-2">
                名（カナ）
                <RequiredMark />
              </label>
              <input
                type="text"
                id="studentFirstNameKana"
                name="studentFirstNameKana"
                value={formData.studentFirstNameKana}
                onChange={handleInputChange}
                placeholder="例：タロウ"
                autoComplete="off"
                aria-invalid={Boolean(errors.studentFirstNameKana)}
                aria-describedby={
                  errors.studentFirstNameKana ? 'studentFirstNameKana-error' : undefined
                }
                className={`${inputClassName} ${errors.studentFirstNameKana ? errorInputClassName : normalInputClassName}`}
              />
              <FieldError id="studentFirstNameKana-error" message={errors.studentFirstNameKana} />
            </div>
          </div>

          <div>
            <label htmlFor="grade" className="block text-base font-bold mb-2">
              学年
              <RequiredMark />
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
              {GRADE_OPTIONS.map((grade) => (
                <option key={grade} value={grade}>
                  {grade}
                </option>
              ))}
            </select>
            <FieldError id="grade-error" message={errors.grade} />
          </div>

          <div>
            <label htmlFor="schoolName" className="block text-base font-bold mb-2">
              学校名
              <RequiredMark />
            </label>
            <input
              type="text"
              id="schoolName"
              name="schoolName"
              value={formData.schoolName}
              onChange={handleInputChange}
              placeholder="例：木更津市立金田中学校"
              aria-invalid={Boolean(errors.schoolName)}
              aria-describedby={errors.schoolName ? 'schoolName-error' : undefined}
              className={`${inputClassName} ${errors.schoolName ? errorInputClassName : normalInputClassName}`}
            />
            <FieldError id="schoolName-error" message={errors.schoolName} />
          </div>
        </fieldset>

        <fieldset className="form-fieldset">
          <legend className="form-legend">保護者・連絡先</legend>

          <div>
            <label htmlFor="guardianName" className="block text-base font-bold mb-2">
              保護者名
              <RequiredMark />
            </label>
            <input
              type="text"
              id="guardianName"
              name="guardianName"
              value={formData.guardianName}
              onChange={handleInputChange}
              placeholder="例：山田 花子"
              autoComplete="name"
              aria-invalid={Boolean(errors.guardianName)}
              aria-describedby={errors.guardianName ? 'guardianName-error' : undefined}
              className={`${inputClassName} ${errors.guardianName ? errorInputClassName : normalInputClassName}`}
            />
            <FieldError id="guardianName-error" message={errors.guardianName} />
          </div>

          <div>
            <label htmlFor="email" className="block text-base font-bold mb-2">
              メールアドレス
              <RequiredMark />
            </label>
            <input
              type="email"
              id="email"
              name="email"
              inputMode="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="例：example@email.com"
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className={`${inputClassName} ${errors.email ? errorInputClassName : normalInputClassName}`}
            />
            <FieldError id="email-error" message={errors.email} />
          </div>

          <div>
            <label htmlFor="phone" className="block text-base font-bold mb-2">
              電話番号
              <RequiredMark />
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
            <FieldError id="phone-error" message={errors.phone} />
          </div>
        </fieldset>

        <fieldset
          aria-invalid={Boolean(errors.inquiryTypes)}
          aria-describedby={errors.inquiryTypes ? 'inquiryTypes-error' : undefined}
          className="form-fieldset"
        >
          <legend className="form-legend">お問い合わせ内容</legend>
          <p className="text-base font-bold -mt-2 mb-1">
            お問い合わせの種類
            <RequiredMark />
            <span className="text-slate-500 font-medium ml-1 text-sm sm:text-base">複数選択可</span>
          </p>
          <div className="space-y-3">
            {INQUIRY_TYPE_OPTIONS.map((option, index) => (
              <label
                key={option}
                htmlFor={`inquiryTypes-${index}`}
                className="flex items-center gap-4 min-h-[52px] p-4 rounded-xl border border-slate-200 bg-white cursor-pointer hover:border-accent-500 hover:bg-slate-50 transition-colors"
              >
                <input
                  type="checkbox"
                  id={`inquiryTypes-${index}`}
                  name="inquiryTypes"
                  value={option}
                  checked={formData.inquiryTypes.includes(option)}
                  onChange={(event) => handleInquiryTypeChange(option, event.target.checked)}
                  className="w-5 h-5 accent-brand-900 flex-shrink-0"
                />
                <span className="text-slate-800 leading-relaxed text-base flex-1">{option}</span>
              </label>
            ))}
          </div>
          <FieldError id="inquiryTypes-error" message={errors.inquiryTypes} />

          {wantsTrial && (
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <p className="body-text">
                体験授業をご希望の場合も、まずは面談でお子さまの学習状況やご希望を伺っています。
              </p>
              <p className="mt-3 body-text">
                面談後、必要に応じて体験授業をご案内します。
              </p>
            </div>
          )}
        </fieldset>

        <fieldset className="form-fieldset">
          <legend className="form-legend">ご相談・自由記述</legend>
          <div>
            <label htmlFor="message" className="block text-base font-bold mb-2">
              ご相談・お問い合わせ内容
              <OptionalMark />
            </label>
            <p className="body-text-muted mb-3">
              お子さまの学習状況や、ご質問など、事前にお伝えになりたいことがあればご記入ください。
            </p>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleInputChange}
            placeholder="ご自由にご記入ください"
            className={`${inputClassName} ${normalInputClassName} leading-relaxed resize-y`}
          />
          </div>
        </fieldset>

        <fieldset className="form-fieldset">
          <legend className="form-legend">当塾を知ったきっかけ</legend>
          <div>
            <label htmlFor="referralSource" className="sr-only">
              当塾を知ったきっかけ
              <OptionalMark />
            </label>
          <select
            id="referralSource"
            name="referralSource"
            value={formData.referralSource}
            onChange={handleInputChange}
            aria-invalid={Boolean(errors.referralSource)}
            aria-describedby={errors.referralSource ? 'referralSource-error' : undefined}
            className={`${inputClassName} ${errors.referralSource ? errorInputClassName : normalInputClassName}`}
          >
            <option value="">選択してください（任意）</option>
            {REFERRAL_SOURCE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <FieldError id="referralSource-error" message={errors.referralSource} />
          </div>
        </fieldset>

        <div className="bg-slate-100 border border-slate-200 rounded-xl p-5 sm:p-6">
          <h3 className="font-bold text-base mb-2">個人情報の取り扱いについて</h3>
          <p className="body-text">
            お問い合わせ情報は、ご連絡・面談調整など対応に必要な範囲内で保護し、第三者に開示することはありません。また、電話での営業は行っておりません。
          </p>
        </div>

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

        {submitError && (
          <p role="alert" className="text-center text-sm sm:text-base text-red-600 leading-relaxed">
            {submitError}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-brand-900 hover:bg-[#004840] disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold min-h-[52px] py-4 rounded-xl transition-colors shadow-md text-base sm:text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500"
        >
          {isSubmitting ? '送信中...' : 'お問い合わせを送信する'}
        </button>
        <p className="mt-3 text-center text-base text-slate-600 leading-relaxed">
          送信後、内容を確認のうえご連絡します。
        </p>
      </div>
    </form>
  );
}
