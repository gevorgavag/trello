import React, {useState} from 'react';
import ListItemTrello from "./ListItemTrello";
import {useDispatch} from "react-redux";
import {sort} from "../data/helpers";


const ListTrello = ({card}) => {

    const dispatch = useDispatch();


    const dragStartHandler = (e, card, cardItem) => {

    }

    const dragEndHandler = (e, cardItem) => {
    }

    const dragOverHandler = (e) => {
        e.preventDefault()
    }

    const dropHandel = (e, card , cardItem) => {
        e.preventDefault();
    }


    return (
        <div
            className="flex flex-col gap-3 rounded-xl"
        >
            {
                card.input.sort(sort).map(cardItem => {

                    return (
                        <div
                            key={cardItem.id}
                            onDragStart={(e) => dragStartHandler(e, card, cardItem)}
                            onDragLeave={(e) => dragEndHandler(e, cardItem)}
                            onDragEnd={(e) => dragEndHandler(e)}
                            onDragOver={(e) => dragOverHandler(e)}
                            onDrop={(e) => dropHandel(e, card, cardItem)}
                            draggable={true}
                        >
                            <ListItemTrello key={cardItem.id} card={card} cardItem={cardItem}/>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ListTrello;