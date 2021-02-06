var rpc = require("discord-rpc");
const client = new rpc.Client({ transport: "ipc" });
client.on("ready", () => {
  console.log("Rich Presence is now active!");
  client.request("SET_ACTIVITY", {
    pid: process.pid,
    activity: {
      details: "FIRST LINE HERE",
      state: "SECOND LINE HERE",
      assets: {
        large_image: "NAME OF THE RICH PRESSENCE ASSET", //in discord dev portal
      },
      buttons: [{label: "(BUTTON NAME HERE)", url: "https://black-tooth.xyz"}, {label: "(BUTTON 2 NAME HERE)", url: "https://top.gg/bot/778582556311945227/vote" }] // Links in url
    },
  });
});
client.login({ clientId: "YOUR CLIENT ID HERE (NOT USER ID)" }).catch(console.error);
