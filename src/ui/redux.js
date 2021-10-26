const TOGGLE_APPBAR = 'ui/TOGGLE_APPBAR';

export function toggleTopBar() {
  return { type: TOGGLE_APPBAR }
};

const INITIAL_STATE = {
  showAppBar: true,
  notification: 0
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case TOGGLE_APPBAR:
      return {
        ...state,
        showAppBar: !state.showAppBar,
      };
    default:
      return state
  }

}