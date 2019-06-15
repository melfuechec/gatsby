import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout'
import Head from '../components/Head'

const AboutPage = () => {
    return (
        <Layout>
        <Head title="About" />
            <title>About me!</title>
            <p>Hi I'm mel!</p>
            <p>I'm learning Gatsby!</p>
            <p><Link to='/contact'>Want to work with me? Reach out! </Link></p>
        </Layout>
    )
}

export default AboutPage