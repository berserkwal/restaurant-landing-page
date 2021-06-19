const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: { index: "./src/index.js" },
	plugins: [new htmlWebpackPlugin({ title: "Homepage - Odin Restaurant" })],
	devtool: "inline-source-map",
	devServer: {
		contentBase: "./dist",
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	module: {
		rules: [
			{ test: /\.css$/i, use: ["style-loader", "css-loader"] },
			{ test: /\.(jpg|jpeg|png|svg|gif|webp)$/i, type: "asset/resource" },
		],
	},
};
