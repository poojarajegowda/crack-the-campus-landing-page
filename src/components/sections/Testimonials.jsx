import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import TestimonialColumn from "../ui/TestimonialColumn";

import {
  column1,
  column2,
  column3,
} from "../../data/testimonials";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-10 bg-slate-50 overflow-hidden"
    >
      <Container>

        <SectionHeading
          badge="Testimonials"
          title="Success Stories from Our Learners"
          subtitle="Thousands of students have successfully launched their careers with CrackTheCampus."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">

          <TestimonialColumn
            testimonials={column1}
            direction="up"
          />

          <TestimonialColumn
            testimonials={column2}
            direction="down"
          />

          <TestimonialColumn
            testimonials={column3}
            direction="up"
          />

        </div>

      </Container>
    </section>
  );
};

export default Testimonials;