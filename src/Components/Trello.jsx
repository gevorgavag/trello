import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import HeaderTrello from "./HeaderTrello";
import ListTrello from "./ListTrello";
import FooterTrello from "./FooterTrello";
import {sort} from "../data/helpers";



const Trello = () => {
    const dispatch = useDispatch();

    const trello = useSelector((state) => state.todos)



    return (
        <div
            className="flex"
        >
            {
                trello.sort(sort).map(card => {
                    return (
                        <div
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