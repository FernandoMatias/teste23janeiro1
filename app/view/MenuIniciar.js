Ext.define('Touch2Demo.view.MenuIniciar', {
    extend: 'Ext.dataview.List',
    alias: 'widget.menuIniciar',
    requires: [
	'Ext.Img'
    ],
    config: {
	items: [
	    {
		docked: 'top',
		xtype: 'toolbar',
		ui: 'light',
		//height: 50,
		title: 'Real Pneus',
		style:  'font-size: 20px',
		items: [
		    {
			xtype: 'image',
			width: 37,
			height: 45,
			left: '95%',
			src: '../realpneus_mobile/touch2/resources/images/teste.fw.png'
		    },
		    {
			xtype: 'image',
			width: 228,
			height: 37,
			src: '../realpneus_mobile/touch2/resources/images/logo2.fw.png'
			
		    }
		]
	    },
	    {
		xtype: 'container',
		height: 5
	    },
	    {
		xtype: 'button',
		text: 'Nova Coleta',
		height: 75,
		action: 'novaColeta'
	    },
	    {
		xtype: 'container',
		height: 5
	    }, {
		xtype: 'button',
		action: 'listaColetas',
		height: 75,
		text: 'Lista de Coletas'
	    },
	    {
		xtype: 'container',
		height: 5
	    },
	    {
		xtype: 'button',
		action: 'sincronizar',
		height: 75,
		text: 'Sincronizar'
	    },
	    {
		xtype: 'container',
		height: 5
	    },
//	    {
//		xtype: 'button',
//		action: 'contatosForm',
//		text: 'Novo Cliente'
//	    },
//	    {
//		xtype: 'container',
//		height: 5
//	    },
	    {
		xtype: 'button',
		action: 'contatosList',
		height: 75,
		text: 'Lista de Clientes'
	    },
	    {
		xtype: 'container',
		height: 5
	    },
	    {
		xtype: 'button',
		action: 'configurar',
		height: 75,
		text: 'Configurações'
	    },
	    {
		xtype: 'container',
		height: 5
	    }
	]
    }
});