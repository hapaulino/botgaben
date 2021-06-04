module.exports = {
    name: 'mirage-mid',
	description: 'List of Mirage smokes for Mid.',
	aliases:  ['mrg-mid'],
	execute(message, args) {
			if (!args.lenght){ 
			// Mid smokes
			message.channel.send({embed: {
				color: 7357942,
				title: "Hey future pro!",
				description: "Here's the list of Mirage smokes for Mid.",
				fields: [
					{name: "mirage-catwalk, mrg-catwalk",
					value: "Catwalk smoke from B Short."},
					{name: "mirage-conn-spawn, mrg-conn-spawn",
					value: "Connector smoke from T Spawn."},
					{name: "mirage-mid, mrg-mid",
					value: "Top Mid smoke from T Spawn."},
					{name: "mirage-short-mid, mrg-short-mid",
					value: "Short smoke from Top Mid."},
					{name: "mirage-short-under, mrg-short-under",
					value: "Short smoke from Underpass/Bottom Mid."},
					{name: "mirage-window-mid, mrg-window-mid",
					value: "Window smoke from Top Mid."},
					{name: "mirage-window-spawn, mrg-window-spawn",
					value: "Window smoke from T Spawn."},
					{name: "mirage-window-under, mrg-window-under",
					value: "Window smoke from Underpass."},
			]}})}}}