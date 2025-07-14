import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import "../assets/styles/PotvrdaPodatakaForm.scss";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export type OsobnaForm = {
  ime: string;
  prezime: string;
  datumRodjenja: string;
  spol: string;
  oib: string;
  drzavljanstvo: string;
  mjestoPrebivalista: string;
  ulicaIKucniBroj: string;
  osobnaIskaznica: number;
  datumIzdavanja: string;
  datumIsteka: string;
  izdavackoTijelo: string;
  izdala: string;
};

// eslint-disable-next-line react-refresh/only-export-components
export const osobnaFormSchema = z.object({
  ime: z.string().nonempty("Ime je obavezno"),
  prezime: z.string().nonempty("Prezime je obavezno"),
  datumRodjenja: z.string().nonempty("Datum rođenja je obavezan"),
  spol: z.string().nonempty("Spol je obavezan"),
  oib: z.string().regex(/^[0-9]+$/, "OIB smije sadržavati samo brojeve"),
  drzavljanstvo: z.string().nonempty("Državljanstvo je obavezno"),
  mjestoPrebivalista: z.string().nonempty("Mjesto prebivališta je obavezno"),
  ulicaIKucniBroj: z.string().nonempty("Ulica i kućni broj je obavezno"),
  osobnaIskaznica: z.number(),
  datumIzdavanja: z.string().nonempty("Datum izdavanja je obavezan"),
  datumIsteka: z.string().nonempty("Datum isteka je obavezan"),
  izdavackoTijelo: z.string().nonempty("Izdavačko tijelo je obavezno"),
  izdala: z.string().nonempty("Izdala je obavezno"),
});

const PotvrdaPodatakaForm = () => {
  const [step, setStep] = useState(1);

  const savedForm = localStorage.getItem("osobnaForm");
  const defaultValues = savedForm
    ? JSON.parse(savedForm)
    : {
        ime: "",
        prezime: "",
        datumRodjenja: "",
        spol: "",
        oib: "",
        drzavljanstvo: "",
        mjestoPrebivalista: "",
        ulicaIKucniBroj: "",
        osobnaIskaznica: 0,
        datumIzdavanja: "",
        datumIsteka: "",
        izdavackoTijelo: "",
        izdala: "",
      };

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    watch,
    reset,
  } = useForm<OsobnaForm>({
    mode: "onChange",
    resolver: zodResolver(osobnaFormSchema),
    defaultValues,
  });

  const formValues = watch();

  useEffect(() => {
    localStorage.setItem("osobnaForm", JSON.stringify(formValues));
  }, [formValues]);

  const onSubmit = (data: OsobnaForm) => {
    console.log("Kompletna forma:", data);
  };

  const nextStep = async () => {
    let valid = false;
    if (step === 1)
      valid = await trigger(["ime", "prezime", "datumRodjenja", "spol", "oib"]);
    else if (step === 2)
      valid = await trigger([
        "drzavljanstvo",
        "mjestoPrebivalista",
        "ulicaIKucniBroj",
      ]);
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
            <label htmlFor="ime">Ime</label>
            <input id="ime" {...register("ime")} />
            {errors.ime && <p>{errors.ime.message}</p>}

            <label htmlFor="prezime">Prezime</label>
            <input id="prezime" {...register("prezime")} />
            {errors.prezime && <p>{errors.prezime.message}</p>}

            <label htmlFor="datumRodjenja">Datum rođenja</label>
            <input id="datumRodjenja" {...register("datumRodjenja")} />
            {errors.datumRodjenja && <p>{errors.datumRodjenja.message}</p>}

            <label htmlFor="spol">Spol</label>
            <input id="spol" {...register("spol")} />
            {errors.spol && <p>{errors.spol.message}</p>}

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
            <label htmlFor="drzavljanstvo">Državljanstvo</label>
            <input id="drzavljanstvo" {...register("drzavljanstvo")} />
            {errors.drzavljanstvo && <p>{errors.drzavljanstvo.message}</p>}

            <label htmlFor="mjestoPrebivalista">Mjesto prebivališta</label>
            <input
              id="mjestoPrebivalista"
              {...register("mjestoPrebivalista")}
            />
            {errors.mjestoPrebivalista && (
              <p>{errors.mjestoPrebivalista.message}</p>
            )}

            <label htmlFor="ulicaIKucniBroj">Ulica i kućni broj</label>
            <input id="ulicaIKucniBroj" {...register("ulicaIKucniBroj")} />
            {errors.ulicaIKucniBroj && <p>{errors.ulicaIKucniBroj.message}</p>}

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
            <label htmlFor="datumIzdavanja">Datum izdavanja</label>
            <input id="datumIzdavanja" {...register("datumIzdavanja")} />
            {errors.datumIzdavanja && <p>{errors.datumIzdavanja.message}</p>}

            <label htmlFor="datumIsteka">Datum isteka</label>
            <input id="datumIsteka" {...register("datumIsteka")} />
            {errors.datumIsteka && <p>{errors.datumIsteka.message}</p>}

            <label htmlFor="izdavackoTijelo">Izdavačko tijelo</label>
            <input id="izdavackoTijelo" {...register("izdavackoTijelo")} />
            {errors.izdavackoTijelo && <p>{errors.izdavackoTijelo.message}</p>}

            <label htmlFor="izdala">Izdala</label>
            <input id="izdala" {...register("izdala")} />

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
            localStorage.removeItem("osobnaForm");
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
