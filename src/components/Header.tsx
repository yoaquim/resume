import React from 'react'
import github from '../assets/icon-github.svg'
import cellphone from '../assets/icon-cellphone.svg'
import email from '../assets/icon-email-fast-o.svg'
import ycr from '../assets/ycr.png'

export default function Header() {
    const iconStyle = {height: '25px', width: '25px'}
    const icons: Array<{ icon: string, href: string, name: string }> = [
        {icon: github, href: 'https://github.com/yoaquim', name: 'yoaquim'},
        {icon: cellphone, href: 'tel:347-510-8940', name: '347-510-8940'},
        {icon: email, href: 'mailto:yoaquim@outlook.com', name: 'yoaquim@outlook.com'},
    ]

    return (
        <section className="m-auto w-3/4 pb-0 lg:pt-12 lg:pb-7">
            <div className="lg:grid lg:grid-cols-3">

                <div className="lg:col-span-1"><img className="h-80" src={ycr} alt=""/></div>

                <div className="lg:col-span-2">
                    <div className="lg:pl-32 lg:grid lg:grid-rows-3 lg:h-full">

                        <div className="lg:text-justify lg:flex-row lg:justify-between lg:-ml-5 lg:-mt-3 mt-5 flex flex-col">
                            <h1 className="lg:pt-0 lg:text-8xl pt-5 font-bold text-6xl text-gray-700">Yoaquim</h1>
                            <h1 className="lg:text-8xl lg:text-start text-6xl font-bold text-end text-gray-700">Cintrón</h1>
                        </div>

                        <p className="lg:py-0 lg:mt-5 mt-8 text-justify">
                            I'm a Cloud and DevOps Leader with a focus on people.
                            I have a passion for delivering value through technology,
                            and building inclusive and effective teams. When I'm not
                            wrestling infrastructure in the cloud, you can find me playing
                            video games, goofing off with my daughter, or woodworking.
                        </p>

                        <div className="lg:flex lg:flex-row lg:mt-12 justify-between">
                            {icons.map(i => {
                                return (
                                    <div>
                                        <a className="flex flex-row mt-8 lg:mt-0" href={i.href} rel="noopener noreferrer" target="_blank">
                                            <img src={i.icon} alt="" style={iconStyle}/>
                                            <h3 className="font-bold uppercase ml-2">{i.name}</h3>
                                        </a>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

