class Constants{
    constructor() {
        this.access_token = "Hg4QZrNetbYAAAAAAAAAAVwIt2W7Th_87gDt1MqBwmgC6bsWPAb6GXaBW_78fT3r";
        this.file_path = "c:/Users/mrsmi/Documents/bycn/prog/WebAPI";
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
};
module.exports = Constants;