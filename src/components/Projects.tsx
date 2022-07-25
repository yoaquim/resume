import React, {useContext, useState} from 'react'
import Section from './Section'
import opensource from '../assets/icon-opensource-o.svg'
import calendar from '../assets/icon-calendar-o.svg'
import Highlight from './Highlight'
import ThemeContext, {Theme} from '../context'

export default function Projects() {
    const Theme: Theme = useContext(ThemeContext)
    const iconStyle = {height: '25px', width: '25px'}
    const calStyle = {height: '18px', width: '18px'}
    const [hovered, setHovered] = useState<boolean>(false)

    return (
        <Section title="Projects">
            <div className="col-span-1">
                <div className="flex flex-row items-center">
                    <img src={opensource} alt="" style={iconStyle}/>
                    <a href="https://github.com/yoaquim/zemi" target="_blank" rel="noreferrer"
                       onMouseEnter={() => setHovered(true)}
                       onMouseLeave={() => setHovered(false)}>
                        <h3 className="ml-3 uppercase font-bold">zemi</h3>
                        <div className={`ml-2 bg-gradient-to-r ${hovered ? Theme.gradient : ''} h-0.5 rounded w-full`}></div>
                    </a>
                </div>


                <div className="mt-3 flex flex-row items-center">
                    <img className="ml-1" src={calendar} alt="" style={calStyle}/>
                    <div className="ml-4 uppercase font-bold">07.2022</div>
                </div>

                <div className="grid grid-cols-1">
                    <div className="col-span-1">
                        <p className="mt-5 text-justify">
                            zemi is a data-driven and reverse-routing library for Express.
                            It provides OpenAPI support, allowing the user to specify
                            and autogenerate an OpenAPI spec. Fully built from the ground-up with Typescript,
                            tests, code maintainability, CI/CD pipelines, documentation, and more.
                        </p>
                        <br/>
                        <Highlight text="Recursive library" withMargin={false}/>
                        <Highlight text="100% code coverage"/>
                        <Highlight text="Grade A, Codeclimate Maintainability "/>
                        <Highlight text="Fully documented"/>
                    </div>
                </div>
            </div>
        </Section>
    )
}

