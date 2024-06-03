import React, {useState} from 'react';
import ChangeCardModal from "./modal/ChangeCardModal";
import ChangeCardNameModal from "./modal/ChangeCardNameModal";

const HeaderTrello = ({card}) => {
    const [changeCard, setChangeCard] = useState(false);
    const [changeCardName, setChangeCardName] = useState(false)

    return (
        <div className="relative">
            <div className="flex justify-between mb-4">
                <div className="font-medium">
                    {card.header}
                </div>
                <button
                    className="bg-gray-100 hover:bg-gray-300 text-gray-800 font-bold mx-2 py-1 px-2 rounded inline-flex items-center"
                    onClick={() => {
                        setChangeCard(!changeCard);
                    }}
                >
                    &hellip;
                </button>
                <ChangeCardModal card={card} setChangeCard={setChangeCard} changeCard={changeCard} changeCardName={changeCardName} setChangeCardName={setChangeCardName}/>
                <ChangeCardNameModal card={card} setChangeCard={setChangeCard} changeCard={changeCard} changeCardName={changeCardName} setChangeCardName={setChangeCardName}/>
            </div>
        </div>
    );
};

export default HeaderTrello;