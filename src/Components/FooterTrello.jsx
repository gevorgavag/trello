import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Input from "../common/input/Input";

const FooterTrello = ({card}) => {
    const [push, setPush] = useState(false);
    const [text, setText] = useState("")

    const dispatch = useDispatch();


    return (
        <div className="mt-4">
            {
                !push
                ?
                <button
                    className="bg-gray-100 hover:bg-gray-300 text-gray-800 font-bold mx-2 py-1 px-2 rounded inline-flex items-center"
                    onClick={() => setPush(true)}
                >
                    + Push card
                </button>
                :
                <div className="flex flex-col gap-3">
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
                                setPush(false)
                                setText("")
                                !!text
                                    ?
                                    dispatch({
                                        type: "push",
                                        payload: {
                                            text: text,
                                            id: card.id
                                        }
                                    }) :
                                    setPush(true)
                                    setText("")
                            }}
                        >
                            Push card
                        </button>
                        <button
                            className="bg-gray-100 hover:bg-gray-300 text-gray-800 font-bold mx-2 py-1 px-2 rounded inline-flex items-center"
                                onClick={() => {
                                    setPush(false);
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