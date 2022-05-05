import React from 'react';
import Navbar from "../components/Navbar";
import {Container} from "@material-ui/core";

const MainLayout: React.FC = ({children}) => {
    return (
        <>
            <Navbar />
            <Container
                style={{
                    marginTop: 90,
                    backgroundColor:'#141e30',
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems: 'center',
                }}>
                {children}
            </Container>
        </>
    );
};

export default MainLayout;
