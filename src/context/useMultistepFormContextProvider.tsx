import { useReducer, useMemo, type ReactNode } from "react";
import {
  multistepFormContext,
  MultistepFormReducer,
  initialFormValues,
} from "./multistepFormContext";

export const MultistepFormContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(MultistepFormReducer, initialFormValues);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <multistepFormContext.Provider value={value}>
      {children}
    </multistepFormContext.Provider>
  );
};
