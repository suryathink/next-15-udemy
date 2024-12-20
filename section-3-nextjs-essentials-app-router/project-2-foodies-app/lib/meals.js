// here we will be writing code to fetch the data from the database
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";
const db = sql("meals.db");

// .run() -> is used if you are inserting
// .all()-> is used if you are fetching data
export async function getMeals() {
  //  adding an extra delay so that we can see in page.js (of meals )about server component
  await new Promise((resolve) => setTimeout(resolve, 5000));
  //  we are not using awaiing here here bcz better-sqlite3 is not using them
  // throw new Error("something went erong");
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  // we can write it like this
  // "SELECT * FROM meals WHERE slug = slug
  // but it will cause sql injection.
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  // doing the below step to sanatize/clean the instruction
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare(
    `INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug)
    VALUES ( @title,  @summary,  @instructions, @creator, @creator_email, @image, @slug )`
  ).run(meal);
}
