const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg",

    secondary:
      "border border-slate-300 text-slate-700 hover:bg-slate-100",

    outline:
      "border border-blue-600 text-blue-600 hover:bg-blue-50",

      light:
    "bg-white text-blue-600 hover:bg-slate-100 shadow-lg hover:shadow-xl",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;