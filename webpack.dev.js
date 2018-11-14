const merge  = require( 'webpack-merge' );
const common = require( './webpack.common.js' );
const path   = require( 'path' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

/* TODO: crear variables de entorno para el deploy */

module.exports = merge( common() , {

    mode      : 'development',

    devtool   : 'inline-source-map',

    watchOptions : {
        ignored : /node_modules/,
    },

    devServer : {
        historyApiFallback : true,
    	host    : '127.0.0.1',
        port    : 8080,
        open    : true,
        inline  : true,
        overlay : true,
       	stats   : {
            colors       : true,
            assets       : true,
            chunkModules : true,
            chunks       : false
        }
  	},

    module : {
        rules : [
            {
                test : /\.(sa|sc|c)ss$/,
                use  : [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },

    plugins : [
        new MiniCssExtractPlugin({
            filename      : '[name].css',
            chunkFilename : '[id].css'
        })
    ]

});
