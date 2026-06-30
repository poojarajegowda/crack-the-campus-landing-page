import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import StatisticCard from "../ui/StatisticsCard";
import { statistics } from "../../data/statistics";

const Statistics = () => {
  return (
    <section
      id="statistics"
      className="bg-slate-50 py-10"
    >
      <Container>

        <SectionHeading
          badge="Impact"
          title="Numbers That Speak for Themselves"
          subtitle="Our platform has helped thousands of students transform their careers through structured preparation."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {statistics.map((stat) => (
            <StatisticCard
              key={stat.id}
              stat={stat}
            />
          ))}
        </div>

      </Container>
    </section>
  );
};

export default Statistics;