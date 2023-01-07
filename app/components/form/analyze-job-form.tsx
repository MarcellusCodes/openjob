import { ValidatedForm } from "remix-validated-form";
import { Analyze } from "tabler-icons-react";
import {
  DateInput,
  Textarea,
  TextInput,
  NumberInput,
} from "~/components/form/index";
import { PrimaryBtn } from "~/components/index";
import { analyzeJobValidator } from "~/schemas";

const AnalyzeJobForm = () => {
  return (
    <ValidatedForm
      validator={analyzeJobValidator}
      method="post"
      className="mt-6 w-full"
    >
      <fieldset className="flex flex-col items-start text-left space-y-4">
        <legend className="font-semibold">
          Paste your job & skills below:
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <Textarea name="job_posting" label="Job Posting" />
          </div>
          <TextInput name="name" label="Name" />
          <TextInput name="skills" label="Skills" />
          <div className="sm:col-span-2">
            <TextInput name="experience" label="Past Experience" />
          </div>
          <div className="sm:col-span-2">
            <TextInput name="strenghts" label="Strengths" />
          </div>
          <NumberInput name="salary" label="Yearly Salary expectation" />
          <DateInput name="starting" label="Starting day" />
        </div>
      </fieldset>
      <div className="mt-6" />
      <PrimaryBtn
        type="submit"
        title="Enhance with AI"
        icon={<Analyze size={16} strokeWidth={2} color={"white"} />}
      />
    </ValidatedForm>
  );
};

export default AnalyzeJobForm;
