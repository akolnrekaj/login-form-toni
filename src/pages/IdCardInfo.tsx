import type z from "zod";
import { multistepFormSchema } from "../validations/multistepFormSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const idCardInfoSchema = multistepFormSchema.pick({
  idNumber: true,
  issueDate: true,
  expiryDate: true,
  issuingBody: true,
  issuedBy: true,
});

type IdCardInfoSchema = z.infer<typeof idCardInfoSchema>;

const IdCardInfo = () => {
  const { register } = useForm<IdCardInfoSchema>({
    resolver: zodResolver(idCardInfoSchema),
  });
  return (
    <div>
      <h2>Osobna iskaznica</h2>
      <input type="text" {...register("idNumber")} />
      <input type="text" {...register("issueDate")} />
      <input type="text" {...register("expiryDate")} />
      <input type="text" {...register("issuingBody")} />
      <input type="text" {...register("issuedBy")} />
    </div>
  );
};

export default IdCardInfo;
