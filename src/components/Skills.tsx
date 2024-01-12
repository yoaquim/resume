import React from 'react'

export default function Skills() {
    return (
        <div>
            <div className="font-medium pb-3 border-b-2 border-b-white font-rubik text-white text-2xl">SKILLS</div>
            <div className="mt-6 space-y-10 font-rubik text-white">
                <div className="flex flex-col items-start space-y-2">
                    <div className="font-medium text-xl">Languages & Frameworks</div>
                    <div className="text-lg">
                        Typescript • Python • Javascript • Java Terraform • PostgreSQL• Tailwind
                        React Ionic • CDK • FastAPI • Redshift
                        Bash Serverless • NodeJS • Chalice
                    </div>

                </div>
                <div className="flex flex-col items-start space-y-2">
                    <div className="font-medium text-xl">Tools</div>
                    <div className="text-lg">
                        AWS • Redshift • Lambda • S3 • Fargate Windmill • Airflow • Docker • GH Actions GPT • CI/CD • Airbyte
                    </div>
                </div>
            </div>
        </div>
    )
}