const model = {
  name: 'cart',
  state: [{
    price: 42.00,
    amount: 3,
  }],
  reducers: {
    add(state) {
      return [
        ...state,
        {
          price: 25.00,
          amount: 10,
        },
      ];
    },
  },
  selectors: {
    total() {
      return rootState => rootState.cart.reduce((a, b) => a + (b.price * b.amount), 0);
    },
  },
};

export default model;
