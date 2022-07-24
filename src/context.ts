import React from 'react'

export interface Theme {
    gradient: string
    background: string
}

export const Themes: Record<string, Theme> = {
    light: {
        gradient: 'from-indigo-500 via-purple-500 to-pink-500',
        background: 'bg-white'
    }
}

export default React.createContext(Themes.light)
