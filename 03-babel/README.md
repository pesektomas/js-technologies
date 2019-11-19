# babel

Co to je? Je to kompilátor javascriptu. Proč ho potřebujeme? Protože chceme používat nový javascript a nechceme se spoléhat na prohlížeče, nebo dokonce uživatele.

## Jak se to instaluje?

Pomocí NPM!

```sh
$ npm i babel-loader @babel/core @babel/preset-env webpack webpack-cli --save-dev
```

## Jak se to používá?

Pomocí webpacku!

Vytvoříme si podobný konfigurační soubor, jako v předchozím kroku, akorát trošku upravíme konfiguraci a to tak, že ve webpacku začneme používat moduly. Výsledek by mohl vypadat takto:

```js
const path = require('path');

module.exports = {
	entry: './src/app.js',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: '/node_modules/',
				use: {
					loader: 'babel-loader',
				}
			}
		]
	}
};
```

Dalším konfiguračním bodem je soubor `babel.conf.js`, který může vypadat takto:

```js
module.exports = {
	presets: [
	  [
		'@babel/preset-env',
		{
			targets: {
				node: 'current',
				edge: "17",
				chrome: "67",
				...
			},
			useBuiltIns: "usage"
		},
	],
	]
};
```

Když po té spustíme build nebo watch přes dříve naučený npm script, můžeme se mkrnout do dist/app.js, co se stane s našim kódem.

## Babel polyfills

Co to je? Je to sada polyfillů. Co je to polyfill? Jde o náhražku nějaké vestavěné funkce. Příklad: funkce `includes` nemá podporu v IE, když spustíme na stránce javascript, který bude obsahovat includes, javascript spadne. Když však vytvoříme polyfill se stejným názvem, provede se právě tento polyfill a babel polyfills je sada takovýchto polyfillů. Dá se s tím různě pracovat, importovat ručně jen ty, které chceme, nebo je naimportovat všechny, záleží na naší pohodlnosti.

### Jak se to instaluje a používá?

```sh
npm i @babel/polyfill
```

```js
// webpack.config.js
module.exports = {
	//entry: './src/app.js',
	entry: ['@babel/polyfill', './src/app.js'],
	...
```