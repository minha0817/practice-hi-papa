import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

export default function ReportCards({cardName, imageUrl}) {
  return (
    <Card sx={{ maxWidth: 200, display: 'flex' }}>
      <CardActionArea>
        {/* <CardMedia
          component="img"
          height="140"
          src={image}
          alt={cardName}
        /> */}
        <img src={imageUrl}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {cardName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
