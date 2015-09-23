Ext.define(
	'app18.store.rest.AlumnoStore',
	{
		extend: 'Ext.data.Store',
		model: 'app18.model.rest.AlumnoModel',
		alias: 'store.restalumno',
		proxy: {
			type:'rest',// se define el tipo de proxy para el store de datos
			api:{ // definimos la ṕropiedad api donde detallamos las urls de cada proceso
				create: 	'source/index.php/alumno/save', 
				read:		'source/index.php/alumno/all',
				update: 	'source/index.php/alumno/update',
				destroy: 	'source/index.php/alumno/delete'
			},
			reader:{
				type: 'json',
				rootProperty: 'data'
			},
			writer: {
				type:'json',
				rootProperty: 'data',
				writeAllFields: true,
				encode: true,
				allowSingle: true
			}
		},
		autoLoad: true,
		autoSync: true
	}
);