"use strict";

module.exports = {
  settings: {
    "import/internal-regex": "^ember-alexandria/",
  },
  extends: ["@adfinis-sygroup/eslint-config/ember-addon"],
  globals: {
    Ember: "readonly",
  },
};
