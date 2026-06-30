const SectionHeading = ({ badge, title, subtitle }) => {
  return (
    <div className="max-w-2xl mx-auto text-center mb-14">

      {badge && (
        <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-600">
          {badge}
        </span>
      )}

      <h2 className="mt-4 text-4xl font-bold text-slate-900">
        {title}
      </h2>

      <p className="mt-4 text-slate-600 leading-7">
        {subtitle}
      </p>

    </div>
  );
};

export default SectionHeading;