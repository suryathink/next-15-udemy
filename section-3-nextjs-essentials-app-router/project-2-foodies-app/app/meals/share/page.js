"use client";

import React, { useActionState } from "react";
import ImagePicker from "@/components/meals/image-picker";
import MealsFormSubmit from "@/components/meals/meals-form-submit";
import classes from "./page.module.css";
import { shareMeal } from "@/lib/action";

export default function ShareMealPage() {
  /* useActionState -> accepts 2 argument
    first argument is the actual server action that should be triggered when the form will be submitted, in this case the shareMeal
   and in the second argument,it should be the initial state of this component, it means the initial value that should be returned by useFormState before shareMeal action has been triggered and yielded a response
  */
  /*
      useActionState -> gives us 2 elements 
      one is state -> current reponse of this component
      formAction -> formAction which we should actually set as value for the action prop of this form

      instead of setting shareMeal as a vlue of action prop in form. 

      we will be setting `formAction` as the value of action.

      And this must be done so that useFormState can step in and manage that state for this component 

      and that state depends on the execution of a server action and its response and that's why useFormState kind of need to act 
      as man in the middle.
   */
  const [state, formAction] = useActionState(shareMeal, { message: null });

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="Your Image" name="image" />
          {state.message && <p>{state.message}</p>}
          <p className={classes.actions}>
            {/* <button type="submit">Share Meal</button> */}
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
