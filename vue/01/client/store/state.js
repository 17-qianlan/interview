import tool from '../assets/js/tool';

export default {
    // 获取前获取过期时间, 在保存时已经保存了时间了, 比对下是否过期, 如果过期则获取不到数值
    token: tool.getItem('token', 1) || '',
    username: tool.getItem('username', 1) || ''
};
