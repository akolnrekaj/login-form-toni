import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import "../assets/styles/PotvrdaPodatakaForm.scss";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export type IdCardForm = {
  name: string;
  surname: string;
  birthDay: string;
  sex: string;
  oib?: string;
  nationality: string;
  placeOfLiving: string;
  adress: string;
  issuedDay: string;
  expireDate: string;
  issuingBody: string;
  issued: string;
};

const IdCardFormSchema = z.object({
  name: z.string().nonempty("Ime je obavezno"),
  surname: z.string().nonempty("Prezime je obavezno"),
  birthDay: z.string().nonempty("Datum rođenja je obavezan"),
  sex: z.string().nonempty("Spol je obavezan"),
  oib: z
    .string()
    .regex(/^[0-9]+$/, "OIB smije sadržavati samo brojeve")
    .optional()
    .or(z.literal("")),
  nationality: z.string().nonempty("Državljanstvo je obavezno"),
  placeOfLiving: z.string().nonempty("Mjesto prebivališta je obavezno"),
  adress: z.string().nonempty("Ulica i kućni broj je obavezno"),
  issuedDay: z.string().nonempty("Datum izdavanja je obavezan"),
  expireDate: z.string().nonempty("Datum isteka je obavezan"),
  issuingBody: z.string().nonempty("Izdavačko tijelo je obavezno"),
  issued: z.string(),
});

const PotvrdaPodatakaForm = () => {
  const [step, setStep] = useState(() => {
    const savedStep = localStorage.getItem("currentStep");
    return savedStep ? parseInt(savedStep) : 1;
  });

  const savedForm = localStorage.getItem("IdCardForm");
  const defaultValues = savedForm
    ? JSON.parse(savedForm)
    : {
        name: "",
        surname: "",
        birthDay: "",
        sex: "",
        oib: "",
        nationality: "",
        placeOfLiving: "",
        adress: "",
        issuedDay: "",
        expireDate: "",
        issuingBody: "",
        issued: "",
      };

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    watch,
    reset,
  } = useForm<IdCardForm>({
    mode: "onChange",
    resolver: zodResolver(IdCardFormSchema),
    defaultValues,
  });

  const formValues = watch();

  useEffect(() => {
    localStorage.setItem("IdCardForm", JSON.stringify(formValues));
  }, [formValues]);

  useEffect(() => {
    localStorage.setItem("currentStep", step.toString());
  }, [step]);

  const onSubmit = (data: IdCardForm) => {
    console.log("Kompletna forma:", data);
    localStorage.removeItem("currentStep");
  };

  const nextStep = async () => {
    let valid = false;
    if (step === 1)
      valid = await trigger(["name", "surname", "birthDay", "sex", "oib"]);
    else if (step === 2)
      valid = await trigger(["nationality", "placeOfLiving", "adress"]);
    else valid = await trigger();

    if (valid) setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <div className="form-container">
      <form className="potvrda-form" onSubmit={handleSubmit(onSubmit)}>
        {step === 1 && (
          <>
            <label htmlFor="name">Ime</label>
            <input id="name" {...register("name")} />
            {errors.name && <p>{errors.name.message}</p>}

            <label htmlFor="surname">Prezime</label>
            <input id="surname" {...register("surname")} />
            {errors.surname && <p>{errors.surname.message}</p>}

            <label htmlFor="birthDay">Datum rođenja</label>
            <input id="birthDay" {...register("birthDay")} />
            {errors.birthDay && <p>{errors.birthDay.message}</p>}

            <label htmlFor="sex">Spol</label>
            <input id="sex" {...register("sex")} />
            {errors.sex && <p>{errors.sex.message}</p>}

            <label htmlFor="oib">OIB</label>
            <input id="oib" {...register("oib")} />
            {errors.oib && <p>{errors.oib.message}</p>}

            <button type="button" onClick={nextStep}>
              Sljedeći korak
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <label htmlFor="nationality">Državljanstvo</label>
            <input id="nationality" {...register("nationality")} />
            {errors.nationality && <p>{errors.nationality.message}</p>}

            <label htmlFor="placeOfLiving">Mjesto prebivališta</label>
            <input id="placeOfLiving" {...register("placeOfLiving")} />
            {errors.placeOfLiving && <p>{errors.placeOfLiving.message}</p>}

            <label htmlFor="adress">Ulica i kućni broj</label>
            <input id="adress" {...register("adress")} />
            {errors.adress && <p>{errors.adress.message}</p>}

            <div className="buttons">
              <button type="button" onClick={prevStep}>
                Natrag
              </button>
              <button type="button" onClick={nextStep}>
                Sljedeći korak
              </button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <label htmlFor="issuedDay">Datum izdavanja</label>
            <input id="issuedDay" {...register("issuedDay")} />
            {errors.issuedDay && <p>{errors.issuedDay.message}</p>}

            <label htmlFor="expireDate">Datum isteka</label>
            <input id="expireDate" {...register("expireDate")} />
            {errors.expireDate && <p>{errors.expireDate.message}</p>}

            <label htmlFor="issuingBody">Izdavačko tijelo</label>
            <input id="issuingBody" {...register("issuingBody")} />
            {errors.issuingBody && <p>{errors.issuingBody.message}</p>}

            <label htmlFor="issued">Izdala</label>
            <input id="issued" {...register("issued")} />

            <div className="form-buttons">
              <button type="button" onClick={prevStep}>
                Natrag
              </button>
              <button className="potvrda-form" type="submit">
                Pošalji
              </button>
            </div>
          </>
        )}

        <button
          type="button"
          className="reset-btn"
          onClick={() => {
            localStorage.removeItem("IdCardForm");
            reset(defaultValues);
            setStep(1);
          }}
        >
          Reset
        </button>
      </form>
    </div>
  );
};

export default PotvrdaPodatakaForm;
