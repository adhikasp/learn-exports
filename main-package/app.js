// name export/inport
// tools not in git example project.
// import { sayGoodbye } from 'tools' 
// sayGoodbye() // console message from tools package

// default export/inport
import templates from 'templates'
console.log(templates)

// Both default and named possible in same module
import { Model } from 'templates' // User.php have dot, maybe need special handler / translating name first. So use other simpler name instead.
console.log(Model) // NAMED import doesn't work.
// This is as close as we got without majorly change how the build script works
// see https://stackoverflow.com/a/39709236/4504053

console.log(templates.Model); // This works though, obviously

// review tools/index.js and templates/index.js - note the syntax