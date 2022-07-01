import * as React from "react";
import Layout from '../components/Layout';
import { Link } from "gatsby";
import {
  gridContainer,
  gridItem
} from '../components/layout.module.css';


const projectPage = () => {
  return (
    <Layout>
      <div className={gridContainer}>
        <div className={gridItem}> </div>
        <div className={gridItem}> </div>
      </div>
    </Layout>
  )
}

export default projectPage;
