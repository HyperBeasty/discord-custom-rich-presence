var rpc = require("discord-rpc");
const client = new rpc.Client({ transport: "ipc" });
client.on("ready", () => {
  console.log("Rich Presence is now active!");
  client.request("SET_ACTIVITY", {
    pid: process.pid,
    activity: {
      details: "Add it to your server!",
      state: "https://black-tooth.xyz",
      assets: {
        large_image: "blacktooth", //in discord dev portal
      },
      buttons: [{label: "Invite!", url: "https://black-tooth.xyz"}, {label: "Vote!", url: "https://top.gg/bot/778582556311945227/vote" }]
    },
  });
});
client.login({ clientId: "807278277626298398" }).catch(console.error);
