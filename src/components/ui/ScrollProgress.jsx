import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollPercent = (scrollTop / documentHeight) * 100;

      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", calculateProgress);

    calculateProgress();

    return () =>
      window.removeEventListener("scroll", calculateProgress);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[100] h-1.5 w-full bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 transition-all duration-150"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
};

export default ScrollProgress;