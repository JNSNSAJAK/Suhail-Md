const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "27842930255";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_31_06_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDY2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMzLFxuICAgICAgICA4NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDksXG4gICAgICAgIDk4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzEsXG4gICAgICAgIDcxLFxuICAgICAgICA5LFxuICAgICAgICA4NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDkxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDk1LFxuICAgICAgICA3LFxuICAgICAgICA0NixcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjIzLFxuICAgICAgICA4NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDUyLFxuICAgICAgICAyMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTAsXG4gICAgICAgIDcyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNixcbiAgICAgICAgMzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDUxLFxuICAgICAgICA0OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDUxLFxuICAgICAgICA5OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDQ3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDQ2LFxuICAgICAgICA2OSxcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDY4LFxuICAgICAgICA4NixcbiAgICAgICAgMjI2LFxuICAgICAgICA3NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAzNixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDg2LFxuICAgICAgICA4MixcbiAgICAgICAgMTc3LFxuICAgICAgICAyLFxuICAgICAgICA0MSxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA1MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQzLFxuICAgICAgICAxNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDk1LFxuICAgICAgICAxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODUsXG4gICAgICAgIDc3LFxuICAgICAgICA0LFxuICAgICAgICAzOCxcbiAgICAgICAgMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjksXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODcsXG4gICAgICAgIDQ2LFxuICAgICAgICAzNixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjM5LFxuICAgICAgICA2MCxcbiAgICAgICAgODYsXG4gICAgICAgIDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODAsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDMyLFxuICAgICAgICA1MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzksXG4gICAgICAgIDI1MixcbiAgICAgICAgOTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDMsXG4gICAgICAgIDMzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJySDFRMjMxM0RYb0RZUU1GRkhhMUhqWC9DbGpaSFBoRmxOQ2FMWWdyKzNnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIwRThXa0NodFFYU1I1VFJKeDRzb3J3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjI2NzBjMmEwLTA1YWMtNDNiNS04YjA3LWE4MGQ1ZjNjOWZhOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4OCxcbiAgICAgIDE1OSxcbiAgICAgIDEzMyxcbiAgICAgIDE0OCxcbiAgICAgIDk5LFxuICAgICAgMTIxLFxuICAgICAgMTQxLFxuICAgICAgMTI4LFxuICAgICAgMjI1LFxuICAgICAgOTIsXG4gICAgICAxMDgsXG4gICAgICAxNDIsXG4gICAgICA3NSxcbiAgICAgIDE1NSxcbiAgICAgIDEwMCxcbiAgICAgIDI0OCxcbiAgICAgIDEyNCxcbiAgICAgIDE0NixcbiAgICAgIDY0LFxuICAgICAgMjA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MCxcbiAgICAgIDExOCxcbiAgICAgIDExNixcbiAgICAgIDExOCxcbiAgICAgIDEzNCxcbiAgICAgIDIyNCxcbiAgICAgIDIyLFxuICAgICAgMTE3LFxuICAgICAgNjUsXG4gICAgICAxMzEsXG4gICAgICAxMjMsXG4gICAgICAyMjYsXG4gICAgICAyNDAsXG4gICAgICA1NixcbiAgICAgIDEyNCxcbiAgICAgIDk4LFxuICAgICAgMzAsXG4gICAgICAxNDMsXG4gICAgICAyNTEsXG4gICAgICAxMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4UU0xNVE0UlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjc4NDI5MzAyNTU6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJrcmVlcDRwcmVzXCIsXG4gICAgXCJsaWRcIjogXCI1MjMzMDM2ODEwMjYyOToxNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJN2RnWm9CRUtERm5iTUdHQTBnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkJYWThKeHMwaGVXVjU1L1FIM2YyY3RxVnN3N05mM2EzTTRxZEtmbnhkMGs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicHU3WXQ3SXdLdStzSnl0a0s0OXJjYnNCRmF2NFhjODZIL3Jhend0ZE1SSzVkYXZ3ZExEc3hMMlJXKzJVaXpEZXRhb0doQzFFQWpvVS92eW1IUHNEQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidlR4NWJJbXRiMGNmZzhRRFc0YXpVeStnRUFkbG5MaXpDZE15a3U3RlFqZmpxZElJRCthdFIySHpSMDhPb2RMSUhnMm1NaE14dGpYd0tIMUMyaTFoREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjc4NDI5MzAyNTU6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4MDUxNDkyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUEhKXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQSEouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJqWDBRMXB4VDFsVDh2VEkzY1hiTnBMcGIwemtxdjlNbEdIczJaK0Nha2tFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMyMjk4OTcxMCxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTYwMjgzNzcxOTlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
