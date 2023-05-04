import React from 'react';
import TextField from '@mui/material/TextField';
import styles from './IncidentForm.module.css';

export default function IncidentForm({getIncidentReports}) {


  const handleSubmit = async (event) => {
    event.preventDefault();

    const newIncidentReport = {
      notes: event.target.notes.value
    }

    const JSONData = JSON.stringify(newIncidentReport)
    const endPoint = "/api/incident-report/post"

    const options = {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
      },
      body: JSONData,
    }

    const response = await fetch(endPoint, options)

    const result = await response.json()
    //{incidentReport_id: 24, incidentReport_note: 'sdfsd'}
    
    await getIncidentReports();

    event.target.notes.value = "";

  }

  return (
    <>
      <form className={styles.form} action="/api/incident-report/post" method="post" onSubmit={handleSubmit}>
        <label htmlFor="notes">
          <TextField
          id="outlined-multiline-static"
          label="Notes"
          multiline
          rows={8}
        />
        </label>
        <label>
          Photo or Videos
          <button type='button'>Photos</button>
          <button type='button'>Videos</button>
        </label>
        <button type="submit">Submit</button>
        <button type="submit">Save</button>
        <button type="reset">Cancel</button>
      </form>
    </>
  )
}
