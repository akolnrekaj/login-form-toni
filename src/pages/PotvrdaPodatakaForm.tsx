import { useForm } from "react-hook-form";
import { useState } from "react";
import "../assets/styles/PotvrdaPodatakaForm.scss";

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

const PotvrdaPodatakaForm = () => {
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
  } = useForm<OsobnaForm>({
    mode: "onChange",
    defaultValues: {},
  });

  const onSubmit = (data: OsobnaForm) => {
    console.log("Kompletna forma:", data);
  };

  const nextStep = async () => {
    const valid = await trigger();
    if (valid) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <div className="form-container">
      <form className="potvrda-form" onSubmit={handleSubmit(onSubmit)}>
        {step === 1 && (
          <>
            <label>Ime</label>
            <input {...register("ime", { required: "Ime je obavezno" })} />
            {errors.ime && <p>{errors.ime.message}</p>}

            <label>Prezime</label>
            <input
              {...register("prezime", { required: "Prezime je obavezno" })}
            />
            {errors.prezime && <p>{errors.prezime.message}</p>}

            <label>Datum rođenja</label>
            <input
              {...register("datumRodjenja", {
                required: "Datum rođenja je obavezan",
              })}
            />
            {errors.datumRodjenja && <p>{errors.datumRodjenja.message}</p>}

            <label>Spol</label>
            <input
              {...register("spol", {
                required: "Spol je obavezan",
                pattern: {
                  value: /^[A-Za-zČčĆćŽžŠšĐđ]{1}$/,
                  message: "Spol mora biti samo jedno slovo",
                },
              })}
            />
            {errors.spol && <p>{errors.spol.message}</p>}

            <label>OIB</label>
            <input
              {...register("oib", {
                pattern: {
                  value: /^[0-9]+$/,
                  message: "OIB smije sadržavati samo brojeve",
                },
              })}
            />
            {errors.oib && <p>{errors.oib.message}</p>}

            <button type="button" onClick={nextStep} disabled={!isValid}>
              Sljedeći korak
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <label>Državljanstvo</label>
            <input
              {...register("drzavljanstvo", {
                required: "ovo polje je obavezno",
              })}
            />

            <label>Mjesto prebivališta</label>
            <input
              {...register("mjestoPrebivalista", {
                required: "ovo polje je obavezno",
              })}
            />

            <label>Ulica i kućni broj</label>
            <input
              {...register("ulicaIKucniBroj", {
                required: "ovo polje je obavezno",
              })}
            />

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
            <label>Osobna iskaznica</label>

            <label>Datum izdavanja</label>
            <input
              {...register("datumIzdavanja", {
                required: "ovo polje je obavezno",
              })}
            />

            <label>Datum isteka</label>
            <input
              {...register("datumIsteka", {
                required: "ovo polje je obavezno",
              })}
            />

            <label>Izdavačko tijelo</label>
            <input
              {...register("izdavackoTijelo", {
                required: "ovo polje je obavezno",
              })}
            />

            <label>Izdala</label>
            <input {...register("izdala")} />

            <div className="form-buttons">
              <button className="potvrda-form" type="button" onClick={prevStep}>
                Natrag
              </button>
              <button className="potvrda-form" type="submit">
                Pošalji
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default PotvrdaPodatakaForm;
