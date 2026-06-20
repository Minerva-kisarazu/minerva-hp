'use client';

import { useState, ChangeEvent } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    grade: '',
    schoolName: '',
    phone: '',
    consultation: [] as string[],
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const consultationOptions = [
    '無料学習診断レポート付き体験授業（80 分）の申し込み',
    '現在の学習状況についての個別相談希望',
    '資料請求・その他お問い合わせ'
  ];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleCheckboxChange = (option: string, checked: boolean) => {
    if (checked) {
      const current = formData['consultation'] as string[];
      setFormData(prev => ({ ...prev, consultation: [...current, option] }));
    } else {
      const current = formData['consultation'] as string[];
      setFormData(prev => ({ ...prev, consultation: current.filter(item => item !== option) }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name || formData.name.trim() === '') {
      newErrors['name'] = 'お名前を入力してください';
    }

    if (!formData.grade || formData.grade.trim() === '') {
      newErrors['grade'] = 'お子様の学年を選択してください';
    }

    if (!formData.phone || formData.phone.trim() === '') {
      newErrors['phone'] = '電話番号を入力してください';
    } else if (!/^[\d-]+$/.test(formData.phone)) {
      newErrors['phone'] = '電話番号は数字とハイフンのみで入力してください';
    }

    const currentConsultation = formData['consultation'] as string[];
    if (currentConsultation.length === 0) {
      newErrors['consultation'] = '少なくとも 1 つの相談内容を選択してください';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({
        name: '',
        grade: '',
        schoolName: '',
        phone: '',
        consultation: [] as string[],
        message: ''
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <section className="bg-gray-50 text-gray-900 py-32 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <svg className="mx-auto h-16 w-16 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-navy-800">お申し込みありがとうございます</h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-8">
              以下のステップ通りに進んでまいります。ご確認のうえ、よろしくお願いいたします。
            </p>
            <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
              <h2 className="text-xl font-bold mb-6 text-gold-500">無料学習診断レポート付き体験授業・お申し込み後のステップ</h2>
              <div className="space-y-6">
                {[1, 2, 3, 4, 5].map(n => (
                  <div key={n} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-navy-800 text-white rounded-full flex items-center justify-center font-bold text-lg">{n}</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">ステップ {n}</h3>
                      <p className="text-gray-700">詳しい手順をご案内いたします。</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12">
              <a href="/" className="inline-block bg-navy-800 hover:bg-navy-900 text-white font-semibold px-6 py-3 rounded-md transition-colors">
                ホームページに戻る
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 text-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">お申し込みフォーム</h2>
        <form onSubmit={handleSubmit}>
          <div className="max-w-2xl mx-auto space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">お名前<span className="text-red-400">*</span></label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="例：山田 太郎" />
              {errors['name'] && <p className="mt-1 text-sm text-red-500">{errors['name']}</p>}
            </div>
            <div>
              <label htmlFor="grade" className="block text-sm font-semibold mb-2">お子様の学年<span className="text-red-400">*</span></label>
              <select id="grade" name="grade" value={formData.grade} onChange={handleInputChange}>
                <option value="">選択してください</option>
                {['小学 1 年','小学 2 年','小学 3 年','小学 4 年','小学 5 年','小学 6 年', '中学 1 年','中学 2 年','中学 3 年', '高校 1 年','高校 2 年','高校 3 年'].map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
              {errors['grade'] && <p className="mt-1 text-sm text-red-500">{errors['grade']}</p>}
            </div>
            <div>
              <label htmlFor="schoolName" className="block text-sm font-semibold mb-2">学校名</label>
              <input type="text" id="schoolName" name="schoolName" value={formData.schoolName} onChange={handleInputChange} placeholder="例：木更津市立金田中学校" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold mb-2">電話番号<span className="text-red-400">*</span></label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="例：090-1234-5678" />
              {errors['phone'] && <p className="mt-1 text-sm text-red-500">{errors['phone']}</p>}
            </div>
            <div>
              <label htmlFor="consultation" className="block text-sm font-semibold mb-2">ご相談内容<span className="text-red-400">*</span><span className="text-gray-400 text-xs">(複数選択可)</span></label>
              <div className="space-y-2">
                {consultationOptions.map((option) => (
                  <label key={option} className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" onChange={(e) => handleCheckboxChange(option, e.target.checked)} />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
              {errors['consultation'] && <p className="mt-1 text-sm text-red-500">{errors['consultation']}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">メッセージ・具体的なお悩み（任意）</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} rows={4} />
            </div>
            <div className="pt-6">
              <button type="submit" disabled={isSubmitting} className={`w-full bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold py-4 rounded-md transition-colors ${isSubmitting ? 'opacity-75' : ''}`}>
                {isSubmitting ? '送信中...' : 'この内容で送信する（無料）'}
              </button>
            </div>
          </div>
          <div className="max-w-2xl mx-auto mt-12 bg-navy-800 p-6 rounded-lg">
            <h3 className="font-semibold mb-3 text-gold-500">プライバシーポリシー</h3>
            <p className="text-sm text-gray-300 leading-relaxed">お申し込み情報を、体験授業の実施に必要な範囲内で保護し、第三者に開示することはありません。また、電話での営業は行っておりません。</p>
          </div>
        </form>
      </div>
    </section>
  );
}
