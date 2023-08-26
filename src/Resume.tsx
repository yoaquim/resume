import React from 'react'
import Education from './components/Education'
import Experience from './components/Experience'
import Header from './components/Header'
import Projects from './components/Projects'
import Skills from './components/Skills'
import WhatImGoodAt from './components/WhatImGoodAt'
import PrintBanner from './components/PrintBanner'
import mixpanel from 'mixpanel-browser'
import ThemeContext, { Themes } from './context'

function Resume() {

    mixpanel.init('967772639ff06d979a760099b3066fe5', {debug: false, track_pageview: true, persistence: 'localStorage'})
    mixpanel.track('PAGE_VIEW')

    const Resume = <div className={`lg:pb-24 pb-20 pt-8 grid place-items-center ${Themes.light.background} text-gray-600`}>
        <Header/>
        <WhatImGoodAt/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Education/>
    </div>

    return (
        <ThemeContext.Provider value={Themes.light}>
            {Resume}
            <PrintBanner/>
        </ThemeContext.Provider>
    )
}

export default Resume
