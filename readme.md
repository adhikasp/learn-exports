# How to setup multiple npm packages with raw-loader sub dependency
This package simulates parts of a planned local development environment.

## Task
One of the sub packages needs to use `raw-loader` to load template stubs into a dictonary. You will solve that, and PR the solution to this repo.

## Goal
In `/main-package` you should be able to do:
```
import templates from 'templates'
console.log(templates)
// this will log an object with all the templates
```

When new templates are added to `templates/stubs` folder they should be loaded automatically. There is some code boilerplate included in this repo may or may not be used (it may be flawed).

# Installation
* clone this repo
* go to `/templates-package`
* run `yarn link`
* go to `/main-package`
* run `yarn link templates-package`
* run `yarn`
* run `yarn watch`
* visit `learn-exports.test/main-package`