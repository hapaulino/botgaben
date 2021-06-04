module.exports = {
    name: 'ancient',
	description: 'List of Ancient smokes.',
	aliases:  ['anc'],
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
			]}})
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
			]}})
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
			]}})
		}}}
