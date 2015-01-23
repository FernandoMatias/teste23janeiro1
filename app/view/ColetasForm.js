Ext.define('Touch2Demo.view.ColetasForm', {
    extend: 'Ext.form.Panel',
    onItemDisclosure: true,
    alias: 'widget.coletasform',
    requires: [
	'Ext.form.FieldSet',
	'Ext.field.Select',
	'Ext.data.Store',
	'Ext.Panel',
	'Ext.picker.Picker',
	'Ext.data.StoreManager',
	'Ext.List',
	'Touch2Demo.store.Contato',
	'Ext.field.DatePicker',
	'Ext.TitleBar',
	'Touch2Demo.store.Pneu_s'

    ],
    config: {
	items: [
	    {
		docked: 'top',
		xtype: 'toolbar',
		//ui: 'light',
		title: 'Coleta de Pneus',
		ui: 'light',
		itemId: 'toolbarFormColeta',
		items: [
		    {
			xtype: 'button',
			action: 'menuIniciar',
			iconMask: true,
			iconCls: 'home'
			//text: 'Menu Iniciar'
		    },
		    {
			xtype: 'button',
			action: 'listaColetas',
			//text: 'Lista de Coletas',
			iconMask: true,
			iconCls: 'reply' ,
			ui: 'back'
		    }
		]
	    },
	    {
		xtype: 'fieldset',
		items: [
		    {
			xtype: 'selectfield',
			name: 'idCliente',
			label: 'Cliente',
			displayField: 'nome',
			valueField: 'id',
			store: 'Contatos'

		    },
		    {
			xtype: 'datepickerfield',
			label: 'Data da Entrega',
			name: 'data_entrega',
			dateFormat: 'd/m/Y',
			submitFormat: 'd/m/Y H:i:s',
			//useMask: true,
			value: new Date(),
			picker: {
			    slotOrder: ['day', 'month', 'year']
			}
		    },
		    {
			xtype: 'textfield',
			name: 'observacao',
			label: 'Observa��o'
		    }
		]
	    },
	    {
		xtype: 'fieldset',
		items: [
		    {
			xtype: 'selectfield',
			label: 'Pneu',
			name: 'idPneu',
			displayField: 'todos',
			valueField: 'id',
			usePicker: true,
			store: 'Pneu_s'
		    }
		]
	    },
	    {
		xtype: 'fieldset',
		items: [
		    {
			xtype: 'textfield',
			name: 'n_fogo',
			label: 'N� do fogo'
		    },
		    {
			xtype: 'textfield',
			name: 'n_serie',
			label: 'N� de serie'
		    },
		    {
			xtype: 'selectfield',
			label: 'Servi�o',
			name: 'servico',
			options: [
			    {text: 'servi�o 2', value: 'servico2'},
			    {text: 'servi�o 3', value: 'servico3'}
			]
		    }
		]
	    },
	    {
		xtype: 'button',
		action: 'salvarColeta',
		ui: 'action',
		text: 'Salvar'
	    },
	    {
		xtype: 'container',
		height: 10
	    },
	    {
		xtype: 'button',
		action: 'deletarColeta',
		ui: 'decline',
		text: 'Deletar',
		hidden: true
	    }
	]
    }
});