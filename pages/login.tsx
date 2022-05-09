import React, {useEffect} from "react";
import {Button, FormControl, Grid, TextField, Typography} from "@material-ui/core";
import {useLogin} from "../hooks/useLogin";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useRouter} from "next/router";
// @ts-ignore
import styles from "../styles/Login.module.scss"

const Login: React.FC = () => {

    const { username, password, errorText, isDisabled, login } = useLogin();
    const { user, error } = useTypedSelector(state => state.user)
    const { push } = useRouter();

    useEffect(()=> {
        if (user) {
            push("/");
        }
    }, [])

    if (error) {
        return <Typography color="secondary" variant="h5">{error}</Typography>
    }
    return (
        <Grid container direction="column" justifyContent="center" alignItems="center">
            <FormControl className={styles.form}>
                <Typography variant="h5">Login</Typography>
                <TextField
                    {...username}
                    fullWidth
                    margin="dense"
                    error={!!errorText}
                    helperText={errorText}
                    label="Username"
                    color="secondary"
                    variant="filled"
                    className={styles.field}
                />
                <TextField
                    {...password}
                    fullWidth
                    margin="dense"
                    error={!!errorText}
                    helperText={errorText}
                    label="Password"
                    color="secondary"
                    type="password"
                    variant="filled"
                    className={styles.field}
                />
                <Grid container justifyContent="flex-end" className={styles.gridBtn}>
                    <Button
                        className={styles.btnLogin}
                        disabled={isDisabled}
                        variant="outlined"
                        onClick={login}
                    >
                        Login
                    </Button>
                </Grid>
            </FormControl>
        </Grid>
    );
}

export default Login;
