import * as React from 'react';
import Layout from '../components/Layout';
import { GiSwordsEmblem } from '@react-icons/all-files/gi/GiSwordsEmblem';
import {
  heading,
  specialText,
  paragraph
} from '../components/layout.module.css'


const AboutPage = () => {
  return(
    <Layout>
      <h1 className={heading}>just the highlights</h1>
      <p className={paragraph}>My name is Maggie. As a Wisconsin-native, pronounced: 'may-gee' with an unnecessary 'y'. 
        Some things I've known about myself include: I will never enjoy horror films, I'm too pale for equator-living, 
        and I'm always willing to push the limits on daily caffeine consumption. Things I did not know: I love to code.</p>
      <p className={paragraph}>I first started teaching myself to code by playing games like TwilioQuest <GiSwordsEmblem/> and completing Udemy 
        and Codecademy courses. Eventually, I decided to have someone else grade my work and went back to school for an 
        applied computing degree. Emphasis on 'back to school' because I have a previous bachelors degree in psychology. 
        So, for me, this is the start of a career swap into tech and this website should serve to document that. 
        Check out the 'projects' page to see what I'm currently working on.</p>
    </Layout>
  )
};

export default AboutPage;