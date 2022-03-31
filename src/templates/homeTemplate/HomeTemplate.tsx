import React from 'react'
import { Route } from "react-router-dom";
import Header from './components/Header';
import Navigation from './components/Navigation';



export default function HomeTemplate(props: any) {
    const { Component, ...resProps } = props;


    return (

        <Route {...resProps} render={(propRoute: any) => {
            return <div>
                {/* navigation */}
                <Navigation />
                <Header/>
                {/* main content  */}
                <Component {...propRoute} />

            </div>
        }} ></Route>

    )
}
