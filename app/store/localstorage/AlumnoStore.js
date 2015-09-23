/**
 * @author christian portilla pauca
 */
Ext.define(
	'app18.store.localstorage.AlumnoStore',
	{
		extend: 'Ext.data.Store',
		model: 'app18.model.localstorage.AlumnoModel',
		alias: 'store.alumno',
		proxy: {
			type: 'localstorage',
        	id  : 'alumnostore'
		},
		autoLoad: true,
		autoSync: true
	}
);