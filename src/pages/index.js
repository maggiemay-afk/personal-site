import * as React from "react";
import Layout from '../components/Layout';
import {
  heading,
  specialText,
  paragraph,
  skills,
  skillsTitle
} from '../components/layout.module.css';


const IndexPage = () => {
  return (
      <Layout>
          <h1 className={heading}>just the highlights</h1> 
          
          <div className={skills}>
            <div>
              <p className={specialText}>
                <strong className={skillsTitle}>Skills:</strong>
                &nbsp; Java, &nbsp; JavaScript, &nbsp; React, 
                &nbsp; HTML, &nbsp; CSS, &nbsp; SQL
              </p>         
            </div>

            <div>
              <p className={specialText}>
                <strong className={skillsTitle}>Tools:</strong>
                &nbsp; Git, &nbsp; GitHub, &nbsp;VSCode, &nbsp; Oracle SQL Developer
              </p>         
            </div>

            <div>
              <p className={specialText}>
                <strong className={skillsTitle}>Hire Me:</strong>
                &nbsp; Entry-level Software Engineer &nbsp; or &nbsp; Internship 
              </p>         
            </div>

            <div>
              <p className={specialText}>
                <strong className={skillsTitle}>Interested In:</strong>
                &nbsp; Front-end, &nbsp; Back-end, &nbsp; or &nbsp; Full-stack
              </p>         
            </div>
          </div>

          <p className={paragraph}>Hello! That's me on the left, Maggie. I built this website using Gatsby (then migrating to Netlify) 
            with a combination of JavaScript (React), HTML, and CSS. Of course, that's only important because I'm an applied computing 
            student and a (hopeful) future software developer. Currently, I'm in my third year of 
            schooling and looking for internships. I have more to share in the about section and more code 
            under projects - have a look!
          </p>  
      </Layout>
  )
};

export default IndexPage;
