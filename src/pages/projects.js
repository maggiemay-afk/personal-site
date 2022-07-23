import * as React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import {
  gridContainer,
  gridItem,
  gridSubcolumn,
  projectButton,
  projectNavLinkText
} from '../components/layout.module.css';


const projectPage = () => {
  return (
    <Layout>
      <div className={gridContainer}>
        <div className={gridItem}>
          <StaticImage 
              alt= "tic tac toe photo"
              src= "../images/ticTacToeBlue.jpg"
              layout="fixed"
              height={120}
              width={120}
          /> 
          <div className={gridSubcolumn}> 
            <button className={projectButton}>
              <Link to="/tictactoe" className={projectNavLinkText}>
                <h3>Tic Tac Toe</h3>
              </Link> 
            </button>
            <p>Play a game of tic tac toe!  Built with: JavaScript (React), CSS &#38; HTML</p>
          </div>
        </div>
        <div className={gridItem}> 
          <StaticImage 
              alt= "email icon"
              src= "../images/emaily.png"
              layout="fixed"
              height={120}
              width={120}
          />
          <div  className={gridSubcolumn}> 
            <p>In Progress:  Udemy course inspired by the idea of automating one of my previous jobs. 
              Frontend: JavaScript, React &#38; Redux. Backend: JavaScript, NodeJS, Express &#38; MongoDB</p>
          </div> 
        </div>
      </div>
    </Layout>
  )
}

export default projectPage;
