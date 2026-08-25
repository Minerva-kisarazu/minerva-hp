export default function PageHeader({ title }: { title: string }) {
  return (
    <section className="bg-brand-900 text-white py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide">{title}</h1>
        <p className="mt-3 text-sm sm:text-base text-slate-300">
          木更津市金田東の個別指導塾 学習塾ミネルバ
        </p>
      </div>
    </section>
  );
}
