import React from "react";
import { Link } from 'gatsby';
import Layout from '../components/Layout'
import Head from '../components/Head'

const IndexPage = () => {
    return (
        <Layout>
        <Head title="Home"/>
            <h1>Hello</h1>
            <h2>I'm Kristie, a Linguistics PhD candidate at the University of Texas in Austin, TX </h2>
            <p> <Link to='/contact'>Contact me.</Link></p>
        </Layout>
    )
}

export default IndexPage