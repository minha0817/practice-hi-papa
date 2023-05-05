import React from 'react'
import TextField from '@mui/material/TextField'
import styles from './IncidentForm.module.css'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import Stack from '@mui/material/Stack'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'

export default function IncidentForm({ getIncidentReports }) {
  const handleSubmit = async (event) => {
    event.preventDefault()

    const newIncidentReport = {
      notes: event.target.notes.value,
    }

    const JSONData = JSON.stringify(newIncidentReport)
    const endPoint = '/api/incident-report/post'

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONData,
    }

    const response = await fetch(endPoint, options)

    const result = await response.json()
    //{incidentReport_id: 24, incidentReport_note: 'sdfsd'}

    await getIncidentReports()

    event.target.notes.value = ''
  }

  return (
    <>
      <form
        className={styles.form}
        action="/api/incident-report/post"
        method="post"
        onSubmit={handleSubmit}
      >
        <label htmlFor="notes">
          <TextField
            id="outlined-multiline-static"
            label="Notes"
            multiline
            rows={8}
          />
        </label>
        <label>
          Upload pictures
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input hidden accept="image/*" type="file" />
            <PhotoCamera />
          </IconButton>
        </label>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" endIcon={<SendIcon />} type="submit">
            Send
          </Button>
          <Button variant="outlined" endIcon={<DeleteIcon />} type="reset">
            Delete
          </Button>
        </Stack>
      </form>
    </>
  )
}
