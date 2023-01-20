import React, {ChangeEvent} from 'react';


type SuperInput = {
    newTitle: string
    setNewTitle: (newTitle: string) => void
}


export const SuperInput = (props:SuperInput ) => {

    const setNewTitle = (event: ChangeEvent<HTMLInputElement>) => {
        props.setNewTitle(event.currentTarget.value)
    }

    return (
        <div>
            <input value={props.newTitle} onChange={setNewTitle}/>
        </div>
    );
};

