import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import Resume_Maggie from '../downloads/Maggie_Resume_1-24.pdf';
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
            <h2 className={heading}>resume <span className={specialText}> updated 01-2024</span></h2>
            <button className={button}><a href={Resume_Maggie} download={true} className={download}><FaFileDownload /> Download as PDF</a></button>
            <StaticImage
                alt= "image of Maggie's resume"
                src= "../images/resume.jpg"
            />
        </Layout>
    )
}

export default Resume;