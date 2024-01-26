const cartReducer = (state, dispatch) => {

    switch (dispatch.action) {

        case "ADD_ITEM":
            const cafe = state.find((producto) => producto.id === dispatch.product._id);
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
                updatedState = state.map((producto) =>
                    producto.id === dispatch.product._id
                        ? { ...producto, quantity: producto.quantity + 1 }
                        : producto
                );
            }
            return updatedState;

        case "REMOVE_ITEM":
            const newState = state.filter((item) => item.id !== dispatch.product._id);
            return newState;

        case "ADDITION":
            return state.map((producto) =>
                producto.id === dispatch.product._id
                    ? { ...producto, quantity: producto.quantity + 1 }
                    : producto
            );

            case "SUBTRACTION":
                const updateCart = state.map((producto) =>
                    producto.id === dispatch.product._id
                        ? producto.quantity > 1
                            ? { ...producto, quantity: producto.quantity - 1 }
                            : null
                        : producto
                ).filter(Boolean);
            
                return updateCart.length > 0
                    ? updateCart
                    : state.filter((item) => item.id !== dispatch.product._id);

        case "EMPTY_CART":
            return state = []

        default:
            return {
                ...state,
                total: calculateTotal(state),
            };
    }
};

export default cartReducer;