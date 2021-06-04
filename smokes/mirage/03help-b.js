module.exports = {
    name: 'mirage-b',
	description: 'List of Mirage smokes for the B Bomb-Site.',
	aliases:  ['mrg-b'],
	execute(message, args) {
			if (!args.lenght){ 
			// B Site smokes
			message.channel.send({embed: {
				color: 7357942,
				title: "Hey future pro!",
				description: "Here's the list of Mirage smokes for the B Bomb-Site.",
				fields: [
					{name: "mirage-apps, mrg-apps",
					value: "Apartments smoke from B Bomb Site."},
					{name: "mirage-b-fast, mrg-b-fast",
					value: "B Bomb Site smoke for fast plant from Apartments."},
					{name: "mirage-b-retake, mrg-b-retake",
					value: "B Bomb Site retake smoke from Outside Kitchen."},
					{name: "mirage-balcony, mrg-balcony",
					value: "Balcony smoke from Apartments."},
					{name: "mirage-bench, mrg-bench",
					value: "Bench smoke from Apartments."},
					{name: "mirage-kitchen-door, mrg-kitchen-door",
					value: "Kitchen door smoke from Apartments."},
					{name: "mirage-kitchen-window, mrg-kitchen-window",
					value: "Kitchen window smoke from Apartments."},
					{name: "mirage-short, mrg-short",
					value: "Short smoke from Apartments."},
					{name: "mirage-short1, mrg-short1",
					value: "B Short Arch 1st smoke from Apartments."},
					{name: "mirage-short2, mrg-short2",
					value: "B Short Arch 2nd smoke from Apartments."},
			]}})}}}