// Copyright (c) 2021, orlando Cholota and contributors
// For license information, please see license.txt

frappe.ui.form.on('Example', {
		after_save(frm) {
			console.log(frm.doc)
			null
			/* if(frm.doc.fecha_nacimient===frm.doc.fecha_defuncion)
			{
				let array = [...frm.doc.correo];
				let val = array.find(i=>i==="@");
				let valor = val === "@" ? null: frappe.throw("no es valido");
			}  */
			
	}
});
