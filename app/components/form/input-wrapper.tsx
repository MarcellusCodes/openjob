const InputWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col items-start space-y-1">{children}</div>;
};

export default InputWrapper;
