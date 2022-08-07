import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './preview.css'




function Preview(props) {
console.log(props)
 const {url,title,icon,description,image} = props.data;
  return (
    <Card className='Preview-Card'>
    <a style={{textDecorationColor:'none'}} href={url} target="_blank">
      <CardMedia
        component="img"
        height="140"
        style={{backgroundPosition:'cover'}}
        image={image ? image : icon}
        alt="couldnot find a image"
      />
      </a>
      <CardContent>
        <Typography gutterBottom style={{fontSize:'10px',fontWeight:'bolder'}} component="div">
          {title}
        </Typography>
        <Typography  style={{fontSize:'8px'}} color="text.secondary">
          {description ? description : ""}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" ><a style={{textDecorationColor:'none'}} href={url} target="_blank">Open Link</a></Button>
      </CardActions>
    </Card>
  )
}

export default Preview