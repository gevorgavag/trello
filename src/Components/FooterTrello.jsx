import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Input from "../common/input/Input";
import {useOutsideClick} from "../hooks/useOutsideClick";

const FooterTrello = ({card}) => {
    const [text, setText] = useState("")

    const dispatch = useDispatch();

    const {ref, setIsActive, isActive} = useOutsideClick(false);
    console.log(isActive)

    return (
        <div ref={ref} className="mt-4">
            {
                !isActive
                ?
                <button
                    className="bg-gray-100 hover:bg-gray-300 text-gray-800 font-bold mx-2 py-1 px-2 rounded inline-flex items-center"
                    onClick={(e) => {
                        e.stopPropagation()
                        setIsActive(!isActive)
                    }}
                >
                    + Push card
                </button>
                :
                <div className="flex flex-col gap-3 border border-gray-200 rounded-lg p-2 hover:border-gray-600 duration-500">
                    <Input
                        value={text}
                        onChange={(e) => {
                            setText(e.target.value)
                        }}
                    />
                    <div>
                        <button
                            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => {
                                !!text
                                    ?
                                    dispatch({
                                        type: "push",
                                        payload: {
                                            text: text,
                                            id: card.id
                                        }
                                    }) :
                                    setIsActive(isActive)
                                    setText("")
                            }}
                        >
                            Push card
                        </button>
                        <button
                            className="bg-gray-100 hover:bg-gray-300 text-gray-800 font-bold mx-2 py-1 px-2 rounded inline-flex items-center"
                                onClick={() => {
                                    setIsActive(!isActive);
                                    setText("")
                                }
                            }
                        >
                            &times;
                        </button>
                    </div>
                </div>
            }
        </div>
    );
};

export default FooterTrello;