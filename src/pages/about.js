import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout'
import Head from '../components/Head'

const AboutPage = () => {
    return (
        <Layout>
        <Head title="About" />
            <title>About me...</title>
            <p>Hi I'm Kristie!</p>
            <p>I word the best words!</p>
            <p><Link to='/contact'>Want to work with me? Reach out! </Link></p>
            <img alt='boo-boo' width="200" height="200" src={'./boo-boo.png'}></img>
        </Layout>
    )
}

export default AboutPage