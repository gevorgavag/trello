import React, {useState} from 'react';
import ListItemTrello from "./ListItemTrello";
import {useDispatch} from "react-redux";
import {sort} from "../data/helpers";


const ListTrello = ({card}) => {

    const dispatch = useDispatch();


    return (
        <div
            className="flex flex-col gap-3 rounded-xl"
        >
            {
                card.input.sort(sort).map(cardItem => {

                    return (
                        <div
                            key={cardItem.id}
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