import React, {ReactNode, useContext} from 'react'
import ThemeContext, {Theme} from '../context'

export default function Section({title, children}: { title: string, children?: ReactNode }) {
    const Theme: Theme = useContext(ThemeContext)
    return (
        <section className="m-auto w-3/4 mt-10">
            <div>
                <h1 className="text-2xl font-bold">{title}</h1>
                <div className={`mt-1 bg-gradient-to-r ${Theme.gradient} h-0.5 rounded lg:w-1/5 w-full`}></div>
            </div>

            <div className="pt-7">
                {children}
            </div>
        </section>
    )
}
