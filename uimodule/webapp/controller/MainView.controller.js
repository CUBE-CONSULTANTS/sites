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
          oContactInfoMode = new JSONModel(),
          iPagesCount = 1;
        oCustomersModel.loadData("./model/customers.json", null, false);
        oProcessFlowModel.loadData(
          "./model/ProcessFlowNodes.json",
          null,
          false
        );

        oContactInfoMode.loadData("./model/quickView.json", null, false);

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
        this.getView().setModel(oContactInfoMode, "contactInfo");

        // const oCarousel = this.getView().byId("carousel");
        // this._timeoutHandle(oCarousel);
      },
      /**
       * @override
       */
      onAfterRendering: function () {
        const aSpots = [
          {
            pos: "12.487835057672863;41.844338019136714;0",
            contentOffset: "0;0;0",
            type: "Default",
            key: "Roma",
            scale: "1;1;1",
            tooltip: "Roma",
            icon: "factory",
          },
        ];
        // function* range(start, end) {
        //   for (let i = start; i < end; i++) {
        //     yield i;
        //   }
        // }
        // for (const o of range(0, 50)) {
        //   aSpots.push({
        //     pos:
        //       (12 + 10 * o).toString() +
        //       ".487835057672863;41.844338019136714;0",
        //     contentOffset: "1;1;1",
        //     type: "Success",
        //     key: "Rome", // gestire con i18n
        //     tooltip: "Rome", // gestire con i18n
        //     icon: "sap-icon://building",
        //   });
        // }

        const oSpot = {
          Spots: aSpots,
        };

        this.getView().setModel(new JSONModel(oSpot), "maps");
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
