const InputError = ({ error }: { error: string }) => {
  return (
    <span className="text-sm mt-1 text-red-500 text-opacity-500">{error}</span>
  );
};

export default InputError;
