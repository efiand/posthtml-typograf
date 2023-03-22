const parser = require("posthtml-parser");
const render = require("posthtml-render");
const Typograf = require("typograf");

const DEFAULT_OPTIONS = {
	locale: ["ru", "en-US"],
	htmlEntity: { type: "name" },
};

const typografy = (html, disabledRules = [], options = {}) => {
	const typograf = new Typograf({ ...DEFAULT_OPTIONS, ...options });
	disabledRules.forEach((rule) => typograf.disableRule(rule));

	return typograf.execute(html);
};

module.exports = {
	typografy,
	getPosthtmlTypograf:
		(disabledRules = [], options = {}) =>
		(tree) =>
			parser(typografy(render(tree), disabledRules, options)),
};
