import type z from "zod";
import { multistepFormSchema } from "../validations/multistepFormSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const personalInfoSchema = multistepFormSchema.pick({
  fName: true,
  lName: true,
  dateOfBirth: true,
  gender: true,
  oib: true,
});

const fields = [
  { name: "fName", placeholder: "Ime" },
  { name: "lName", placeholder: "Prezime" },
  { name: "dateOfBirth", placeholder: "Datum rođenja" },
  { name: "gender", placeholder: "Spol" },
  { name: "oib", placeholder: "OIB" },
];

type PersonalInfoSchema = z.infer<typeof personalInfoSchema>;

const PersonalInfo = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PersonalInfoSchema>({
    resolver: zodResolver(personalInfoSchema),
    mode: "onTouched",
  });

  const { fName, lName, dateOfBirth, gender } = watch();

  const isDisabled = !fName || !lName || !dateOfBirth || !gender;

  console.log(errors);

  const onSubmit = (data: PersonalInfoSchema) => {
    console.log(data);
  };

  return (
    <div className="p-personalInfo">
      <h2>Osobni podaci</h2>
      <form className="p-personalInfo__form" onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field) => (
          <div key={field.name}>
            <input
              type="text"
              {...register(field.name as keyof PersonalInfoSchema)}
              placeholder={field.placeholder}
              className={
                errors[field.name as keyof PersonalInfoSchema] && "invalid"
              }
            />
          </div>
        ))}
        <button type="submit" disabled={isDisabled}>
          Nastavi
        </button>

        <div className="p-personalInfo__form_errors">
          {Object.values(errors).map((err) => (
            <p>{err.message}</p>
          ))}
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
