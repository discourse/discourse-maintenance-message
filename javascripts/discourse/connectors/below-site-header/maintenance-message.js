import Component from "@glimmer/component";
import { inject as service } from "@ember/service";

export default class MaintenanceMessage extends Component {
  @service currentUser;

  get messageVisible() {
    return !this.currentUser || !this.currentUser.admin;
  }
}
