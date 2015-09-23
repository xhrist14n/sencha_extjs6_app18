/**
 * @author christian portilla pauca
 */
Ext.define('app18.view.rest.AlumnoGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'restalumnogrid',

    requires: [
    	'app18.controller.rest.AlumnoController',
        'app18.store.rest.AlumnoStore'
    ],

    title: 'Usuarios',
    
    controller: 'restalumno',

    store: {
        type: 'restalumno'
    },

    columns: [
        { 
        	text: 'Id',  
        	dataIndex: 'id' 
        },
        { 
        	text: 'Nombres', 
        	dataIndex: 'nombres', 
        	flex: 1 
        },
        { 
        	text: 'Apellidos', 
        	dataIndex: 'apellidos', 
        	flex: 1 
        },
        { 
        	text: 'Email', 
        	dataIndex: 'email', 
        	flex: 1 
        },
        { 
        	text: 'Nacimiento', 
        	dataIndex: 'nacimiento', 
        	flex: 1 
        },    
        {
        	xtype:'widgetcolumn',
        	text:'Accion',
        	flex:1,
        	widget: {
    			xtype: 'button',
    			text:'Eliminar',
    			scale: 'small',
    			listeners: {
			        click: 'eliminarAlumno'
			    }        			
        	}
        	 	
        }
    ],

    listeners: {
        select: 'seleccionar'
    }
});
