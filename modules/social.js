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
    },

    pinterest: ({method = "download", search = "", url = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/social/pinterest?action=${method}&s=${encodeURI(search)}&url=${url}`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    },

    x: ({videoUrl = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/social/x?url=${encodeURI(videoUrl)}`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    },
    facebook: ({videoUrl = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/social/facebook?url=${encodeURI(videoUrl)}`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    },
    youtube: ({url = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/youtube/download?url=${url}`)
                .then(r => {
                    config.success(resolve, r)
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    },
    likee: ({url = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/social/likee?url=${url}`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    },
    github: ({url = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/social/github?url=${url}`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    }
}