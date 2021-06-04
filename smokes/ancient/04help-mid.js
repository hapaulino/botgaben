module.exports = {
    name: 'ancient-mid',
	description: 'List of Ancient smokes for Mid.',
	aliases:  ['anc-mid'],
	execute(message, args) {
			if (!args.lenght){ 
			// Mid smokes
			message.channel.send({embed: {
				color: 7357942,
				title: "Hey future pro!",
				description: "Here's the list of Ancient smokes for Mid.",
				fields: [
					{name: "ancient-upper, ancient-upper",
					value: "Catwalk Upper smoke from T Spawn."},
					{name: "ancient-donut, anc-donut",
					value: "Donut smoke from T Spawn."},
					{name: "ancient-elbow, anc-elbow",
					value: "Elbow smoke from A Bomb Site."},
					{name: "ancient-house-64, anc-house-64",
					value: "House smoke from T Spawn. (64-tick)"},
					{name: "ancient-house-128, anc-house-128",
					value: "House smoke from T Spawn. (128-tick)"},
					{name: "ancient-house-elbow, anc-house-elbow",
					value: "House smoke from Elbow."},
			]}})}}}