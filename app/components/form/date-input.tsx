import { useField } from "remix-validated-form";
import type { InputProps } from "~/interfaces";
import { InputWrapper, InputLabel, InputError } from "~/components/form/index";

const DateInput = ({ label, name }: InputProps) => {
  const { error, getInputProps } = useField(name);
  return (
    <InputWrapper>
      <InputLabel label={label} name={name} />
      <input
        type="date"
        id={name}
        name={name}
        className="input"
        {...getInputProps({
          id: name,
        })}
      />
      {error && <InputError error={error} />}
    </InputWrapper>
  );
};

export default DateInput;
