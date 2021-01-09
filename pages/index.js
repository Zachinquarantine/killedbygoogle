import Head from 'next/head';
import { Component } from 'react';

// Components
import Header from '../components/Header';
import App from '../components/App';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

export default class HomePage extends Component {

    analytics() {
        if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined' )
            return (<script async defer data-website-id="3aa5ec3a-fd12-47f1-97d7-cceb0631cae4" src="https://analytics.bale.media/umami.js"></script>);
    }

    render() {
        return (
            <>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5" />
                    <meta name="description" content="What's dead in tech is a site that tracks the latest deprecated and dead products by major tech companies." />
                    <link rel="shortcut icon" href="favicon.png" />
                    <title>What's Dead in Tech?</title>
                    <meta name="theme-color" content="#FAFAFA" />
                    <link rel="canonical" href="link" />
                    <meta itemProp="name" content="What's Dead in Tech?" />
                    <meta itemProp="description" content="What's dead in tech is a site that tracks the latest deprecated and dead products by major tech companies." />
                    <meta name="og:title" property="og:title" content="What's Dead in Tech?" />
                    <meta name="og:url" property="og:url" content="link" />
                    <meta name="og:description" property="og:description" content="What's dead in tech is a site that tracks the latest deprecated and dead products by major tech companies." />
                    <meta name="og:type" property="og:type" content="website" />
                    <meta name="author" content="Zachinquarantine" />                    
                    <script id="mcjs" src="chimp.js"></script>
                    {this.analytics()}
                </Head>
                <Header />
                <App />
                <Footer />
                {this.card()}
            </>
        );
    }
}
