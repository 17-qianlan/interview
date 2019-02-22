import tool from '../assets/js/tool';

export default {
    UserLogin(state, {token, username}) {
        state.token = token;
        state.username = username;
        tool.setItem('user', {token, username});
    },
    UserLogOut(state) {
        tool.removerItem('user');
        state.token = state.username = '';
    }
};
