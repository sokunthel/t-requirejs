require.config({
    paths: {
        'jquery': 'util/jquery-2.1.1.min',
        'text': 'util/text',
        'template': '../templates'
    }
});

require(['components/app'], function(app){
    app.init();
});