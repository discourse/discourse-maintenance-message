import Component from "@glimmer/component";
import { service } from "@ember/service";
import { i18n } from "discourse-i18n";

export default class MaintenanceMessage extends Component {
  @service currentUser;

  get messageVisible() {
    return !this.currentUser?.admin;
  }

  <template>
    {{#if this.messageVisible}}
      <div class="maintenance-message-message--wrapper">
        <div class="maintenance-message-message--container">
          <h1>
            {{i18n (themePrefix "heading")}}
          </h1>
          <div class="maintenance-message-message--contents">
            {{i18n (themePrefix "message")}}
          </div>
        </div>
      </div>
    {{else}}
      <div class="maintenance-message-message--staff-note">
        {{i18n (themePrefix "staff_message")}}
      </div>
    {{/if}}
  </template>
}
