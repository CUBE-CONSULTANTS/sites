sap.ui.require(["sap/ui/test/Opa5","sap/ui/test/actions/Press"],function(e,t){"use strict";var s="it.cubeconsultants.site.view.MainView";e.createPageObjects({onTheMainPage:{viewName:s,actions:{iPressTheButton:function(){return this.waitFor({controlType:"sap.m.Button",actions:new t,errorMessage:"App does not have a button"})}},assertions:{iShouldSeeTheTitle:function(){return this.waitFor({controlType:"sap.m.Title",properties:{text:"it.cubeconsultants.site"},success:function(){e.assert.ok(true,"The page shows the correct title")},errorMessage:"App does not show the expected title it.cubeconsultants.site"})}}}})});