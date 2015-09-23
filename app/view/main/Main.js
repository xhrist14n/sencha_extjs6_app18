/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('app18.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'app18.view.main.MainController',
        'app18.view.main.MainModel',
        'app18.view.main.List',
        'app18.view.localstorage.AlumnoGrid',
        'app18.view.localstorage.AlumnoForm',
        'app18.view.sessionstorage.AlumnoGrid',
        'app18.view.sessionstorage.AlumnoForm',
        'app18.view.memory.AlumnoGrid',
        'app18.view.memory.AlumnoForm',
        'app18.view.ajax.AlumnoGrid',
        'app18.view.ajax.AlumnoForm',
        'app18.view.rest.AlumnoGrid',
        'app18.view.rest.AlumnoForm'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [
		{
	        title: 'LocalStorage Alumnos',
	        iconCls: 'fa-user',
	        layout:{
	        	type: 'border'
	        },
	        itemId:'localalumnotab',
	        items: [
	        	{
		            xtype: 'localalumnoform',
		            itemId:'localalumnoform',
		            region:'south',
		            height: 200
		        },
		        {
		            xtype: 'localalumnogrid',
		            itemId:'localalumnogrid',
		            region:'center'
		        }	        
	        ]
	    },{
	        title: 'SessionStorage Alumnos',
	        iconCls: 'fa-user',
	        layout:{
	        	type: 'border'
	        },
	        itemId:'sessionalumnotab',
	        items: [
	        	{
		            xtype: 'sessionalumnoform',
		            itemId:'sessionalumnoform',
		            region:'south',
		            height: '200'
		        },
		        {
		            xtype: 'sessionalumnogrid',
		            itemId:'sessionalumnogrid',
		            region:'center'
		        }	        
	        ]
	    },{
	        title: 'Memory Alumnos',
	        iconCls: 'fa-user',
	        layout:{
	        	type: 'border'
	        },
	        itemId:'memoryalumnotab',
	        items: [
		        {
		            xtype: 'memoryalumnogrid',
		            itemId:'memoryalumnogrid',
		            region:'north',
		            height:300,
		            hidden: true
		        },
		        {
		            xtype: 'memoryalumnoform',
		            itemId:'memoryalumnoform',
		            region:'center'
		        }
	        ]
	    },{
	        title: 'Ajax Alumnos',
	        iconCls: 'fa-user',
	        layout:{
	        	type: 'border'
	        },
	        itemId:'ajaxalumnotab',
	        items: [
		        {
		            xtype: 'ajaxalumnoform',
		            itemId:'ajaxalumnoform',
		            region:'south',
		            height:200
		        },
		        {
		            xtype: 'ajaxalumnogrid',
		            itemId:'ajaxalumnogrid',
		            region:'center'
		        }
	        ]
		},{
	        title: 'Rest Alumnos',
	        iconCls: 'fa-user',
	        layout:{
	        	type: 'border'
	        },
	        itemId:'restalumnotab',
	        items: [
		        {
		            xtype: 'restalumnoform',
		            itemId:'restalumnoform',
		            region:'south',
		            height:200
		        },
		        {
		            xtype: 'restalumnogrid',
		            itemId:'restalumnogrid',
		            region:'center'
		        }
	        ]
	    }
	]
});