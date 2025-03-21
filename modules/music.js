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
    },

    spotify: ({url = "", out = "track.mp3"}) => {
        return new Promise(resolve => {
            config.downloadFile(url, out)
                .then(r => {
                    resolve(r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    },
    soundCloud: ({method = "download", search = "", url = ""}) => {
        let furl = `${config.api}/soundcloud`;

        switch (method) {
            case "search":
                furl = `${furl}/search?s=${encodeURI(search)}`;
                break;
            case "info":
                furl = `${furl}/info?url=${url}`;
                break;
            default:
                furl = `${furl}/download?url=${url}`;
                break;
        }

        return new Promise(resolve => {
            axios.get(furl)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    }
}