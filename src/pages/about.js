import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout'
import Head from '../components/Head'
//import { booboo } from "./boo-boo.png"

const AboutPage = () => {
    return (
        <Layout>
        <Head title="About" />
            <title>About me...</title>
            <p>Hi I'm Kristie!</p>
            <p>I word the best words!</p>
            <p><Link to='/contact'>Want to work with me? Reach out! </Link></p>
            <img alt='boo-boo' width="200" height="200" src={'https://scontent.faus1-1.fna.fbcdn.net/v/t1.0-9/51484159_10201462873710855_4412324322425700352_n.jpg?_nc_cat=109&_nc_oc=AQnQPuYqbrd4z9KULS3MZw8rCKHnszjWSecUmC-63RoXyFtrwdekD12LR4BYzpJlx3qKhoB7KGE4FRQPl6s6SE_O&_nc_ht=scontent.faus1-1.fna&oh=28e2be79ae6bf4841b479c027e9d911a&oe=5D7E0BD0'}></img>
        </Layout>
    )
}

export default AboutPage