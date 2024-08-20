/*global QUnit*/

sap.ui.define([
	"commeuusuariocom/project2/controller/HelloWorldFiori.controller"
], function (Controller) {
	"use strict";

	QUnit.module("HelloWorldFiori Controller");

	QUnit.test("I should test the HelloWorldFiori controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
