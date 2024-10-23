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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/L0sQ7C3.jpeg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "237694722989";
global.owner = process.env.OWNER_NUMBER || "237694722989";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/5YyEL4z.jpeg";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib056VklkU3ZNU2ZmTVEwb1JrUkpnaE12dS9PRjhzaGJKK2l6ek1jSnpWWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid3h5QWorRUw2Z1RYQnNROUNscC9ndUp1SkJIWWxpcElFa29CS09VcllTYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1SFdjb05HNDRRcDRmYy9VS0NUZ1B3NjN1UGovUWZxL3FXZm5aUVJBNWswPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxdHI4ZnA2QVI0U1ZzRWhMNmVlYkFhZHRBUzAxcnpLNy9FcUF0cFJ4WGlFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhPOTZ3ZjUwNDlhT0NPbmxuV0s1TUFmalVvaDkzM3c4dzNibEdWWUdCMVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFXeXE4QkhSdVMxSktsSmp2OEJudzFYSjEzbGVwK2U1NkRBRm4xL29SaVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicURiVFdUMWRENW1IS0hrUW9jU2JFZkRRZklWRGZIeWVHZEhJdWlVYjVFRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTm9WSGNMY2t2eXNWS3hRTHhnV0hTNmF3VDd5V2xYVi9ETEtmUjJYTHNCTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhwVElPc1N0WWNEbHAvN21JTUt5ei9LMnY2TnFDcFViMUVFdTV3VWJ0dTdwMEorMUJzZGRaK0JpbGlTYlI5NC9Fb0lOaERPMEpiQjdPOVlSWW5mR2dnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMsImFkdlNlY3JldEtleSI6IkZHU2dCSGFDQXhjbk5rd25XaXJJWHhqb0hkRGNub3o3dGJTZXJ2YzVET0k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjR0VlJIQTdJVHYydGtLYUZRRGhONVEiLCJwaG9uZUlkIjoiZGIwMzhjODAtNzE0ZS00Y2FlLTlhZTMtOWU2MWU2MDEzODI2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJpOE5nQnBuU3pUaHE1aDZCVkFHTzVWZVpvbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPVUw0K21IZVRER0d4U2JMRTdLTVUzYkpERm89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSzY4REUxTVciLCJtZSI6eyJpZCI6IjIzNzY5NDcyMjk4OTo4QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMYjJwdjhGRUlHaDQ3Z0dHQVVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJHTUdIYkk1cUtxOGZTMHVJTXRRWEhXUzlCNzEvWWJOcDcwRndSbG5QK1JRPSIsImFjY291bnRTaWduYXR1cmUiOiIvT1JYN1pKd2lGaHZHMk1qaUNYTTd1RjBWUFRXUEJOMjJJTUZaN081NVp4c2NBYmhYWnVuOHZyRWEzYjRCOHlvNDRKSzJMeHkxZEcvOEsvMjdTQ1hBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYm5zS3UrT24zQXM2dUtCWGgzQmFKYXpVTDZjb3pDOXVvMnNGbVJDUVgrd3Q4VFZnQlBuRGlOZ1lIelV3SGd0SXM5V2ZZa3B3eWxlb2NUd2VpMTRaaEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzc2OTQ3MjI5ODk6OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSakJoMnlPYWlxdkgwdExpRExVRngxa3ZRZTlmMkd6YWU5QmNFWlp6L2tVIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI5Njc5NTA0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUE4VCJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "𓆩ᬼ⃟𝑲𝑨𝑹𝑴𝑨𝑬𝑳⛃⃟༄ 亗𝐓𝐘𝐑𝐀𝐍𝐓亗࿐",
  ownername: process.env.OWNER_NAME || "𝑲𝑨𝑹𝑴𝑨𝑬𝑳 𝑺𝑨𝑺𝑨𝑲𝑰",
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
