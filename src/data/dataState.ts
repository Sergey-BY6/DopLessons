export const dataState: DataStateType = {
    pages:
        [
            {
                heading: "Цикл while",
                about: " Цикл while имеет следующий синтаксис: ",
            },
            {
                heading: "Цикл for",
                about: " Цикл for имеет следующий синтаксис: ",
            },
            {
                heading: "Конструкция \"switch\"",
                about: " Конструкция switch заменяет собой сразу несколько if.",
            },
        ],
}

export type DataStateType = {
    pages: Array<PagesType>
}

export type PagesType = {
    heading: string
    about: string
}





// import React from 'react';
// import {PagesType} from "../../data/dataState";
// import {useParams} from "react-router-dom";
// import Content from "../Content";
//
// type PropsType = {
//     pages: Array<PagesType>
// }

// export const Page = (props: PropsType) => {
//     const params = useParams()
//     console.log(params)
//     //console.log(Number(params.id))
//
//     let arr=[1,2,3]
//     console.log(arr[Number(params.id)])
//
//     return (
//         <div>
//             <Content page={props.pages[Number(params.id)]} />
//     </div>
// );
// };