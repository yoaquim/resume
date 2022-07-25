import React from 'react'
import Section from './Section'
import Job from './Job'

export default function Experience() {
    return (
        <Section title="Experience">
            <div className="grid gap-20 sm:grid-cols-1 lg:grid-cols-2">
                <Job title="Consultant" workplace="Allied World" location="Remote" date="02.2022">
                    I've been coding since I was a kid and developing software professionally for over 6 years.
                    I've built impactful products, solved technical challenges, implemented large projects
                    and gained invaluable experience on how to deliver software. For me, software isn't just
                    a set of instructions that get written out, but rather a craft to be honed and perfected.
                </Job>
                <Job title="Founder  ｜  Consultant" workplace="Betabit LLC" location="Remote" date="01.2019">
                    I've been coding since I was a kid and developing software professionally for over 6 years.
                    I've built impactful products, solved technical challenges, implemented large projects
                    and gained invaluable experience on how to deliver software. For me, software isn't just
                    a set of instructions that get written out, but rather a craft to be honed and perfected.
                </Job>
                <Job title="Eng Manager  ｜  Cloud Owner" workplace="Attune Insurance" location="Remote  ｜  NYC" date="12.2018 - 01.2022">
                    The Cloud has redefined how we create, support and define computing resources.
                    As a DevOps Engineer, I've built and managed different infrastructure stacks: traffic-heavy services,
                    secure and compliant systems, and scalable applications -- all in the Cloud.
                </Job>

                <Job title="Eng Manager" workplace="Intent" location="Remote  ｜  NYC" date="03.2015 - 12.2018">
                    I have a passion for people and what they can achieve together.
                    Growing each member of a team is more complicated than software, but I enjoy the challenge and all it yields.
                    Throughout my career, I have mentored engineers, developed roadmaps and grown teams and their processes.
                </Job>
                <Job title="Software Engineer" workplace="Hackerati" location="NYC" date="01.2015 - 09.2015">
                    Many engineers forget that Software Development is much more than just writing code. How do you deploy it?
                    Maintain it? Monitor it? From deployment pipelines to alerting, I've built countless integrations
                    that deliver value in seconds, and keep that value operating at peak performance.
                </Job>
                <Job title="Software Developer" workplace="Optivon" location="San Juan, PR" date="10.2013 - 12.2014">
                    Many engineers forget that Software Development is much more than just writing code. How do you deploy it?
                    Maintain it? Monitor it? From deployment pipelines to alerting, I've built countless integrations
                    that deliver value in seconds, and keep that value operating at peak performance.
                </Job>
            </div>
        </Section>
    )
}

