import React, {useEffect, useState} from 'react';
import Col from "../defaults/Col";
import Row from "../defaults/Row";
import SearchIcon from '@mui/icons-material/Search';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
const NavigationForLoggedUsers = () => {

    const changeInput = (e) =>{
        setInputVal(e.target.value)
    };
    const [inputVal,setInputVal] = useState('');

    useEffect(()=>{
        if(inputVal===''){
            document.getElementById("checkButton").style.display = "none";
        }else{
            document.getElementById("checkButton").style.display = "block";
        }
    },[inputVal]);
    return (
        <>
            <Row style={{zIndex:"10",marginTop : 0,position:"fixed",top:"0",width:"100%",padding : "10px",backgroundColor:"white"}}>
                <Col style={{flex : "4"}}>
                    <Row style={{alignItems : "center"}}>
                        <Col style={{flex:"1",alignItems:"end",marginRight:"20px"}}>
                            <SearchIcon style={{fontSize:"200%",opacity:"50%"}}/>
                        </Col>
                        <Col style={{flex:"4"}}>
                            <input onChange={(e)=>changeInput(e)} value={inputVal} type={"text"} placeholder={"Analyze Any influencer..."} style={{border : "none",outline:"none",height:"40px"}}/>
                        </Col>
                        <Col style={{flex:"1",justifyContent : "row-reverse"}}>
                            <Button variant={"outlined"}
                                    id={"checkButton"}
                                    sx={{
                                        color : "white",
                                        backgroundColor : "#ED6C02",
                                        borderColor : "#ED6C02",
                                        '&:hover' : {
                                            color : "white",
                                            backgroundColor : "#ED6C02",
                                            borderColor : "#ED6C02",
                                        }

                                    }}
                                    style={{marginLeft:"20px"}} >
                                CHECK
                            </Button>
                        </Col>
                        <Col style={{flex:"3"}}>
                        </Col>
                    </Row>
                </Col>
                <Col style={{flex: "4",marginRight : "40px"}}>
                    <Row style={{justifyContent:"flex-end"}}>
                        <div style={{paddingRight:"15px",paddingLeft:"20px"}}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color = {"warning"}
                                sx = {{
                                    textTransform : "capitalize"
                                }}
                            >
                                request demo
                            </Button>
                        </div>
                        <div style={{paddingRight:"15px",paddingLeft:"20px"}}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color = {"warning"}
                                sx = {{
                                    textTransform : "capitalize"
                                }}
                            >
                                upgrade now
                            </Button>
                        </div>
                        <div style={{paddingRight:"15px",paddingLeft:"20px"}}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color = {"warning"}
                                sx = {{
                                    textTransform : "capitalize"
                                }}
                            >
                                no reports
                            </Button>
                        </div>
                    </Row>
                </Col>
            </Row>
            <Divider style={{backgroundColor : "gainsboro"}}/>

        </>
    );
};

export default NavigationForLoggedUsers;