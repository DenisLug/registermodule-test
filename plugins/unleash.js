import Vue from "vue";
import VueUnleash from '@online/vue-unleash';

export default ({store}) => {
  const config = {
    store
  }
  Vue.use(VueUnleash, config)
};
