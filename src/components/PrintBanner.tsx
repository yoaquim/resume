import React, {useContext} from 'react'
import ThemeContext, {Theme} from '../context'

export default function PrintBanner() {
    const Theme: Theme = useContext(ThemeContext)
    return (
        <div id="PrintBanner" className={`cursor-pointer py-1 w-screen fixed bottom-0 bg-gradient-to-r ${Theme.gradient} text-white text-center uppercase font-bold`}
             onClick={window.print}>
            DOWNLOAD THIS RESUME
        </div>
    )
}