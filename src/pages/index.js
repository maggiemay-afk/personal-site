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
          <h1 className={heading}>another personal website</h1> 
          <span className={specialText}> ...how original</span>
          <br></br>
          <p className={paragraph}>Hello! That's me on the left, Maggie. I built this website using Gatsby with a combination of 
            JavaScript (React), HTML, and CSS. Of course, that's only important because I'm an applied computing 
            student and a (hopeful) future software developer. Currently, I'm in my second year of 
            schooling and looking for internships. I have more to share in the about section and more code 
            under the projects tab - have a look.</p>  
      </Layout>
  )
};

export default IndexPage;
