module.exports = {
    name: 'inferno-a',
	description: 'List of Inferno smokes for the A Bomb-Site.',
	aliases:  ['inf-a'],
	execute(message, args) {
			if (!args.lenght){ 
			// A Site smokes
			message.channel.send({embed: {
				color: 7357942,
				title: "Hey future pro!",
				description: "Here's the list of Inferno smokes for the A Bomb-Site.",
				fields: [
					{name: "inferno-a-retake, inf-a-retake",
					value: "A Site retake smoke from Motorway. Smoke blocks vision from Pit and Mini Pit."},
					{name: "inferno-apps-oneway, inf-apps-oneway",
					value: "Apartments one-way smoke from Apartments."},
					{name: "inferno-arch, inf-arch",
					value: "Arch smoke from Second Mid."},
					{name: "inferno-balcony-2nd, inf-balcony-2nd",
					value: "Balcony smoke from Second Mid."},
					{name: "inferno-balcony-arch, inf-balcony-arch",
					value: "Balcony smoke from Arch."},
					{name: "inferno-dribble, inf-dribble",
					value: "Balcony dribble smoke from Apartments."},
					{name: "inferno-library, inf-library",
					value: "Library smoke from Top Mid."},
					{name: "inferno-long-deep, inf-long-deep",
					value: "Long deep smoke from Top Mid."},
					{name: "inferno-long, inf-long",
					value: "Long smoke from Second Mid."},
					{name: "inferno-mid, inf-mid",
					value: "Top Mid smoke from T-Ramp."},
					{name: "inferno-mini, inf-mini",
					value: "Mini Pit smoke from Second Mid."},
					{name: "inferno-moto, inf-moto",
					value: "Moto smoke from Top Mid."},
					{name: "inferno-pit-oneway, inf-pit-oneway",
					value: "Big Pit one-way smoke from Big Pit."},
					{name: "inferno-pit, inf-pit",
					value: "Big Pit smoke from Second Mid."},
					{name: "inferno-short, inf-short",
					value: "Short smoke from Second Mid."},
			]}})}}}