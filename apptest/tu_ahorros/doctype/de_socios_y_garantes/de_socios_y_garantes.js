// Copyright (c) 2021, orlando Cholota and contributors
// For license information, please see license.txt

frappe.ui.form.on('De socios y garantes', {
	
	refresh(frm) {
		frm.add_custom_button('Create Garante', () => {
				frappe.new_doc('garantes', {
					garantes: frm.doc.name
				})
			})
	},

	before_save(frm) {
		let birth = frm.doc.fecha_na;
		let birthArray = birth.split("-");
		let age = new Date()-new Date(birthArray[0],birthArray[1]-1,birthArray[2]);

		if(567993600000>age)
		{
			frappe.throw("Usted es menor de Edad,o verifique sus datos");
		}
	
		if(frm.doc.ci.length-1 < 9)
		{
			frappe.throw("Verifique su Numero de Cedula");
		}


	}
});
