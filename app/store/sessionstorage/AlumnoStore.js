/**
 * @author christian portilla pauca
 */
Ext.define(
	'app18.store.sessionstorage.AlumnoStore',
	{
		extend: 'Ext.data.Store',
		model: 'app18.model.sessionstorage.AlumnoModel',
		alias: 'store.sessionalumno',
		proxy: {
			type: 'sessionstorage',
        	id  : 'sessionalumnostore'
		},
		autoLoad: true,
		autoSync: true
	}
);