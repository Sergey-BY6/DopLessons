import React from 'react';
import s from "./SuperButton.module.css"


type SuperButtonPropsType = {
    // name: string
    callback: () => void
    color?: string
    disabled?: boolean
    children?: React.ReactNode
    size?: number
}

//Production




export const SuperButton: React.FC<SuperButtonPropsType> = (props) => {
    const {callback,color, children, disabled, ...otherProps} = props

// const finalClassName = `${s.button} ${s.disabled}`
    const finalClassName = `${s.button} 
    ${color === "red" ? s.red :  (color === "secondary" ? s.secondary : s.default)} 
    ${disabled ? s.disabled : ""}`



    return (
      <button className={finalClassName}>{children}</button>
    );
};






//в зависимости от типа и дизэйбла прицепить нужный класс в SuperButton.tsx
// const finalClassName = s.button
//     + (disabled
//         ? ' ' + s.disabled
//         : color === 'red'
//             ? ' ' + s.red
//             : color === 'secondary'
//                 ? ' ' + s.secondary
//                 : ' ' + s.default)
//     + (className ? ' ' + className : '')








//---------------------------------------------------------------  Ignat
//
// export const SuperButton: React.FC<SuperButtonPropsType> = ({callback,
//                                                                 color,
//                                                                 children,
//                                                                 ...otherProps}) => {
//     return (
//         <button>{children}</button>
//     );
// };