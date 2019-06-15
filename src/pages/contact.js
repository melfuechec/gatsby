import React from 'react';
import Layout from '../components/Layout'
import Head from '../components/Head'

const ContactPage = () => {
    return (
        <Layout>
        <Head title="Contact"/>
            <title>Contact me!</title>
            <p>mel.fuechec@gmail.com</p>
            <p>979-541-6701</p>
            <p><a href='https://www.facebook.com/mel.fuechec' target='_blank'>facebook</a></p>
            <p><a href='https://www.linkedin.com/in/mel-fuechec/'>linkedin</a></p>
            <p><a href='https://github.com/melfuechec'>github</a></p>
        </Layout>
    )
}

export default ContactPage