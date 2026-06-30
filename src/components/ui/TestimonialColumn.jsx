import TestimonialCard from "./TestimonialCard";

const TestimonialColumn = ({ testimonials, direction }) => {
  return (
    <div className={`testimonial-column ${direction}`}>
      <div className="testimonial-track">
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div key={index}>
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialColumn;