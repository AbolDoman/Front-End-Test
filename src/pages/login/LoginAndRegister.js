import React, {useEffect, useState} from 'react';
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./styles.css"
// import {useStyles} from "./styles";
import Login from "./Login";
import Register from "./Register";
import Button from "@mui/material/Button";
import {toast} from "react-toastify";
import {useHypeState} from "../../context/HypeContext";
// import {useTranslation} from "react-i18next";

const LOGIN_TAB_VALUE = 1;
const REGISTER_TAB_VALUE = 2 ;

const LoginAndRegister = () => {
    // const {t} = useTranslation();
    // const classes = useStyles();


    const [value,setValue]= useState(localStorage.getItem("L-OR-R") ? localStorage.getItem("L-OR-R")==="L" ?1:2 :2);

    const handleChange = () => {
        if(value === LOGIN_TAB_VALUE) {
            setValue(REGISTER_TAB_VALUE)
        }else{
            setValue(LOGIN_TAB_VALUE)
        }
    };
    const visitDemo = () =>{
        localStorage.setItem("x-auth-token","visitDemoLogin");
        window.location.reload();
    };
    return (
        <div className={"loginRoot"}>

            <Paper className={"header"}>
                <Tabs value={value} TabIndicatorProps={{style: {background:'#ED6C02'}}} onChange={handleChange} aria-label="login and register tabs">
                    <Tab className={"LRBtn"} value={LOGIN_TAB_VALUE} label="logIn" style={{color : "#ED6C02"}} wrapped/>
                    <Tab className={"LRBtn"} value={REGISTER_TAB_VALUE} style={{color : "#ED6C02"}} label="register" />
                </Tabs>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color = "warning"
                    sx={{ mt: 3, mb: 2 }}
                    style={{marginTop : "50px"}}
                    onClick = {()=>visitDemo()}
                >
                    visit demo
                </Button>
                {value === LOGIN_TAB_VALUE &&
                 <Login render={handleChange}/>
                }
                {value === REGISTER_TAB_VALUE &&
                <Register render={handleChange}/>
                }
            </Paper>
        </div>
    );
};
export default LoginAndRegister;