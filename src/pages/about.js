import * as React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import {
  heading,
  specialText,
  paragraph
} from '../components/layout.module.css'


const AboutPage = () => {
  return(
    <Layout>
      <h1 className={heading}>don't worry, it's not a life story</h1>
      <p className={paragraph}>My name is Maggie. As a Wisconsin-native, pronounced: 'may-gee' with an unnecessary 'y'. 
      Some things I've known about myself include: I will never enjoy horror films, I'm too pale for equator-living, 
      and I'm always willing to push the limits on daily caffeine consumption. Things I did not know: I love to code.</p>
      <p className={paragraph}>I first started teaching myself to code by playing games like TwilioQuest and completing Udemy and Codecademy courses.
        Eventually, I decided to have someone else grade my work, and wen't back to school for an Applied Computing degree. 
      </p>
    </Layout>
  )
};

export default AboutPage;