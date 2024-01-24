import React from 'react'
import mixpanel from 'mixpanel-browser'
import Header from './components/Header'
import Summary from './components/Summary'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Strengths from './components/Strengths'
import Skills from './components/Skills'
import me from './assets/me-2022.png'
// @ts-ignore
import pdf from './docs/yoaquim-cintron.pdf'

function Resume() {

    mixpanel.init('967772639ff06d979a760099b3066fe5', {debug: false, track_pageview: false, persistence: 'localStorage'})
    mixpanel.track('page-view')

    return (
        <div className="w-screen flex flex-col lg:flex-row overflow-y-auto">
            {/*------------------MAIN------------------*/}
            <div className="w-full lg:w-3/4 h-full pb-10 pt-4 px-10 lg:px-32 bg-white">
                <div className="pt-16"><Header/></div>
                <div className="mt-28 pb-16 space-y-20">
                    <Summary/>
                    <Experience/>
                    <Education/>
                    <Projects/>
                </div>
            </div>

            {/*------------------SIDEBAR------------------*/}
            <div className="w-full lg:w-1/4 pb-20 bg-aqua font-inter font-light text-white">
                <div className="w-full h-8 bg-dark-green"/>

                <div className="pt-8 flex justify-center">
                    <img src={me} className="h-52 object-contain rounded-lg" alt="yoaquim_cintron"/>
                </div>

                <div className="pt-11 px-14 space-y-20">
                    <Achievements/>
                    <Strengths/>
                    <Skills/>
                </div>

            </div>

            <a href={pdf} rel="noreferrer" target="_blank" className="fixed bottom-0 w-screen h-10 py-2 bg-dark-green font-rubik text-white text-center cursor-pointer">
                DOWNLOAD THIS RESUME
            </a>
        </div>
    )
}

export default Resume
