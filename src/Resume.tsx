import React from 'react'
import Education from './components/Education'
import Experience from './components/Experience'
import Header from './components/Header'
import Projects from './components/Projects'
import Skills from './components/Skills'
import WhatImGoodAt from './components/WhatImGoodAt'
import ThemeContext, {Themes} from './context'

function Resume() {
    return (
        <ThemeContext.Provider value={Themes.light}>
            <div className={`pb-20 pt-8 grid place-items-center ${Themes.light.background} text-gray-600`}>
                <Header/>
                <WhatImGoodAt/>
                <Skills/>
                <Experience/>
                <Projects/>
                <Education/>
            </div>
        </ThemeContext.Provider>
    )
}

export default Resume
