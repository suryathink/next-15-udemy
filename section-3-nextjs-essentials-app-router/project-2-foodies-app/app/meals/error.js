"use client";

const Error = ({ error }) => {
  return (
    <main className="error">
      <h1>An error occured</h1>
      <p>Failed to fetch meals data, Try again later</p>
    </main>
  );
};

export default Error;
