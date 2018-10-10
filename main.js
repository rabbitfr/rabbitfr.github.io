requirejs.config({
    paths: {
        kotlin: 'kotlin',
        app: 'rpg'
    }
});

requirejs([ "rpg" ], function (app) {
    console.log("rpg loaded")
});