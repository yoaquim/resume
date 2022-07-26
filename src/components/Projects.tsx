import React, {useContext, useState} from 'react'
import Section from './Section'
import opensource from '../assets/icon-opensource-o.svg'
import dots from '../assets/icon-dots-grid-o.svg'
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
            <div className="lg:grid-cols-2 lg:mb-0 grid gap-20">
                {/*-------------------- ZEMI --------------------*/}
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
                                I wanted to build zemi because I believe in declarative programming: provide a JSON, get functionality.
                                zemi is a data-driven and reverse-routing library for Express.
                                It provides OpenAPI support, allowing the user to specify
                                and autogenerate an OpenAPI spec. Fully built from the ground-up with Typescript,
                                tests, code maintainability, CI/CD pipelines, documentation, and more.
                            </p>
                            <br/>
                            <Highlight text="Declarative, data-driven configuration" withMargin={false}/>
                            <Highlight text="Recursive library"/>
                            <Highlight text="100% code coverage"/>
                            <Highlight text="Grade A, Codeclimate Maintainability "/>
                            <Highlight text="Fully documented"/>
                            <Highlight text="Offloads handling: user has total control over route functionality"/>
                        </div>
                    </div>
                </div>
                {/*-------------------- /ZEMI/ --------------------*/}

                {/*-------------------- SANDBOXES --------------------*/}
                <div className="col-span-1">
                    <div className="flex flex-row items-center">
                        <img src={dots} alt="" style={iconStyle}/>
                        <h3 className="ml-3 uppercase font-bold">Sandboxes</h3>
                    </div>

                    <div className="mt-3 flex flex-row items-center">
                        <img className="ml-1" src={calendar} alt="" style={calStyle}/>
                        <div className="ml-4 uppercase font-bold">01.2021</div>
                    </div>

                    <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <p className="mt-5 text-justify">
                                At Attune, I designed, implemented, and grew an internal product we referred to as "Sandboxes".
                                Sandboxes allowed each employee, via a UI, to spin up a controlled copy of our production environment.
                                Each Sandbox could run it's own version of each service in our stack. This turbocharged our testing: it allowed
                                anyone to test anything and everything, in an as-close-as-you-can-get copy of production.
                            </p>
                            <br/>
                            <Highlight text="Dynamic environments meant you could spin up envs on-demand "/>
                            <Highlight text="Rapid testing tool: Product Owners could test changes ASAP, and with high confidence "/>
                            <Highlight text="Graphical Interface made using easy, especially for non-tech stakeholders"/>
                            <Highlight text="Ability to deploy any service's (e.g. api, frontend) Git branch to a given Sandbox"/>
                            <Highlight text="Each Sandbox user had their own link, which mapped to their own cloud space"/>
                            <Highlight text="Powered by Terraform, NodeJS, and AWS"/>
                        </div>
                    </div>
                </div>
                {/*-------------------- /SANDBOXES/ --------------------*/}

            </div>
        </Section>
    )
}

