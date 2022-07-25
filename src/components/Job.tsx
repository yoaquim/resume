import React, {ReactNode, useContext} from 'react'
import ThemeContext, {Theme} from '../context'
import briefcase from '../assets/icon-briefcase-o.svg'
import marker from '../assets/icon-location-o.svg'
import calendar from '../assets/icon-calendar-o.svg'

interface JobProps {
    title: string
    location: string
    workplace: string
    date: string
    children?: ReactNode
}

export default function Job({title, children, location, workplace, date}: JobProps) {
    const Theme: Theme = useContext(ThemeContext)
    const buildingStyle = {height: '25px', width: '25px'}
    const calLocStyle = {height: '18px', width: '18px'}
    const gradientText = `pt-1 lg:ml-2 ml-0.5 font-bold bg-clip-text text-transparent bg-gradient-to-r ${Theme.gradient} uppercase`

    return (
        <div className="col-span-1">
            <div className="lg:flex lg:flex-row">
                <div className="flex flex-row items-center">
                    <img src={briefcase} alt="" style={buildingStyle}/>
                    <h3 className="pt-1 ml-3 uppercase font-bold">{title}</h3>
                </div>

                <div className="flex flex-row items-center mt-2 lg:mt-0">
                    <div className={gradientText}>@ {workplace}</div>
                </div>
            </div>

            <div className="lg:mt-3 lg:flex lg:flex-row mt-2 items-center">
                <div className="flex flex-row items-center">
                    <img src={marker} alt="" style={calLocStyle}/>
                    <div className="ml-2 uppercase font-bold">{location}</div>
                </div>
                <div className="lg:ml-7 mt-2 lg:mt-0 flex flex-row items-center">
                    <img className="" src={calendar} alt="" style={calLocStyle}/>
                    <div className="ml-2 uppercase font-bold">{date}</div>
                </div>
            </div>

            <p className="mt-5 text-justify">{children}</p>
        </div>
    )
}
