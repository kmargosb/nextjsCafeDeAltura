const cartReducer = (state, dispatch) => {

    switch (dispatch.action) {

        case "ADD_ITEM":
            const cafe = state.find((item) => item.id === dispatch.product._id);
            let updatedState;
            if (!cafe) {
                updatedState = [
                    ...state,
                    {
                        id: dispatch.product._id,
                        name: dispatch.product.brand,
                        price: dispatch.product.price,
                        img: dispatch.product.img_url,
                        quantity: 1,
                    },
                ];
            } else {
                updatedState = state.map((item) =>
                    item.id === dispatch.product._id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return updatedState;

        case "REMOVE_ITEM":
            const newState = state.filter((item) => item.id !== dispatch.product._id);
            return newState;

        case "ADDITION":
            return state.map((item) =>
                item.id === dispatch.product._id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );

            case "SUBTRACTION":
                const updateCart = state.map((item) =>
                    item.id === dispatch.product._id
                        ? item.quantity > 1
                            ? { ...item, quantity: item.quantity - 1 }
                            : null
                        : item
                ).filter(Boolean);
            
                return updateCart

        case "EMPTY_CART":
            return state = []

        default:
            return {
                ...state
            };
    }
};

export default cartReducer;