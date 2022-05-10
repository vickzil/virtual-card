/* eslint-disable */
import router from "../router";

// PAGE LOADING STATUS
export const checkCurrentRoute = () => {
  return router.history.current.meta.requiresAuth;
};

export const appScreenSize = (state) => {
  return state.appScreenSize;
};

// ########################3       GENERAL        #################################

export const baseUrl = (state) => {
  return state.baseUrl;
};

export const AppId = (state) => {
  return state.AppId;
};

export const RequestId = () => {
  let text = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
};

export const currentSitePage = (state) => {
  return state.currentSitePage;
};

export const cards = (state) => {
  return state.cards;
};

// ########################3           LOADERS        #################################

export const pageLoading = (state) => {
  return state.pageLoading;
};

export const pageProcessing = (state) => {
  return state.pageProcessing;
};

export const webPageLoading = (state) => {
  return state.webPageLoading;
};

// ########################3           MODALS        #################################

export const smallPopup = (state) => {
  return state.smallPopup;
};

export const modalLoading = (state) => {
  return state.modalLoading;
};

// ########################3           NOTIFICATIONS        #################################

export const alertPopUp = (state) => {
  return state.alertPopUp;
};

export const messagePopUp = (state) => {
  return state.messagePopUp;
};

export const verifyPOPUP = (state) => {
  return state.verifyPOPUP;
};

export const verifyPayloadWithMessage = (state) => {
  return state.verifyPayloadWithMessage;
};
