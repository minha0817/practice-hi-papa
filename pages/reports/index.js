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
    href: "/reports/meals",
  },
  {
    url: "/images/baby_sleep.jpg",
    title: "Sleep",
    width: "30%",
    href: "/reports/sleep",
  },
];

export default function Reports() {

  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", minWidth: 300, width: "100%" }}
    >
      {images.map((image) => (
          <ReportCards image={image} />
      ))}
    </Box>
  );
}
