Ext.define('Touch2Demo.view.ContatosList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.contatosList',
    config: {
	store: 'Contatos',
	itemTpl: 'nome:{nome}     \n\
	          CPF/CNPJ:{cpf} ',
	onItemDisclosure: true,
	items: [
	    {
		docked: 'top',
		xtype: 'toolbar',
		ui: 'light',
		title: 'Lista de Contatos',
		items: [
		    {
			xtype: 'button',
			action: 'contatosForm',
			text: 'Novo Contatos',
			hidden: true
		    },
		    {
			xtype: 'button',
			action: 'menuIniciar',
			//text: 'Menu Iniciar',
			iconMask: true,
			iconCls: 'home'
		    }
		]
	    }
	]
    }
});