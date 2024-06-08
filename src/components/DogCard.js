import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';


const DogCard = ({ dog }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={dog.name}
        height="200"
        image={dog.image.url}
        title={dog.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {dog.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {dog.breed}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DogCard;