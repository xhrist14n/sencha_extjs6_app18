/**
 * @author christian portilla pauca
 */
Ext.define('app18.controller.localstorage.AlumnoController', {
	extend : 'Ext.app.ViewController',

	alias : 'controller.alumno',
	'nuevoAlumno' : function(button, e, eOpts) {
		var form = button.up('form');
		form.reset();
		var tab = button.up('#localalumnotab');
		var grid = tab.down('#localalumnogrid');
		try {
			grid.getStore().load();
			grid.getView().refresh();
			grid.getSelectionModel().deselectAll();
		} catch(ex) {
		}

	},
	'guardarAlumno' : function(button, e, eOpts) {
		var form = button.up('form');
		var tab = button.up('#localalumnotab');
		var grid = tab.down('#localalumnogrid');
		if (form.isValid()) {
			var values = form.getValues();
			var record = null;
			try{
				record = grid.getStore().findRecord('id', values['id']);
			}catch(ex){}
			if(record==null){
				grid.getStore().add(form.getValues());
			}else{
				record.set(form.getValues());
			}	
			grid.getStore().sync();		
			try {
				grid.getStore().load();
				grid.getView().refresh();
				grid.getSelectionModel().deselectAll();
			} catch(ex) {
			}

			Ext.Msg.alert('Exito', 'Datos guardados exitosamente.');
			try {
				form.reset();
			} catch(ex) {
			}			
		}
		return;
	},
	'seleccionar' : function(sender, record, index, options) {
		var elems = Ext.ComponentQuery.query('#localalumnotab');
		var form = null;
		for (var i in elems) {
			try {
				form = elems[i].down('#localalumnoform');
			} catch(ex) {
			}
			if (Ext.isEmpty(form) != true) {
				break;
			}
		}		
		form.loadRecord(record);
	}
});
