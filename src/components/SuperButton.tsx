import React from 'react';

type SuperButtonType = {
    name: string
    callBack: () => void
}


export const SupperButton: React.FC<SuperButtonType> = (props) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <div>
<button onClick={onClickHandler}>{props.name}</button>
        </div>
    );
};

