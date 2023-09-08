import actions from "./actions";
import mutations from "./mutations";
import state from "./state";
import getters from "./getters";

export const name = "units";

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
