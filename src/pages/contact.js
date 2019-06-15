import React from 'react';
import Layout from '../components/Layout'
import Head from '../components/Head'

const ContactPage = () => {
    return (
        <Layout>
        <Head title="Contact"/>
            <title>Contact me!</title>
            <p>email</p>
            <p>phone number</p>
            <p><a href='https://www.facebook.com/kristie.denlinger' target='_blank'>Facebook</a></p>
            <p><a href='https://www.instagram.com/kdenlin/' target='_blank'>Instagram</a></p>
        </Layout>
    )
}

export default ContactPage