import React, {useContext} from 'react'
import github from '../assets/icon-github.svg'
import cellphone from '../assets/icon-cellphone.svg'
import email from '../assets/icon-email-fast-o.svg'
import ycr from '../assets/ycr.png'
import ThemeContext, {Theme} from '../context'

export default function Header() {
    const Theme: Theme = useContext(ThemeContext)
    const iconStyle = {height: '25px', width: '25px'}
    const icons: Array<{ icon: string, href: string, name: string }> = [
        {icon: github, href: 'https://github.com/yoaquim', name: 'yoaquim'},
        {icon: cellphone, href: 'tel:347-510-8940', name: '347-510-8940'},
        {icon: email, href: 'mailto:yoaquim@outlook.com', name: 'yoaquim@outlook.com'},
    ]
    const gradientText = `bg-clip-text text-transparent bg-gradient-to-r ${Theme.gradient}`

    return (
        <section className="lg:pt-12 lg:pb-7 m-auto w-3/4 pb-0">
            <div className="lg:grid lg:grid-cols-3">

                <div className="lg:col-span-1"><img className="h-80" src={ycr} alt=""/></div>

                <div className="lg:col-span-2">
                    <div className="lg:pl-32 lg:grid lg:grid-rows-3 lg:h-full">

                        <div>
                            <div className="lg:text-justify lg:flex-row lg:justify-between lg:-ml-5 lg:-mt-3 mt-5 flex flex-col">
                                <h1 className="lg:pt-0 lg:text-8xl pt-5 font-bold text-6xl text-gray-700">Yoaquim</h1>
                                <h1 className="lg:text-8xl lg:text-start text-6xl font-bold text-end text-gray-700">Cintrón</h1>
                            </div>
                            <div className={`mt-3 bg-gradient-to-r ${Theme.gradient} h-0.5 rounded w-full`}></div>
                        </div>

                        <p className="lg:py-0 lg:mt-5 mt-8 text-justify">
                            I'm an Engineering and Technology Leader with a focus on <span className={gradientText}>people</span>.
                            I have a <span className={gradientText}>passion</span> for delivering value through technology,
                            and building <span className={gradientText}>inclusive</span> and effective teams. When I'm not
                            wrestling infrastructure in the <span className={gradientText}>cloud</span>, you can find me playing
                            video games, goofing off with my daughter, or woodworking.
                        </p>

                        <div className="lg:flex lg:flex-row lg:mt-12 justify-between">
                            {icons.map(i => {
                                return (
                                    <div>
                                        <a className="lg:mt-0 flex flex-row mt-8 items-center" href={i.href} rel="noopener noreferrer" target="_blank">
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
