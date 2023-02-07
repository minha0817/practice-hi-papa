import React from "react";
import Children from "../../../components/Children";
import IncidentForm from "../../../components/IncidentForm";
import IncidentReport from "../../../components/IncidentReport";


export default function Incidents() {
  return (
    <>
      <h1>incidents</h1>
      <Children />
      <IncidentForm />
    </>
  );
}
