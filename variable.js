class Varble{
    constructor() {
        this.access_token = "Hg4QZrNetbYAAAAAAAAAAVwIt2W7Th_87gDt1MqBwmgC6bsWPAb6GXaBW_78fT3r";
        this.file_path = "";
        this.file_name = "dataB.txt";
    }

    get filePath() {
        return this.file_path;
    }

    get fileName() {
        return this.file_name;
    }

    get dropboxToken() {
        return this.access_token;
    }
}

module.exports = {Varble};



        /*let contentUrl = "https://content.dropboxapi.com";
        let apiUrl = "https://api.dropboxapi.com";
        this.uploadUrl = contentUrl + "/2/files/upload";
        this.metaDataUrl = apiUrl + "/2/files/get_metadata";
        this.deleteUrl = apiUrl + "/2/files/delete_v2";*/