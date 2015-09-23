/**
 * @author christian portilla pauca
 */
Ext.define('app18.controller.memory.AlumnoController', {
	extend : 'Ext.app.ViewController',

	alias : 'controller.memoryalumno',
	'nuevoAlumno' : function(button, e, eOpts) {
		var form = button.up('form');
		form.reset();
		var tab = button.up('#memoryalumnotab');
		var grid = tab.down('#memoryalumnogrid');
		try {
			grid.getStore().load();
			grid.getView().refresh();
			grid.getSelectionModel().deselectAll();
		} catch(ex) {
		}

	},
	'guardarAlumno' : function(button, e, eOpts) {
		var form = button.up('form');
		var tab = button.up('#memoryalumnotab');
		var grid = tab.down('#memoryalumnogrid');

		if (form.isValid()) {
			var values = form.getValues();
			var record = null;
			try{
				record = grid.getStore().findRecord('id', values['id']);
			}catch(ex){}
			if(record==null){
				grid.getStore().getData().items.push(values);				
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
			console.log(grid.getStore());
			Ext.Msg.alert('Exito', 'Datos guardados exitosamente.');
			try {
				form.reset();
			} catch(ex) {
			}			
		}
		return;
	},
	'seleccionar' : function(sender, record, index, options) {
		var elems = Ext.ComponentQuery.query('#memoryalumnotab');
		var form = null;
		for (var i in elems) {
			try {
				form = elems[i].down('#memoryalumnoform');
			} catch(ex) {
			}
			if (Ext.isEmpty(form) != true) {
				break;
			}
		}		
		form.loadRecord(record);
	}
});
