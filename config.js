//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/dvUNolp.jpeg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "24107068316";
global.owner = process.env.OWNER_NUMBER || "24107068316";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/dvUNolp.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUV0WFR3ekEyT2g0WDNhcDlHUWpudU1lZTdpQ1F6bmh3RWRkZXF4T2IwRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiazBWRVpybFUxalhKVms4ZWx6RjNhQU9SZmtNN0RYRTJkVER4VkdYeVhRND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLRkZPWitNWFVxM0IxUzJiRzJwZ3NUNzBDbWxxa1lPVENjTEhXR3dJY1ZVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTVTNTZkRkQ2NTOVJ1eFZyOE1vTk5kZnpwU3l4RkIxbUlmRlFocGViUUV3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFNK1pkUENYdjZHL0JqYjFBWGE5U1hEQzhlTHJsYXlaaThEUzBid2pMRU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii83bitsK1dSUmZqbUpOSEhoUTEyTUpOZ3B1M0tUY3RtckRJSHlnRE1wR0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR1BlNnVhM0c5U1JDZFBqb2E4OEt0Y2NsWW1wK1l0NG05SXd6M3BmeUJuRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUFJBQ1ZMakh3SUdLdHFNS01GT2dNL1UvQWdzTnVNeHc0UHV2d2p2a2JFVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpKVUVGNzMydTdBTTNRd3ExL1VTMjJnL1BreFZRRlRsdU1QYytCeU9RQnVqcHUwaXg5OTZibmxScGlFWVVlNUk5TzBkdHpKKzBmTkM1ZmtqeTQ5WWlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU4LCJhZHZTZWNyZXRLZXkiOiJqQlRnRVpaMWNQaGcyVldVMGNMbjFuN3lHU0tjYXJQRG91RTRiRFNIaE80PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJENmJaV1UtVlE1NnBmdGJwUUFpdTNRIiwicGhvbmVJZCI6ImUxODQxN2NkLWZiNTItNDM0NC1hZmU2LThiOGZjZTYzNTlmMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMbUhPR1dxUWlYeXZlMlZ1Z3RhMFFrSnhqVUE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQkU5eTZpTlZKRysxenhxejlWcTBGZm5QcWxnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjJSM0ZES1g0IiwibWUiOnsiaWQiOiIyNDEwNzA2ODMxNjo4QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKMzd4WFlRM1BldnVBWVlBaUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJqQXVsREVsb3MxSmRmMy9KN2FlbUxKYlF2TGZ6VGM4N0EyL2JJQjBEK1c4PSIsImFjY291bnRTaWduYXR1cmUiOiJ1SGk0T2ltdzV6cUlFeDNmRjVJbDdmaG8yN1BMak1EdnZaY0t4a2lwaTNDZDBxTkM3dXBlclFmanA3cldhNHdHS0RKWlh6SXg2VHpZUUl1dk9CTEtBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOTdIWEd6Nm9NWE1IMHJnemtWdUxHTjhYZVdEekk2MkhFQnRndE1rK0JrS1o5VkpUV0x3dkVyMXdCVWNlMkpBdGdKUEpoYWQ4azN1NGFWVVpNZzZGaHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNDEwNzA2ODMxNjo4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQll3THBReEphTE5TWFg5L3llMm5waXlXMEx5MzgwM1BPd052MnlBZEEvbHYifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjg4Mzg2MzN9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "★",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "MADRE DOYENNE",
  ownername: process.env.OWNER_NAME || "MADRE DOYENNE",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
