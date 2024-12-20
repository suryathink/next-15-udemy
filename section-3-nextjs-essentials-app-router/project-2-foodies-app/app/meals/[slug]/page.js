import Image from "next/image";
import { getMeal } from "@/lib/meals";
import classes from "./page.module.css";
import { notFound } from "next/navigation";

// adding metadata to those pages which are dynamic
export async function generateMetadata({ params }) {
  const meal = getMeal(params.slug);

  if (!meal) {
    // then show mw the closest not found page
    // hook given by nextjs
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default function MealDetailsPage({ params }) {
  const meal = getMeal(params.slug);
  if (!meal) {
    // then show mw the closest not found page
    // hook given by nextjs
    notFound();
  }
  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            {" "}
            Created by{" "}
            <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}
