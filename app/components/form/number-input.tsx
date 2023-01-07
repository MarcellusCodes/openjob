import { useField } from "remix-validated-form";
import type { InputProps } from "~/interfaces";
import { InputWrapper, InputLabel, InputError } from "~/components/form/index";

const NumberInput = ({ label, name }: InputProps) => {
  const { error, getInputProps } = useField(name);
  return (
    <InputWrapper>
      <InputLabel label={label} name={name} />
      <input
        type="number"
        id={name}
        name={name}
        className="input"
        {...getInputProps({
          type: "number",
          id: name,
        })}
      />
      {error && <InputError error={error} />}
    </InputWrapper>
  );
};

export default NumberInput;
