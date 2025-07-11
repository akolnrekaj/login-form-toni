import type z from "zod";
import { multistepFormSchema } from "../validations/multistepFormSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const addressInfoSchema = multistepFormSchema.pick({
  placeOfResidance: true,
  address: true,
});

type AddressInfoSchema = z.infer<typeof addressInfoSchema>;

const AddressInfo = () => {
  const { register } = useForm<AddressInfoSchema>({
    resolver: zodResolver(addressInfoSchema),
  });

  return (
    <div>
      <h2>Adresa</h2>
      <input type="text" {...register("placeOfResidance")} />
      <input type="text" {...register("address")} />
    </div>
  );
};

export default AddressInfo;
