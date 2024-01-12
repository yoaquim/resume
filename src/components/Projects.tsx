import SectionTitle from './SectionTitle'
import Entry from './Entry'
import React from 'react'

export default function Projects() {
    return (
        <div className="">
            <SectionTitle title="PROJECTS"/>
            <div className="mt-4 space-y-12">
                <Entry
                    title="zemi"
                    detail="github.com/yoaquim/zemi"
                    subtitle="OSS Data-driven API Framework">
                    <div>• Data-driven and reverse-routing library for ExpressJs</div>
                    <div>• Built from scratch with Typescript, tests, maintainability, CI/CD pipelines, and documentation</div>
                    <div>• Declarative, data-driven configuration and recursive library</div>
                    <div>• 100% code coverage, Grade A Codeclimate Maintainability, and Comprehensive documentation</div>
                </Entry>

                <Entry
                    title="Sandboxes"
                    detail="Attune Insurance"
                    subtitle="On-Demand, Personal Development Environments">
                    <div>• Enabled employees to create controlled replicas of our production environment via a UI</div>
                    <div>• Each Sandbox supported individualized service versions within our stack</div>
                    <div>• Revolutionized testing by facilitating comprehensive tests in near-production conditions</div>
                    <div>• Rapid testing tool: Product Owners could test changes ASAP, and with high confidence</div>
                    <div>• Graphical Interface made using easy, especially for non-tech stakeholders</div>
                    <div>• Ability to deploy any service's (e.g. api, frontend) Git branch to a given Sandbox</div>
                    <div>• Each Sandbox user had their own link, which mapped to their own cloud space</div>
                </Entry>

                <Entry
                    title="Harvester"
                    detail="Allied World"
                    subtitle="Centralized Data Platform">
                    <div> • Centralized Data Platform enabling Product Teams to specify data processing requirements</div>
                    <div> • Facilitated data uploads through both API and GUI, with automatic availability in Redshift</div>
                    <div> • Utilized Airflow and Airbyte for data orchestration and processing from diverse sources</div>
                    <div> • Implemented comprehensive data governance across the organization</div>
                    <div> • Leveraged Windmill for rapid prototyping and delivery of backend code and data pipelines</div>
                    <div> • Achieved full operational status within two weeks</div>
                </Entry>

                <Entry
                    title="SWRPG Manager"
                    detail="swrpgmanager.yoaquim.com"
                    subtitle="Game Management Web App">
                    <div>• Daily usage, growing userbase</div>
                    <div>• Full web app using React, Tailwind, Supabase, AWS, Github Actions, and MixPanel</div>
                </Entry>
            </div>
        </div>
    )
}