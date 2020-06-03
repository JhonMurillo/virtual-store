function listFields(node, lists, options = { noChild: [] }) {
	if (typeof node == 'undefined' || node == null) return {};
	node = node.operation.selectionSet;

	const wrapper = [];

	function renderProps(node, { withParent, parent }) {
		const fields = node.selections.map(({ name }) => name.value);
		return fields.reduce((prevData, item) => {
			if (options.noChild.includes(item)) return { ...prevData };
			const nestedOrNot = withParent ? `${parent}.${item}` : item;
			return { ...prevData, [nestedOrNot]: true };
		}, {});
	}

	function fieldsValue(nodes, string_object, options = { withParent: false }, step = 0) {
		const fields = string_object.split('.');

		const p_field = fields[step];

		if (step == fields.length) {
			return renderProps(nodes, options);
		}

		for (let i = 0; i < nodes.selections.length; i++) {
			const node = nodes.selections[i];
			if (node.name.value == p_field) {
				options.parent = node.name.value;
				return fieldsValue(node.selectionSet, string_object, options, (step += 1));
			}
		}
	}

	for (let item of lists) {
		wrapper.push(fieldsValue(node, item.prefix, item.options) || {});
	}

	return wrapper;
}

function getProps(obj) {
	const comp = Object.entries(obj);
	return comp.map(([ key, val ]) => {
		if (typeof val !== 'object') return [ { [key]: val.toString() } ];
		return Object.entries(val).map(([ key_s, value ]) => {
			return { [`${key}.${key_s}`]: value.toString() };
		});
	});
}

function dotNotation(cor) {
	return getProps(cor)
		.reduce((prev, current) => {
			return [ ...prev, ...current ];
		}, [])
		.reduce((prev, current) => {
			return { ...prev, ...current };
		}, {});
}

module.exports = { listFields, dotNotation };