import SectionTitle from './SectionTitle'
import Entry from './Entry'
import React from 'react'

export default function Experience() {
    return (
        <div className="">
            <SectionTitle title="PROFESSIONAL EXPERIENCE"/>
            <div className="mt-4 space-y-12">
                <Entry
                    title="Platform Lead, Data Engineer Lead, Manager - Consultant"
                    detail="2022-2023"
                    subtitle="Allied World"
                    location="Remote">
                    <p>• Build platform to centralize and analyze Data across all product teams</p>
                    <p>• Delivered a dynamic Data Platform with on-demand reports capability</p>
                    <p>• Revolutionized Data Delivery by engineering a Platform that reduced time from Months to Days</p>
                    <p>• Build Data Platform Infrastructure using Terraform, CDK, and Chalice</p>
                    <p>• Build Infrastructure via Terraform and AWS for Insurance Portal</p>
                    <p>• Led team, on both infrastructure and application development, on delivering Portal</p>
                </Entry>

                <Entry
                    title="Head of Devops, Senior Engineering Manager"
                    detail="2019-2022"
                    subtitle="Attune Insurance"
                    location="Remote">
                    <div>• Transition all infrastructure from legacy cloud to AWS, reducing annual costs by $1.2 million</div>
                    <div>• Developed a platform providing each employee with a personal, fully-integrated environment</div>
                    <div>• Manage engineers across teams, coduct performance reviews and mentoring</div>
                    <div>• Oversee managers and engineering teams, fostering a productive and collaborative culture</div>
                    <div>• Cross-functional leader: integrate and manage projects across the entire company</div>
                    <div>• Implemented entire logging, monitoring, and alerting stack for all services and systems</div>
                    <div>• Terraform (Infrastructure-as-Code) all infrastructure, including IAM users and permissions</div>
                    <div>• Responsible for overseeing Security Initiatives and managing Technical Compliance</div>
                </Entry>

                <Entry
                    title="Senior Frontend, Senior Backend Engineer, DevOps Engineer, Manager"
                    detail="2015-2018"
                    subtitle="Intent Media"
                    location="New York / Remote">
                    <div> • Led and mentored junior engineers as the DevOps Lead for the Data Engineering Team</div>
                    <div> • Delivery Lead for the Backend Team, ensuring project goals and timelines were met effectively</div>
                    <div> • Overhauled the in-house frontend framework for better delivery and performance of frontend</div>
                    <div> • Developed a service for delivering model predictions using trained models</div>
                    <div> • Managed the migration of legacy systems to AWS, utilizing ECS, Lambda, and S3</div>
                    <div> • Implemented a serverless, high-traffic API on AWS</div>
                    <div> • Automated testing and deployment processes (CI/CD) for squad products</div>
                </Entry>

                <Entry
                    title="Frontend Engineer"
                    detail="2015-2015"
                    subtitle="Hackerati"
                    location="New York">
                    <div>• Led as a consultant on new initiatives and tackled complex software challenges.</div>
                    <div>• Specialized in scalable frontend solutions and team expansion to meet critical deadlines</div>
                    <div>• Steered internal projects from inception to public product conceptualization</div>
                    <div>• Developed and deployed a successful e-commerce application using Angular</div>
                    <div>• Actively engaged as a consultant on various client projects</div>
                    <div>• Directed in-house initiatives and projects, demonstrating leadership and strategic planning</div>
                </Entry>

                <Entry
                    title="Software Engineer"
                    detail="2013-2014"
                    subtitle="Optivon"
                    location="Puerto Rico">
                    <div> • Key contributor in the product development team for a law enforcement software suite</div>
                    <div> • Led the development of web application, encompassing backend, frontend, and infrastructure</div>
                    <div> • Served as the technical lead, responsible for technology stack, DevOps, and solution strategies</div>
                    <div> • Designed and developed an integrated system comprising an Android app, Web app, and API</div>
                    <div> • Versatile role encompassing technical development, design, sales, and interdisciplinary tasks</div>
                </Entry>
            </div>
        </div>
    )
}