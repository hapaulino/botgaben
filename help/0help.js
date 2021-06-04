module.exports = {
    name: '',
	description: 'Lists all the commands available for spam.',
	execute(message, args) {
			if (!args.lenght){ 
			message.channel.send({embed: {
				color: 7357942,
				title: "Hey future pro!",
				description: "Here's the carry you requested, you boosted lvl10!",
				fields: [
					{name: "Flashbangs",
					value: "*!flash command* to show the requested flashbang."},
					{name: "Molotovs",
					value: "*!molotov command* to show the requested molotov."},
					{name: "Smokes",
					value: "*!smoke command* to show the requested smoke."},
					{name: "List of flashbangs",
					value: "*!flash map* to show the available flashbangs for the map."},
					{name: "List of molotovs",
					value: "*!molotov map* to show the available molotovs for the map."},
					{name: "List of smokes",
					value: "*!smoke map* to show the available smokes for the map."},
			]}})}}}