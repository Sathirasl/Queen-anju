//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUNvY2F0TEgwTmR2VElVZWdib1E2L1BlQ0NkYm5vQ1JTcXdERWk3cnQzdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUdBaXFieVVTMEJDbjJTMFVhNzNrRGc4K0lXckczUGpIcTFlamwwazlpYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2Q05hRG9MODlRUVBOZExCZ0ZBK0FuUVdKbXlOKzFXVGxtNWtsemNlOGxRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxRHZzNUtsZ3Zzc1J5MW9CZUJwZmR4YWNxOStyUWZ0TXp3YzI0UE92WFFVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlLcmNubHVWeXIzYjdFRGFHVUtMazlZZGlpakRTM2JUNXdqMUZQRGt2VlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImYvb2tJSWVmeU12bFRhSnFXWnpSUEQ0Q0lxemlHUTNtREFEZEJWT2RNakk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0JrakErekduc0lZaFdldG90TkdnSEtvb1UyVlRJenpDUEdBUFgvQ0owMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUw0S2FsOWg3TXpROStGQXJaZTdxaFdlYTdkYlZrdkF0MW1sM1cwR0Yybz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJQUHRVZjVFNlF1cFAxdDJVZEdDT3Qybm1CZXR6RDh1a2UvcjJLWW9rdzN3dC90TWlYYmdmSWJyMSsyRU5nMFZmdEp0SmloSWk0aXlLcWtkQ0ZiNEFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjgsImFkdlNlY3JldEtleSI6IkQ5ZFRLeVFoY25KbFBVNEZBZmx6UnBaaGtPSmdJWHd3SG9wd211NUF0NkE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjJGY3FCeEZQVGtpWi1ZMGNuTU1DTFEiLCJwaG9uZUlkIjoiNTg3ZDBhNGEtM2NhNi00NDU2LThiNzUtZGNhZmE1OWQ2OWVkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkF5N3lMQnNvUXdFbXVtRG4yYWZBY2JIWithYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNdkwxbEFaZmh0bGZVWUVTTlVQZGhVZDRDblk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQ0NaTk1NSFkiLCJtZSI6eyJpZCI6Ijk0NzI2NDU1ODQ4OjM4QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjAxNDAwMTI2NTY2NDM4OjM4QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSm1iejY4REVMU1p6OElHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUUgwb0hNK2pmbkQ0ektoWlNiTGxRTnJHdU0rbmdoWWhHUmJLMHRmVGhSaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiamZuZXBUcHZ1KzNkN05hWmwxWDMyRWVqQUJCdkdTZSs4VkNmYUpjUVR1bElOYUp1Um92dlZ1Z3ptdnE0bGgwMjdnSm9ZZThFd3JXVVMzclZuTE4xQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6InZZQjBlZnphL285YVU3NFFHTUgrUHQybzFLdGNUM0EycmtreTZxbkg2eDZiUVZqK1RQSG9hdGNOS0oxR2ZwdEVkMEtjTzVwY1ZTd2F2VUlaNnV0ZUNRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MjY0NTU4NDg6MzhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVUI5S0J6UG8zNXcrTXlvV1VteTVVRGF4cmpQcDRJV0lSa1d5dExYMDRVWiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FrSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwMzIyMzY5LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUo4TCJ9XZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidlJlOUw4ek1IelhRWEpsbU1TdW03NlB1RTR5c0NQL3lKeFg5VSswb0ZVdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBQmROa1dOQUU4WTBNNGlPQVF5VFZXclZIdmQrNXZWUXoyMldjVFV4L1ZJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpYnVZYytIaEJyWjJBTnlWTkdBbzZzczRRWExteURUN2tFMnhtYm9Mc0RnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdPR1psTkJJbzBTU0FRaEwrYkVrcEEyZ3JGdjFPNU5XQUsvL2J5UnRFVmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijg4b3NrTjR3K2NNS0pocU1oaWRNNnYvSXgxOTlidlNVSm5tVElwNGZaeDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUdPZUsrcHgzRmo2NDdwTVpKRTBCdU5sSW9jb1Bwait0ay9RRHV3cnFGRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSXNvYTA0SGpVcy8yTlVLUXF5M0tMSzYxYyt2R2pzd3l6RnV1dWUxMDZRWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiV1l5Njc2SU4zMk5nRDdWN0NrQXNzWTJTdGtNNGhMWi95MVFsTTNKOGdUTWVZUlA3UTVFNVZxSnc3Vzh3cUt5YXJWMitZRnVhS0trWjZwTC9pMWpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMxLCJhZHZTZWNyZXRLZXkiOiJkTjBwMDkwclNiTFpwOStyR0hnNUpRUGlKZXYyWFNlanNmbWFkeGUxVnBjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzAxMzg4NDIzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjdERkUwQ0RDNDU5NDI0M0IzQTlFRjRFNzEwRDcyMDM4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTAyMTYxOTF9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzAxMzg4NDIzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkU3NEEyQzcwMUZBRjZBRjUwMTFCMzY4N0YxQ0QyREI1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTAyMTYxOTJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjZSc1RsS3ZDUU11eDJ0dUpPM3llMmciLCJwaG9uZUlkIjoiZTkxYmFmZWMtMjQ4OC00M2VhLThmN2UtYzA3YjY1Zjc3YmM0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5ybEJ4bVVPZUJpOG05cE1PWWJtN3psQW1wdz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxQkNmelBnbGxERmRhVXFLWHpEWkJTM2hBTFk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiV0xaTkRGRzQiLCJtZSI6eyJpZCI6Ijk0NzAxMzg4NDIzOjIyQHMud2hhdHNhcHAubmV0IiwibGlkIjoiOTA2MTEyNjA2MjUwODk6MjJAbGlkIiwibmFtZSI6IvCdkbnwnZKQ8J2ShPCdkozwnZKaIPCdkbDwnZGw8J2RsPCfqbgifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0t1eGtlb0dFTy9ieU1JR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ing3Y2NGUitISCtlT3A0bkpBbm12cUltZE4zM0tnWDZCM01lS25Bdzhmd2s9IiwiYWNjb3VudFNpZ25hdHVyZSI6IldRR3drdDRlOS9hK1BFVCt6bHZOdEt6c082WGhjSVIzejBQZDduU0diMDZjY0VmamVzdkZQTlFVUkJBUkpmYWNwWWp1bU5GVUtuRG1iaktvS1FNS0N3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJLaVAwQlFiV3A5ajJabEs1K0RSaS9iRklKNThybzEycDZmaDUwdTN2T1E0dUxzUjdlbFZKZUFua2NhTGk4ZnNmV0k4VEQ4QUZWcHhXOUxRS3oxT29oQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzAxMzg4NDIzOjIyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNlM0hCVWZoeC9uanFlSnlRSjVyNmlKblRkOXlvRitnZHpIaXB3TVBIOEoifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MDIxNjE4OCwibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFzRSJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
