sap.ui.define(["sap/ui/test/Opa5"], function (Opa5) {
    "use strict";

    return Opa5.extend("it.cubeconsultants.site.test.integration.arrangements.Startup", {
        iStartMyApp: function () {
            this.iStartMyUIComponent({
                componentConfig: {
                    name: "it.cubeconsultants.site",
                    async: true,
                    manifest: true
                }
            });
        }
    });
});
