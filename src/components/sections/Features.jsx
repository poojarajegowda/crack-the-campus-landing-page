import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import FeatureCard from "../ui/FeatureCard";
import { features } from "../../data/features";

const Features = () => {
  return (
    <section id="features" className="py-10">
      <Container>
        <SectionHeading
          badge="Platform Features"
          title="Everything You Need to Succeed"
          subtitle="A complete placement preparation ecosystem designed to help students become interview-ready."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;