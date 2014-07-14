var _ = require("underscore")

module.exports = function(plasma, dna){
  this.dna = dna
  this.dna.methods = dna.methods || ["log", "debug", "error", "warn", "info", "trace"]
  this.methods = []
  this.plasma = plasma
  if(dna.reactOn)
    plasma.on(dna.reactOn, this.reaction, this)
  else
    this.reaction(dna)
  if(dna.disposeOn)
    plasma.on(dna.disposeOn, this.dispose, this)
}

module.exports.prototype.reaction = function(options) {
  var self = this
  this.dna.methods.forEach(function(method){
    self.methods[method] = console[method]
    console[method] = function(){ 
      self.emitEvery({
        method: method,
        arguments: Array.prototype.slice.call(arguments, 0)
      })
    }
  })
}

module.exports.prototype.dispose = function(options) {
  var self = this
  this.dna.methods.forEach(function(method){
    if(self.methods[method])
      console[method] = self.methods[method]
  })
}

module.exports.prototype.emitEvery = function(c) {
  this.plasma.emit(_.extend({}, this.dna.emitEvery, c))
}