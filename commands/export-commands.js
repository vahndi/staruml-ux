const flowH = require('./flowchart-helpers');
const utils = require('../utils');

function exportDisplayLocations() {

    let displays = flowH.getSelectedDisplays();
    if (!displays) {
        alert('No Displays Selected!')
    }
    let displayLocations = [];
    $.each(displays, function (i_display, display) {
        $.each(display.tags, (function (i_tag, tag) {
            if (tag.name === 'location_id') {
                displayLocations.push({
                    'display_name': display.name,
                    'location_id': tag.value,
                })
            }
        }))
    });
    let item = displays[0];
    let parentName = '';
    while(parentName !== 'Flowchart') {
        item = item._parent;
        parentName = item.getDisplayClassName();
    }
    let output_fn = utils.selectJsonFileToSave();
    utils.writeObjectToFile(displayLocations, output_fn)
}

function exportObjectLocations() {

    let locations = app.selections.getSelectedModels();
    if (!locations) {
        alert('No Locations Selected!')
    }
    let location_data = [];
    $.each(locations, function (i_display, display) {
        $.each(display.tags, (function (i_tag, tag) {
            if (tag.name === 'location_id') {
                location_data.push({
                    'display_name': display.name,
                    'location_id': tag.value,
                })
            }
        }))
    });
    let item = locations[0];
    let parentName = '';
    while(parentName !== 'Flowchart') {
        item = item._parent;
        parentName = item.getDisplayClassName();
    }
    let output_fn = utils.selectJsonFileToSave();
    utils.writeObjectToFile(location_data, output_fn)
}

exports.exportDisplayLocations = exportDisplayLocations;
exports.exportObjectLocations = exportObjectLocations;
