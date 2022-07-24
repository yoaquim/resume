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
        <div className="pb-32">
            <ThemeContext.Provider value={Themes.light}>
                <div className={`grid h-screen place-items-center ${Themes.light.background} text-gray-800`}>
                    <Header/>
                    <WhatImGoodAt/>
                    <Skills/>
                    <Experience/>
                    <Projects/>
                    <Education/>
                </div>
            </ThemeContext.Provider>
        </div>
    )
}

export default Resume
