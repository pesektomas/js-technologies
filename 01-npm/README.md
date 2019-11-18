# NPM

Co to je? Spráce javascriptových balíčků, který usnadňuje jejich instalaci a aktualizaci. Pokud Vám to připomíná composer (PHP), maven (Java) nebo gradle (Android), tak Vám to připomíná správně. Funguje na stejném principu.

## jak se instaluje?

https://www.npmjs.com/get-npm

## jak se to používá?

### Mám ten krám nainstalovaný?

```sh
$ npm -v
$ 6.13.0
```

### Funguje to samo od sebe?

```sh
$ npm init
$ package name: (01-npm):
$ version: (1.0.0):
 ...
$ About to write to ./package.json:
{
  "name": "01-npm",
  "version": "1.0.0",
  ...
}
$ Is this OK? (yes):
```

Skoro, pro rychlejší výsledek můžeme použít `npm init -y` (nebude se nás to pořád na něco ptát). Příkaz udělá to, že nám v adresáři vytvoří soubor `package.json`, který obsahuje to, co nám to vypsalo po spuštění příkazu.

### A jak že se to teda používá?

Většina knihoven, které se používají, jsou vystaveny v repozitáři https://www.npmjs.com/ (ano, i jQuery, konkrétně https://www.npmjs.com/package/jquery). U každého repozitáře najdeme návod, jak jej nainstalovat. Konkrétně oblíbené jQuery nainstalujeme takto: 

```sh
$ npm i jquery
+ jquery@3.4.1
```

Co to udělalo?

Za prvé to upravilo náš soubor `package.json`. Nyní se nám v něm objevil nový atribut dependencies.

```json
"dependencies": {
  "jquery": "^3.4.1"
}
```

```php 
// Nepřipomíná vám to require v composeru? 
```

Za druhé to vytvořilo soubor package-lock.json.

Za třetí to vytvořilo složku `node_modules`. Ta nyní vypadá nějak takto:

```sh
node_modules/
└── jquery
    ├── dist
    │   ├── jquery.js
    │   ├── jquery.min.js
    ...
    └── src
    ...
```

A toto už se dá použít. Sice to není to, co je nejvíce sluníčkové, ale už nemusíme knihovny stahovat, kopírovat, hledat a zakládat US na to, abychom zjistili, co že to vlastně používáme za knihovny.

### Záludnosti

* [lpad fail](https://www.theregister.co.uk/2016/03/23/npm_left_pad_chaos/)
* [NPM vs Yarn ?](https://blog.risingstack.com/yarn-vs-npm-node-js-package-managers/)