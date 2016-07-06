var webpack = require("webpack");
var CleanPlugin = require("clean-webpack-plugin");
var ExtractPlugin = require("extract-text-webpack-plugin");
var production = process.env.NODE_ENV === "production";

var plugins = [
	new ExtractPlugin("bundle.css"),
	new webpack.optimize.CommonsChunkPlugin({
        // Move dependencies to our main file
		name : "main",
        // Look for common dependencies in all children,
		children : true,
        // How many times a dependency must come up before being extracted
		minChunks : 2
	})
];

// Setup plugins for production code
if (production) {
	plugins = plugins.concat([

        // Cleanup the builds/ folder before compiling our final assets
		new CleanPlugin("build"),

        // This plugin looks for similar chunks and files
        // and merges them for better caching by the user
		new webpack.optimize.DedupePlugin(),

        // This plugins optimizes chunks and modules by
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

		// This plugins defines various variables that we can set to false
		// in production to avoid code related to them from being compiled
		// in our final bundle
		new webpack.DefinePlugin({
			__SERVER__:      !production,
			__DEVELOPMENT__: !production,
			__DEVTOOLS__:    !production,
			"process.env":   {
				BABEL_ENV: JSON.stringify(process.env.NODE_ENV)
			}
		})
	]);
}

module.exports = {
	debug:  !production,
	devtool: production ? false : "eval",
	entry: "./src/index.jsx",
	output: {
		path:          "build",
		filename:      production ? "[name]-[hash].js" : "bundle.js",
		chunkFilename: "[name]-[chunkhash].js",
		publicPath:    "build/"
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
					presets: ["es2015", "react"]
				}
			},
			{
				test: /\.html/,
				loader: "html-loader"
			},
			{
				test: /\.scss/,
				loader: ExtractPlugin.extract("style", "css!sass")
			},
			{
				test:   /\.(png|gif|jpe?g|svg|webp)$/i,
				loader: "url",
				query: {
					limit: 10000
				}
			}
		]
	}
};
