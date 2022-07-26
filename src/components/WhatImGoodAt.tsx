import React from 'react'
import Section from './Section'
import Trait from './Trait'
import appCode from '../assets/icon-app-code-o.svg'
import sprout from '../assets/icon-sprout-o.svg'
import server from '../assets/icon-server-o.svg'
import checkmark from '../assets/icon-checkmark-o.svg'
import graph from '../assets/icon-graph-o.svg'
import lock from '../assets/icon-lock-o.svg'

export default function WhatImGoodAt() {
    return (
        <Section title="What I'm Good At">
            <div className="grid gap-20 sm:grid-cols-1 lg:grid-cols-2">
                <Trait title="Engineering Leadership" icon={sprout} size={"small"}>
                    I have a passion for people and what they can achieve together.
                    Growing each member of a team is more complicated than software, but I enjoy the challenge and all it yields.
                    Throughout my career, I have mentored engineers, developed roadmaps and grown teams and their processes.
                </Trait>
                <Trait title="Project Delivery" icon={checkmark}>
                    How do you deliver value through code? There's a steep learning curve on what works and doesn't work
                    for engineering teams. Over-indexing on planning is as bad as churning-out code without purpose.
                    After countless iterations and trial-and-error, I've learned how to iterate on value and kill time-sinks.
                </Trait>
                <Trait title="Software" icon={appCode}>
                    I've been coding since I was a kid and developing software professionally for over 6 years.
                    I've built impactful products, solved technical challenges, implemented large projects
                    and gained invaluable experience on how to deliver software. For me, software isn't just
                    a set of instructions that get written out, but rather a craft to be honed and perfected.
                </Trait>
                <Trait title="Infrastructure" icon={server} size={"large"}>
                    The Cloud has redefined how we create, support and define computing resources.
                    As a DevOps Engineer, I've built and managed different infrastructure stacks: traffic-heavy services,
                    secure and compliant systems, and scalable applications -- all in the Cloud.
                </Trait>
                <Trait title="Security" icon={lock}>
                    Is your cloud secure? How about your repositories? Can developers and employees and employees
                    identify potential attacks? Security is hard, but not for the reasons most people think. With experience
                    managing entire clouds, leading cyber-security initiatives for entire companies, and being hands-on-keyboard
                    when implementing security measures, I'm well poised to deliver good security.
                </Trait>
                <Trait title="Developer Operations" icon={graph}>
                    Teams forget that Software Development is much more than just writing code. How do you deploy it?
                    Maintain it? Monitor it? Developer Operations is an entire different beast from writing code. From deployment
                    pipelines to alerting, I've built countless integrations that deliver measurable value, fast, and keep that value operating at peak performance.
                </Trait>
            </div>
        </Section>
    )
}
