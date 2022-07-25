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
        <section className="m-auto w-3/4 py-10">
            <div className="lg:grid lg:grid-cols-3">

                <div className="lg:col-span-1"><img src={ycr} alt=""/></div>

                <div className="lg:col-span-2 flex flex-col items-end">
                    <h1 className="text-8xl font-bold text-justify">Yoaquim Cintrón</h1>

                    <p className="py-8 text-justify">
                        I'm a Cloud and DevOps Leader with a focus on people.
                        I have a passion for delivering value through technology,
                        and building inclusive and effective teams. When I'm not
                        wrestling infrastructure in the cloud, you can find me playing
                        video games, goofing off with my daughter, or woodworking.
                    </p>

                    <div className="lg:flex lg:flex-row lg:space-x-16">
                        {icons.map(i => {
                            return (
                                <div>
                                    <a className="flex flex-row mt-5" href={i.href} rel="noopener noreferrer" target="_blank">
                                        <img src={i.icon} alt="" style={iconStyle}/>
                                        <h3 className="font-bold uppercase ml-2">{i.name}</h3>
                                    </a>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </section>
    )
}

