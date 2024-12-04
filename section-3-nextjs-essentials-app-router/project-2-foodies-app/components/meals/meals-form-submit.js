"use client";
import { useFormStatus } from "react-dom";

/*
 moved this button `MealsFormSubmit` to here as separate component,
 because form is a server component and useFormStatus can only 
 be used in client component.

 and there is no need to convert the whole `ShareMealPage` component as
 client component just beacuse of 1 button.
 
 so its better to move this button component to somewhere else and make 
 only the button component as client component

 and import this button component to that server component and use it there
*/
export default function MealsFormSubmit() {
  const status = useFormStatus();
  // status.pending will be true if there is any ongoing process
  // else it will be false
  return (
    <button disabled={status.pending}>
      {status.pending ? "Submitting..." : "Share Meal"}
    </button>
  );
}
