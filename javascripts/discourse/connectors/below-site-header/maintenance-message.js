import Component from "@glimmer/component";
import { service } from "@ember/service";

export default class MaintenanceMessage extends Component {
  @service currentUser;

  get messageVisible() {
    return !this.currentUser?.admin;
  }
}
