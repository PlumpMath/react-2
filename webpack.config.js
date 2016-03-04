module.exports = {
	entry : "./app/app.js",
	output: {
		filename : "public/bundle.js"
	},
	devtool: "source-map",
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				query: {
					presets: [
						"es2015",
						"react"
					]
				}
			}
		]
	}
};
