import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import Resume_Maggie from '../downloads/Resume_MaggieHerms_5_2023.pdf';
import { FaFileDownload } from '@react-icons/all-files/fa/FaFileDownload';
import {
    specialText,
    heading,
    download,
    button
    } from '../components/layout.module.css';

const Resume = () => {
    return (
        <Layout>
            <h2 className={heading}>resume <span className={specialText}> updated 09-2023</span></h2>
            <button className={button}><a href={Resume_Maggie} download={true} className={download}><FaFileDownload /> Download as PDF</a></button>
            <StaticImage
                alt= "image of Maggie's resume"
                src= "../images/5-20230Resume.jpg"
            />
        </Layout>
    )
}

export default Resume;