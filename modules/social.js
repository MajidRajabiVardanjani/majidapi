const config = require("./config");
const axios = require("axios");

module.exports = {
    instagram: ({
                    method = "download",
                    url = "",
                    username = "",
                    highlightId = ""
                }) => {
        let furl = `${config.api}/instagram`;

        switch (method) {
            case  "profile":
                furl = `${furl}/profile?username=${username}`;
                break;
            case  "stories":
                furl = `${furl}/stories?username=${username}`;
                break;
            case  "highlights":
                furl = `${furl}/highlights?username=${username}`;
                break;
            case  "highlight":
                furl = `${furl}/highlight?id=${highlightId}`;
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
    },

    tiktok: ({method = "download", url = "", username = ""}) => {
        let furl = `${config.api}/tiktok`;
        if (method === "download") {
            furl = `${furl}/download?url=${url}`;
        } else {
            furl = `${furl}/profile?username=${username}`;
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