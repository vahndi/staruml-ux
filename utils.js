const fs = require('fs');
const path = require('path');


function valueCounts(items) {
    // return an object mapping item values to counts
    let counts = {};
    items.forEach(function (x) {
        counts[x] = (counts[x] || 0) + 1;
    });
    return counts;
}

function nameOrId(entity) {
    // return the name of the entity if it exists, otherwise return its id
    if (entity.name) {
        return entity.name
    } else {
        return entity._id
    }
}

function writeTextToFile(text, fileName, alertMessage) {
    let projectFileName = app.project.filename;
    let projectDirName = path.dirname(projectFileName);
    let filePath = path.join(projectDirName, fileName);
    fs.writeFile(filePath, text, function (err) {
        if (err) {
            return console.log(err);
        }
        if (alertMessage) {
            alert(alertMessage)
        } else {
            alert("The file was saved as " + fileName + "!")
        }
    });
}

function writeObjectToFile(object, fileName, alertMessage) {

    fs.writeFile(fileName, JSON.stringify(object), (err) => {
        if (err) {
            console.error(err);
            return;
        }
        if (alertMessage) {
            alert(alertMessage)
        } else {
            alert("The file was saved as " + fileName + "!")
        }
    });
}


function selectJsonFileToLoad() {
    let filters = [
        {name: "Json files", extensions: ["json"]}
    ];
    return app.dialogs.showOpenDialog("Select a json file...", null, filters);
}

function selectJsonFileToSave() {
    var filters = [
        {name: "Json Files", extensions: ["json"]}
    ];
    return app.dialogs.showSaveDialog("Save as...", null, filters);
}

exports.selectJsonFileToSave = selectJsonFileToSave;
exports.selectJsonFileToLoad = selectJsonFileToLoad;
exports.writeObjectToFile = writeObjectToFile;
exports.valueCounts = valueCounts;
exports.nameOrId = nameOrId;
