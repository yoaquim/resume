import React, {ReactNode} from 'react'

interface TraitProps {
    title: string
    icon: string
    size?: 'small' | 'normal' | 'large'
    children?: ReactNode
}

export default function Trait({title, icon, children, size = 'small'}: TraitProps) {
    const sizeObj = {small: '22px', normal: '25px', large: '26px',}
    const style = {height: sizeObj[size], width: sizeObj[size]}

    return (
        <div className="col-span-1">
            <div className="flex flex-row space-x-2 justify-items-center">
                <img src={icon} alt="" style={style}/>
                <h3 className="uppercase font-bold">{title}</h3>
            </div>
            <p className="mt-5">
                <p className="text-justify">
                    {children}
                </p>
            </p>
        </div>
    )
}
