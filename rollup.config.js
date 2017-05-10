import nodeResolve from "rollup-plugin-node-resolve";

export default {
	"entry": "./index.js",
	"dest": "./dist/app.js",
	"plugins": [nodeResolve()],
	"format": "es"
};
