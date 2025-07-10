import { useForm } from "react-hook-form";
import "../assets/styles/PotvrdaPodatakaForm.scss";

export type OsobnaForm = {
  ime: string;
  prezime: string;
  datumRodjenja: string;
  spol: string;
  oib: number;
  drzavljanstvo: string;
  mjestoPrebivalista: string;
  ulicaIKucniBroj: string;
  osobnaIskaznica: number;
  datumIzdavanja: string;
  datumIsteka: string;
  izdavackoTijelo: string;
  izdala: string;
};

//const loginPageValidationSchema = z.object ({});

const PotvrdaPodatakaForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<OsobnaForm>({
    mode: "onChange",
  });

  const onSubmit = (data: OsobnaForm) => {
    console.log("Poslana forma:", data);
  };

  return (
    <div className="form-container">
      <form className="potvrda-form" onSubmit={handleSubmit(onSubmit)}>
        <label>Ime</label>
        <input {...register("ime", { required: "ime je obavezno polje" })} />
        {errors.ime && <p>{errors.ime.message}</p>}

        <label>Prezime</label>

        <input {...register("prezime", { required: "prezime je obavezna" })} />
        {errors.prezime && <p>{errors.prezime.message}</p>}

        <label>Datum rođenja</label>
        <input
          {...register("datumRodjenja", {
            required: "datumRodjenja je obavezna",
          })}
        />
        {errors.datumRodjenja && <p>{errors.datumRodjenja.message}</p>}

        <label>Spol</label>
        <input {...register("spol", { required: "spol je obavezna" })} />
        {errors.spol && <p>{errors.spol.message}</p>}

        <label>Oib</label>
        <input {...register("oib")} />

        <button type="submit" disabled={!isValid}>
          {" "}
          Nastavi
        </button>
      </form>
    </div>
  );
};

export default PotvrdaPodatakaForm;
