/**
 * @author christian portilla pauca
 */
Ext.define('app18.view.memory.AlumnoForm', {
    extend: 'Ext.form.Panel',
    requires:[
    	'app18.controller.memory.AlumnoController'
    ],
    xtype: 'memoryalumnoform',
    title: 'Formulario de Alumnos',
    bodyPadding: 10,
    controller: 'memoryalumno',
    frame: true,
    items: [
        {
            xtype: 'hiddenfield',
            name: 'id',
            fieldLabel: 'Id',
            labelWidth: 100,
            msgTarget: 'side',
            allowBlank: true,
            anchor: '100%'
        },
        {
        	xtype: 'fieldcontainer',
        	anchor: '100%',
        	layout: 'hbox',
        	bodyPadding:10,
        	items:[
		        {
		            xtype: 'textfield',
		            name: 'nombres',
		            fieldLabel: 'Nombres',
		            labelWidth: 100,
		            msgTarget: 'side',
		            allowBlank: false,
		            flex: 1
		        },
		        {
		        	xtype: 'menuseparator'
		        },
		        {
		            xtype: 'textfield',
		            name: 'apellidos',
		            fieldLabel: 'Apellidos',
		            labelWidth: 100,
		            msgTarget: 'side',
		            allowBlank: false,
		            flex: 1
		        }	
        	]
        	
        },
        {
        	xtype: 'fieldcontainer',
        	anchor: '100%',
        	layout: 'hbox',
        	bodyPadding:10,
        	items:[
				{
		            xtype: 'textfield',
		            name: 'email',
		            fieldLabel: 'Email',
		            labelWidth: 100,
		            msgTarget: 'side',
		            allowBlank: false,
		            flex: 1
		        },
		        {
		        	xtype: 'menuseparator'
		        },
		        {
		            xtype: 'datefield',
		            name: 'nacimiento',
		            fieldLabel: 'Nacimiento',
		            format: 'Y-m-d',
		            labelWidth: 100,
		            msgTarget: 'side',
		            allowBlank: false,
		            flex: 1
		        }        
		    ]
        }        
    ],
    buttons: [
        {
            text: 'Guardar',
            formBind: true, //only enabled once the form is valid
        	disabled: true,
        	scale: 'small',
            listeners: {
		        click: 'guardarAlumno' 
		    }
        },
        {
            text: 'Nuevo',
            formBind: true, //only enabled once the form is valid
        	disabled: true,
        	scale: 'small',
            listeners: {
		        click: 'nuevoAlumno' 
		    }
        }
    ]

});