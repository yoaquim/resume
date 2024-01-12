import React from 'react'

function Achievement({title, body}: { title: string, body: string }) {
    return (
        <div className="font-rubik space-y-2">
            <div className="text-xl font-medium text-white">
                {title}
            </div>
            <div className="font-normal text-gray-200">
                {body}
            </div>
        </div>
    )
}

export default function Achievements() {
    return (
        <div>
            <div className="font-medium pb-3 border-b-2 border-b-white font-rubik text-white text-2xl">ACHIEVEMENTS</div>
            <div className="mt-6 space-y-8">
                <Achievement
                    title="Grew Engineering Team by Over 150%, focusing on delivery"
                    body="Hired, mentored, and developed over a dozen engineers across different teams"/>
                <Achievement
                    title="Strategic AWS Transition Yielded $1.2 Million in Annual Cost Savings"
                    body="Migrated from legacy cloud to AWS, modernizing infrastructure"/>
                <Achievement
                    title="Enhanced Developer Efficiency by 70% with Custom In-House Tool"
                    body="Built platform where developers had their own version of production"/>
                <Achievement
                    title="Transformed Data Delivery: Cut Time from 6 Months to 3 Days"
                    body="Engineering platform that delivered ETL data in days rather than months"/>
            </div>
        </div>
    )
}