export default {
  namespace: 'global',
  state: {
    count: 0
  },
  reducers: {
    add(state) {
      state.count++;
      return { ...state };
    }
  }
}