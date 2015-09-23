Ext.define(
	'app18.store.ajax.AlumnoStore',
	{
		extend: 'Ext.data.Store',
		model: 'app18.model.ajax.AlumnoModel',
		alias: 'store.ajaxalumno',
		proxy: {
			type:'ajax',
			url : 'source/index.php/alumno/all',//necesitamos una url para este tipo de store 
			reader:{//se declara un reader para lectura de datos
				type: 'json',
				rootProperty: 'data'
			},
			writer: {// se declara un writer para escritura de datos
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