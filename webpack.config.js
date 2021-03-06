/**
 * @TODO: This needs to be cleaned up. Too many ternaries
 * with settings for production vs. dev
*/

var webpack = require("webpack");
var CleanPlugin = require("clean-webpack-plugin");
var ExtractPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var validate = require("webpack-validator");
var production = process.env.NODE_ENV === "production";
var merge = require("webpack-merge");

var plugins = [
	new ExtractPlugin("bundle.css"),

	new webpack.optimize.CommonsChunkPlugin({
        // Move dependencies to our main file
		name : "main",
        // Look for common dependencies in all children,
		children : true,
        // How many times a dependency must come up before being extracted
		minChunks : 2
	}),

	// Builds the html template
	new HtmlWebpackPlugin({
		template: "index.template.ejs",
		inject: "body"
	})
];

// Setup plugins for production code
if (production) {
	plugins = plugins.concat([

		new CleanPlugin("build"),

        // Looks for similar chunks and files
        // and merges them for better caching by the user
		new webpack.optimize.DedupePlugin(),

        // Optimizes chunks and modules by
        // how much they are used in your app
		new webpack.optimize.OccurenceOrderPlugin(),

        // This plugin minifies all the Javascript code of the final bundle
		new webpack.optimize.UglifyJsPlugin({
			mangle:   true,
			compress: {
                // Suppress uglification warnings
				warnings: false
			}
		}),

		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("production")
			}
		})
	]);
}

const common = {
	debug:  !production,
	devtool: production ? false : "eval",
	entry: "./src/index.jsx",
	output: {
		path:          __dirname + "/build",
		filename:      production ? "[name]-[hash].js" : "bundle.js",
		chunkFilename: "[name]-[chunkhash].js",
		publicPath:    production ? "./" : "/build/"
	},
	plugins: plugins,
	module: {
		loaders: [
			{
				test: /\.json$/,
				loaders: ["json-loader"]
			},
			{
				test: /\.js/,
				loader: "babel-loader",
				exclude: /node_modules/,
				query: {
					presets: ["es2015"]
				}
			},
			{
				test: /\.jsx$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				query: {
					presets: production ? ["es2015", "react"] : ["es2015", "react", "react-hmre"]
				}
			},
			{
				test: /\.html/,
				loader: "html-loader",
				exclude: /node_modules/
			},
			{
				test: /\.scss/,
				loader: ExtractPlugin.extract("style", "css!sass"),
				exclude: /node_modules/
			},
			{
				test: /\.svg$/,
				loader: "babel!svg-react",
				exclude: /node_modules/
			},
			{
				test: /\.ttf$/,
				loader: "file-loader?mimetype=application/octet-stream&name=fonts/[name].[ext]",
				exclude: /node_modules/
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "url?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]",
				exclude: /node_modules/
			}
		]
	}
};

module.exports = validate(common);
