'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState, ChangeEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    お名前: '',
    お子様の学年: '',
    学校名: '',
    電話番号: '',
    ご相談内容: [],
    メッセージ: ''
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
      const current = formData['ご相談内容'] as string[];
      setFormData(prev => ({ ...prev, ご相談内容: [...current, option] }));
    } else {
      const current = formData['ご相談内容'] as string[];
      setFormData(prev => ({ ...prev, ご相談内容: current.filter(item => item !== option) }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData['お名前'] || formData['お名前'].trim() === '') {
      newErrors[' お名前'] = 'お名前を入力してください';
    }

    if (!formData['お子様の学年'] || formData['お子様の学年'].trim() === '') {
      newErrors['お子様の学年'] = 'お子様の学年を選択してください';
    }

    if (!formData['電話番号'] || formData['電話番号'].trim() === '') {
      newErrors['電話番号'] = '電話番号を入力してください';
    } else if (!/^[\d-]+$/.test(formData['電話番号'])) {
      newErrors['電話番号'] = '電話番号は数字とハイフンのみで入力してください';
    }

    const currentConsultation = formData['ご相談内容'] as string[];
    if (currentConsultation.length === 0) {
      newErrors[' ご相談内容'] = '少なくとも 1 つの相談内容进行请选择してください';
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
        お名前: '',
        お子様の学年: '',
        学校名: '',
        電話番号: '',
        ご相談内容: [],
        メッセージ: ''
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <>
        <Header />
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
                  {['1','2','3','4','5'].map(n => (
                    <div key={n} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-navy-800 text-white rounded-full flex items-center justify-center font-bold text-lg">{n}</div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">ステップ{n}</h3>
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
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <section className="bg-gray-50 text-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">無料学習診断レポート付き体験授業・お申し込み後のステップ</h2>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="space-y-6">
              {['1','2','3','4','5'].map(n => (
                <div key={n} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-navy-800 text-white rounded-full flex items-center justify-center font-bold text-lg">{n}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">ステップ{n}</h3>
                    <p className="text-gray-700">詳しい手順をご案内いたします。</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-navy-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">お申し込みフォーム</h2>
          <form onSubmit={handleSubmit}>
            <div className="max-w-2xl mx-auto space-y-6">
              <div>
                <label htmlFor="お名前" className="block text-sm font-semibold mb-2">お名前<span className="text-red-400">*</span></label>
                <input type="text" id="お名前" name="お名前" value={formData['お名前']} onChange={handleInputChange} placeholder="例：山田 太郎" />
              </div>
              <div>
                <label htmlFor="お子様の学年" className="block text-sm font-semibold mb-2">お子様の学年<span className="text-red-400">*</span></label>
                <select id="お子様の学年" name="お子様の学年" value={formData['お子様の学年']} onChange={handleInputChange}>
                  <option value="">選択してください</option>
                  {['小学 1 年','小学 2 年','小学 3 年','小学 4 年','小学 5 年','小学 6 年', '中学 1 年','中学 2 年','中学 3 年', '高校 1 年','高校 2 年','高校 3 年'].map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="学校名" className="block text-sm font-semibold mb-2">学校名</label>
                <input type="text" id="学校名" name="学校名" value={formData['学校名']} onChange={handleInputChange} placeholder="例：木更津市立金田中学校" />
              </div>
              <div>
                <label htmlFor="電話番号" className="block text-sm font-semibold mb-2">電話番号<span className="text-red-400">*</span></label>
                <input type="tel" id="電話番号" name="電話番号" value={formData['電話番号']} onChange={handleInputChange} placeholder="例：090-1234-5678" />
              </div>
              <div>
                <label htmlFor="ご相談内容" className="block text-sm font-semibold mb-2">ご相談内容<span className="text-red-400">*</span><span className="text-gray-400 text-xs">(複数選択可)</span></label>
                <div className="space-y-2">
                  {consultationOptions.map((option) => (
                    <label key={option} className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" onChange={(e) => handleCheckboxChange(option, e.target.checked)} />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label htmlFor="メッセージ" className="block text-sm font-semibold mb-2">メッセージ・具体的なお悩み（任意）</label>
                <textarea id="メッセージ" name="メッセージ" value={formData['メッセージ']} onChange={handleInputChange} rows={4} />
              </div>
              <div className="pt-6">
                <button type="submit" disabled={isSubmitting} className={`w-full bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold py-4 rounded-md transition-colors ${isSubmitting ? 'opacity-75' : ''}`}>
                  {isSubmitting ? '送信中...' : 'この内容で送信する（無料）'}
                </button>
              </div>
            </div>
          </form>
          <div className="max-w-2xl mx-auto mt-12 bg-navy-800 p-6 rounded-lg">
            <h3 className="font-semibold mb-3 text-gold-500">プライバシーポリシー</h3>
            <p className="text-sm text-gray-300 leading-relaxed">お申し込み情報を、体験授業の実施に必要な範囲内で保護し、第三者に開示することはありません。また、電話での営業は行っておりません。</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
