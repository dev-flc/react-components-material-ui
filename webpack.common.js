const path = require( 'path' );
const HtmlWebpackPlugin  = require( 'html-webpack-plugin' );

module.exports = env => {

    return {

        entry : {
            negocioProtegido :  [
                "babel-polyfill" ,
                path.resolve( __dirname, './example/index.js' ),
                path.resolve( __dirname, './example/style/index.scss' ),
            ]
        },

        output : {
            path          : path.resolve( __dirname, 'public' ),
            filename      : 'js/[name].js',
            chunkFilename : 'js/[id].[chunkhash].js',
            publicPath    : '/'
        },

        resolve : {
            extensions : [ '.jsx', '.js' ],
        },

        module : {
            rules : [

                {
                    test    : /\.(js|jsx)$/,
                    include : [ path.resolve(__dirname, "example") ],
                    exclude : [ path.resolve(__dirname, "node_modules") ],
                    use  : {
                        loader : 'babel-loader',

                    },
                },

                {
                    test : /\.(ttf|eot|otf)(\?[\s\S]+)?$/,
                    use  : {
                        loader  : 'url-loader',
                        options : {
                            limit    : 10000,
                            fallback : 'file-loader',
                            name     : `fonts/example.[hash].[ext]`,
                        }
                    }
                },

                {
                    test : /\.(png|jpg|gif|svg)(\?[\s\S]+)?$/,
                    use  : {
                        loader  : 'url-loader',
                        options : {
                            limit    : 10000,
                            fallback : 'file-loader',
                            name     : `images/example.[hash].[ext]`,
                        }
                    }
                }
            ]
        },

        plugins : [

            new HtmlWebpackPlugin(
                {
                    title    : 'Negocio Protegido',
                    filename : 'index.html',
                    template : './example/index.ejs',
                }
            )
        ]

    }
}
