describe("organic-console", function(){
  var Plasma = require("organic").Plasma
  var Organel = require("../index")
  var instance
  var plasma = new Plasma()
  it("patches console.log", function(){
    instance = new Organel(plasma, {emitEvery: {type: "console"}, disposeOn: "dispose"})
    console.log("test")
    plasma.once("console", function(c){
      expect(c.method).toBe("log")
      expect(c.arguments.length).toBe(1)
      expect(c.arguments[0]).toBe("test")
    })
  })
  it("returns original console.log on dispose", function(){
    plasma.emit({type: "dispose"})
    plasma.once("console", function(c){
      throw new Error("shouldn't happen")
    })
    console.log("test")
  })
})