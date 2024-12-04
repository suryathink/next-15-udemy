"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

// if you wrote "use server" on the top of your file.
// then all the functions written in this file will bw server functions
// that will execute on server

//

// next js gives some way to handle form

// addig use server inside function , creates a server action
/*
async function shareMeal(formData){
'use server'
console.log(formData) // this will log on server
}

*/
// it means this is a function that gurantess to execute only on server
// so now shareMeal function now only executes on server
// Server Actions allow Client Components to call async functions executed on the server.
// Server Actions - is a feature of react, but it can't be executed on client side javascript
// https://react.dev/reference/rsc/server-actions

// you can't mix client components with server components, that's why share Meal
// function, is moved to action.js file and is not kept inside ShareMealPage component

// prevState is {message:null}
export async function shareMeal(prevState, formData) {
  // this function will automatically accept formData that was submitted,(i.e submitted data it will automatically accept because we have done action={shareMeal})
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  // adding server side validations
  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator_email) ||
    isInvalidText(meal.creator) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size == 0
  ) {
    return {
      message: "Invalid input.",
    };
  }
  //  store the data
  // console.log("meal", meal); // this will log on server

  await saveMeal(meal);
  //  deleting the  /meals cache, so that it will receive the updated data
  // if you want to delete all the nested route cache also
  // then do this   revalidatePath( "/", "/layout");
  revalidatePath("/meals");
  redirect("/meals");
}

function isInvalidText(text) {
  return !text || !text.trim() === "";
}
