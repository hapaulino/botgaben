module.exports = {
    name: 'mirage-a',
	description: 'List of Mirage smokes for the A Bomb-Site.',
	aliases:  ['mrg-a'],
	execute(message, args) {
			if (!args.lenght){ 
			// A Site smokes
			message.channel.send({embed: {
				color: 7357942,
				title: "Hey future pro!",
				description: "Here's the list of Mirage smokes for the A Bomb-Site.",
				fields: [
					{name: "mirage-a-fast, mrg-a-fast",
					value: "A Bomb Site smoke for fast plant from A Ramp."},
					{name: "mirage-cross, mrg-cross",
					value: "A Bomb Site cross smoke from Underpass."},
					{name: "mirage-cross-catwalk, mrg-cross-catwalk",
					value: "A Bomb Site cross smoke from Catwalk. Smoke blocks vision from Ticket and offers a one-way towards Triple Box."},
					{name: "mirage-ct, mrg-ct",
					value: "CT smoke from T Spawn."},
					{name: "mirage-ct-tetris, mrg-ct-tetris",
					value: "CT smoke from Tetris."},
					{name: "mirage-jungle, mrg-jungle",
					value: "Jungle smoke from A Ramp."},
					{name: "mirage-jungle-tetris, mrg-jungle-tetris",
					value: "Jungle smoke from Tetris."},
					{name: "mirage-palace-conn, mrg-palace-conn",
					value: "Palace smoke from Top Connector."},
					{name: "mirage-palace-kitchen, mrg-palace-kitchen",
					value: "Palace support smoke from Outside Kitchen."},
					{name: "mirage-palace-under, mrg-palace-under",
					value: "Palace smoke from Under Balcony."},
					{name: "mirage-ramp, mrg-ramp",
					value: "Ramp smoke from CT."},
					{name: "mirage-stairs, mrg-stairs",
					value: "Stairs smoke from A Ramp."},
					{name: "mirage-topconn-tetris, mrg-topconn-tetris",
					value: "Top Connector smoke from Tetris."},
			]}})}}}