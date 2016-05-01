var store = riotux.Store({
  state: {
    count: 1,
    counter: 1,
  },
  mutations: {
    increment: function ( state ) {
      state.count += 1;
    },
    increment_counter: function ( state, n ) {
      state.counter += n;
    }
  }
})