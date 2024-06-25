import React, {useState} from 'react';
import Input from "../common/input/Input";
import {useDispatch} from "react-redux";
import {useOutsideClick} from "../hooks/useOutsideClick";

const NewTrello = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const {ref, setIsActive, isActive} = useOutsideClick(false);

    return (
        <div>
            {
                !isActive
                    ?
                    <button
                        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                        onClick={(e) => {
                            e.stopPropagation()
                            setIsActive(true)
                        }}
                    >
                        + Add another column
                    </button>
                    :
                    <div
                        className="rounded-xl p-5 border bg-gray-100 flex flex-col gap-3 hover:border hover:border-gray-500 duration-500"
                        ref={ref}
                    >
                        <Input
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />

                        <div>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded duration-500"
                                onClick={() => {
                                    setIsActive(!isActive)
                                    setText("")
                                    !!text
                                        ?
                                        dispatch({
                                            type: "addList",
                                            payload: {
                                                text: text
                                            }
                                        })
                                        :
                                        setIsActive(isActive)
                                }}
                            >
                                Add list
                            </button>
                            <button
                                className="bg-gray-100 hover:bg-gray-300 text-gray-800 font-bold mx-2 py-1 px-2 rounded inline-flex items-center duration-500"
                                onClick={() => {
                                    setIsActive(!isActive)
                                    setText("")
                                }}
                            >
                                &times;
                            </button>
                        </div>
                    </div>
            }
        </div>
    );
};

export default NewTrello;