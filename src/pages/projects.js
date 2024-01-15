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
              alt= "email icon"
              src= "../images/alliance.png"
              layout="fixed"
              height={120}
              width={120}
          />
          <div  className={gridSubcolumn}> 
            <button className={projectButton}>
              <Link 
                to="https://warcraft-trivia-2851b3364c3c.herokuapp.com/" 
                target="_blank"
                className={projectNavLinkText}
              >
                <h3>Mount Trivia</h3>
              </Link> 
            </button>
            <p>  
              Built with: TypeScript, Node.js, JavaScript (React), CSS &#38; HTML
              Utilizes: Blizzard API, OpenAI API
            </p>
          </div> 
        </div>

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
              <Link to="/game" className={projectNavLinkText}>
                <h3>Tic Tac Toe</h3>
              </Link> 
            </button>
            <p>Play a game of tic tac toe!  Built with: JavaScript (React), CSS &#38; HTML</p>
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default projectPage;
