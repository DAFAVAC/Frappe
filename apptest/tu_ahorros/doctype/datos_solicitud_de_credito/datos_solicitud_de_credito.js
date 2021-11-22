// Copyright (c) 2021, orlando Cholota and contributors
// For license information, please see license.txt

frappe.ui.form.on('Datos solicitud de credito', {
	before_save(frm) {
		frm.doc.micro_credito < 1001 ? null: frappe.throw("Microcrédito hasta 1000 dólares");
		(frm.doc.consumo<20000) && (1000<frm.doc.consumo) ? null: frappe.throw("Consumo mayores de 1.000 a 20.000 dólares");
		frm.doc.vivienda>20000 ? null: frappe.throw("Vivienda mayor de 20.000 dólares");
	}
});
