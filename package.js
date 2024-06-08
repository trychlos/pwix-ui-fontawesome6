Package.describe({
    name: 'pwix:ui-fontawesome6',
    version: '1.0.0',
    summary: 'Provides Font Awesome 6 to Meteor packages',
    git: 'https://github.com/trychlos/pwix:ui-fontawesome6',
    documentation: 'README.md'
});

Package.onUse( function( api ){
    configure( api );
    api.mainModule( 'src/client/js/index.js', 'client' );
});

Package.onTest( function( api ){
    configure( api );
    api.use( 'tinytest' );
    api.use( 'pwix:ui-fontawesome6' );
    api.mainModule( 'test/js/index.js' );
});

function configure( api ){
    api.versionsFrom([ '2.9.0', '3.0-rc.0' ]);
    api.use( 'ecmascript' );
}
