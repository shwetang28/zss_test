sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("zss_namespace.zss_test.controller.View1", {
		onInit: function(){
			jQuery.sap.require("zss_namespace/zss_test/model/gmap");
		}

	});
});