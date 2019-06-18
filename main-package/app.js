// name export/inport
import { sayGoodbye } from 'tools'
sayGoodbye() // console message from tools package

// default export/inport
import templates from 'templates'
console.log(templates)

// Both default and named possible in same module
console.log(User)
import { User } from 'templates'

// review tools/index.js and templates/index.js - note the syntax