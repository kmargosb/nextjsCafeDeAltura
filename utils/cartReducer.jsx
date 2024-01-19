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
            // Actualizar el localStorage
            localStorage.setItem('cart', JSON.stringify(updatedState));
            return updatedState;

        case "REMOVE_ITEM":
            const newState = state.filter((item) => item.id !== dispatch.product._id);
            // Actualizar el localStorage
            localStorage.setItem('cart', JSON.stringify(newState));
            return newState;

        default:
            return {
                ...state,
                total: calculateTotal(state),
            };
    }
};

export default cartReducer;
