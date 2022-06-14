import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import Resume_pdf from '../downloads/Resume_pdf.pdf';
import {
    specialText,
    heading,
    download,
    button
    } from '../components/layout.module.css';

const Resume = () => {
    return (
        <Layout>
            <h2 className={heading}>resume <span className={specialText}> updated 06-2022</span></h2>
            <button className={button}><a href={Resume_pdf} download={true} className={download}>Download as PDF</a>
            </button>
            <StaticImage
                alt= "image of Maggie's resume"
                src= "../images/resume.jpg"
            />
        </Layout>
    )
}

export default Resume;