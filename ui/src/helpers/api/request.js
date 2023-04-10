/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import { defaultAPI } from "../../config";

export default {
    post(url, body = {}) {
        return new Promise(function (resolve, reject) {
            axios
                .post(`${defaultAPI}${url}`, body, {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                })
                .then((response) => {
                    resolve(response);
                    return response;
                })
                .catch((error) => {
                    reject({
                        error: error,
                    });
                });
        });
    },
};
