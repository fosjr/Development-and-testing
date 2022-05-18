const { Constants } = require("../variable.js");
import { Dropbox } from 'dropbox';
import { fs } from 'fs';

const constants = new Constants();
const access_token = constants.dropboxToken();
const file_path = constants.filePath();
const file_name = constants.fileName();

class Dbox {
    
    constructor() {
        this.dbox = new Dropbox({ accessToken: access_token });


    Dbox.prototype.uploadFile = async function () {
        return await this.dbox.filesUpload({path: "/" + file_name, contents: function(){
            return fs.readFile(file_path + file_name, function(error, local_file) {
                if (error) {
                    return error;
                }
                return local_file;
            })
        }})
        .then(function () {
            return "File uploaded successfully";
        })
        .catch(function (error) {
            return error;
        });
    };

    Dbox.prototype.getMetaData = async function () {
        return await this.dbox.filesGetMetadata({ path: "/" + file_name })
        .then(value => {
            return value;
        })
        .catch(error => {
            return error;
        });
    };

    Dbox.prototype.deleteFile = async function () {
        return await this.dbox.filesDeleteV2({ path: "/" + file_name })
        .then(value => {
            return value;
        })
        .catch(error => {
            return error;
        });
    };

    }
};

export {Dbox};