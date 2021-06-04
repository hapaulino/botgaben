module.exports = {
    name: 'inferno',
	description: 'List of Inferno flashbangs for the B Bomb-Site.',
	aliases:  ['inf'],
	execute(message, args) {
			if (!args.lenght){ 
			// B Site flashbangs
			message.channel.send({embed: {
				color: 7357942,
				title: "Hey future pro!",
				description: "Here's the list of Inferno flashbangs for the B Bomb-Site.",
				fields: [
					{name: "inferno-b, inf-b",
					value: "B Site flash from Banana."},
					{name: "inferno-b-ct, inf-b-ct",
					value: "B Site flash from CT."},
					{name: "inferno-b-oranges, inf-b-oranges",
					value: "B Site flash from First Oranges."},
					{name: "inferno-b-rush, inf-b-rush",
					value: "B Site flash from Sandbags. Bangs over CT."},
					{name: "inferno-banana, inf-banana",
					value: "Banana flash bottom of Banana. Bangs behind the wall."},
					{name: "inferno-banana-coffins, inf-banana-coffins",
					value: "Banana flash from Coffins."},
					{name: "inferno-banana-ct, inf-banana-ct",
					value: "Banana flash from CT. Useful to set AWPers to peek down early round."},
					{name: "inferno-banana-pop, inf-banana-pop",
					value: "Banana pop flash from Sandbags."},
					{name: "inferno-banana-ramp, inf-banana-ramp",
					value: "Banana flash from T-Ramp."},
					{name: "inferno-coffins, inf-coffins",
					value: "Coffins pop flash from Coffins."},
			]}})}}}