import React from 'react';
import Navigation from "../Header/Navigation";
import '../../styles.css'
import {useLocation} from "react-router-dom";
import NavigationForLoggedUsers from "../Header2/NavigationForLoggedUsers";
const Layout = (props) => {
    const loc = useLocation();
    return (
        <>
            {!(loc.pathname==="/" || loc.pathname==="/pricing") && <NavigationForLoggedUsers/>}
            {(loc.pathname==="/" || loc.pathname==="/pricing") && <Navigation/>}
            <div className={"layOutContainer"}>
                {props.children}
            </div>
        </>
    );
};

export default Layout;