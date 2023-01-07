const SecondaryBtn = ({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) => {
  return (
    <button className="flex flex-row items-center px-4 py-[6px] space-x-2 rounded-md bg-gray-200 hover:bg-gray-300 text-[#764ba2] hover:bg-gradient-to-tl duration-300">
      {icon}
      <span className="text-[#764ba2] font-semibold">{title}</span>
    </button>
  );
};

export default SecondaryBtn;
