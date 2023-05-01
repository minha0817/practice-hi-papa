import Link from "next/link";
import React from "react";
import ReportCards from "../../components/ReportCards";

export default function Reports() {
  return (
    <>
      <article>
        <Link href="/reports/incidents">
          <ReportCards cardName="Incidents" image="https://img.icons8.com/material-outlined/24/null/baby-bottle.png"/>
        </Link>
      </article>
      <article>
      <ReportCards cardName="Meals (Coming soon...) " image="https://img.icons8.com/color/48/null/baby-bottle.png"/>
      </article>
    </>
  );
}