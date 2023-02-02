import Link from "next/link";
import React from "react";

export default function Reports() {
  return (
    <>
      <h1>reports</h1>
      <article>
        <Link href="/reports/incidents"><h2>Incident</h2></Link>
      </article>
      <article>
        <h2>Meals</h2>
      </article>
    </>
  );
}
