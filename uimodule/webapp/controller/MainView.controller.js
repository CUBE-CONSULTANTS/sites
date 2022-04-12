sap.ui.define(
  [
    "it/cubeconsultants/site/controller/BaseController",
    "sap/ui/Device",
    "sap/ui/model/json/JSONModel",
  ],
  function (Controller, Device, JSONModel) {
    "use strict";

    return Controller.extend("it.cubeconsultants.site.controller.MainView", {
      onInit: function () {
        var oProductsModel = new JSONModel(),
          iPagesCount = 1;
        oProductsModel.loadData("/model/products.json", null, false);

        if (Device.system.desktop) {
          iPagesCount = 4;
        } else if (Device.system.tablet) {
          iPagesCount = 2;
        }

        var oSettingsModel = new JSONModel({ pagesCount: iPagesCount });
        oProductsModel.setSizeLimit(6);

        this.getView().setModel(oSettingsModel, "settings");
        this.getView().setModel(oProductsModel, "products");
      },
      onContactUs: () => {
        const mailConfig = {
          subject: "Contact Us",
          to: "amministrazione@cubeconsultants.it",
          cc: "alessandro.chessa@cubemail.it",
          body: "",
        };
        window.open(
          `mailto:${mailConfig.to}?cc=${mailConfig.cc}&subject=${mailConfig.subject}&body=${mailConfig.body}`
        );
      },
    });
  }
);