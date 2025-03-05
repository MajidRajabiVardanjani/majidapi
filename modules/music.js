const config = require("./config");
const axios = require("axios");

module.exports = {
    melodify: ({
                   method = "search",
                   search = "",
                   page = 1,
                   trackId = "",
                   out = ""
               }) => {
        return new Promise(resolve => {
            if (method === "download") {
                config.downloadFile(`https://api.majidapi.ir/music/melodify?action=download&trackId=${trackId}`, out)
                    .then(r => {
                        resolve(r);
                    })
                    .catch(err => {
                        config.error(resolve, err);
                    });
            } else {
                axios.get(`https://api.majidapi.ir/music/melodify?action=${method}&s=${search}&page=${page}`)
                    .then(r => {
                        config.success(resolve, r);
                    })
                    .catch(err => {
                        config.error(resolve, err);
                    });
            }
        })
    }
}