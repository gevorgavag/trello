import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import HeaderTrello from "./HeaderTrello";
import ListTrello from "./ListTrello";
import FooterTrello from "./FooterTrello";
import {sort} from "../data/helpers";



const Trello = () => {
    const dispatch = useDispatch();

    const trello = useSelector((state) => state.todos)

    const dragStartHandler = (e, card) => {

    }

    const dragEndHandler = (e) => {

    }

    const dragOverHandler = (e) => {
        e.preventDefault()
    }

    const dropHandler = (e, card) => {
        e.preventDefault()

    }


    return (
        <div
            className="flex"
        >
            {
                trello.sort(sort).map(card => {
                    return (
                        <div
                            onDragStart={(e) => dragStartHandler(e, card)}
                            onDragLeave={(e) => dragEndHandler(e)}
                            onDragEnd={(e) => dragEndHandler(e)}
                            onDragOver={(e) => dragOverHandler(e)}
                            onDrop={(e) => dropHandler(e, card)}
                            draggable={true}
                            key={card.id}
                            className="shadow-lg border-2 w-[300px] bg-gray-100 p-4 rounded-xl mx-4">
                            <HeaderTrello card={card} key={card.id}/>
                            <ListTrello card={card}/>
                            <FooterTrello card={card}/>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Trello;