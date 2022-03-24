import React from 'react'
import { Route } from "react-router-dom";
import Navigation from './components/Navigation';



export default function HomeTemplate(props: any) {
    const { Component, ...resProps } = props;


    return (

        <Route {...resProps} render={(propRoute: any) => {
            return <div>
                {/* navigation */}

                <Navigation />
                {/* main content  */}
                
                <Component {...propRoute} />

            </div>
        }} ></Route>

    )
}
