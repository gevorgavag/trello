import React, {useState} from 'react';
import ListItemTrello from "./ListItemTrello";
import {useDispatch} from "react-redux";
import {sort} from "../data/helpers";


const ListTrello = ({card}) => {
    const [currentCardItem, setCurrentCardItem] = useState(null);

    const dispatch = useDispatch();


    function dragStartHandler(e, cardItem) {
        setCurrentCardItem(cardItem);
    }

    function dragEndHandler(e) {

    }

    function dragOverHandler(e) {
        e.preventDefault()
    }

    function dropHandel(e, cardItem) {
        e.preventDefault();
        dispatch({
            type: "dropCardItem",
            payload: {
                cardId: card.id,
                id: cardItem.id,
                dropId: currentCardItem.id,
                order: cardItem.order,
                dropOrder: currentCardItem.order,
            }
        })
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
                            onDragStart={(e) => dragStartHandler(e, cardItem)}
                            onDragLeave={(e) => dragEndHandler(e)}
                            onDragEnd={(e) => dragEndHandler(e)}
                            onDragOver={(e) => dragOverHandler(e)}
                            onDrop={(e) => dropHandel(e, cardItem)}
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