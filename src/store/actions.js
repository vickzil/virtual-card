import axios from "axios";

export const getCardRequest = async ({ commit, state }) => {
  let url = `${state.baseUrl}/v1.0/VirtualCard/getCardRequests`;

  let data = {
    AppId: state.AppId,
    RequestId: state.RequestId,
  };

  let result = await axios.post(url, data);

  try {
    // console.log(result.data);
    if (result.data.success) {
      commit("SAVE_CARD_REQUEST", result.data.data);
    }
  } catch (error) {
    console.log(error);
  }

  return result;
};

export const activateCard = ({ dispatch }, card) => {
  dispatch("setVerifyPopup", {
    status: true,
    type: "ACTIVATE_CARD",
    title: "Activate Card",
    desc: "Are you sure you want to activate this card?",
    hasMessage: false,
    payload: card,
  });
};

export const deActivateCard = ({ dispatch }, card) => {
  dispatch("setVerifyPopup", {
    status: true,
    type: "DEACTIVATE_CARD",
    title: "De-activate Card",
    desc: "Are you sure you want to de-activate this card?",
    hasMessage: true,
    payload: card,
  });
};

export const setCurrentPage = ({ commit }, payload) => {
  commit("CURRENT_SITE_PAGE", payload);
};

export const setMessagePopup = ({ commit }, payload) => {
  commit("SET_MESSAGE_POPUP", payload);
};

export const setVerifyPopup = ({ commit }, payload) => {
  commit("SET_VERIFY_POPUP", payload);
};
