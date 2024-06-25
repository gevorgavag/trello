import React, {useState} from 'react';
import ChangeCardModal from "./modal/ChangeCardModal";
import ChangeCardNameModal from "./modal/ChangeCardNameModal";
import {useOutsideClick} from "../hooks/useOutsideClick";

const HeaderTrello = ({card}) => {
    // const [changeCard, setChangeCard] = useState(false);
    const [changeCardName, setChangeCardName] = useState(false);

    const {ref, setIsActive, isActive} = useOutsideClick(false);

    return (
        <div className="relative">
            <div className="flex justify-between mb-4">
                <div className="font-medium">
                    {card.header}
                </div>
                <div ref={ref}>
                    <button
                        className="bg-gray-100 hover:bg-gray-300 text-gray-800 font-bold mx-2 py-1 px-2 rounded inline-flex items-center"
                        onClick={(e) => {
                            setIsActive(true);
                        }}
                    >
                        &hellip;
                    </button>
                    <ChangeCardModal card={card} setChangeCard={setIsActive} changeCard={isActive}
                                     changeCardName={changeCardName} setChangeCardName={setChangeCardName}/>
                    <ChangeCardNameModal card={card} setChangeCard={setIsActive} changeCard={isActive}
                                         changeCardName={changeCardName} setChangeCardName={setChangeCardName}/>
                </div>
            </div>
        </div>
    );
};

export default HeaderTrello;