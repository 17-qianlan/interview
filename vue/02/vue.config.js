const path = require('path');
function resolve(dir) {
    const src = path.join(__dirname,'./src', dir);
    return src;
};
module.exports = {
	devServer: {
		host: '0.0.0.0',
	},
	lintOnSave: true,
    chainWebpack: config => {
	    config.resolve.alias
            .set('@cps', resolve('components'))
    }
};
