# How to setup multiple npm packages

* clone this repo
* go to `/tools`
* run `yarn link`
* go to `/templates`
* run `yarn link`
* go to `/main-package`
* run `yarn link tools`
* run `yarn link templates`
* run `yarn`
* run `yarn watch`
* visit `learn-exports.test/main-package`