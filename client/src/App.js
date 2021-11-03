import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
// import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";
import "../src/App.css"
import{ MyNavBar } from './components/MyNavBar';
import MobileNavbar from './components/MobileNavbar';
import { UpNavbarMobile } from './components/UpNavbarMobile';
import { Footer } from './components/Footer';

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    const gserg = [12, 423, 2, 123, 5234523, 12312, 12, 423, 2, 123, 5234523, 12312, 12, 423, 2, 123, 5234523, 12312, 12, 423, 2, 123, 5234523, 12312, 12, 423, 2, 123, 5234523, 12312,]

    useEffect(() => {
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Spinner animation={"grow"}/>
    }

    return (
        <BrowserRouter>
            <UpNavbarMobile/>
            <MyNavBar/>
            <AppRouter />
            <MobileNavbar/>
            <Footer/>
        </BrowserRouter>
    );
});

export default App;
