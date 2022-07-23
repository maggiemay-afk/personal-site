import * as React from 'react';
import Layout from '../components/Layout';
import '../components/layout.module.css';
import Board from '../components/ticTacToe/index';

const GamePage = () => {
  return(
    <Layout>
      <Board/>
    </Layout>
  )
};

export default GamePage;