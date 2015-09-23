/**
 * @author christian portilla pauca
 */
Ext.define('app18.controller.sessionstorage.AlumnoController', {
	extend : 'Ext.app.ViewController',

	alias : 'controller.sessionalumno',
	'nuevoAlumno' : function(button, e, eOpts) {
		var form = button.up('form');
		form.reset();
		var tab = button.up('#sessionalumnotab');
		var grid = tab.down('#sessionalumnogrid');
		try {
			grid.getStore().load();
			grid.getView().refresh();
			grid.getSelectionModel().deselectAll();
		} catch(ex) {
		}

	},
	'guardarAlumno' : function(button, e, eOpts) {
		var form = button.up('form');
		var tab = button.up('#sessionalumnotab');
		var grid = tab.down('#sessionalumnogrid');
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
		var elems = Ext.ComponentQuery.query('#sessionalumnotab');
		var form = null;
		for (var i in elems) {
			try {
				form = elems[i].down('#sessionalumnoform');
			} catch(ex) {
			}
			if (Ext.isEmpty(form) != true) {
				break;
			}
		}		
		form.loadRecord(record);
	}
});
