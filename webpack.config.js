let mix = require('laravel');
let webpack = require('webpack');
require('laravel-mix-merge-manifest');

// Set path output
let directory_asset = 'public';
mix.setPublicPath(path.normalize(directory_asset));
let build_js = [
    // {
    //     from: 'resources/assets/js/landings/home.js',
    //     to: 'js/landing_home.js'
    // },
    {
        from: 'resources/assets/js/landings/recruitment.js',
        to: 'js/landing_recruitment.js'
    },
    {
        from: 'resources/assets/js/landings/candidate.js',
        to: 'js/landing_candidate.js'
    },
    // {
    //     from: 'resources/assets/js/landings/headhunt.js',
    //     to: 'js/landing_headhunt.js'
    // },
    {
        from: 'resources/assets/js/landings/price.js',
        to: 'js/landing_price.js'
    },
    {
        from: 'resources/assets/js/landings/become_employer.js',
        to: 'js/become_employer.js'
    },
    {
        from: 'resources/assets/js/landings/price_package.js',
        to: 'js/price_package.js'
    },
];
let build_scss = [
    // {
    //     from: 'resources/assets/scss/landings/home.scss',
    //     to: 'css/landing_home.css'
    // },
    {
        from: 'resources/assets/scss/landings/service_recruitment.scss',
        to: 'css/service_recruitment.css'
    },
    {
        from: 'resources/assets/scss/landings/service_candidate.scss',
        to: 'css/service_candidate.css'
    },
    // {
    //     from: 'resources/assets/scss/landings/service_headhunt.scss',
    //     to: 'css/service_headhunt.css'
    // },
    {
        from: 'resources/assets/scss/landings/service_price.scss',
        to: 'css/service_price.css'
    },
    {
        from: 'resources/assets/scss/landings/become_employer.scss',
        to: 'css/become_employer.css'
    },
    {
        from: 'resources/assets/scss/landings/price_package.scss',
        to: 'css/price_package.css'
    },
    {
        from: 'resources/assets/scss/landings/service_banner.scss',
        to: 'css/service_banner.css'
    },
];

build_js.map((file) => {
    mix.js(file.from, file.to).mergeManifest();
});

build_scss.map((file) => {
    mix.sass(file.from, file.to).minify(directory_asset + '/' + file.to).mergeManifest();
});

mix.options({
    processCssUrls: false,
    terser: {
        extractComments: false,
    }
})
    .autoload({
        jquery: ['$', 'window.jQuery', 'jQuery'],
    });
// mix.disableNotifications();
mix.webpackConfig({
    plugins: [
        new webpack.ContextReplacementPlugin(/\.\/locale$/, 'empty-module', false, /js$/),
        new webpack.IgnorePlugin(/^codemirror$/),
    ],
    node: {
        fs: "empty"
    },
    module: {
        rules: [
            {
                test: /\.modernizrrc.js$/,
                use: ['modernizr-loader']
            },
            {
                test: /\.modernizrrc(\.json)?$/,
                use: ['modernizr-loader', 'json-loader']
            }
        ]
    },
    resolve: {
        alias: {
            "handlebars": "handlebars/dist/handlebars.js",
            modernizr$: path.resolve(__dirname, "resources/assets/js/.modernizrrc"),
        }
    },
});
if (mix.inProduction()) {
    mix.version();
}
new webpack.LoaderOptionsPlugin({
    test: /\.s[ac]ss$/,
    options: {
        includePaths: [
            path.resolve(__dirname, './public/')
        ]
    }
});
// mix.copyDirectory('node_modules/summernote/dist/font', 'public/fonts');
