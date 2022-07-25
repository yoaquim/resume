import React from 'react'
import Section from './Section'

import aws from '../assets/icon-aws.svg'
import terraform from '../assets/icon-terraform.svg'
import cicd from '../assets/icon-dir.svg'
import docker from '../assets/icon-docker.svg'
import linux from '../assets/icon-linux.svg'
import java from '../assets/icon-java.svg'
import postgres from '../assets/icon-db.svg'
import git from '../assets/icon-git.svg'
import react from '../assets/icon-react.svg'
import typescript from '../assets/icon-typescript.svg'
import node from '../assets/icon-node.svg'
import bash from '../assets/icon-shell-o.svg'
import tdd from '../assets/icon-test-tube.svg'
import css from '../assets/icon-css-o.svg'
import bolt from '../assets/icon-bolt-o.svg'
import python from '../assets/icon-python-o.svg'

export default function Skills() {
    const skills: Array<{ name: string, icon: string }> = [
        {name: "AWS", icon: aws},
        {name: "Terraform", icon: terraform},
        {name: "CI/CD", icon: cicd},
        {name: "Docker", icon: docker},
        {name: "Linux", icon: linux},
        {name: "Java", icon: java},
        {name: "Python", icon: python},
        {name: "PostgreSQL", icon: postgres},
        {name: "React", icon: react},
        {name: "Typescript", icon: typescript},
        {name: "NodeJS", icon: node},
        {name: "CSS", icon: css},
        {name: "Git", icon: git},
        {name: "Bash", icon: bash},
        {name: "TDD", icon: tdd},
        {name: "Serverless", icon: bolt},
    ]
    return (
        <Section title="Skills">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
                {skills.map(({name, icon}: { name: string, icon: string }, i: number) => {
                    const style = {height: '25px', width: '25px'}
                    return (
                        <div className="col-span-1 pl-4 lg:pl-0">
                            <div className="w-1/2 lg:w-1/4 flex space-x-2">
                                <img src={icon} alt="" style={style}/>
                                <span className="font-bold uppercase">{name}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Section>
    )
}

