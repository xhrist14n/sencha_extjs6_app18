/**
 * @author christian portilla pauca
 */
Ext.define('app18.view.localstorage.AlumnoGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'localalumnogrid',

    requires: [
    	'app18.controller.localstorage.AlumnoController',
        'app18.store.localstorage.AlumnoStore'
    ],

    title: 'Alumnos',
    
    controller: 'alumno',

    store: {
        type: 'alumno'
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
