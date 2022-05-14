import React, {useEffect} from 'react';
import Row from "../defaults/Row";
import Col from "../defaults/Col";
import SearchIcon from '@mui/icons-material/Search';
import ListOfHeader from "./components/ListOfHeader";
import Button from "@mui/material/Button";
import {Link} from 'react-router-dom';
const Navigation = () => {
    window.onscroll = () =>{
        if(document.documentElement.scrollTop > 0){
            document.getElementsByClassName("navigationContainer")[0].style.backgroundColor = "white";
            document.getElementsByClassName("navigationContainer")[0].style.position = "fixed";
            document.getElementsByClassName("navigationContainer")[0].style.top = "0";
            document.getElementsByClassName("navigationContainer")[0].style.zIndex = "10";
        }
        else{
            document.getElementsByClassName("navigationContainer")[0].style.backgroundColor = "unset";

        }
    };
    const redirectToLoginPage =()=>{
        localStorage.clear();
        localStorage.setItem("L-OR-R","L");
        window.location.reload();
    };
    const redirectToSignUpPage =()=>{
        localStorage.clear();
        localStorage.setItem("L-OR-R","R");
        window.location.reload();

    };
    const isLogin = !(!localStorage.getItem("x-auth-token") || localStorage.getItem("x-auth-token")==="visitDemoLogin")
    return (
        <Row className={"navigationContainer"} style={{alignItems: "center",width : "100%",padding : "0 15px"}}>
            <Col>
                <Link to={"/"}>
                    <img src={"/images/logo/logo.svg"} alt={"App-Logo"}/>
                </Link>
            </Col>

            <Col style={{width:"300px",height : "40px",backgroundColor : "white",marginLeft:"50px",borderRadius:"5%",border:"1px solid gainsboro"}}>
                <Row alignItems={"center"} style={{padding : "5px"}}>
                    <input type={"text"} placeholder={"Analyze Any influencer..."} style={{border : "none",outline:"none",width:"280px"}}/>
                    <SearchIcon style={{padding : "5px",cursor : "pointer",opacity:"70%"}}/>
                </Row>
            </Col>
            <Col>
                <ListOfHeader />
            </Col>
            <Row flex style={{marginLeft : "10px"}}>
                <Col >
                    {!isLogin && <Button onClick={()=>redirectToLoginPage()} variant={"outlined"} color={"warning"} style={{marginLeft:"20px"}} >
                        Log in
                    </Button>}
                    {isLogin && <Button variant={"outlined"} color={"warning"} style={{marginLeft:"20px",margin:"0 auto"}} >
                        request demo
                    </Button>}

                </Col>
                <Col flex={1} style={{marginLeft : "10px"}}>
                   {!isLogin && <Button onClick={()=>redirectToSignUpPage()} variant={"contained"} color={"warning"} style={{marginLeft:"10px",marginRight:"30px",fontSize:"80%"}} >
                        get started free
                    </Button>}
                   {isLogin && <Button variant={"contained"} color={"warning"} style={{marginLeft:"10px",marginRight:"30px",fontSize:"80%"}} >
                        dashboard
                    </Button>}

                </Col>
            </Row>
        </Row>
    );
};

export default Navigation;
