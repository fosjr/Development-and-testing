XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var fs = require ('fs');

const filename = "dataB.txt";

class WebAPI {
    
    Upload() {
        let data = filename;
        
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function() {
            if(this.readyState === 4) {
                console.log(this.responseText);
            }
        });
        
        xhr.open("POST", "https://content.dropboxapi.com/2/files/upload");
        xhr.setRequestHeader("Dropbox-API-Arg", "{\"path\": \"/dataB.txt\",\"mode\": \"add\",\"autorename\": true,\"mute\": false,\"strict_conflict\": false}");
        xhr.setRequestHeader("Content-Type", "application/octet-stream");
        xhr.setRequestHeader("Authorization", "Bearer Hg4QZrNetbYAAAAAAAAAAVwIt2W7Th_87gDt1MqBwmgC6bsWPAb6GXaBW_78fT3r");
        
        xhr.send(data);
    }

    GetFileMetadata() {
        var data = JSON.stringify({
            "file": "/" + filename,
            "actions": []
        });

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
          
        xhr.addEventListener("readystatechange", function() {
            if(this.readyState === 4) {
                console.log(this.responseText);
            }
        });
          
        xhr.open("POST", "https://api.dropboxapi.com/2/sharing/get_file_metadata");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Authorization", "Bearer Hg4QZrNetbYAAAAAAAAAAVwIt2W7Th_87gDt1MqBwmgC6bsWPAb6GXaBW_78fT3r");
          
        xhr.send(data);
    }

    DeleteFile() {
        var data = JSON.stringify({
            "path": "/dataB.txt"
        });
          
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        
        xhr.addEventListener("readystatechange", function() {
            if(this.readyState === 4) {
                console.log(this.responseText);
            }
        });
          
        xhr.open("POST", "https://content.dropboxapi.com/2/files/delete_v2");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Authorization", "Bearer Hg4QZrNetbYAAAAAAAAAAVwIt2W7Th_87gDt1MqBwmgC6bsWPAb6GXaBW_78fT3r");
        
        xhr.send(data);
    }
}

MyAPI = new WebAPI();

setTimeout(MyAPI.Upload,7000);
setTimeout(function() {console.log('\n')}, 7000);

setTimeout(MyAPI.GetFileMetadata,7000);
setTimeout(function() {console.log('\n')}, 7000);

setTimeout(MyAPI.DeleteFile,7000);
setTimeout(function() {console.log('\n')}, 7000);
