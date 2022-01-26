import { Container } from '@material-ui/core';
import React from 'react';
import PointsDisplay from '../PointDisplay/PointsDisplay';
import './Home.css';

export default function Home() {
  return (
    <div className="background-home">
      <Container>
        <PointsDisplay />
      </Container>
    </div>
  );
}
