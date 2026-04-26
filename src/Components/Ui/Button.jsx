import clsx from "clsx";

export function Button({
  children,
  className,
  variant = "default",
  size = "md",
  ...props
}) {
  return (
    <button
      className={clsx(
        "rounded-lg font-medium transition",
        
    
        size === "md" && "px-4 py-2",
        size === "icon" && "p-2",

        variant === "default" && "bg-[#C68642] text-white hover:opacity-90",
        variant === "ghost" && "bg-transparent hover:bg-[#EAD7C5]",

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}