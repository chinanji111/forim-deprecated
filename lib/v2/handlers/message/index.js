var modules = [];
var requires = ['my', 'new', 'update', 'remove', 'list'];
for (var i = 0; i < requires.length; i++) {
  modules = modules.concat(require('./' + requires[i]));
}
module.exports = modules;
