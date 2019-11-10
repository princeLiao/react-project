Function.prototype.bind = function (context) {
  var _this = this
  var args = Array.prototype.slice.call(arguments, 1)

  return function() {
      return _this.apply(context, args)
  }
}
var obj={
  name:"聊威威",
  type:"bind"
};
(function test(){
  this.name="fun";
}).bind(obj)