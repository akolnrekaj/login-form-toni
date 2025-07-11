import { createContext } from "react";
import type { MultistepFormSchema } from "../validations/multistepFormSchema";

export const initialFormValues: MultistepFormSchema = {
  fName: "",
  lName: "",
  dateOfBirth: "",
  gender: "",
  oib: "",
  citizenship: "",
  placeOfResidance: "",
  address: "",
  idNumber: "",
  issueDate: "",
  expiryDate: "",
  issuingBody: "",
  issuedBy: "",
};

export type UpdateFormAction = {
  type: "UPDATE_FORM";
  payload: Partial<MultistepFormSchema>;
};

export type ResetFormAction = {
  type: "RESET_FORM";
};

export type FormAction = UpdateFormAction | ResetFormAction;

export const MultistepFormReducer = (
  state: MultistepFormSchema,
  action: FormAction
): MultistepFormSchema => {
  switch (action.type) {
    case "UPDATE_FORM":
      return { ...state, ...(action.payload as Partial<MultistepFormSchema>) };
    case "RESET_FORM":
      return initialFormValues;
    default:
      return state;
  }
};

export type MultistepFormContextType = {
  state: MultistepFormSchema;
  dispatch: React.Dispatch<FormAction>;
};

export const multistepFormContext =
  createContext<MultistepFormContextType | null>(null);
