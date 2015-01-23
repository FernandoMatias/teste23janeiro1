Ext.define('Touch2Demo.view.ContatosForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.contatosForm',
    config: {
	idProperty: 'id',
	items: [
	    {
		docked: 'top',
		xtype: 'toolbar',
		ui: 'light',
		title: 'Editando Contato',
		itemId: 'toolbarFormContato',
		items: [
		    {
			xtype: 'button',
			action: 'menuIniciar',
			iconMask: true,
			iconCls: 'home'
		//	text: 'Menu Iniciar'
		    },
		    {
			xtype: 'button',
			ui: 'back',
			action: 'contatosList',
			iconMask: true,
			iconCls: 'reply'
			//text: 'Lista de Contatos'
		    }

		]
	    },
	    {
		xtype: 'fieldset',
		title: 'Contato',
		items: [
		    {
			xtype: 'textfield',
			name: 'nome',
			label: 'Nome'
		    },
		    {
			xtype: 'textfield',
			name: 'sobrenome',
			label: 'Sobrenome'
		    },
		    {
			xtype: 'textfield',
			name: 'email',
			label: 'Email'
		    },
		    {
			xtype: 'textfield',
			name: 'endereco',
			label: 'Endereco'
		    }
		]
	    },
	    {
		xtype: 'button',
		action: 'salvarContato',
		ui: 'action',
		text: 'Salvar',
		hidden: true
	    },
	    {
		xtype: 'container',
		height: 20
	    },
	    {
		xtype: 'button',
		action: 'deletarContato',
		ui: 'decline',
		text: 'Deletar',
		hidden: true
	    }
	]
    }
});