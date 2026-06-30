import { ArrowRight } from "lucide-react";

const FeatureCard = ({ feature }) => {
  const Icon = feature.icon;

  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-slate-200
        bg-white
        dark:border-slate-800
        dark:bg-slate-900
        p-8
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-600
        hover:shadow-xl
      "
    >
      <div
        className="
          mb-6
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-xl
          bg-blue-100
          text-blue-600
          transition-all
          duration-300
          group-hover:bg-blue-600
          group-hover:text-white
        "
      >
        <Icon size={28} />
      </div>

      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
        {feature.title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
        {feature.description}
      </p>

      <button
        className="
          mt-6
          flex
          items-center
          gap-2
          text-blue-600
          font-semibold
        "
      >
        Learn More

        <ArrowRight
          size={18}
          className="transition-transform group-hover:translate-x-2"
        />
      </button>
    </div>
  );
};

export default FeatureCard;