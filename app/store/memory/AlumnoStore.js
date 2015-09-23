/**
 * @author christian portilla pauca
 */
Ext.define(
	'app18.store.memory.AlumnoStore',
	{
		extend: 'Ext.data.ArrayStore',
		model: 'app18.model.memory.AlumnoModel',
		alias: 'store.memoryalumno',
		proxy: {
			type: 'memory',
			id:'memoryalumnostore'
		},
		data:[],
		autoLoad: true,
		autoSync: true,
		needsSync: true
	}
);