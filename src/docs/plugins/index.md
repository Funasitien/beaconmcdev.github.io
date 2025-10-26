---
title: "Plugins"
description: "Server configuration options for BeaconMC (config.json fields explained)."
order: 3
---

# Plugins
## Create a plugin

A BeaconMC plugin is a simple plugin.py file in a /plugins/name/ folder. In this file, a Plugin class with parent utils/plugins/BeaconMCPlugins must to be present, or else the plugin will not be detected. Create the class using the following code:

```py
from utils.plugins.BeaconMCPlugin import BeaconMCPlugin
class Plugin(BeaconMCPlugin):
    def __init__(self, server):
        super().__init__(self, server)
```

Next of the page coming soon
