const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: {
		index: "./src/index.js",
		// menu: "./src/menu.js",
		// contact: "./src/contact.js",
	},
	plugins: [new htmlWebpackPlugin({ title: "Arancione" })],
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
