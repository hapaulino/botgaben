module.exports = {
    name: 'ancient-a',
	description: 'List of Ancient smokes for the A Bomb-Site.',
	aliases:  ['anc-a'],
	execute(message, args) {
			if (!args.lenght){ 
			// A Site smokes
			message.channel.send({embed: {
				color: 7357942,
				title: "Hey future pro!",
				description: "Here's the list of Ancient smokes for the A Bomb-Site.",
				fields: [
					{name: "ancient-cross, anc-cross",
					value: "A Bomb Site cross smoke from Yard."},
					{name: "ancient-main-ct, anc-main-ct",
					value: "A Main smoke from CT."},
					{name: "ancient-main-spawn, anc-main-spawn",
					value: "A Main smoke from CT Spawn."},
					{name: "ancient-ruins-left, anc-ruins-left",
					value: "A Ruins left side smoke from A Hall."},
					{name: "ancient-ruins-right, anc-ruins-right",
					value: "A Ruins right side smoke from A Hall."},
					{name: "ancient-triple, anc-triple",
					value: "A Triple Box smoke from Yard."},
					{name: "ancient-tunns, anc-tunns",
					value: "A Tunnels smoke from Yard."},
			]}})}}}
