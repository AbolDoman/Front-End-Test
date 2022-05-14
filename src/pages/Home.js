import React, {useEffect} from 'react';
import Row from "../components/defaults/Row";
import Col from "../components/defaults/Col";
import Button from "@mui/material/Button";
import DoneIcon from '@mui/icons-material/Done';
import ExploreIcon from '@mui/icons-material/Explore';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import WaterfallChartIcon from '@mui/icons-material/WaterfallChart';
import BiotechIcon from '@mui/icons-material/Biotech';
import Navigation from "../components/Header/Navigation";

const influMarketingSteps = [

    {
        name : "Discover Influencers",
        description : "Discover influencers with the audiences you need within a 50.5M+ database",
        steps : ["50.5M+ database","Audience Quality filters","Demographic search"],
        stepLogo : <ExploreIcon style={{flex : "1",color : "#26A9E9"}}/>,
    },
    {
        name : "Analyze Accounts",
        description : "Over 35 in-depth metrics to analyse Instagram, YouTube, Twitter and TikTok influencers",
        steps : ["Audience Demographics","Fraud Detection","Brand Affinity"],
        stepLogo : <InsertChartIcon style={{flex : "1",color : "#26A9E9"}}/>,
    },
    {
        name : "Manage Campaigns",
        description : "Manage and monitor your influencer marketing campaigns",
        steps : ["50.5M+ database","Audience Quality filters","Demographic search"],
        stepLogo : <WaterfallChartIcon style={{flex : "1",color : "#26A9E9"}}/>,
    },
    {
        name : "Explore Markets",
        description : "Discover influencers with the audiences you need within a 50.5M+ database",
        steps : ["50.5M+ database","Audience Quality filters","Demographic search"],
        stepLogo : <BiotechIcon style={{flex : "1",color : "#26A9E9"}}/>,
    },

];
const Home = () => {
    useEffect(()=>{
        localStorage.setItem("mainNavigation","true");

    },[]);

    return (
        <>
            <Col style={{marginTop:"5rem"}}>
                <Row style={{justifyContent : "center",alignItems:"end"}}>
                    <img src={"images/twitch.png"} alt={"twitchLogo"} style={{position:"relative",bottom:"10px",marginLeft: "20px",width : "70px",height:"70px"}}/>
                    <img src={"images/youtube.png"} alt={"twitchLogo"} style={{position:"relative",bottom:"20px",marginLeft: "20px",width : "60px",height:"60px"}}/>
                    <img src={"images/instagram.png"} alt={"twitchLogo"} style={{marginLeft: "20px",width : "100px",height:"100px"}}/>
                    <img src={"images/twitter.png"} alt={"twitchLogo"} style={{position:"relative",bottom:"20px",marginLeft: "20px",width : "60px",height:"60px"}}/>
                    <img src={"images/tiktok.png"} alt={"twitchLogo"} style={{position:"relative",bottom:"10px",marginLeft: "20px",width : "70px",height:"70px"}}/>
                </Row>
                <Row>
                    <Col  style={{flex:"1"}}>

                    </Col>
                    <Col style={{flex:"3"}}>
                        <h1 style={{textAlign:"center",opacity:"70%"}}>
                            All-in-one solution to empower your<br />
                            influencer marketing
                        </h1>
                        <p style={{textAlign:"center",opacity:"70%"}}>Manage the full lifecycle of your influencer marketing campaigns.</p>
                        <Row style={{justifyContent: "space-around"}}>
                            <span style={{backgroundColor:"white",padding:"10px",opacity:"90%",marginLeft:"20px",borderRadius:"10%",cursor:"pointer"}} >Influencer Analytics</span>
                            <span style={{backgroundColor:"white",padding:"10px",opacity:"90%",marginLeft:"20px",borderRadius:"10%",cursor:"pointer"}} >Influencer Discovery</span>
                            <span style={{backgroundColor:"white",padding:"10px",opacity:"90%",marginLeft:"20px",borderRadius:"10%",cursor:"pointer"}} >Campaign Management</span>
                        </Row>
                        <Row style={{marginTop : "10px",justifyContent: "space-around"}}>
                            <span style={{backgroundColor:"white",padding:"10px",opacity:"90%",marginLeft:"20px",borderRadius:"10%",cursor:"pointer"}} >Media Plans</span>
                            <span style={{backgroundColor:"white",padding:"10px",opacity:"90%",marginLeft:"20px",borderRadius:"10%",cursor:"pointer"}} >Trends & Rankings</span>
                            <span style={{backgroundColor:"white",padding:"10px",opacity:"90%",marginLeft:"20px",borderRadius:"10%",cursor:"pointer"}} >Competitor Analysis</span>
                            <span style={{backgroundColor:"white",padding:"10px",opacity:"90%",marginLeft:"20px",borderRadius:"10%",cursor:"pointer"}} >Market Landscape</span>
                        </Row>
                        <Row flex style={{marginTop:"10px"}}>
                            <Col flex={1}/>
                            <Col flex={2}>
                                <Button variant={"outlined"} color={"warning"} style={{marginLeft:"20px"}} >
                                    CHECK INFLUENCER
                                </Button>
                            </Col>
                            <Col flex={2} style={{marginLeft : "10px"}}>
                                <Button variant={"contained"} color={"warning"} style={{marginLeft:"10px"}} >
                                    get started free
                                </Button>
                            </Col>
                            <Col flex={1}/>
                        </Row>
                    </Col>
                    <Col style={{flex:"1"}}>
                        <div style={{marginRight:"10px",opacity:"85%",fontSize:"95%",backgroundColor:"white",padding:"20px",width:"220px",height:"60px",borderRadius:"10% 10% 0 0"}}>
                            Learn the latest influencer<br />  marketing trends and <br /> insights?
                        </div>
                        <div style={{marginRight:"10px",opacity:"85%",fontSize:"95%",cursor:"pointer",backgroundColor:"white",padding:"20px",width:"220px",height:"20px",borderRadius:"0 0 10% 10%"}}>
                            <span style={{color : "#ED6C02",fontWeight:"bold"}}>Get Report</span>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{opacity:"70%",cursor:"pointer"}}>no,thanks</span>
                        </div>
                    </Col>
                </Row>
                <Row style={{justifyContent : "center",marginTop : "100px"}}>
                    <h1 style={{textAlign :"center",opacity : "75%",fontSize:"250%"}}>A full stack of solutions at every step of influencer<br /> marketing workflow:</h1>
                </Row>

                <Row style={{justifyContent : "space-around",marginTop : "20px"}}>
                    {
                        influMarketingSteps.map(item=>{
                            return(
                                <Col flex={1} style={{height : "435px",maxWidth : "250px",backgroundColor:"white",borderRadius:"5%",padding:"20px"}}>
                                    <Row>
                                        <div style={{flex:"2",fontSize : "140%",opacity : "90%",marginBottom : "20px",fontWeight : "bold"}}>{item.name}</div>
                                        {item.stepLogo}
                                    </Row>
                                    <div style={{marginBottom : "40px"}}>{item.description}</div>
                                    {item.steps.map(item=>{
                                        return(
                                            <div style={{marginBottom : "5px",fontSize: "90%"}}><DoneIcon fontSize={"80%"} style={{color : "green",marginRight : "5px"}}/>{item}</div>
                                        )
                                    })}
                                    <Col style={{alignItems:"center"}}>
                                        <Button variant={"contained"} color={"warning"} style={{width : "80%",fontSize : "80%",marginTop:"80px"}} >
                                            get started free
                                        </Button>
                                        <Button variant={"outlined"} color={"warning"} style={{width : "80%",fontSize : "80%",marginTop : "10px"}} >
                                            CHECK INFLUENCER
                                        </Button>
                                        <div style={{opacity : "90%",marginTop:"15px",fonSize:"70%",cursor:"pointer"}}>LEARN MORE</div>
                                    </Col>
                                </Col>
                            )
                        })
                    }
                </Row>
                <Row style={{justifyContent : "center",marginTop : "100px"}}>
                    <div style={{textAlign : "center"}}>ANALYTICAL REPORTS</div>
                    <h1 style={{textAlign :"center",opacity : "75%",fontSize:"250%"}}>Get a best-in-class analytical report of any<br /> Instagram, YouTube, TikTok, Twitter or Twitch<br /> account</h1>
                </Row>


            </Col>

        </>

    );
};

export default Home;