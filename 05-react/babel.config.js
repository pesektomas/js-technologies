module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					node: 'current'
				},
				useBuiltIns: "entry"
			},
		],
		[
			'@babel/preset-react'
		]
	],
	plugins: ["@babel/plugin-proposal-class-properties"]
};