const {override, fixBabelImports, addLessLoader, addWebpackAlias, overrideDevServer} = require('customize-cra');
const path = require('path');

const mockServer = require('./mock/server')

const addMockServer = () => config => {
    config.after = (app)=> {mockServer(app)};
    config.proxy = {
        '/toutiao': {
            target: 'http://v.juhe.cn',
            changeOrigin: true,
        }

    }
    return config;
};



module.exports = {
    webpack: override(
        fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: true
        }),
        addLessLoader({
            javascriptEnabled: true
        }),
        addWebpackAlias({
            '@': path.resolve(__dirname, 'src'),
            'fetch': path.resolve(__dirname, 'src/util/fetch')
        })
    ),
    devServer: overrideDevServer(addMockServer())
}