import Button from "../ui/Button";
import Container from "../ui/Container";
import heroImage from "../../assets/images/hero.svg";
import { heroCards } from "../../data/heroCards";
import { motion } from "framer-motion";
import CountUpModule from "react-countup";
const CountUp = CountUpModule.default || CountUpModule;

const Hero = () => {
  return (
    <section id="hero" className="overflow-hidden bg-linear-to-b from-blue-50 to-white py-10 dark:from-slate-900 dark:to-slate-950">
      <Container className="py-10 lg:py-24">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              🚀 AI Powered Placement Preparation
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              From Campus to Career.
              <span className="block text-blue-600">
                Everything in One Place.
              </span>
            </h1>

            <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
              Practice coding, master aptitude, prepare for interviews, and
              build industry-ready skills through structured learning paths
              designed for placement success.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button className="w-full sm:w-auto">Start Learning</Button>

              <Button variant="secondary" className="w-full dark:text-slate-300 sm:w-auto">
                Explore Courses
              </Button>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <h2 className="text-3xl font-bold text-blue-600">
                  <CountUp
                    end={250}
                    duration={2}
                    suffix="K+"
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </h2>

                <p className="text-slate-600 dark:text-slate-300">Students</p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <h2 className="text-3xl font-bold text-blue-600">
                  <CountUp
                    end={95}
                    duration={2}
                    suffix="%"
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </h2>

                <p className="text-slate-600 dark:text-slate-300">Placement Rate</p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:col-span-2 lg:col-span-1">
                <h2 className="text-3xl font-bold text-blue-600">
                  <CountUp
                    end={180}
                    duration={2}
                    suffix="+"
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </h2>
                <p className="text-slate-600 dark:text-slate-300">Hiring Partners</p>
              </div>
            </div>
          </div>

          {/* Right Illustration */}

          {/* Right Illustration */}

          <div className="relative flex justify-center items-center">
            {/* Floating Cards */}
            {heroCards.map((card) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.id}
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: card.id * 0.4,
                  }}
                  className={`
          absolute
          ${card.position}
          hidden
          lg:flex
          items-center
          gap-3
          rounded-2xl
          bg-white
          dark:bg-slate-900
          px-4
          py-3
          shadow-xl
          border
          border-slate-100
          dark:border-slate-800
        `}
                >
                  <Icon size={20} className="text-blue-600" />

                  <span className="text-sm font-semibold whitespace-nowrap">
                    {card.title}
                  </span>
                </motion.div>
              );
            })}

            <img
              src={heroImage}
              alt="Placement Preparation"
              className="mx-auto w-full max-w-sm lg:max-w-lg"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
