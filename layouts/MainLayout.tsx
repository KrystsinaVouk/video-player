import React from 'react';
import Navbar from "../components/Navbar";
import {Grid} from "@material-ui/core";
import Head from "next/head";
// @ts-ignore
import styles from "../styles/MainLayout.module.scss"

interface MainLayoutProps {
    title?: string;
    description?: string;
    keywords?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({children, title, description, keywords}) => {
    return (
        <>
            <Head>
                <title>{title || `Better Software Group`}</title>
                <meta name="description" content={`Video platform. Here you can watch videos provided by Better Software Group.` + description}/>
                <meta name="robots" content="index, follow"/>
                <meta name="keywords" content={keywords || "Videos, player, React"}/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <Navbar />
            <Grid className={styles.mainGrid}>
                {children}
            </Grid>
        </>
    );
};

export default MainLayout;
