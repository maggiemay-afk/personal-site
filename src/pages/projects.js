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
              alt= "Alliance Photo"
              src= "../images/ambiance.jpg"
              layout="fixed"
              height={120}
              width={120}
          />
          <div  className={gridSubcolumn}> 
            <button className={projectButton}>
              <Link 
                to="https://ambiance.dev/" 
                target="_blank"
                className={projectNavLinkText}
              >
                <h3>Ambiance.dev</h3>
              </Link> 
            </button>
            <p>  
              <strong>Capstone Project, Spring 2024.</strong><br></br> 
              Updates to Ambiance.dev including: Initialize Firestore database, create administrative UI, enable authentication, add API routes, and more.
              <br></br>Built with: TypeScript, JavaScript (React), CSS &#38; HTML
            </p>
            <Link 
                href='https://github.com/hermanator608/ambiance' 
                underline="hover"
                target="_blank" 
              >
              {'See my progress on GitHub'}
            </Link>
          </div> 
        </div>
        
        <div className={gridItem}> 
          <StaticImage 
              alt= "Alliance Photo"
              src= "../images/wow-trivia.png"
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
