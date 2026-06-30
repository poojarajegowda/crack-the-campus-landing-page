import Container from "../ui/Container";
import { firstRow, secondRow } from "../../data/companies";

const Companies = () => {
  return (
    <section id="companies" className="py-24 bg-white overflow-hidden dark:bg-slate-900">

      <Container>

        <div className="text-center">

          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-blue-700 text-sm font-medium">
            Trusted Worldwide
          </span>

          <h2 className="mt-6 text-4xl font-bold dark:text-white">
            Trusted by Leading Companies
          </h2>

          <p className="mt-4 text-slate-600 max-w-3xl mx-auto dark:text-slate-300">
            Our learners have received opportunities from top product and
            service companies across the world.
          </p>

        </div>

      </Container>

      {/* Row 1 */}

      <div className="logo-slider mt-16">

        <div className="logo-track">

          {[...firstRow, ...firstRow].map((logo, index) => (

            <div
              key={index}
              className="logo-card"
            >
              <img
                src={logo}
                alt=""
              />
            </div>

          ))}

        </div>

      </div>

      {/* Row 2 */}

      <div className="logo-slider reverse mt-8">

        <div className="logo-track">

          {[...secondRow, ...secondRow].map((logo, index) => (

            <div
              key={index}
              className="logo-card"
            >
              <img
                src={logo}
                alt=""
              />
            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Companies;