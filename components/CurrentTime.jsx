import { DateTime } from 'luxon'
import Typography from '@mui/material/Typography'

export default function CurrentTime() {
  const currentDate = DateTime.now().toLocaleString(DateTime.DATE_MED)
  const currentDay = DateTime.now().weekdayShort

  const today = `${currentDay}, ${currentDate}`
  return (
    <div>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          m: 2,
          // display: {md: 'flex',  },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.1rem',
          color: 'inherit',
          textDecoration: 'none',
          textAlign: 'center',
        }}
      >
        {today}
      </Typography>
    </div>
  )
}
