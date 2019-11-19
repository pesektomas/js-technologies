# Webpack

Co to je? Asi nejjednoduší popis je balíčkovač. S novými verzemi javascriptu se  mění i princip práce s javascriptem. Nechceme mí na stránce 100x `<script type="..."></script>` (ani s http2). Chceme mít oddělený kód,  používat OOP nebo FP. Na FW bychom chtěli třeba i něco otestovat. Ale bohužel, i když se nám to nemusí líbit, javascript je budoucnost webového frontentdu a jestli chceme s javascriptem držet krok, musíme ho umět ovládat tak, aby se nám s ním dobře pracovalo. A s tím vším nám pomůže webpack.

## Jak se to instaluje?

Pomocí NPM!

```sh
$ npm i --save-dev webpack webpack-cli
```

Všimnětě si paramteru --save-dev. Ten se postará o to, že se takto nainstalované balíčky budou v `package.json` přidávat namísto do `dependencies` do `devDependencies` (require vs require-dev).

## Jak se to používá?

### Mám ten krám nainstalovaný?

```sh
$ npx webpack -v
$ 4.41.2
```
Co je to `npx`? Je to součástí npm a dělá to to, že spouští příkazy z node_modules/.bin. Tím pádem nemusíme žádnou knihovnu instalovat globálně a starat se ručně o její aktualizace, ale používáme konkrétní verze, které jsou uvedeny v `package.json`. Takže na jednom legacy projektu můžeme mít webpack ve verzi 3 a na novém třeba právě verzi 4.41.

### NPM scripty

Webpack umožňuje provádět watch nad změnami a podle potřeby si spustí build sám od sebe, takže nemusíme spouštět build po každé úpravě (to není zrovna žádná převratná novinka), abychom si ale nemuseli pamatovat, že existuje nějaký přepínač `--watch` (celý příkaz je `npx webpack --watch`). Abychom si právě nemuseli pamatovat, co a jak se spouští, můžeme si nadefinovat npm scripty. Sice si budeme muset pamatovat pro změnu ten npm script, ale všechny scripty jsou nadefinované na jednom místě (v `package.json`). Definice takových to scriptů může vypadat takto:

```json
// package.json
"scripts": {
    "watch": "webpack --mode=development --watch",
    "build": "webpack --mode=production",
    "test": "echo \"Error: no test specified\" && exit 1"
},
```

Spuštění scriptů pak probíhá takto: `npm run watch`, respektive `npm run build` nebo `npm run test`. Bohuže, `npm run` si budeme muset zapamatovat.

### Nastavení

By default se konfigurace provádí v souboru `webpack.conf.js`. Pro náš příklad může vypadat takto:

```js
const path = require('path');

module.exports = {
	entry: './src/app.js',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'dist'),
	},
};
```

Ve zkratce to znamená to, že se vezme soubor src/app.js, zjistí se, jaké potřebuje závislosti a všechno se to zabalí do výsledného `dist/app.js`. Pro zajímavost si můžeme vuzkoušet co se stane s výsledným dist/app.js souborem, když z něj odstráníme `require` na jquery.