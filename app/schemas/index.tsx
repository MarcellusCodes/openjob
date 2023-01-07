import { withZod } from "@remix-validated-form/with-zod";
import { z } from "zod";
import { zfd } from "zod-form-data";

export const analyzeJobValidator = withZod(
  z.object({
    job_posting: zfd.text(
      z.string({ required_error: "Job Posting is required" }).min(30, {
        message:
          "Job Posting needs a reasonable amount of information to be able to analyze and generate an application for it",
      })
    ),
    name: zfd.text(z.string({ required_error: "Name is required" }).min(1)),
    skills: zfd.text(
      z.string({ required_error: "Skills is required" }).min(30, {
        message:
          "Skills needs a reasonable amount of information to be able to analyze and generate an application for it",
      })
    ),
    experience: zfd.text(
      z.string({ required_error: "Experience is required" }).min(30, {
        message:
          "Experience needs a reasonable amount of information to be able to analyze and generate an application for it",
      })
    ),
    strenghts: zfd.text(
      z.string({ required_error: "Strenghts is required" }).min(15, {
        message:
          "Strengths needs a reasonable amount of information to be able to analyze and generate an application for it",
      })
    ),
    salary: zfd.numeric(z.number({ required_error: "Salary is required" })),
    starting: zfd.text(
      z
        .string({ required_error: "Starting is required" })
        .refine((value) => new Date(value).toString() !== "Invalid Date", {
          message: "Starting has to be a date",
        })
    ),
  })
);
