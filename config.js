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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+27 64 346 6522";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_30_06_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDksXG4gICAgICAgIDExMixcbiAgICAgICAgMTA1LFxuICAgICAgICAyLFxuICAgICAgICAyMixcbiAgICAgICAgMTAwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjksXG4gICAgICAgIDI1MixcbiAgICAgICAgNzQsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyLFxuICAgICAgICAyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzLFxuICAgICAgICA4NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTksXG4gICAgICAgIDIwNixcbiAgICAgICAgNzEsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDQzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjEyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTE3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTcxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTA4LFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTksXG4gICAgICAgIDUzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEsXG4gICAgICAgIDkyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDYwLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTYyLFxuICAgICAgICA3NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTAyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDksXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzksXG4gICAgICAgIDYwLFxuICAgICAgICAyMTksXG4gICAgICAgIDUsXG4gICAgICAgIDksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTEzLFxuICAgICAgICA0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDk3LFxuICAgICAgICA5NixcbiAgICAgICAgNDUsXG4gICAgICAgIDU1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTI0LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTMsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIsXG4gICAgICAgIDExNixcbiAgICAgICAgNzAsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDY4LFxuICAgICAgICAzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDc2LFxuICAgICAgICA3NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAzOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDksXG4gICAgICAgIDc5LFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjksXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTAwLFxuICAgICAgICA3NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxODYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDMyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODIsXG4gICAgICAgIDE4MixcbiAgICAgICAgNixcbiAgICAgICAgNTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTAxLFxuICAgICAgICA1OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTMyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjhpa2NkMVhWdzV4RTBxdmVncFdOaktGNW9pZUhEKzFVdDdOVlp3UytBOUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjNYcmRKdGtQUWNtY1lhLUgwaGt1R3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjNiN2IzZTctYjkwNi00NGRiLTgyMzMtYzQ4OWNiNjVkY2IwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYwLFxuICAgICAgMjUwLFxuICAgICAgNzMsXG4gICAgICAxMTksXG4gICAgICAxNSxcbiAgICAgIDI1MSxcbiAgICAgIDMwLFxuICAgICAgMjI0LFxuICAgICAgNDgsXG4gICAgICAxNDQsXG4gICAgICA3NCxcbiAgICAgIDIxMixcbiAgICAgIDIxMyxcbiAgICAgIDI0OCxcbiAgICAgIDIwNyxcbiAgICAgIDEwMSxcbiAgICAgIDQyLFxuICAgICAgMTU3LFxuICAgICAgMjEyLFxuICAgICAgODRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjYsXG4gICAgICAyMDQsXG4gICAgICA1MCxcbiAgICAgIDgsXG4gICAgICAxNTksXG4gICAgICAyMTcsXG4gICAgICAxNDgsXG4gICAgICA5NCxcbiAgICAgIDI0NSxcbiAgICAgIDIxMCxcbiAgICAgIDEzMSxcbiAgICAgIDQ5LFxuICAgICAgMjQ2LFxuICAgICAgMTYsXG4gICAgICAxNjYsXG4gICAgICAxNjIsXG4gICAgICAyMDcsXG4gICAgICA3MCxcbiAgICAgIDksXG4gICAgICAxNzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTUpWRVNETTJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI3NjQzNDY2NTIyOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjM4NjA3OTk3ODk4ODMxOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTDNmZ3BnREVObTVrYk1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJZUjl2UngxSVAyUWtaYlFWLzFwMnhjUEltS3htNmJrQ0RJdHU0Uk93UVVjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInI2c25IQXl5c09xS3NMdGpkbEJOVnltN3hUZEhyRGNBMEZKNk1wbG1UZW9lbmRLbjk0bW1Vbmt5T29kWndtRE1IRmZqTVlyOWNIRVpUY2tCeEw5dkJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlA0SmQ2Nk5UTjlYb044djIyNkkvT0piUi90N3RDZERVY2tTUXFFSkExNjlERFZZUkx2MjN1eGE4dytwYzRDVnJQMDg5Y21VK1libjNlMlYzRjhxSUJnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI3NjQzNDY2NTIyOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTc4NTM0MDdcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
