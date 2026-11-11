const PageHeader = ({ title, desc }) => (
  <div className="text-center mb-10 lg:mb-12">
    <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 text-balance">{title}</h1>
    {desc && <p className="text-brand-muted max-w-2xl mx-auto">{desc}</p>}
  </div>
);

export default PageHeader;
