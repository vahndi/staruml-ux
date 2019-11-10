const flowH = require('./flowchart-helpers');
const utils = require('../utils');
const fs = require('fs');


function importDisplayLocations() {

    let appDisplays = flowH.getSelectedDisplays();
    if (!appDisplays) {
        alert('No Displays Selected!')
    }
    let input_fn = utils.selectJsonFileToLoad()[0];
    let raw_data = fs.readFileSync(input_fn);
    let locations = JSON.parse(raw_data);
    $.each(appDisplays, function(iApp, appDisplay) {
        console.log(appDisplay);
        $.each(locations, function(iLocation, location) {
            if(appDisplay.name === location.index) {
                appDisplay.name = location.name
            }
        })
    })
}

function importObjectLocations() {

    let appViews = app.selections.getSelectedViews();
    if (!appViews) {
        alert('No Objects Selected!')
    }
    let input_fn = utils.selectJsonFileToLoad()[0];
    let raw_data = fs.readFileSync(input_fn);
    let locations = JSON.parse(raw_data);
    $.each(appViews, function(iApp, appView) {
        console.log(appView);
        $.each(locations, function(iLocation, location) {
            if(appView.model.name === location.index) {
                appView.model.name = location.name;
                if (location.hasOwnProperty('fill_color')) {
                    appView.fillColor = location.fill_color;
                }
                if (location.hasOwnProperty('font_color')) {
                    appView.fontColor = location.font_color;
                }
            }
        })
    })
}

exports.importDisplayLocations = importDisplayLocations;
exports.importObjectLocations = importObjectLocations;
