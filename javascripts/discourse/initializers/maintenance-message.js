import { withPluginApi } from "discourse/lib/plugin-api";

function initialize(api) {
  api.registerConnectorClass("below-site-header", "maintenance-message", {
    setupComponent(args, component) {
      let showBlockingMessage = false;

      if (component.currentUser === undefined) {
        showBlockingMessage = true;
      } else if (!component.currentUser.admin) {
        showBlockingMessage = true;
      }

      this.set("showBlockingMessage", showBlockingMessage);
    },
  });
}

export default {
  name: "maintenance-message-initializer",

  initialize() {
    withPluginApi("0.8.31", initialize);
  },
};
