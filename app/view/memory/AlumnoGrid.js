/**
 * @author christian portilla pauca
 */
Ext.define('app18.view.memory.AlumnoGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'memoryalumnogrid',

    requires: [
    	'app18.controller.memory.AlumnoController',
        'app18.store.memory.AlumnoStore'
    ],

    title: 'Alumnos',
    
    controller: 'memoryalumno',

    store: {
        type: 'memoryalumno'
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
