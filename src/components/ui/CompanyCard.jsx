import { ArrowUpRight } from "lucide-react";

const CompanyCard = ({ company }) => {
  return (
  <div className="
group
rounded-2xl
border
border-slate-200
bg-white
p-8
shadow-sm
transition-all
duration-300
hover:-translate-y-2
hover:shadow-xl
"
> <div className=" mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full  bg-blue-50 text-2xl font-bold text-blue-600 transition-all duration-300 group-hover:bg-blue-600  group-hover:text-white">
        {company.name.charAt(0)}
      </div>

      <h3
        className="text-lg font-semibold text-slate-800 transition-colors duration-300 group-hover:text-blue-600">
        {company.name}
      </h3>

      <p className="mt-2 text-sm text-slate-500">{company.description}</p>

      <div
        className="mt-5 flex items-center justify-center gap-1 ext-sm text-blue-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
        Explore
        <ArrowUpRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </div>
    </div>
  );
};

export default CompanyCard;
