import React from 'react';
// @ts-ignore
import styles from '../styles/Loader.module.scss'
import {Typography} from "@material-ui/core";

const Loader = ({color, children}) => {
    return (
        <div className={styles.loaderContainer}>
            <div className={styles.loader}></div>
            <Typography style={{color:color}} variant={'body1'}>{children}</Typography>
        </div>
    );
};

export default Loader;
