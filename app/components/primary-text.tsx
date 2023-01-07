const PrimaryText = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-gray-500 text-opacity-85 text-md sm:text-lg">
      {children}
    </p>
  );
};

export default PrimaryText;
