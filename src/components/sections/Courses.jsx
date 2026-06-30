import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import CourseCard from "../ui/CourseCard";
import { courses } from "../../data/courses";

const Courses = () => {

  return (
    <section
      id="courses"
      className="py-10"
    >
      <Container>

  <SectionHeading
    badge="Courses"
    title="Flagship Learning Programs"
    subtitle="Industry-focused learning paths designed to help students master technical interviews."
  />

      <div className="course-slider">

    <div className="course-track">

        {[...courses, ...courses].map((course, index) => (

            <div
                key={index}
                className="course-item"
            >
                <CourseCard
                key={course.id} 
                course={course}
                 />
            </div>

        ))}

    </div>

</div>

      </Container>
    </section>
  );
};

export default Courses;