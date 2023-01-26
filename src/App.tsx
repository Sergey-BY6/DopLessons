import React, {useState} from 'react';
import './App.css';
import {SuperButton} from './SuperButton/SuperButton';
import {SuperTodoList} from './SuperButton/SuperTodoList';


function App() {

    const tasks = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
    ]

    return (
        <div>


            {/*    <SuperButton callback={() => {}} color={'red'}>RED SUPER BUTTON</SuperButton>*/}
            {/*    <SuperButton callback={() => {}} >DEFAULT SUPER BUTTON</SuperButton>*/}
            {/*    <SuperButton callback={() => {}} color={'secondary'} disabled>RED SUPER BUTTON</SuperButton>*/}


            <SuperTodoList tasks={tasks}>
                <SuperButton callback={() => {}} color={'red'}>RED SUPER BUTTON</SuperButton>
                <SuperButton callback={() => {}} >DEFAULT SUPER BUTTON</SuperButton>
                <SuperButton callback={() => {}} color={'secondary'} disabled>RED SUPER BUTTON</SuperButton>
                <img src="https://static.kupindoslike.com/Adidas-ZX-750-muske-patike-besplatna-dostava_slika_O_2883884.jpg" alt="image" width={"500px"}/>

            </SuperTodoList>


            <SuperTodoList tasks={tasks}>
                <SuperButton callback={() => {}} color={'red'}>RED SUPER BUTTON</SuperButton>
                <SuperButton callback={() => {}} >DEFAULT SUPER BUTTON</SuperButton>
                <SuperButton callback={() => {}} color={'secondary'} disabled>RED SUPER BUTTON</SuperButton>
                <img src="https://outmaxshop.ru/components/com_jshopping/files/img_products/14220/adidas-marathon-tr-19-14220-5.jpg" alt="image" width={"450px"}/>


            </SuperTodoList>

            <SuperTodoList tasks={tasks}>
                <SuperButton callback={() => {}} color={'red'}>RED SUPER BUTTON</SuperButton>
                <SuperButton callback={() => {}} >DEFAULT SUPER BUTTON</SuperButton>
                <SuperButton callback={() => {}} color={'secondary'} disabled>RED SUPER BUTTON</SuperButton>
                <img src="https://images.ua.prom.st/451454349_w640_h640_krossovki-nike-air.jpg" alt="image" width={"500px"}/>
                
            </SuperTodoList>


        </div>

    )
}


export default App;
