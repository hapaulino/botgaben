module.exports = {
    name: 'ancient',
	description: 'List of Ancient molotovs.',
	aliases:  ['anc'],
	execute(message, args) {
			if (!args.lenght){ 
			// A Site smokes
			message.channel.send({embed: {
				color: 7357942,
				title: "Hey future pro!",
				description: "Here's the list of Ancient molotovs.",
				fields: [
					{name: "ancient-dark, anc-dark",
					value: "B Bomb-Site Dark molotov from Lane."},
					{name: "ancient-door, anc-door",
					value: "B Door molotov from B Bomb-Site."},
					{name: "ancient-lane, anc-lane",
					value: "Lane molotov from B Alley."},
					{name: "ancient-pillar-lane, anc-pillar-lane",
					value: "B Bomb-Site Pillar molotov from Lane."},
					{name: "ancient-pillar-ramp, anc-pillar-ramp",
					value: "B Bomb-Site Pillar molotov from B Ramp."},
					{name: "ancient-ramp, anc-ramp",
					value: "B Ramp molotov from B Bomb-Site."},
			]}})
		}}}