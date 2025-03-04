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
    }
}