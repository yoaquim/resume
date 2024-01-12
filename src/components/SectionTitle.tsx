import React from 'react'

export default function SectionTitle({title}: { title: string }) {
    return (
        <div className="pb-3 font-rubik font-medium text-2xl text-stone border-b-2 border-b-light-stone">
            {title}
        </div>
    )
}