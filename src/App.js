import React from "react";
import './styles.css'
import Navigation from "./components/Header/Navigation";
import {Route,Routes,BrowserRouter as Router,Navigate} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home";
import Pricing from "./pages/pricingPage/Pricing";
import Layout from "./components/layout/Layout";
import LoginAndRegister from "./pages/login/LoginAndRegister";
import {ToastContainer} from "react-toastify";
import InfluencerInstagramPage from "./pages/instagramPages/InfluencerInstagramPage";

function App() {
    const f = () =>{
        return(
            <Layout>
                <Routes>
                    <Route path={"/"} element={<Home/>} />
                    <Route path={"/pricing/"} element={<Pricing/>} />
                    <Route path={"/instagram/:username"} element={<InfluencerInstagramPage/>} />

                </Routes>
            </Layout>
        )
    };
  return (
    <div className="App" >
        <Router>
            <Routes>
                <Route path={"*"} element={<PrivateRoute>{f()}</PrivateRoute>} />
                <Route path={"/login"} element={<PublicRoute><LoginAndRegister/></PublicRoute>} />
            </Routes>
        </Router>
        <ToastContainer />
    </div>
  );
}


const isLogin = !!localStorage.getItem("x-auth-token");
const PrivateRoute = (props) =>{
    if(!isLogin){
        return <Navigate to={"/login"} />
    }else{
        return props.children
    }
};
const PublicRoute = (props) =>{
    if(isLogin){
        return <Navigate to={"/"} />
    }else{
        return props.children
    }
};
export default App;

