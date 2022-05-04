import React from "react";
import {Button, FormControl, Grid, TextField} from "@material-ui/core";
// @ts-ignore
import styles from '../styles/Login.module.scss'
import {useLogin} from "../hooks/useLogin";

const Login = () => {

    const {username, password, errorText, isDisabled, login} = useLogin();

    return (
        <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"}>
            <FormControl className={styles.form}>
                <h1>Login Page</h1>
                <TextField
                    {...username}
                    fullWidth
                    margin={'dense'}
                    error={!!errorText}
                    helperText={errorText}
                    label={"Username"}
                    color="secondary"
                    variant="filled"
                    className={styles.field}
                />
                <TextField
                    {...password}
                    fullWidth
                    margin={'dense'}
                    error={!!errorText}
                    helperText={errorText}
                    label={"Password"}
                    color="secondary"
                    type={'password'}
                    variant="filled"
                    className={styles.field}
                />
                <Grid container justifyContent="flex-end" className={styles.gridBtn}>
                    <Button disabled={isDisabled} className={styles.btnLogin} variant={'outlined'}
                            onClick={login}>Login</Button>
                </Grid>
            </FormControl>
        </Grid>
    );
}

export default Login;
