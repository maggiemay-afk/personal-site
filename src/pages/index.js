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
          <h1 className={heading}><Link>wow,</Link> another personal website</h1> 
          <span className={specialText}> ...how original</span>
          <br></br>
          <p className={paragraph}>Hello! That's me on the left, Maggie. I built this website using Gatsby with a combination of 
            JavaScript (React), HTML, and CSS. Of course, that's only important because I'm an applied computing 
            student and a (hopeful) future software developer. I have more to share in the about section - have a look. 
            Stick around, only good times here.</p>  
      </Layout>
  )
};

export default IndexPage;
