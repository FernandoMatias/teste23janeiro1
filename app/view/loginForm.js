Ext.define('Touch2Demo.view.LoginForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.loginForm',
    config: {
	items: [
	    {
		docked: 'top',
		xtype: 'toolbar',
		ui: 'light',
		title: 'Login'
	    },
	    {
		xtype: 'fieldset',
		items:[
		    {
			xtype: 'textfield',
			name: 'login',
			label: 'Login'
		    },
		    {
			xtype: 'textfield',
			name: 'senha',
			label: 'Senha'
		    }
		]
	    },
	    {
		xtype: 'button',
		text: 'Logar',
		ui: 'action',
		action: 'logar'
	    }
	]
    }
});