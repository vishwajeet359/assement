const initialState = [
  { id: 0, name: "Samsung",price:5600,quantity:2,description:"Best Prouduct"},
  { id: 1, name: "Oppo",price:5800,quantity:1,description:"Best Sell Prouduct"},
 
];

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      state = [...state, action.payload];
      return state;
    case "DELETE_PRODUCT":
      const contactFilter = state.filter((product) =>
        product.id === action.payload ? null : product
      );
      state = contactFilter;
      return state;
    case "UPDATE_PRODUCT":
      const productUpdate = state.filter((product) =>
        product.id === action.payload.id
          ? Object.assign(product, action.payload)
          : product
      );
      state = productUpdate;
      return state;
    default:
      return state;
  }
};
