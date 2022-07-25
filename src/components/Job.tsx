import React, {ReactNode, useContext} from 'react'
import briefcase from '../assets/icon-briefcase-o.svg'
import marker from '../assets/icon-location-o.svg'
import calendar from '../assets/icon-calendar-o.svg'
import minus from '../assets/icon-minus-o.svg'
import ThemeContext, {Theme} from '../context'

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

                <div className="flex flex-row items-center">
                    <div className={gradientText}>@ {workplace}</div>
                </div>
            </div>

            <div className="mt-3 flex flex-row items-center">
                <img src={marker} alt="" style={calLocStyle}/>
                <div className="ml-2 uppercase font-bold">{location}</div>
                <img className="ml-7" src={calendar} alt="" style={calLocStyle}/>
                <div className="ml-2 uppercase font-bold">{date}</div>
            </div>

            <p className="mt-5 text-justify">{children}</p>
        </div>
    )
}

export function JobHighlight({text}: { text: string }) {
    const style = {height: '15px', width: '15px'}
    return (
        <div className="mt-1 flex flex-row items-center">
            <img src={minus} alt="" style={style}/>
            <p className="ml-3">{text}</p>
        </div>
    )
}