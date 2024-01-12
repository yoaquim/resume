import React from 'react'
import { CloudIcon, CodeBracketSquareIcon, CommandLineIcon, PresentationChartLineIcon, RocketLaunchIcon, ServerStackIcon, SquaresPlusIcon } from '@heroicons/react/24/outline'

export default function Strengths() {
    return (
        <div>
            <div className="font-medium pb-3 border-b-2 border-b-white font-rubik text-white text-2xl">STRENGTHS</div>
            <div className="mt-6 space-y-6 font-normal">
                <div className="flex items-center font-rubik text-white text-xl space-x-3">
                    <RocketLaunchIcon className="w-6 h-6"/>
                    <div>Engineering Leadership</div>
                </div>
                <div className="flex items-center font-rubik text-white text-xl space-x-3">
                    <SquaresPlusIcon className="w-6 h-6"/>
                    <div>Building Teams</div>
                </div>
                <div className="flex items-center font-rubik text-white text-xl space-x-3">
                    <PresentationChartLineIcon className="w-6 h-6"/>
                    <div>Project Delivery</div>
                </div>
                <div className="flex items-center font-rubik text-white text-xl space-x-3">
                    <ServerStackIcon className="w-6 h-6"/>
                    <div>Platform Engineering</div>
                </div>
                <div className="flex items-center font-rubik text-white text-xl space-x-3">
                    <CodeBracketSquareIcon className="w-6 h-6"/>
                    <div>Frontend Engineering</div>
                </div>
                <div className="flex items-center font-rubik text-white text-xl space-x-3">
                    <CloudIcon className="w-6 h-6"/>
                    <div>Cloud Operations</div>
                </div>
                <div className="flex items-center font-rubik text-white text-xl space-x-3">
                    <CommandLineIcon className="w-6 h-6"/>
                    <div>Developer Operations</div>
                </div>
            </div>
        </div>
    )
}