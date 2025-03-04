const config = require("./config");
const axios = require("axios");


module.exports = {
    akharinKhabar: ({
                        method = "",
                        categoryId = "",
                        page = 1,
                        newsId = ""
                    }) => {

        return new Promise(resolve => {
            axios.get(`${config.api}/news/akharinkhabar?action=${method}&newsid=${newsId}&catid=${categoryId}&page=${page}`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        });
    }
}