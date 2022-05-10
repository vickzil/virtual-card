export const SAVE_CARD_REQUEST = (state, data) => {
  state.cards = data;
};

export const CURRENT_SITE_PAGE = (state, payload) => {
  state.currentSitePage = payload;
};

export const SET_MESSAGE_POPUP = (state, payload) => {
  state.messagePopUp = {
    status: payload.status,
    type: payload.type,
    title: payload.title,
    des: payload.des,
    payload: payload.payload,
  };
};

export const SET_VERIFY_POPUP = (state, payload) => {
  state.verifyPOPUP = {
    status: payload.status,
    type: payload.type,
    title: payload.title,
    desc: payload.desc,
    hasMessage: payload.hasMessage,
    payload: payload.payload,
  };
};
