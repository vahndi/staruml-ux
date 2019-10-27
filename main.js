const exportCommands = require('./commands/export-commands');
const importCommands = require('./commands/import-commands');


function init() {
    app.commands.register('staruml-ux:export-commands.export-display-locations',
                          exportCommands.exportDisplayLocations);
    app.commands.register('staruml-ux:export-commands.export-object-locations',
                          exportCommands.exportObjectLocations);
    app.commands.register('staruml-ux:import-commands.import-display-locations',
                          importCommands.importDisplayLocations);
    app.commands.register('staruml-ux:import-commands.import-object-locations',
                          importCommands.importObjectLocations);
}

exports.init = init;
