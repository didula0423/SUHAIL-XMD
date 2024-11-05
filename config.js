const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_05_11_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM3LFxuICAgICAgICAzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQxLFxuICAgICAgICA4MixcbiAgICAgICAgMjM1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDg0LFxuICAgICAgICAzOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyNixcbiAgICAgICAgODgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMixcbiAgICAgICAgMTM1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgNzcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODMsXG4gICAgICAgIDU4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAzMixcbiAgICAgICAgNTEsXG4gICAgICAgIDY5LFxuICAgICAgICA3MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTAyLFxuICAgICAgICA4NixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDk2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDg3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQyLFxuICAgICAgICA0NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjIsXG4gICAgICAgIDcsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxLFxuICAgICAgICA2NixcbiAgICAgICAgMTQyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzLFxuICAgICAgICAxODYsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODksXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjksXG4gICAgICAgIDMxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAzNyxcbiAgICAgICAgNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDUyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA1LFxuICAgICAgICA3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjI1LFxuICAgICAgICA1NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDU3LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjMxLFxuICAgICAgICAzNixcbiAgICAgICAgNjAsXG4gICAgICAgIDE0LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm1XZEVMNlVmUms2Y3RMMFlWbm9sS2lUUERjUlZQQ2dxWk12U0lsZXduKzg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NDI0MDMyNjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjFDNjZCRUVCMzY1MTZBRjQ1NEM3MDFFN0QzQTYwMjYyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMDgwODMwOFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzQyNDAzMjYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0NzQzNzFDQjhDQjEwN0NCMEJFQUU2MDAyMTI5REYyRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzA4MDgzMDlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwia01UZTZ5bWJUdDYyQ1RJSk8tQUFyQVwiLFxuICBcInBob25lSWRcIjogXCIyOWM4MGZlMS1kMDc4LTRmOWQtOTZlMC03MjlmYjllZjBhMjhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI5LFxuICAgICAgMCxcbiAgICAgIDUyLFxuICAgICAgMTU5LFxuICAgICAgMTM4LFxuICAgICAgMjM3LFxuICAgICAgNCxcbiAgICAgIDExMyxcbiAgICAgIDIyNixcbiAgICAgIDE4MCxcbiAgICAgIDE2OSxcbiAgICAgIDksXG4gICAgICA1OSxcbiAgICAgIDIxMSxcbiAgICAgIDYsXG4gICAgICA3NixcbiAgICAgIDY4LFxuICAgICAgMjU1LFxuICAgICAgNzIsXG4gICAgICAxOTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzAsXG4gICAgICAxOTAsXG4gICAgICAxMDQsXG4gICAgICAxOTMsXG4gICAgICAzNCxcbiAgICAgIDEyMSxcbiAgICAgIDM5LFxuICAgICAgMTE0LFxuICAgICAgNzQsXG4gICAgICAxMDksXG4gICAgICAyMjcsXG4gICAgICA5NyxcbiAgICAgIDUwLFxuICAgICAgNDEsXG4gICAgICAxMjEsXG4gICAgICAxNTUsXG4gICAgICAyOSxcbiAgICAgIDQ2LFxuICAgICAgMTE4LFxuICAgICAgMTM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjZGR01BOFc2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc0MjQwMzI2MzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjE4NDE0MzYxODIxOToyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIi5cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKR0hvdTRIRVBDVHFMa0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImRUL0M1UWVqa21VSyszNGh4L2FSdzB1dVdJaHZ2czVOYnpPck1MWStIQ2M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwic1lGVmJ5eUhIWWhLRG0waTl2MVZGQWZNS25yd0lqNk56MnJYcnRzbm0xK1JycVptOXpabWtOYUpIZG9qQXZKOGx3amQ1R1FlR0ZmaS9jTFNBZU1uQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVHZ1WVRuNHNtbnNJTXhiMjZyeWI5MkdWUmVWZnlVVlRJVFlteGM3ajlERXROcHo1Yk1VUXFURllNOW13L3F5UGF5Ulcwb0ZyL3hGcnp3SHJRaHZiRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NDI0MDMyNjM6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAzOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwODA4MzA3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS2RsXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLZGwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ0ejhEc1FRUkFNMWdpOGNLWWZoVVB4K3djYTd5MGVETzVGdmtiQTRCU0VzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIxMTAyOTI4ODEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMDgwODMwODc4NFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
