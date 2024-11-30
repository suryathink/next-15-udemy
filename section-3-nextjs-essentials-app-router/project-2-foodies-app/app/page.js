import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <p>
        <Link
          href="/meals"
          style={{
            textDecoration: "none",
            background: "white",
            color: "black",
          }}
        >
          Meals
        </Link>
      </p>
      <p>
        <Link
          href="/meals/share"
          style={{
            textDecoration: "none",
            background: "white",
            color: "black",
          }}
        >
          Share Meals
        </Link>
      </p>
      <p>
        <Link
          href="/community"
          style={{
            textDecoration: "none",
            background: "white",
            color: "black",
          }}
        >
          Community
        </Link>
      </p>
    </main>
  );
}
