import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed
        bottom-6
        right-6
        z-50
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        bg-blue-600
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:scale-110
        hover:bg-blue-700
        ${
          showButton
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-10 scale-75 opacity-0"
        }
      `}
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default BackToTop;