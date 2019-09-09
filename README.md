# Latest browsers version API

> API to get the latest stable browsers version.

## Deploy

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/magnobiet/latest-stable-browsers-api)

## Usage

```javascript

fetch('https://browsers.magnobiet.com/')
	.then((response) => response.json())
	.then((response) => {
		console.log(response); // {"chrome":75,"edge":18,"firefox":68,"ie":11,"opera":62,"safari":12}
	});
```

## License

This project is licensed under the [MIT License](https://magno.mit-license.org/2019). Copyright © Magno Biét
