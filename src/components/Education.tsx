import React, {useContext} from 'react'
import Section from './Section'
import graduate from '../assets/icon-graduate-o.svg'
import calendar from '../assets/icon-calendar-o.svg'
import ThemeContext, {Theme} from '../context'

export default function Education() {
    const Theme: Theme = useContext(ThemeContext)
    const iconStyle = {height: '25px', width: '25px'}
    const calStyle = {height: '18px', width: '18px'}
    const gradientText = `ml-2 font-bold bg-clip-text text-transparent bg-gradient-to-r ${Theme.gradient} uppercase`

    return (
        <Section title="Education">
            <div className="col-span-1">
                <div className="flex flex-row justify-items-center">
                    <img src={graduate} alt="" style={iconStyle}/>
                    <h3 className="ml-3 uppercase font-bold">University of Puerto Rico at Mayagüez —</h3>
                    <div className={gradientText}>B.S. Computer Engineering</div>
                </div>

                <div className="mt-3 flex flex-row items-center">
                    <img className="ml-1" src={calendar} alt="" style={calStyle}/>
                    <div className="ml-4 uppercase font-bold">05.2014</div>
                </div>
            </div>
        </Section>
    )
}

