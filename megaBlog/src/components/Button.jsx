const Button = ({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}) => {
  return (
    <div>
      <button className={`px-4 py-2 rounded-lg ${className, bgColor, textColor}`} type={type} {...props}>
        {children}
      </button>
    </div>
  );
};

export default Button;
