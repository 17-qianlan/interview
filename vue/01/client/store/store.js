import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mountains from './mountains';
import defaultState from './state';
import getters from './getters';

Vue.use(Vuex);

export default () => {
    return new Vuex.Store({
        state: defaultState,
        mountains,
        // actions,
        // getters
    });
};
