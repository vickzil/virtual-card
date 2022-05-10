/* eslint-disable */
export default {
  // GLOBAL PROPERTIES
  currentSitePage: "",
  appScreenSize: "",
  AppId: "001",
  APPVERSION: "1.1.3",
  RequestId: "001web001web" + Math.floor(Math.random() * 10),
  secretKey: "helloworld",
  cards: null,
  transactions: null,
  transactionCurrentPage: 1,
  transactionTotalPage: 2,
  transactionInfo: null,
  baseUrl: "http://fbn.oxfordagrovest.com/api/",

  // LOADING
  pageLoading: {
    status: false,
    message: "",
    payload: null,
  },

  modalLoading: false,

  // MODALS
  verifyPOPUP: {
    status: false,
    type: "",
    title: "",
    hasMessage: false,
    desc: "",
    payload: null,
  },

  messagePopUp: {
    status: false,
    type: "error",
    title: "Registration Error",
    des: "",
    payload: null,
  },
};
