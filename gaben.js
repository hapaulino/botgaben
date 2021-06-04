const fs = require('fs');
const Discord = require('discord.js');
const {prefix, smk, mltv, flshbng, token} = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

// Replies for commands with !flash
client.on('message', messageFlash => {
	if (messageFlash.content.startsWith(flshbng) && !messageFlash.author.bot) {

    const Flashes = fs.readdirSync('./flashbangs');
    for (const folder of Flashes) {
        const Files = fs.readdirSync(`./flashbangs/${folder}`).filter(file => file.endsWith('.js'));
        for (const file of Files) {
            const flashbang = require(`./flashbangs/${folder}/${file}`);
            client.commands.set(flashbang.name, flashbang);}}
        
	const argsflash = messageFlash.content.slice(flshbng.length).trim().split(/ +/);
	const flashbang = argsflash.shift().toLowerCase();

	const commandflash = client.commands.get(flashbang)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(flashbang));

	try {
		commandflash.execute(messageFlash, argsflash);}
        catch (error) {
            console.error(error);
            messageFlash.channel.send('Command not available.');  
        }}});

// Replies for commands with !smoke
client.on('message', messageSmoke => {
	if (messageSmoke.content.startsWith(smk) && !messageSmoke.author.bot) {

    const Smokes = fs.readdirSync('./smokes');
    for (const folder of Smokes) {
        const Files = fs.readdirSync(`./smokes/${folder}`).filter(file => file.endsWith('.js'));
        for (const file of Files) {
            const smoke = require(`./smokes/${folder}/${file}`);
            client.commands.set(smoke.name, smoke);}}

	const argssmoke = messageSmoke.content.slice(smk.length).trim().split(/ +/);
	const smoke = argssmoke.shift().toLowerCase();

	const commandsmoke = client.commands.get(smoke)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(smoke));

	try {
		commandsmoke.execute(messageSmoke, argssmoke);}
        catch (error) {
            console.error(error);
            messageSmoke.channel.send('Command not available.');  
    }}});

// Replies for commands with !molotovs
client.on('message', messageMolotov => {
	if (messageMolotov.content.startsWith(mltv) && !messageMolotov.author.bot)  {

    const Molotovs = fs.readdirSync('./molotovs');
    for (const folder of Molotovs) {
        const Files = fs.readdirSync(`./molotovs/${folder}`).filter(file => file.endsWith('.js'));
        for (const file of Files) {
            const molotov = require(`./molotovs/${folder}/${file}`);
            client.commands.set(molotov.name, molotov);}}

	const argsmolotov = messageMolotov.content.slice(mltv.length).trim().split(/ +/);
	const molotov = argsmolotov.shift().toLowerCase();

	const commandmolotov = client.commands.get(molotov)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(molotov));

	try {
		commandmolotov.execute(messageMolotov, molotov);}
        catch (error) {
            console.error(error);
            messageMolotov.channel.send('Command not available.');   
    }}});

// Replies for commands with !gaben
client.on('message', messageHelp => {
	if (messageHelp.content.startsWith(prefix) && !messageHelp.author.bot) {
    
        const Help = fs.readdirSync('./help');
    for (const file of Help) {
            const help = require(`./help/${file}`);
            client.commands.set(help.name, help);}

	const argsHelp = messageHelp.content.slice(prefix.length).trim().split(/ +/);
	const help = argsHelp.shift().toLowerCase();

	const commandhelp = client.commands.get(help)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(help));

	try {
		commandhelp.execute(messageHelp, argsHelp);}
        catch (error) {
            console.error(error);
            messageHelp.channel.send('Command not available.');
    }}});

client.login(token);