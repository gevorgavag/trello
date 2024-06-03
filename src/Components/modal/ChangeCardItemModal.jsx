import React, {useState} from 'react';
import {useDispatch} from "react-redux";

const ChangeCardItemModal = ({defaultValue, cardItemId, cardId, setIsEditMode, isEditMode}) => {
    const dispatch = useDispatch();
    const [newText, setNewText] = useState(defaultValue);

    return (
        <div
            draggable={false}
            className={`${isEditMode ? "flex" : "hidden"} justify-center items-center w-full h-full bg-[rgba(0,0,0,0.5)] fixed top-0 left-0`}
            onClick={(e) => {
                setIsEditMode(false);
                setNewText(defaultValue)
            }}
        >
            <div
                className="rounded-xl p-4 bg-white w-80 justify-center items-center"
                onClick={e => e.stopPropagation()}
            >
                <input type="text"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       value={newText}
                       onChange={e => setNewText(e.target.value)}
                />
                <div>
                    <button
                        className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => {
                            setIsEditMode(false);
                            setNewText(newText)
                            !!newText
                                ?
                                dispatch({
                                    type: "editCardItem",
                                    payload: {
                                        cardId: cardId,
                                        cardItemId: cardItemId,
                                        text: newText
                                    }
                                })
                                :
                                setIsEditMode(true);
                        }}
                    >
                        Save
                    </button>
                    <button
                        className="bg-gray-100 hover:bg-gray-300 text-gray-800 font-bold mx-2 py-1 px-2 rounded inline-flex items-center"
                        onClick={() => {
                            setIsEditMode(false);
                            setNewText(defaultValue);
                        }}

                    >
                        &times;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChangeCardItemModal;