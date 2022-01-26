import { Box, Grid } from '@material-ui/core';
import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './HouseBox.css';

export default function HouseBox(props) {
  return (
    <Grid item xs={12} md={3}>
      <Card classes="background-card" sx={{ maxWidth: 345 }} align="center">
        <Box
          component="img"
          sx={{
            maxHeight: { xs: 233, md: 300 },
            maxWidth: { xs: 350, md: 600 }
          }}
          alt={props.house.name}
          src={`/assets/${props.house.name}.jpeg`}
          align="center"
        />
        <CardContent>
          <Typography align="center" variant="h5" color="inherit">
            {props.house.name.toUpperCase()}
          </Typography>
          <Typography align="center" variant="h5" color="inherit">
            {props.house.points}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
