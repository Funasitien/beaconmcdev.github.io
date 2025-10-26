---
title: "Configuration"
description: "Server configuration options for BeaconMC (config.json fields explained)."
order: 2
---

# Configuration
## Configuration file

In your BeaconMC folder, open the "config.json" file. If it doesn't exist, you should reinstall the server. The content should looks like this :

```json
{
"whitelist": false,
"max_players": 10,
"motd": "Welcome to BeaconMC !",
"online_mode": true,
"enforce_offline_profiles": true,
"lang": "en_us",
"debug_mode": true, 
"ip": "0.0.0.0", 
"port": 25565, 
"prevent_proxy_connexion": true
}
```

The following section lists all the options and their meaning.
### whitelist

    true: if you want to allow to connect only the specified people. (not implemented) (default)
    false: if you want to allow everyone to connect

### max_players

Define how many players can be connected on the server. Can be any positive and entier number. Note that if a too big value is set, it can impact the server performances.

### motd

This option let you choose the text displayed on the players server list. Works as vanilla servers. You can use minecraft.tools to generate your motd.

### online_mode

    true: Verify connecting players using the Mojang's authentification scheme. Forbids cracked players to connect, but prevents identity thief and man-in-the-middle hack with encryption.
    false: Anyone can connect to the server, but it is a huge security flaw for your server.

### enforce_offline_profiles

An option implemented to limit the flaw of the offline mode, using IP adresses.
### lang

A string representing the lang for messages sent to players, not to the console !

View how to add customs langs in the 3 - Lang section
### debug_mode

A boolean activing or not the debug mode (more informations in the console and in the logs file.
### ip

A string for the IP address of the server used by clients to connect. Used for the prevent_proxy_connections settings.
### port

An integer that represents the port used by clients to connect to the server. Default and recommended value is 25565. Don't modify this setting except if you know what you are doing !

## Server icon

You are able to change the server icon by changing the server-icon.png file. It must be a 64x64 PNG file to work, and the default icon is the BeaconMC icon.

## Langs

Defaults langs are English (en_us), French (fr_fr) and Spanish (es) langs, but you can create customs or add new by creating a new json file at /utils/locale/{langname}.json, and adding the same translation keys as the others. Then you just have to change the lang in the lang configuration field.
