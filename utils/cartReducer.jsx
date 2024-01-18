const cartReducer = (state, dispatch) => {
    

    switch (dispatch.action) {
        case "ADD_ITEM":
            const cafe = state.find((producto) => producto.id === dispatch.product._id)
            if (!cafe) {
                return [...state,
                {
                    id: dispatch.product._id,
                    name: dispatch.product.brand,
                    price: dispatch.product.price,
                    img: dispatch.product.img_url,
                    quantity: 1

                }];
            }
            else {
                return state.map((producto) =>
                    producto.id === dispatch.product._id
                        ? { ...producto, quantity: producto.quantity + 1 }
                        : producto
                );
            }

        case "REMOVE_ITEM":
            return state.filter((item) => item.id !== dispatch.product._id);

        default:
            return {
                ...state,
                total: calculateTotal(state), // Calcula el total al inicio y cada vez que se realice una acción
            };
    }
};



export default cartReducer;
