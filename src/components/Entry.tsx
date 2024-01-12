import React from 'react'

interface Properties {
    title: string
    detail: string
    subtitle: string
    location?: string
    children?: React.ReactNode
}

export default function Entry({title, detail, subtitle, location, children}: Properties) {
    return (
        <div className="space-y-3 font-rubik text-stone">
            <div>
                <div className="flex">
                    <div className="flex flex-grow font-medium text-xl">{title}</div>
                    <div className="font-regular">{detail}</div>
                </div>

                <div className="flex">
                    <div className="flex flex-grow font-medium text-xl text-light-green">{subtitle}</div>
                    <div className="font-regular">{location}</div>
                </div>
            </div>
            {children &&
                <div className="font-light space-y-1">
                    {children}
                </div>
            }
        </div>
    )
}