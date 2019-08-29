"use strict";
const request = require("request");
const fs = require("fs");
const fileUrl = "https://github.com/meichangliang/Public_React_WebApp_TS/archive/master.zip";
const filename = "master.zip";
function downloadFile(uri, filename, callback) {
    const stream = fs.createWriteStream(filename);
    request(uri).pipe(stream).on("close", callback);
}
downloadFile(fileUrl, filename, () => {
    console.info(`${filename}下载完毕`);
});
//# sourceMappingURL=download.js.map