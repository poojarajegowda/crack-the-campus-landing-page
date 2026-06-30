import { TrendingUp } from "lucide-react";

const StatisticCard = ({ stat }) => {
  return (
    <div
      className="
      rounded-2xl
      border
      border-slate-200
      bg-white
      dark:border-slate-800
      dark:bg-slate-900
      p-8
      transition-all
      duration-300
      hover:-translate-y-3
      hover:shadow-2xl
      hover:border-blue-600
      "
    >
      <div className="flex items-center justify-between">
        <h3 className="text-4xl font-bold text-blue-600">
          {stat.number}
        </h3>

        <TrendingUp className="text-green-500" />
      </div>

      <h4 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
        {stat.title}
      </h4>

      <p className="mt-3 text-slate-600 dark:text-slate-300">
        {stat.description}
      </p>

      <div
        className="
        mt-5
        inline-flex
        rounded-full
        bg-green-100
        px-3
        py-1
        text-sm
        font-medium
        text-green-700
        "
      >
        {stat.growth}
      </div>
    </div>
  );
};

export default StatisticCard;