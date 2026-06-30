import Button from "./Button";
import {
  Clock,
  Users,
  CheckCircle,
  Star,
} from "lucide-react";

const CourseCard = ({ course }) => {
  return (
    <div
      className="
      group
      rounded-3xl
      border
      border-slate-200
      bg-white
      dark:border-slate-800
      dark:bg-slate-900
      p-8
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-blue-500
      hover:shadow-2xl
      "
    >
      <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
        {course.badge}
      </span>

      <h3 className="mt-6 text-2xl font-bold dark:text-white">
        {course.title}
      </h3>

      <p className="mt-2 text-slate-500 dark:text-slate-300">
        {course.level}
      </p>

      <div className="mt-5 flex items-center gap-5 text-sm text-slate-600 dark:text-slate-300">
        <div className="flex items-center gap-2">
          <Clock size={16} />
          {course.duration}
        </div>

        <div className="flex items-center gap-2">
          <Users size={16} />
          {course.students}
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {course.technologies.map((tech) => (
          <div
            key={tech}
            className="flex items-center gap-3"
          >
            <CheckCircle
              size={18}
              className="text-emerald-500"
            />

            <span>{tech}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-1">
        <Star
          size={18}
          fill="#facc15"
          className="text-yellow-400"
        />
        <Star
          size={18}
          fill="#facc15"
          className="text-yellow-400"
        />
        <Star
          size={18}
          fill="#facc15"
          className="text-yellow-400"
        />
        <Star
          size={18}
          fill="#facc15"
          className="text-yellow-400"
        />
        <Star
          size={18}
          fill="#facc15"
          className="text-yellow-400"
        />

        <span className="ml-2 text-sm text-slate-500">
          4.9 Rating
        </span>
      </div>

      <Button className="mt-8 w-full">
        Enroll Now
      </Button>
    </div>
  );
};

export default CourseCard;