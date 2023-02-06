import React, { useState, useEffect } from 'react'

export default function IncidentReport() {
  const [data, setDate] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('/api/incident_report')
      .then((res) => res.json())
      .then((data) => {
        setDate(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No Incident reports data</p>

  
  return (
    <div>
      <h1>Incident reports</h1>
      {data &&
        data.map((item) => {
          return (
            <>
              <p>{item.description}</p>
              <p>{item.dateTime}</p>
            </>
          )
        })}
    </div>
  )
}
