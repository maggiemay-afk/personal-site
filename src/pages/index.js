import * as React from "react";
import Layout from '../components/Layout';
import { Link } from "gatsby";
import {
  heading,
  specialText,
  paragraph
} from '../components/layout.module.css';


const IndexPage = () => {
  return (
      <Layout>
          <h2 className={heading}><Link>WoW!</Link> another personal website <span className={specialText}> ...how original</span></h2>
          <p className={paragraph}>Hello! That's me on the left, Maggie. I built this website using Gatsby with a combination of 
            JavaScript (React), HTML, and CSS. Of course, that's only important becuase I'm an applied computing 
            student and a (hopeful) future software developer. Stick around, only good times here.</p>  
      </Layout>
  )
};

export default IndexPage;
