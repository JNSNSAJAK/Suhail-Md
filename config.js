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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "27 64 346 6522";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_12_06_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDg1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDksXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY2LFxuICAgICAgICA2NyxcbiAgICAgICAgODUsXG4gICAgICAgIDg1LFxuICAgICAgICAyLFxuICAgICAgICA0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDMxLFxuICAgICAgICAyMixcbiAgICAgICAgMTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDcxLFxuICAgICAgICAzMixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDU1LFxuICAgICAgICA0NyxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg0LFxuICAgICAgICA5MixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQwLFxuICAgICAgICAyNixcbiAgICAgICAgOTQsXG4gICAgICAgIDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTI3LFxuICAgICAgICA5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDY4LFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjEwLFxuICAgICAgICA0OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4LFxuICAgICAgICAxODgsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTk5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTYwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjQwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDg3LFxuICAgICAgICAxODIsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE1NixcbiAgICAgICAgNzksXG4gICAgICAgIDIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI3LFxuICAgICAgICA1MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDQsXG4gICAgICAgIDEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDc3LFxuICAgICAgICA0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQyLFxuICAgICAgICA2MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIllrTmJVUUMzYmJpOXpid0ZNWG10SktBajVZNCt0L0pyYVgxY0ZsWWVzTnM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImhzNWVqR1YyVFRPUEFNSjJLVW92X2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTJhMzRjZmItMTMwNC00MzZkLTg3N2UtYmMzMzc0NGU5ZWI4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg5LFxuICAgICAgMjIzLFxuICAgICAgMjA2LFxuICAgICAgMTI2LFxuICAgICAgMjA4LFxuICAgICAgNzMsXG4gICAgICAxNTgsXG4gICAgICAxOTMsXG4gICAgICAxNCxcbiAgICAgIDI1NSxcbiAgICAgIDE4LFxuICAgICAgODYsXG4gICAgICAxMDQsXG4gICAgICA3LFxuICAgICAgMTcsXG4gICAgICA4MSxcbiAgICAgIDU2LFxuICAgICAgNDgsXG4gICAgICAxNDYsXG4gICAgICAxMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzUsXG4gICAgICAxMixcbiAgICAgIDE0MyxcbiAgICAgIDEzNyxcbiAgICAgIDE0MCxcbiAgICAgIDE2NCxcbiAgICAgIDQ0LFxuICAgICAgMTQ5LFxuICAgICAgMjYsXG4gICAgICAxNzcsXG4gICAgICA2MCxcbiAgICAgIDE1NCxcbiAgICAgIDI0NixcbiAgICAgIDE2NCxcbiAgICAgIDQ1LFxuICAgICAgMTcyLFxuICAgICAgMjA5LFxuICAgICAgMjQ5LFxuICAgICAgNzUsXG4gICAgICAxMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTUdLWFRNMUdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI3NjQzNDY2NTIyOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjM4NjA3OTk3ODk4ODMxOjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTUhmZ3BnREVNemtzck1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJZUjl2UngxSVAyUWtaYlFWLzFwMnhjUEltS3htNmJrQ0RJdHU0Uk93UVVjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjR4U1hZa3h1QUV2Y0FtOE1DNjJ2dUR5bEZPdjIvVm43NnVLSHZEdExla096b1JROStaSSt6WTBtaVR1TnhUaFIwbGQ3TEVISDFkZGlSQW03VlFzTUN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImxIYjBaVXZ3KzVQNHFuZlIzVGw4NjRzVGhCVkVFclNmK3FGdSt5aXdsSnZBMHFvcVRzOGFScFZGVjZ1VTRiNWdPU3JDR3ZJQ1dtQitLY1lhRlVBTmhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI3NjQzNDY2NTIyOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTgzOTk1NjgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQN21cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVA3bS5qc29uIjogIntcImtleURhdGFcIjpcIkZYa2R5eGhYZVhuUDF4aFJ0cmpyRzhQZ3V2QXk1dlZONGE0K2x0bVI4Wkk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODU1NjgzMDA4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzE4Mzk5MTAzNTczXCJ9Igp9"  // PUT your SESSION_ID 


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
