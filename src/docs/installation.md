---
title: "Installation"
description: "How to install BeaconMC and its dependencies."
order: 1
---

# Installation

## Requirements

The BeaconMC server is developped with Python 3.11, so you need to install it before to run the server. If you don't know how to install it, you can download the installer on the official Python website. Make you sure to install a 3.x Python version, else the server will not work.
You also need to install some librairies, the complete dependencies here (but the installation command should be checked, because it can change with the time):

```
hashlib (pip install hashlib)
plateform (pip install plateform)
json (pip install json)
and some other that are provided on the Python installation.
```

If a ModuleNotFoundError occurs when you start the server, consider checking this requirements and/or re-installing the project (see the next section)

## Installation

To download BeaconMC, click on the download link. Then, place the zip file in a separated folder and uncompress it (else it will not work). Then install the requirements, and run the start.py file. You should get a message asking to agree to the Minecraft EULA. Open eula.txt and set eula=true. You server is now ready.
