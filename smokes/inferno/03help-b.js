module.exports = {
    name: 'inferno-b',
	description: 'List of Inferno smokes for the B Bomb-Site.',
	aliases:  ['inf-b'],
	execute(message, args) {
			if (!args.lenght){ 
			// B Site smokes
			message.channel.send({embed: {
				color: 7357942,
				title: "Hey future pro!",
				description: "Here's the list of Inferno smokes for the B Bomb-Site.",
				fields: [
					{name: "inferno-b-ct, inf-b-ct",
					value: "B Site entrance smoke from CT."},
					{name: "inferno-b-oranges, inf-b-oranges",
					value: "B Site entrance smoke from Oranges."},
					{name: "inferno-b-retake, inf-b-retake",
					value: "B Site retake smoke from Motorway. Smoke blocks vision from the entire site."},
					{name: "inferno-b-wall1, inf-b-wall1",
					value: "B Site smoke wall. First of the two smokes."},
					{name: "inferno-b-wall2, inf-b-wall2",
					value: "B Site smoke wall. Second of the two smokes."},
					{name: "inferno-banana-ct, inf-banana-ct",
					value: "Banana fast smoke from CT."},
					{name: "inferno-banana-deep, inf-banana-deep",
					value: "Banana deep smoke from B Site entrance."},
					{name: "inferno-banana-oneway, inf-banana-oneway",
					value: "Banana one-way smoke from Sandbags."},
					{name: "inferno-coffins, inf-coffins",
					value: "Coffins smoke from Banana."},
					{name: "inferno-ct, inf-ct",
					value: "CT smoke from Banana."},
			]}})}}}