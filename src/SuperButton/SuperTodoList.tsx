import React from 'react';

type SuperTodoListType = {
    id: number
    title: string
    isDone: boolean
}


type GeneralType = {
    tasks: SuperTodoListType[]
    children: React.ReactNode
}


export const SuperTodoList = (props: GeneralType) => {
    return (
        <div>
            <ul>
                {props.tasks.map(el => {
                    return (
                        <li key={el.id}>
                            <span>{el.id}</span>
                            <span>{el.title}</span>
                            <input type={'checkbox'} checked={el.isDone}/>
                        </li>
                    )
                })}
            </ul>
            {props.children}
        </div>
    );
};

