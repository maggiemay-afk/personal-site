import * as React from 'react';
import Layout from '../components/Layout';
import {
  heading,
  paragraph,
} from '../components/layout.module.css'


const AboutPage = () => {
  return(
    <Layout>
      <h1 className={heading}>about me</h1>
      <p className={paragraph}>My name is Maggie. As a Wisconsin-native, generally pronounced: 'may-gee' with an unnecessary 'y'. 
        I completed my first Bachelor's degree in Psychology, graduating in 2019. After spending some time 
        working in the field, I realized that psychology wasn't the career path for me. 
        Thanks to the Covid-19 pandemic, I had ample time to explore other interests and hobbies of mine. 
      </p>
      <p className={paragraph}>
        I started teaching myself to code through games like TwilioQuest and completing Udemy 
        and Codecademy courses. I enjoyed the challenge and still found creativity in learning these new skills - that's how I knew this 
        was the career field for me. Eventually, I decided to have someone else grade my work and went back to school for an applied computing degree.
        And so begins another career swap into tech! 
      </p>
      <p className={paragraph}>
        Currently, I work as a Database Coordinator for Indiana University, dealing with the nuances of Undergraduate curriculum.
        In my free time, you can usually find me with a cup of coffee, working on personal projects, playing video games (see you in Azeroth), 
        gardening, or anything else outdoors. 
      </p>
    </Layout>
  )
};

export default AboutPage;