const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2340953080211";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 1
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_52_12_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA4LFxuICAgICAgICA2NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTA4LFxuICAgICAgICA0LFxuICAgICAgICAxODUsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDksXG4gICAgICAgIDExMCxcbiAgICAgICAgMjksXG4gICAgICAgIDIyNCxcbiAgICAgICAgODgsXG4gICAgICAgIDcyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTk4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk3LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDY5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjA1LFxuICAgICAgICA1MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc1LFxuICAgICAgICA1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDIwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOCxcbiAgICAgICAgODksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5MixcbiAgICAgICAgODQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDgxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODQsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNSxcbiAgICAgICAgMSxcbiAgICAgICAgMTg3LFxuICAgICAgICA0NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjUsXG4gICAgICAgIDM0LFxuICAgICAgICAxODUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgODcsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDU3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxODIsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE2LFxuICAgICAgICA0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDM3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjEyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjYsXG4gICAgICAgIDkzLFxuICAgICAgICAyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTQxLFxuICAgICAgICA1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTc0LFxuICAgICAgICA3OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDExLFxuICAgICAgICA1NSxcbiAgICAgICAgMixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTksXG4gICAgICAgIDEyMixcbiAgICAgICAgNjQsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDU4LFxuICAgICAgICA4NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTUwLFxuICAgICAgICA2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDg1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODUsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAzMSxcbiAgICAgICAgOTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJOK3BjWlZldWFjRFpEejhpZ09xRDkrcWlPTVhwUlFGR21iYS9XMHJCZk0wPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwNTMwODAyMTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkMxQjIzQ0Q2NzQyNDg3NTk1QjgxRTIyQjg2NTcyMzRDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzczNzk0NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJjQ3J6b2JOb1FaMmhJSkpnTGZEZC1RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjEwZDkwNDdmLTJjODgtNGM1Yi04MThlLTYwMzkzZTFjZjA4NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NSxcbiAgICAgIDEwNCxcbiAgICAgIDI0NixcbiAgICAgIDIxOCxcbiAgICAgIDQ5LFxuICAgICAgMjM0LFxuICAgICAgMjE2LFxuICAgICAgMTUsXG4gICAgICAxNDIsXG4gICAgICAxNjAsXG4gICAgICA5OSxcbiAgICAgIDEyMCxcbiAgICAgIDExNixcbiAgICAgIDEzNSxcbiAgICAgIDE0MyxcbiAgICAgIDE5NixcbiAgICAgIDEwLFxuICAgICAgMTEsXG4gICAgICAxMzMsXG4gICAgICA1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODksXG4gICAgICA2OSxcbiAgICAgIDE3MyxcbiAgICAgIDE3NyxcbiAgICAgIDc5LFxuICAgICAgMTI1LFxuICAgICAgMTA2LFxuICAgICAgNTksXG4gICAgICAyMzgsXG4gICAgICA1NCxcbiAgICAgIDM1LFxuICAgICAgMTk3LFxuICAgICAgNzMsXG4gICAgICAyMjYsXG4gICAgICAzNSxcbiAgICAgIDUwLFxuICAgICAgNDksXG4gICAgICAxOTcsXG4gICAgICAxNTAsXG4gICAgICAyMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiU0IzOFMyWVdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNTMwODAyMTE6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyMDQzNTA3NzQ5MDEwOjEyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BUN2xxMEhFTUQ3MnJvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYUVqNGFQMkNzMXdnTTBCcWdMcUVoVjFLZjFIM3lIc2RrU2RRejVMMlp6Zz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJiSVBLK3RDbDZwbkZhMW51Z0lqRWppWHJPZ0VBNzIzbVZ3QklJWi94a3dOSXBKNVgrc2ozY3pCZjcvMTQ2OTBwdlV4c3BUbENYWTJiNUMyTy9MSCtBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJIaHpFbXpzUWl1dnBRUmY3TGkvaXVLTERaUFMzZXlhUlBtUHhHRXc2ZlZmWnJWYmJSSmVCY2l2QWttYVowU253bWVIMkJMZmJXNFNnb2RXUzh3bEVndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDUzMDgwMjExOjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzNzM3OTI1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
  //warncount: process.env.WARN_COUNT || 1,
  //userImages:process.env.USER_IMAGES|| "true",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "false"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "true", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
