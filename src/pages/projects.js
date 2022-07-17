import * as React from "react";
import Layout from '../components/Layout';
import { Link } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image';
import {
  gridContainer,
  gridItem
} from '../components/layout.module.css';


const projectPage = () => {
  return (
    <Layout>
      <div className={gridContainer}>
        <div className={gridItem}>
        <StaticImage 
            alt= "tic tac toe photo"
            src= "../images/game.png"
            layout="fixed"
            height={100}
            width={100}
        /> 
          <button>
            <Link to="/tictactoe">
              <h3>Tic Tac Toe</h3>
            </Link> 
          </button>
          <p>Play a game of tic tac toe</p>

        </div>
        <div className={gridItem}> 
          Stay tuned, more coming..
        </div>
      </div>
    </Layout>
  )
}

export default projectPage;
