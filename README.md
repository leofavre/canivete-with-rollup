# Canivete with Rollup

Example of Canivete use with [Rollup](https://rollupjs.org/).

1. In the Terminal, go to your project's root folder.

```shell
$ cd canivete-with-rollup
```

2. Install Canivete via NPM.

```shell
$ npm install --save leofavre/canivete
```

3. Install Rollup globally via NPM.

```shell
$ npm install --global rollup
```

4. Install the Node Resolve Pulgin for Rollup via NPM, otherwise, dependencies will not be handle correctly.

```shell
$ npm install --save-dev rollup-plugin-node-resolve
```

5. Create a file named "rollup.config.js" in your project's root folder with the following content:

```js
import nodeResolve from "rollup-plugin-node-resolve";

export default {
	entry: "./index.js",
	dest: "./dist/app.js",
	plugins: [nodeResolve()],
	format: "es"
};
```

6. Create a file named "index.js" in your project's root folder. Import any dependencies from Canivete (or other libraries) using ES6 modules syntax, before the rest of your code, like this:

```js
import toAverage from "canivete/dist/toAverage";

const myArray = [8, 10, 12, 14, 16];
alert(myArray.reduce(toAverage));
// => 12
```

7. Finally, use the following shell command to build your project:

```shell
$ rollup -c
```
