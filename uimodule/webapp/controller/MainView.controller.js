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
        var oCustomersModel = new JSONModel(),
          oProcessFlowModel = new JSONModel(),
          iPagesCount = 1;
        oCustomersModel.loadData("./model/customers.json", null, false);
        oProcessFlowModel.loadData(
          "./model/ProcessFlowNodes.json",
          null,
          false
        );

        if (Device.system.desktop) {
          iPagesCount = 6;
        } else if (Device.system.tablet) {
          iPagesCount = 4;
        }

        var oSettingsModel = new JSONModel({ pagesCount: iPagesCount });
        // oCustomersModel.setSizeLimit(6);

        this.getView().setModel(oSettingsModel, "settings");
        this.getView().setModel(oCustomersModel, "customers");
        this.getView().setModel(oProcessFlowModel, "processFlowModel");

        // const oCarousel = this.getView().byId("carousel");
        // this._timeoutHandle(oCarousel);
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
      // _timeoutHandle: (oCarousel) => {
      //   // const oCarousel = this.getView().byId("carousel");
      //   window.setInterval(
      //     function () {
      //       oCarousel.next();
      //     }.bind(this),
      //     2500
      //   );
      // },
      // _pageChanged: function (e) {
      //   this._timeoutHandle(e.getSource());
      // },
    });
  }
);
