require.config({
    paths: {
        'jquery': 'util/jquery-2.1.1.min'
    }
});

require(['components/app'], function(app){
    app.init();
});