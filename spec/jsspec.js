describe("Dropbox", function () {       //describe(name, function() { ... })
    const Dbox = require("../WebAPI.js");
    let dbox;

    beforeEach(function () {
        dbox = new Dbox();
    });

    it("Upload a file to Dropbox folder", async function () {       //it(name, function() { [some test] })
        let uploaded = await dbox.uploadFile().then(value => { return value; });
        expect(uploaded).toContain("File uploaded successfully");       //expect(actual_value).*
    });

    it("Get metadata from file", async function () {
        let metadata = await dbox.getMetaData().then(value => { return value; })
        assert.equal(metadata.status, 200);      //assert.equal(actual_value, expected_value) 
    });

    it("Delete file from Dropbox folder", async function () {
        let deleted = await dbox.deleteFile().then(value => { return value });
        assert.equal(deleted.status, 200);
    });

});