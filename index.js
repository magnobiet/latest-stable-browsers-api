const microCors = require('micro-cors');
const cors = microCors({ allowMethods: ['GET'] });
const caniuse = require('caniuse-api');

const handler = (request, response) => {

	const latestStableBrowsers = caniuse.getLatestStableBrowsers();

	const { chrome, edge, firefox, ie, opera, safari } = latestStableBrowsers.reduce((versions, browser) => {

		const [name, version] = browser.split(' ');
		versions[name] = parseInt(version);

		return versions;

	}, {});

	response.status(200).send({ chrome, edge, firefox, ie, opera, safari });

};

module.exports = cors(handler);
