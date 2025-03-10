const config = require("./config");
const axios = require("axios");

module.exports = {
    digikala: ({
                   method = "home",
                   categoryId = "",
                   search = "",
                   page = 1,
                   productId = ""
               }) => {

        return new Promise(resolve => {
            axios.get(`${config.api}/digikala?action=${method}&category_id=${categoryId}&page=${page}&s=${search}&id=${productId}`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })

    },

    torob: ({
                method = "categories",
                categoryId = "",
                page = 1,
                search = "",
                productId = ""
            }) => {

        let furl = `${config.api}/torob`;

        switch (method) {
            case "category":
                furl = `${furl}/category?id=${categoryId}&page=${page}`;
                break;
            case "search":
                furl = `${furl}/search?s=${search}&page=${page}`;
                break;
            case "product":
                furl = `${furl}/info?id=${productId}`;
                break;
            default:
                furl = `${furl}/categories`
                break;
        }

        return new Promise(resolve => {
            axios.get(furl)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.success(resolve, err);
                });
        })

    },

    mopon: ({method = "home", id = "", page = 1, search = ""}) => {

        let furl = `${config.api}/mopon`;

        switch (method) {
            case "categories":
                furl = `${furl}/categories`;
                break;
            case "category":
                furl = `${furl}/category?id=${id}&page=${page}`;
                break;
            case "search":
                furl = `${furl}/search?s=${encodeURI(search)}&page=${page}`;
                break;
            case "info":
                furl = `${furl}/info?id=${id}`;
                break;
            default:
                furl = `${furl}/home`;
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