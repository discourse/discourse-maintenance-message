import { acceptance, visible } from "discourse/tests/helpers/qunit-helpers";
import { visit } from "@ember/test-helpers";
import { test } from "qunit";

acceptance("Maintenance Message - Anonymous", function () {
  test("Viewing Topic", async function (assert) {
    await visit("/t/internationalization-localization/280");

    assert.ok(
      visible(".maintenance-message-message--wrapper"),
      "full-page blocking message is displayed"
    );
  });

  test("Viewing homepage", async function (assert) {
    await visit("/");

    assert.ok(
      visible(".maintenance-message-message--wrapper"),
      "full-page blocking message is displayed"
    );
  });
});

acceptance("Maintenance Message - Logged In", function (needs) {
  needs.user({
    admin: false,
  });

  test("Viewing Topic ", async function (assert) {
    await visit("/t/internationalization-localization/280");

    assert.ok(
      visible(".maintenance-message-message--wrapper"),
      "full-page blocking message is displayed"
    );
  });
});

acceptance("Maintenance Message - Admin", function (needs) {
  needs.user({
    admin: true,
  });

  test("Viewing Topic ", async function (assert) {
    await visit("/t/internationalization-localization/280");

    assert.notOk(
      visible(".maintenance-message-message--wrapper"),
      "full-page blocking message is displayed"
    );

    assert.ok(
      visible(".maintenance-message-message--staff-note"),
      "staff mini-message is displayed"
    );
  });
});
