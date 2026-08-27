/** 総合問い合わせフォーム用の共有定義（面談事前アンケートとは分離） */

export const GRADE_OPTIONS = [
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
] as const;

export const INQUIRY_TYPE_OPTIONS = [
  '塾の指導内容について知りたい',
  '料金について知りたい',
  '面談について相談したい',
  '体験授業について相談したい',
  '資料・パンフレットがほしい',
  '入塾について相談したい',
  'その他',
] as const;

export const REFERRAL_SOURCE_OPTIONS = [
  'Google検索',
  'Googleマップ',
  'チラシ',
  '看板',
  'Instagram・SNS',
  '知人・友人からの紹介',
  'ホームページ',
  'その他',
  '覚えていない／分からない',
] as const;

export type GradeOption = (typeof GRADE_OPTIONS)[number];
export type InquiryTypeOption = (typeof INQUIRY_TYPE_OPTIONS)[number];
export type ReferralSourceOption = (typeof REFERRAL_SOURCE_OPTIONS)[number];

/** スプレッドシート／後工程へ渡す正規化済みデータ */
export type ContactInquiryData = {
  inquiryId: string;
  submittedAt: string;
  studentLastName: string;
  studentFirstName: string;
  studentLastNameKana: string;
  studentFirstNameKana: string;
  grade: GradeOption;
  schoolName: string;
  guardianName: string;
  email: string;
  phone: string;
  /** 複数選択。欠落させない */
  inquiryTypes: InquiryTypeOption[];
  message: string;
  referralSource: ReferralSourceOption | '';
};

export type ContactInquiryInput = {
  studentLastName?: unknown;
  studentFirstName?: unknown;
  studentLastNameKana?: unknown;
  studentFirstNameKana?: unknown;
  grade?: unknown;
  schoolName?: unknown;
  guardianName?: unknown;
  email?: unknown;
  phone?: unknown;
  inquiryTypes?: unknown;
  message?: unknown;
  referralSource?: unknown;
  website?: unknown;
};

export const CONTACT_INQUIRY_STORAGE_KEY = 'minervaContactInquiry';

const toHalfWidth = (value: string) =>
  value
    .replace(/[０-９Ａ-Ｚａ-ｚ]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0xfee0))
    .replace(/[ー－―‐−]/g, '-');

const countDigits = (value: string) => (toHalfWidth(value).match(/\d/g) ?? []).length;

function asTrimmedString(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function isGrade(value: string): value is GradeOption {
  return (GRADE_OPTIONS as readonly string[]).includes(value);
}

function isInquiryType(value: string): value is InquiryTypeOption {
  return (INQUIRY_TYPE_OPTIONS as readonly string[]).includes(value);
}

function isReferralSource(value: string): value is ReferralSourceOption {
  return (REFERRAL_SOURCE_OPTIONS as readonly string[]).includes(value);
}

/** ひらがな・カタカナ・長音・スペースを許可（全角半角スペース） */
function isKanaName(value: string) {
  return /^[\u3041-\u3096\u30A1-\u30FA\u30FC\u30FD\u30FE\s\u3000]+$/.test(value);
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export type ContactFieldName =
  | 'studentLastName'
  | 'studentFirstName'
  | 'studentLastNameKana'
  | 'studentFirstNameKana'
  | 'grade'
  | 'schoolName'
  | 'guardianName'
  | 'email'
  | 'phone'
  | 'inquiryTypes'
  | 'message'
  | 'referralSource';

export type ContactFieldErrors = Partial<Record<ContactFieldName, string>>;

export function validateContactInquiry(
  payload: ContactInquiryInput
): { errors: ContactFieldErrors } | { data: Omit<ContactInquiryData, 'inquiryId' | 'submittedAt'> } {
  const studentLastName = asTrimmedString(payload.studentLastName);
  const studentFirstName = asTrimmedString(payload.studentFirstName);
  const studentLastNameKana = asTrimmedString(payload.studentLastNameKana);
  const studentFirstNameKana = asTrimmedString(payload.studentFirstNameKana);
  const gradeRaw = asTrimmedString(payload.grade);
  const schoolName = asTrimmedString(payload.schoolName);
  const guardianName = asTrimmedString(payload.guardianName);
  const email = asTrimmedString(payload.email);
  const phone = asTrimmedString(payload.phone);
  const message = asTrimmedString(payload.message);
  const referralRaw = asTrimmedString(payload.referralSource);

  const inquiryTypes = Array.isArray(payload.inquiryTypes)
    ? payload.inquiryTypes.filter(
        (item): item is InquiryTypeOption => typeof item === 'string' && isInquiryType(item)
      )
    : [];

  const errors: ContactFieldErrors = {};

  if (!studentLastName) errors.studentLastName = '生徒姓を入力してください';
  if (!studentFirstName) errors.studentFirstName = '生徒名を入力してください';

  if (!studentLastNameKana) {
    errors.studentLastNameKana = '姓（カナ）を入力してください';
  } else if (!isKanaName(studentLastNameKana)) {
    errors.studentLastNameKana = '姓（カナ）はひらがなまたはカタカナで入力してください';
  }

  if (!studentFirstNameKana) {
    errors.studentFirstNameKana = '名（カナ）を入力してください';
  } else if (!isKanaName(studentFirstNameKana)) {
    errors.studentFirstNameKana = '名（カナ）はひらがなまたはカタカナで入力してください';
  }

  if (!gradeRaw) {
    errors.grade = '学年を選択してください';
  } else if (!isGrade(gradeRaw)) {
    errors.grade = '学年を選択してください';
  }

  if (!schoolName) errors.schoolName = '学校名を入力してください';
  if (!guardianName) errors.guardianName = '保護者名を入力してください';

  if (!email) {
    errors.email = 'メールアドレスを入力してください';
  } else if (!isEmail(email)) {
    errors.email = 'メールアドレスの形式で入力してください';
  }

  const phoneDigits = countDigits(phone);
  if (!phone) {
    errors.phone = '電話番号を入力してください';
  } else if (phoneDigits < 10 || phoneDigits > 11) {
    errors.phone = '電話番号は市外局番からの10桁または11桁でご入力ください';
  }

  if (inquiryTypes.length === 0) {
    errors.inquiryTypes = 'お問い合わせの種類を1つ以上選択してください';
  }

  if (referralRaw && !isReferralSource(referralRaw)) {
    errors.referralSource = '当塾を知ったきっかけを選択してください';
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  return {
    data: {
      studentLastName,
      studentFirstName,
      studentLastNameKana,
      studentFirstNameKana,
      grade: gradeRaw as GradeOption,
      schoolName,
      guardianName,
      email,
      phone,
      inquiryTypes,
      message,
      referralSource: (referralRaw as ReferralSourceOption | '') || '',
    },
  };
}
