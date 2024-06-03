import React, {useState} from 'react';
import Input from "../../common/input/Input";
import {useDispatch} from "react-redux";

const ChangeCardNameModal = ({setChangeCardName, changeCardName, card, changeCard, setChangeCard}) => {
    const [newCardName, setNewCardName] = useState(card.header);
    const dispatch = useDispatch();

    return (
        <div
            className={`${changeCardName ? "flex" : "hidden"} justify-center items-center w-full h-full bg-[rgba(0,0,0,0.5)] fixed top-0 left-0`}
            onClick={() => {
                setChangeCardName(!changeCardName);
                setNewCardName(card.header);
            }}
        >
            <div
                className="rounded-xl border shadow-xl p-2 bg-white"
                onClick={e => e.stopPropagation()}
            >
                <Input
                    value={newCardName}
                    onChange={(e) => setNewCardName(e.target.value)}
                />
                <div>
                    <button
                        className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => {
                            setChangeCardName(!changeCardName);
                                newCardName
                                ?
                                dispatch({
                                    type: "renameCardName",
                                    payload: {
                                        id: card.id,
                                        newHeader: newCardName
                                    }
                                })
                                :
                                setChangeCardName(changeCardName)
                        }}
                    >
                        Save
                    </button>
                    <button
                        className="bg-gray-100 hover:bg-gray-300 text-gray-800 font-bold mx-2 py-1 px-2 rounded inline-flex items-center"
                        onClick={() => {
                            setChangeCardName(!changeCardName)
                            setNewCardName(card.header)
                        }}
                    >
                        &times;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChangeCardNameModal;