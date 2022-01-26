import { Grid } from '@material-ui/core';
import React from 'react';
import { roccastregaHouses } from '../../lib/utils/houseutils';
import HouseBox from '../HouseBox/HouseBox';

export default function PointsDisplay() {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" spacing={1}>
      {roccastregaHouses &&
        roccastregaHouses.map((house, i) => {
          return <HouseBox house={house} key={i} />;
        })}
    </Grid>
  );
}
