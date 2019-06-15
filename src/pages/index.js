import React from "react";
import { Link } from 'gatsby';
import Layout from '../components/Layout'
import Head from '../components/Head'

const IndexPage = () => {
    return (
        <Layout>
        <Head title="Home"/>
            <h1>Hello</h1>
            <h2>I'm mel, a full stack developer in Austin, Tx</h2>
            <p>Need a developer? <Link to='/contact'>Contact me.</Link></p>
        </Layout>
    )
}

export default IndexPage