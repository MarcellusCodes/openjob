import { useField } from "remix-validated-form";
import type { InputProps } from "~/interfaces";
import { InputWrapper, InputLabel, InputError } from "~/components/form/index";

const TextInput = ({ label, name }: InputProps) => {
  const { error, getInputProps } = useField(name);
  return (
    <InputWrapper>
      <InputLabel label={label} name={name} />
      <input
        type="text"
        id={name}
        name={name}
        className="input"
        {...getInputProps({ id: name })}
      />
      {error && <InputError error={error} />}
    </InputWrapper>
  );
};

export default TextInput;
