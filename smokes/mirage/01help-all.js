module.exports = {
    name: 'mirage',
	description: 'List of Mirage smokes.',
	aliases:  ['mrg'],
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
			]}})
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
			]}})
			// Mid smokes
			message.channel.send({embed: {
				color: 7357942,
				title: "Hey future pro!",
				description: "Here's the list of Mirage smokes for Mid.",
				fields: [
					{name: "mirage-catwalk, mrg-catwalk",
					value: "Catwalk smoke from B Short."},
					{name: "mirage-conn-spawn, mrg-conn-spawn",
					value: "Connector smoke from T Spawn."},
					{name: "mirage-mid, mrg-mid",
					value: "Top Mid smoke from T Spawn."},
					{name: "mirage-short-mid, mrg-short-mid",
					value: "Short smoke from Top Mid."},
					{name: "mirage-short-under, mrg-short-under",
					value: "Short smoke from Underpass/Bottom Mid."},
					{name: "mirage-window-mid, mrg-window-mid",
					value: "Window smoke from Top Mid."},
					{name: "mirage-window-spawn, mrg-window-spawn",
					value: "Window smoke from T Spawn."},
					{name: "mirage-window-under, mrg-window-under",
					value: "Window smoke from Underpass."},
			]}})
		}}}
