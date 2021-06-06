module.exports = {
    name: 'inferno',
	description: 'List of Inferno flashbangs.',
	aliases:  ['inf'],
	execute(message, args) {
			if (!args.lenght){ 
			// A Site flashbangs
			message.channel.send({embed: {
				color: 7357942,
				title: "Hey future pro!",
				description: "Here's the list of Inferno flashbangs for the A Bomb-Site.",
				fields: [
					{name: "inferno-a, inf-a",
					value: "A Site pop flash from Apartments."},
					{name: "inferno-apps-pop, inf-apps-pop",
					value: "Apartments pop flash from Apartments to peek House."},
					{name: "inferno-balcony, inf-balcony",
					value: "Balcony flash from Apartments."},
					{name: "inferno-boiler, inf-boiler",
					value: "Boiler flash from Apartments."},
					{name: "inferno-boiler-2nd, inf-2nd",
					value: "Boiler flash from Second Mid."},
					{name: "inferno-cross, inf-cross",
					value: "Top Mid Cross flash from Bottom Mid."},
					{name: "inferno-library, inf-library",
					value: "Library flash from Inside Library."},
					{name: "inferno-long, inf-long",
					value: "Long flash from Second Mid."},
					{name: "inferno-mid-long, inf-mid-long",
					value: "Mid pop flash from Long. Useful to peek down T-Ramp."},
					{name: "inferno-mid-short, inf-mid-short",
					value: "Mid pop flash from Short."},
					{name: "inferno-short-pit, inf-short-pit",
					value: "Short flash from Big Pit."},
					{name: "inferno-short, inf-short",
					value: "Short flash from Second Mid."},
			]}})
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