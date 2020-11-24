const path = require('path'), MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    // mode: process.env.NODE_ENV,
    entry: {
        index: [
            './assets/js/pages/index.js',
            './assets/scss/pages/index/index.scss'
        ],
        about: [
            './assets/js/pages/about.js',
            './assets/scss/pages/about/about.scss'
        ],
        canho: [
            './assets/js/pages/canho.js',
            './assets/scss/pages/canho/canho.scss'
        ],
         category_1:[
                     './assets/scss/pages/category_1/category_1.scss',
                 ],
        list_1:[
            './assets/scss/pages/list_1/list_1.scss',
        ],
        list_2:[
            './assets/scss/pages/list_2/list_2.scss',
        ],
        list_3:[
            './assets/scss/pages/list_3/list_3.scss',
        ],
        detail:[
            './assets/scss/pages/detail/detail.scss',
        ],
        login:[
            './assets/scss/pages/login/login.scss',
        ],
        category_1:[
            './assets/scss/pages/category_1/category_1.scss',
        ],
        muaban:[
            './assets/js/pages/muaban.js',
            './assets/scss/pages/muaban/muaban.scss',
        ],
        nha_o:[
            './assets/scss/pages/nha_o/nha_o.scss',
        ],
        toi_ban:[
            './assets/scss/pages/toi_ban/toi_ban.scss',
        ],
        trang_ca_nhan:[
            './assets/scss/pages/trang_ca_nhan/trang_ca_nhan.scss',
        ],
        chat:[
            './assets/scss/pages/chat/chat.scss',
        ],
        thong_tin_du_an:[
            './assets/js/pages/thong_tin_du_an.js',
            './assets/scss/pages/thong_tin_du_an/thong_tin_du_an.scss',
        ],
        chuyen_trang_bds:[
            './assets/scss/pages/chuyen_trang_bds/chuyen_trang_bds.scss',
        ],
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    // fallback to style-loader in development
                    // process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
    ],
};