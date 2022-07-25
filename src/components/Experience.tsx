import React from 'react'
import Section from './Section'
import Job from './Job'
import Highlight from './Highlight'

export default function Experience() {
    return (
        <Section title="Experience">
            <div className="grid gap-20 sm:grid-cols-1 lg:grid-cols-2">
                <Job title="Consultant" workplace="Allied World" location="Remote" date="02.2022">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    <div className="pt-5">
                        {[
                            'Lead  team to delivery',
                            'Great Good',
                            'Meh Good',
                        ].map(h => Highlight({text: h}))}
                    </div>
                </Job>

                <Job title="Founder  ｜  Consultant" workplace="Betabit LLC" location="Remote" date="01.2019">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

                    <div className="pt-5">
                        {[
                            'Owner',
                            'Manage entire consultancy',
                            'Manage entire consultancy',
                        ].map(h => Highlight({text: h}))}
                    </div>
                </Job>

                <Job title="Eng Manager  ｜  Cloud Owner" workplace="Attune Insurance" location="Remote  ｜  NYC" date="12.2018 - 01.2022">
                    As an Engineering Manager at Attune, I lead engineers and ensure the engineering org's culture and processes remain open, approachable and effective.
                    In my capacity as DevOps Lead I manage roadmaps, lead in planning and implementing infrastructure and developer operations.
                    I've delivered value, both as a technical leader and as a people-focused Engineer capable of working cross-functionally to achieve overarching goals.

                    <div className="pt-5">
                        {[
                            'Manage engineers across two teams, focusing on performance, career growth and mentoring',
                            'Migrate all infrastructure from legacy cloud to AWS, cutting down yearly costs from $1.2M to $400K',
                            'Scale DevOps team, processes and practices, organization-wide',
                            'In charge of Security Initiatives and Technical Compliance',
                            'Terraform (Infrastructure-as-Code) all infrastructure, including IAM users and permissions',
                            'Created Sandboxes: ability for anyone in the company to create a copy of production environment with a couple of clicks',
                            'Implemented entire logging, monitoring, and alerting stack for all services and systems',
                            'Cross-functional leader: integrate and manage projects across the entire company',
                        ].map(h => Highlight({text: h}))}
                    </div>
                </Job>

                <Job title="Eng Manager" workplace="Intent" location="Remote  ｜  NYC" date="03.2015 - 12.2018">
                    During my tenure at Intent I worked across multiple squads: frontend, backend and data engineering. I transitioned to being a People Manager
                    and started mentoring and managing performance for  junior engineers. On the Data Engineer team, pushed the companies new
                    vision for an AI Prediction System for Online Travel Agencies by creating the entire infrastructure tu support Model and Prediction
                    Automation.
                    <div className="pt-5">
                        {[
                            'Manage and mentor junior engineers',
                            'DevOps Lead for the Data Engineer Team',
                            'Delivery Lead for Backend Team, ensuring goals are on track',
                            'Implemented an automated, model training system in EMR and Spark',
                            'Created a service that would serve up model predictions',
                            'Migrate legacy systems to AWS ECS, Lambdas, S3 and more',
                            'Implement a serverless, high-traffic, API on AWS',
                            'Automate testing and deployment (CI/CD) of squad products',
                            'Backend Java work with a heavy focus on TDD',
                        ].map(h => Highlight({text: h}))}
                    </div>
                </Job>

                <Job title="Software Engineer" workplace="Hackerati" location="NYC" date="01.2015 - 09.2015">
                    Consultant that would be brought in to lead new projects and solve challenging software impediments.
                    Focused on building frontend solutions that could scale, and augmenting existing teams in order to
                    meet hard deadlines. Aside from client work, lead internal projects and ideation around building public facing products.

                    <div className="pt-5">
                        {[
                            'Successfully develop and deploy an e-commerce Angular app',
                            'Consultant brought on to client projects',
                            'Led in-house initiatives & projects',
                            'Manage responsibilities of consulting and dealing with external clients'
                        ].map(h => Highlight({text: h}))}
                    </div>
                </Job>

                <Job title="Software Developer" workplace="Optivon" location="San Juan, PR" date="10.2013 - 12.2014">
                    Part of a small team dedicated on product development, design and implementation of a law-enforcement software suite,
                    consisting of a mobile app and a webapp dashboard. Laid the foundation for the Android app and fully developed the web app:
                    backend, frontend and cloud infrastructure.

                    <div className="pt-5">
                        {[
                            'Tech lead, making decisions on tech stack, DevOps and solutions',
                            'Developed an Android app, Web app and API',
                            'Worked on official United States Coast Guard Android app',
                            'More than just tech work: design, sales and everything in between'
                        ].map(h => Highlight({text: h}))}
                    </div>
                </Job>
            </div>
        </Section>
    )
}

