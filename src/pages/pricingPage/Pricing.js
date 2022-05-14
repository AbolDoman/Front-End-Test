import React, {useEffect} from 'react';
import Navigation from "../../components/Header/Navigation";

const Pricing = () => {
    useEffect(()=>{
        localStorage.setItem("mainNavigation","true");
    },[]);
    return (
        <>

        </>
    );
};

export default Pricing;