export default function PageHeader({ title }: { title: string }) {
  return (
    <section className="bg-brand-900 text-white py-14 sm:py-20">
      <div className="site-container">
        <h1 className="font-serif text-[1.75rem] sm:text-4xl font-bold tracking-wide leading-relaxed">
          {title}
        </h1>
        <p className="mt-4 text-base text-slate-300 leading-relaxed">
          木更津市金田東の個別指導塾 学習塾ミネルバ
        </p>
      </div>
    </section>
  );
}
