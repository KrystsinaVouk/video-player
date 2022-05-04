import '@fontsource/roboto/400.css';
import '../styles/global.scss';

import React, {FC} from 'react';
import {AppProps} from 'next/app';
import {wrapper} from "../store";
import {AppWrapper} from "../components/AppWrapper";

const WrappedApp: FC<AppProps> = ({Component, pageProps}) => (
    <AppWrapper>
        <Component {...pageProps} />
    </AppWrapper>
);

export default wrapper.withRedux(WrappedApp);
