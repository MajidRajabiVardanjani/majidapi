const fs = require("fs");
const axios = require("axios");

module.exports = {
    api: "https://api.majidapi.ir",

    error: (resolve, err = null) => {
        let error = "";
        let data = error ?
            err.response ?
                err.response.data ?
                    err.response.data.message ?
                        {error: err.response.data.message} :
                        err.response.data : err.response : err ? {error: err.message} : null : null
        error = data ? data : {
            error: "An error has occurred!"
        }
        resolve(error);
        return error;
    },

    success: (resolve, r) => {
        resolve(r.data.result);
        return r.data.result;
    },

    downloadFile: (url = "", out = "") => {
        const writer = fs.createWriteStream(out);
        return axios({
            method: 'get',
            url: url,
            responseType: 'stream',
        }).then(response => {
            return new Promise((resolve, reject) => {
                response.data.pipe(writer);
                let error = null;
                writer.on('error', err => {
                    error = err;
                    writer.close();
                    reject(err);
                });
                writer.on('close', () => {
                    if (!error) {
                        resolve(out);
                    }
                });
            });
        });
    },
}