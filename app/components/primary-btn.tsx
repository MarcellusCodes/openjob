const PrimaryButton = ({
  type = "button",
  title,
  icon,
}: {
  type?: "button" | "submit";
  title: string;
  icon: React.ReactNode;
}) => {
  return (
    <button
      type={type}
      className="flex flex-row items-center px-4 py-[6px] space-x-2 rounded-md bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white hover:bg-gradient-to-tl duration-300"
    >
      {icon}
      <span>{title}</span>
    </button>
  );
};

export default PrimaryButton;
