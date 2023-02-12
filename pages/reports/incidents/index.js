import React, { useState, useEffect } from "react";
import ChildrenList from "../../../components/ChildrenList";
import IncidentForm from "../../../components/IncidentForm";
import IncidentReport from "../../../components/IncidentReport";

export default function Incidents() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/incident-report/get")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No Incident reports data</p>;

  return (
    <>
      <h1>incidents</h1>
      <ChildrenList />
      <IncidentForm data={data} setData={setData} />
      <IncidentReport data={data} />
    </>
  );
}
