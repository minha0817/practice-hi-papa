import React, { useState, useEffect } from "react";
import ChildrenList from "../../../components/ChildrenList/ChildrenList";
import IncidentForm from "../../../components/IncidentForm/IncidentForm";
import IncidentReport from "../../../components/IncidentReport";
import styles from "./incidents.module.css";

export default function Incidents() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [chosenChildId, setChosenChildId] = useState(null);

  useEffect(() => {
    getIncidentReports();
  }, []);

  const getIncidentReports = () => {
    setLoading(true);

    fetch("/api/incident-report/get")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  };

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No Incident reports data</p>;

  return (
    <div className={styles.incidents}>
      <h2 className={styles.incidents_title}>Incident Reports</h2>
      <ChildrenList setChosenChildId={setChosenChildId}/>
      <IncidentForm
        data={data}
        setData={setData}
        getIncidentReports={getIncidentReports}
        chosenChildId={chosenChildId}
        className={styles.incidents_form}
      />
      {/* <IncidentReport data={data} /> */}
    </div>
  );
}
