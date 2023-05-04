import Link from "next/link";
import React from "react";
import ReportCards from "../../components/ReportCards";
import Box from "@mui/material/Box";

const images = [
  {
    url: "/images/baby_incident.jpg",
    title: "Incidents",
    width: "30%",
    href: "/reports/incidents",
  },
  {
    url: "/images/baby_meals.jpg",
    title: "Meals",
    width: "30%",
    href: "/reports/incidents",
  },
  {
    url: "/images/baby_sleep.jpg",
    title: "Sleep",
    width: "30%",
    href: "/reports/incidents",
  },
];

export default function Reports() {

  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", minWidth: 300, width: "100%" }}
    >
      {images.map((image) => (
        <Link href={image.href} passHref legacyBehavior>
          <ReportCards image={image} />
        </Link>
      ))}
    </Box>
  );
}
