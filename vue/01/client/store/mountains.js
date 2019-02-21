import tool from '../assets/js/tool';

export default {
    UserLogin(state, {token, username}) {
        state.token = token;
        state.username = username;
        tool.setItem('token', token);
        tool.setItem('username', username);
    },
    UserLogOut(state) {
        tool.removerItem('token');
        tool.removerItem('username');
        state.token = state.username = '';
    }
};
