export const showModal = (state = { isOpen: false }, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return {
        isOpen: !state.isOpen
      };
    default:
      return state;
  }
};
