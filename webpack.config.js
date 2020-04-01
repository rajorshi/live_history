const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'development',
	stats: 'detailed',
	entry: [
		'./src/index.js',
		'./src/index.css'
	],
	output: {
	    path: path.resolve(__dirname, 'dist'),
		filename: 'live_history.bundle.js',
		chunkFilename: '[id].js',
		publicPath: ''
	},
	resolve: {
        extensions: ['.js', '.jsx']
	},
	devtool: 'inline-source-map',
	devServer: {
		stats: {
			colors: true,
			chunks: false,
			hash: false,
			version: false,
			timings: false,
			assets: false,
			children: false,
			source: false,
			warnings: true,
			noInfo: true,
			contentBase: './dist',
			hot: true,
			modules: false,
			errors: true,
			reasons: true,
			errorDetails: true
		},
		contentBase: './dist',
	},
	module: {
        rules: [
			{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
            },
        	{
            test: /\.css$/,
            // exclude: /node_modules/,
            use: [{ 
				loader: 'style-loader' },
                { 
                    loader: 'css-loader',
                    options: {
                    	// modules: {
                        // 	localIdentName: "[name]__[local]___[hash:base64:5]",
                        // },
                        sourceMap: true
                    }
				},
				{
					loader: 'postcss-loader',
					options: {
						ident: 'postcss',
						plugins: () => [
							autoprefixer({})
						]
					}	
				}
			]
			},
			{
				test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader?limit=10000&name=img/[name].[ext]'
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin({verbose:true}),
		new HtmlWebpackPlugin({
			hash: true,
            template: './src/index.html',
			filename: 'index.html',
			baseDir: './dist',
			inject: 'body',
			showErrors: true
		}),
		new CopyWebpackPlugin([
			{ from: './src/assets/' },
		  ])
	]
};
