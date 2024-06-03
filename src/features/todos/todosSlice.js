

export const todosReducer = (state=[], action) => {

    if(action.type === "push") {
        return state.map(item => {
            if(action.payload.id === item.id) {
                return {
                    ...item,
                    input: [
                        ...item.input,
                        {
                            id: Math.random(),
                            order: item.input.length,
                            text: action.payload.text
                        }
                    ]
                }
            }
            return item

        })
    } else if(action.type === "addList") {
        return [
            ...state,
            {
                id: Math.random(),
                order: state.length,
                header: action.payload.text,
                input: []
            }
        ]
    } else if(action.type === "editCardItem") {
        return state.map(card => {
            if(card.id === action.payload.cardId) {
                return {
                    ...card,
                    input: card.input.map(inputItem => {
                        if(inputItem.id === action.payload.cardItemId) {
                            return {
                                ...inputItem,
                                text: action.payload.text
                            }
                        }

                        return inputItem
                    })
                }
            }

            return card
        })
    } else if(action.type === "deleteCard") {
        return state.filter(card => card.id !== action.payload.cardId);
    } else if(action.type === "renameCardName") {
        return state.map(card => {
            if(card.id === action.payload.id) {
                return {
                    ...card,
                    header: action.payload.newHeader
                }
            }
            return card
        })
    } else if(action.type === "dropCardItem") {
        return state.map(card => {
            if(card.id === action.payload.cardId) {
                return {
                    ...card,
                    input: card.input.map(inputItem => {
                        if(inputItem.id === action.payload.id) {
                            return {
                                ...inputItem,
                                order: action.payload.dropOrder
                            }
                        }

                        if(inputItem.id === action.payload.dropId) {
                            return {
                                ...inputItem,
                                order: action.payload.order
                            }
                        }
                    })
                }
            }

            return card;
        })
    } else if(action.type === "dropCard") {
        return state.map(card => {
            if(card.id === action.payload.id) {
                return {
                    ...card,
                    order: action.payload.dropOrder
                }
            }

            if(card.id === action.payload.dropId) {
                return {
                    ...card,
                    order: action.payload.order
                }
            }

            return card
        })
    }

    return state
}

export const initialTodos =  [
    {
        id: Math.random(),
        order: 0,
        header: "trello",
        input: [
            {
                id: Math.random(),
                order: 0,
                text: "proekt"
            }
        ]
    }
];