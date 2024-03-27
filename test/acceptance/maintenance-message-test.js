import { visit } from "@ember/test-helpers";
import { test } from "qunit";
import { acceptance } from "discourse/tests/helpers/qunit-helpers";

acceptance("Maintenance Message - Anonymous", function () {
  test("Viewing Topic", async function (assert) {
    await visit("/t/internationalization-localization/280");

    assert
      .dom(".maintenance-message-message--wrapper")
      .exists("full-page blocking message is displayed");
  });

  test("Viewing homepage", async function (assert) {
    await visit("/");

    assert
      .dom(".maintenance-message-message--wrapper")
      .exists("full-page blocking message is displayed");
  });
});

acceptance("Maintenance Message - Logged In", function (needs) {
  needs.user({
    admin: false,
  });

  test("Viewing Topic", async function (assert) {
    await visit("/t/internationalization-localization/280");

    assert
      .dom(".maintenance-message-message--wrapper")
      .exists("full-page blocking message is displayed");
  });
});

acceptance("Maintenance Message - Admin", function (needs) {
  needs.user({
    admin: true,
  });

  test("Viewing Topic", async function (assert) {
    await visit("/t/internationalization-localization/280");

    assert
      .dom(".maintenance-message-message--wrapper")
      .doesNotExist("full-page blocking message is displayed");

    assert
      .dom(".maintenance-message-message--staff-note")
      .exists("staff mini-message is displayed");
  });
});
