import React from 'react';
import MainNavBar from '../components/MainNavBar';
import {Link} from "react-router-dom"


export default function Skills() {
    return (
        <>
        <MainNavBar />
            <section class="">
              <p>Listed below are my skills:</p>
              <ul>
                <li><img src="" alt="Html and CSS" />HTML and CSS</li>
                <li><img src="" alt="JavaScript" />JavaScript</li>
                <li><img src="" alt="React" />React.js</li>
                <li><img src="" alt="Python" />Python Programming</li>
                <li><img src="" alt="Flask" />Flask (Python)</li>
                <li><img src="" alt="Django Rest" />Django Rest Framework</li>
                <li><img src="" alt="FastApi" />FastApi</li>
              </ul>
            </section>
        </>
    )
}


