import { useContext } from "react";
import { Moon, Sun } from "lucide-react";
import { ThemeContext } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="
        relative
        flex
        h-11
        w-20
        items-center
        rounded-full
        bg-slate-200
        p-1
        transition-all
        duration-300
        dark:bg-slate-700
        cursor-pointer
      "
    >
      {/* Sliding Circle */}
      <div
        className={`
          absolute
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
          bg-white
          shadow-md
          transition-all
          duration-300
          ${
            theme === "dark"
              ? "translate-x-9"
              : "translate-x-0"
          }
        `}
      >
        {theme === "dark" ? (
          <Moon size={18} className="text-slate-800" />
        ) : (
          <Sun size={18} className="text-yellow-500" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;