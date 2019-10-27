function getSelectedDisplays() {
    // return an array of the selected items which are of type `Display`
    return app.selections.getSelectedModels().filter(model => model.getDisplayClassName() === 'Display');
}


exports.getSelectedDisplays = getSelectedDisplays;

