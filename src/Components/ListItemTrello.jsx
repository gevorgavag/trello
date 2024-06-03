import React, {useState} from 'react';
import ChangeCardItemModal from "./modal/ChangeCardItemModal";
import ChangeSVG from "./icons/ChangeSVG";

const ListItemTrello = ({cardItem, card}) => {

    const [isEditMode, setIsEditMode] = useState(false);

    return (
        <div
            key={cardItem.id}
            className=""
        >
            <div className="rounded-xl">
                <div
                    key={cardItem.id}
                    className="flex justify-between shadow-lg w-full bg-white rounded-xl"
                >
                    <div
                        className="px-4 py-2"
                    >
                        {cardItem.text}
                    </div>
                    <button
                        className="bg-gray-50 hover:bg-gray-300 text-gray-800 font-bold mx-2 py-1 px-2 rounded-full inline-flex items-center"
                        onClick={() => {
                            setIsEditMode(true)
                        }}
                    >
                        <ChangeSVG />
                    </button>
                </div>

                <ChangeCardItemModal
                    cardId={card.id}
                    cardItemId={cardItem.id}
                    isEditMode={isEditMode}
                    setIsEditMode={setIsEditMode}
                    defaultValue={cardItem.text}
                />
            </div>
        </div>
    )
        ;
};

export default ListItemTrello;