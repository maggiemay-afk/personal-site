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
                <strong className={skillsTitle}>Languages:</strong>
                &nbsp;Java, &nbsp;JavaScript, &nbsp;TypeScript, 
                &nbsp;HTML, &nbsp;SQL
              </p>         
            </div>

            <div>
              <p className={specialText}>
                <strong className={skillsTitle}>Skills:</strong>
                &nbsp;Git, &nbsp;Node.js, &nbsp;React.js, 
                &nbsp;CSS
              </p>         
            </div>

            <div>
              <p className={specialText}>
                <strong className={skillsTitle}>Tools:</strong>
                &nbsp;GitHub, &nbsp;VSCode, &nbsp;Eclipse, &nbsp;Oracle SQL Developer
                &nbsp;Trello, &nbsp;Microsoft Project,
              </p>         
            </div>

            <div>
              <p className={specialText}>
                <strong className={skillsTitle}>Hire Me:</strong>
                &nbsp; Actively seeking employment! 
              </p>         
            </div>


          </div>
          <p className={paragraph}>Hello! That's me on the left, Maggie. I built this website using Gatsby (then migrating to Netlify) 
            with a combination of JavaScript (React), HTML, and CSS. Of course, that's only important because I'm an applied computing 
            student. I graduated in May of 2024 with my BS and am actively seeking entry-level positions or internships.
            I have more to share in the about section, more code under projects, and relevant coursework under education - stick around and have a look!
          </p>  
      </Layout>
  )
};

export default IndexPage;
