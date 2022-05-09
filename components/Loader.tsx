import React from 'react';
import {Typography} from "@material-ui/core";
// @ts-ignore
import styles from '../styles/Loader.module.scss'

const Loader = ({color, children}) => {
    return (
        <div className={styles.loaderContainer}>
            <div className={styles.loader}></div>
            <Typography style={{color:color}} variant="body1">{children}</Typography>
        </div>
    );
};

export default Loader;
