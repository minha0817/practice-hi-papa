import React from 'react'

const stylingObject = {
  form: {
    display: "flex",
    flexDirection: "column"
  }
}

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
      <form style={stylingObject.form} action="/api/incident-report/post" method="post" onSubmit={handleSubmit}>
        <label htmlFor="notes">
          Notes:
          <textarea name="text" id="notes" rows={10} cols={40} required/>
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
