
export const todosReducer = (state=[], action) => {

    if(action.type === "push") {
        const data = state.map(item => {
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

        localStorage.setItem("data", JSON.stringify(data))

        return data
    } else if(action.type === "addList") {
        const data = [
            ...state,
            {
                id: Math.random(),
                order: state.length,
                header: action.payload.text,
                input: []
            }
        ]

        localStorage.setItem("data", JSON.stringify(data));

        return data;
    } else if(action.type === "editCardItem") {
        const data = state.map(card => {
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
        localStorage.setItem("data", JSON.stringify(data))
        return data

    } else if(action.type === "deleteCard") {
        const data = state.filter(card => card.id !== action.payload.cardId);
        localStorage.setItem("data", JSON.stringify(data))
        return data
    } else if(action.type === "renameCardName") {
        const data = state.map(card => {
            if(card.id === action.payload.id) {
                return {
                    ...card,
                    header: action.payload.newHeader
                }
            }
            return card
        })
        localStorage.setItem("data", JSON.stringify(data))
        return data
    } else if(action.type === "dropCardItem") {
        const data = state.map(card => {
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
        localStorage.setItem("data", JSON.stringify(data))
        return data;
    }

    return state
}

export const initialTodos = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : [];