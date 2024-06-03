import React, {useState} from 'react';
import {useDispatch} from "react-redux";

const ChangeCardModal = ({changeCard, setChangeCard, card, changeCardName, setChangeCardName}) => {
    const dispatch = useDispatch();


    return (
        <div className={`${changeCard ? "flex" : "hidden"} flex-col absolute w-full left-56 top-12 bg-white rounded-xl shadow-xl py-4 border`}>
            <div
                className="px-2 flex items-center justify-between font-semibold text-center"
            >
                <p
                    className="w-full text-center"
                >
                    Actions with a card
                </p>
                <button
                    className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-1 px-2 rounded inline-flex items-center text-2xl"
                    onClick={() => {
                        setChangeCard(!changeCard);
                    }}
                >
                    &times;
                </button>
            </div>
            <div>
                <button
                    className="py-1 px-4 w-full bg-white hover:bg-gray-100 text-gray-800 rounded inline-flex items-center"
                    onClick={() => {
                        dispatch({
                            type: "deleteCard",
                            payload: {
                                cardId: card.id
                            }
                        })
                    }}
                >
                    <p>
                        Delete
                    </p>
                </button>
            </div>
            <div>
                <button
                    className="py-1 px-4 w-full bg-white hover:bg-gray-100 text-gray-800 rounded inline-flex items-center"
                    onClick={() => {
                        setChangeCard(!changeCard);
                        setChangeCardName(!changeCardName);
                    }}
                >
                    <p>
                        Rename
                    </p>
                </button>
            </div>
        </div>
    );
};

export default ChangeCardModal;