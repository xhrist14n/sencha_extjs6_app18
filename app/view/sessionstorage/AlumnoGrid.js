/**
 * @author christian portilla pauca
 */
Ext.define('app18.view.sessionstorage.AlumnoGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'sessionalumnogrid',

    requires: [
    	'app18.controller.sessionstorage.AlumnoController',
        'app18.store.sessionstorage.AlumnoStore'
    ],

    title: 'Alumnos',
    
    controller: 'sessionalumno',

    store: {
        type: 'sessionalumno'
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
        }
    ],

    listeners: {
        select: 'seleccionar'
    }
});
