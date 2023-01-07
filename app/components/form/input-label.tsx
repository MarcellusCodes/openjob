const InputLabel = ({ name, label }: { name: string; label: string }) => {
  return (
    <label htmlFor={name} className="text-sm">
      {label}
    </label>
  );
};

export default InputLabel;
