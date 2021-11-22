# Copyright (c) 2021, orlando Cholota and contributors
# For license information, please see license.txt

import frappe
from frappe.website.website_generator import WebsiteGenerator

class Example(WebsiteGenerator):
	def before_save(self):
		#print(Document)
		 self.name = self.nombre	
		