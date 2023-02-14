import React from 'react'

export default function IncidentReport({ data }) {
  return (
    <div>
      <h1>Incident reports</h1>
      {data &&
        data.map((item) => {
          return <p key={item.INCIDENT_REPORT_ID}>{item.NOTE}</p>
        })}
    </div>
  )
}
