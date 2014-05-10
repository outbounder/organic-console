var Organel = require("organic").Organel
var _ = require("underscore")

module.exports = Organel.extend(function(plasma, dna){
  Organel.call(this, plasma, dna)

  if(dna.reactOn)
    this.on(dna.reactOn, this.reaction)
  else
    this.reaction(dna)
}, {
  reaction: function(options) {
    var self = this;
    ["log", "debug", "error", "warn", "info", "trace"].forEach(function(method){
      console[method] = function(){ 
        self.emitEvery({
          method: method,
          arguments: Array.prototype.slice.call(arguments, 0)
        })
      }
    })
  },
  emitEvery: function(c) {
    this.emit(_.extend({}, this.config.emitEvery, c))
  }
})