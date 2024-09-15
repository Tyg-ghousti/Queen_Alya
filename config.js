//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "2348100835767,2348123179877";
global.owner = process.env.OWNER_NUMBER || "2348100835767";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibURSRWowemdZRnllb1lHa2tibGxxS0pvelczVFhrcmduTU5ZczRieFJsST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid000SG1OOGc2UlQ4WHhNZkd5cmdHNEcrLzh0QWt4eGMxSjNFTU9vMWcxQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSnJSNmNENVp0VkdkdTZMREFObmc3UDNIVTdFdUFITndmM0dvZ2g0N1dZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPWVlmTTd1VHRYS2xoQjVvamFjTjgySFdPUnhRdDEvNjFxeTY5WDJMYjFVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitBalNxaTJEWk85bm5zMkp5WHJlRlhSa291a05vMHBwZ0EyZU5CcFlzWEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRkRlMvM2QrM1luZ0llRHBGMEova0NwTW1DcjlFcG9iSXFMV3VYWm1ZMGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUg1ME9JSFhwSHRPTktHQWM0NTNLaTljaGV2eE9FN3JENHI1WGlSRVZXVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib00xQkZrMG5LTUR0NTBwUzJQN0ZvZkdLY3ArTHA0c0VzdTlNWXpBekJubz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijlia0lKcU1qVDJISEdGUllqL1JHTGUrUmljRlJjb1EyRXowd3BhYlFxYzl5M3Zpa2MzNzVaNlg5Y1laV0E5Q2o4eVR0dHoxRzJ0Q3NJa1p4ODBIRUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAsImFkdlNlY3JldEtleSI6ImVMQTkyekJIRStmS3hVRkVYT3ZzendTQzJZYVVBWmIvaXlLbFJVVHU4Z2s9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik9wbVotVmxnUmhTaUxzWW84alBRdFEiLCJwaG9uZUlkIjoiYzAxZmNiOTktMjAzMy00ZjI0LThiMWMtODZlNTAyMzkwY2E5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlI2blRTVUN5VzgyY01Kb1ZDelVvSGVVY1h4TT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUV21DbjNEdFVqL1Q4dkRWNkRZNkNOWWErYzQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWEg4SFRHV1IiLCJtZSI6eyJpZCI6IjIzNDcwNDA0NjMzOTE6NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJ+VMKlRyDDl82cw5cgR0hPU1Q/wr/CpVR+4oC64oC64oC64oC64oC68JODtSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTHlYenJRR0VKYkptN2NHR0I4Z0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiM2ExNFB1eTFTOUdDZ0FKd29tRko3MWJuekFqZnZHdDBtYTNMYy82RTRuND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiY24wVzhpUVltQVpQbFdhU1hDSmRVYVpta0s0S2pmSTlvRWJzY2NVZjNnalg4ckNTK3pwbkR2d05KemYyNjdwMHhnSFBrVEtuR1pvSXU5blAyWmt2QlE9PSIsImRldmljZVNpZ25hdHVyZSI6InpqVDBWTzRFUWVxR1V2Zjg4Z1RvMk5hQ2p0bVRsM0FCMUVBNEpkVy8yVmZRNUljL3J2UHFMdmNqM1F2N3l5VUNGRjFyVUw5K0RCMWo1ek5MZUVRZUFBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0NzA0MDQ2MzM5MTo2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmQydGVEN3N0VXZSZ29BQ2NLSmhTZTlXNTh3STM3eHJkSm10eTNQK2hPSisifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjY0MDc4NDN9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
