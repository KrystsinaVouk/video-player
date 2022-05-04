import React from 'react';
import Navbar from "../components/Navbar";
import {Container} from "@material-ui/core";

const MainLayout: React.FC = ({children}) => {
    return (
        <>
            <Navbar />
            <Container style={{marginTop: 90, backgroundColor:'#141e30'}}>
                {children}
            </Container>
        </>
    );
};

export default MainLayout;
