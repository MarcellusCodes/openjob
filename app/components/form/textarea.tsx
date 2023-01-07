import { useField } from "remix-validated-form";
import type { InputProps } from "~/interfaces";

const Textarea = ({ label, name }: InputProps) => {
  const { error, getInputProps } = useField(name);
  return (
    <div className="flex flex-col items-start space-y-1">
      <label htmlFor={name} className="text-sm">
        {label}
      </label>
      <textarea
        className="input"
        id={name}
        name={name}
        rows={5}
        cols={100}
        {...getInputProps({ id: name })}
      ></textarea>
      {error && (
        <span className="text-sm mt-1 text-red-500 text-opacity-500">
          {error}
        </span>
      )}
    </div>
  );
};

export default Textarea;
