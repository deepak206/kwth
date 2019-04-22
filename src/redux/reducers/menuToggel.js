import { TOGGEL_MENU } from '../../actions/menu-action';

const initialState = {
    menuState: false,
};

const menuToggel = (state = initialState, {
    type, payload,
  }) => {
    switch (type) {
        case TOGGEL_MENU:
          return {
            ...state,
            menuState: payload,
          };

        default:
            return state;

        }
  };

  export default menuToggel;