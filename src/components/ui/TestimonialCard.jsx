import { Star, Quote } from "lucide-react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div
      className="
      group
      rounded-3xl
      border
      border-slate-200
      bg-white
      p-8
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-xl
      "
    >
      {/* Quote Icon */}
      <Quote
        className="text-blue-600"
        size={32}
      />

      {/* Review */}
      <p className="mt-6 leading-7 text-slate-600">
        "{testimonial.review}"
      </p>

      {/* Rating */}
      <div className="mt-6 flex">
        {[...Array(testimonial.rating)].map((_, index) => (
          <Star
            key={index}
            size={18}
            fill="#FACC15"
            className="text-yellow-400"
          />
        ))}
      </div>

      {/* User */}
      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div
            className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-blue-600
            text-lg
            font-bold
            text-white
            "
          >
            {testimonial.name
              .split(" ")
              .map((word) => word[0])
              .join("")}
          </div>

          <div>
            <h3 className="font-semibold">
              {testimonial.name}
            </h3>

            <p className="text-sm text-slate-500">
              {testimonial.role} @ {testimonial.company}
            </p>
          </div>
        </div>

    
      </div>
    </div>
  );
};

export default TestimonialCard;