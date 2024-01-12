import SectionTitle from './SectionTitle'
import Entry from './Entry'
import React from 'react'

export default function Education() {
    return (
        <div className="">
            <SectionTitle title="EDUCATION"/>
            <div className="mt-4">
                <Entry
                    title="B.Sc. Computer Engineering"
                    detail="2007-2014"
                    subtitle="University of Puerto Rico at Mayagüez"
                    location="Puerto Rico"/>
            </div>
        </div>
    )
}