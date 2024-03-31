import React from "react";

import './Home.scss';

import Page from "../../components/Page/Page";

export default function Home(): React.ReactElement {
    return (
        <Page id="home-page">
            <h1>Welcome Back!</h1>
        </Page>
    );
}