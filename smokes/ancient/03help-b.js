module.exports = {
    name: 'ancient-b',
	description: 'List of Ancient smokes for the B Bomb-Site.',
	aliases:  ['anc-b'],
	execute(message, args) {
			if (!args.lenght){ 
			// B Site smokes
			message.channel.send({embed: {
				color: 7357942,
				title: "Hey future pro!",
				description: "Here's the list of Ancient smokes for the B Bomb-Site.",
				fields: [
					{name: "ancient-alley, anc-alley",
					value: "B Alley smoke from Lane."},
					{name: "ancient-cave, anc-cave",
					value: "B Cave smoke from Outside B."},
					{name: "ancient-cave-lane, anc-cave-lane",
					value: "B Cave smoke from Lane."},
					{name: "ancient-door, anc-door",
					value: "B Door fast smoke from CT Spawn."},
					{name: "ancient-lane, anc-lane",
					value: "Lane smoke from B Backsite."},
					{name: "ancient-long, anc-long",
					value: "B Long smoke from Lane."},
					{name: "ancient-ramp, anc-ramp",
					value: "B Ramp smoke from CT Spawn."},
			]}})}}}