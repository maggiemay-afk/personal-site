import * as React from 'react';
import Layout from '../components/Layout';
import '../components/layout.module.css';
import Board from '../components/ticTacToe/index';

const TicTacToePage = () => {
  return(
    <Layout>
      <Board/>
    </Layout>
  )
};

export default TicTacToePage;