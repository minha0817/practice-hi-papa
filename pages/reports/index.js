import Link from "next/link";
import React from "react";
import ReportCards from "../../components/ReportCards";

export default function Reports() {
  return (
    <div>
      <article>
        <Link href="/reports/incidents">
          <ReportCards
            cardName="Incidents"
            imageUrl="https://img.icons8.com/office/80/null/bandage.png"
          />
        </Link>
      </article>
      <article>
        <ReportCards
          cardName="Meals (Coming soon...) "
          imageUrl="https://img.icons8.com/color/96/null/baby-bottle.png"
        />
      </article>
    </div>
  );
}
