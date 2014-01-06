Ext.define('IconFont.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border'
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    items: [{
        region: 'west',
        xtype: 'panel',
        title: 'west',
        width: 150
    },{
        region: 'center',
        xtype: 'tabpanel',
        items:[{
            glyph: icons.home,
            title: 'Center Tab 1',
            defaultType: 'button',
            items: [{
                glyph: icons.image,
                scale: 'large'
            },{
                glyph: icons.bullhorn,
                scale: 'medium'
            },{
                glyph: icons.file
            },{
                glyph: icons.pushpin,
                cls: 'btn-font-red'
            },{
                glyph: icons.location,
                cls: 'btn-font-green'
            },{
                glyph: icons.folder,
                cls: 'btn-font-blue'
            }]
        }]
    }]
});