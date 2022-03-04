function bind(obj, ...arg) {
  obj = typeof obj === "object" && obj !== null ? obj : window;
  let _this = this;

  function F() {}
  const Fn = function (...args) {
    let allArs = [...arg, ...args];
    if (new.target) {
      obj = this;
    }
    return _this.call(obj, ...allArs);
  };
  F.prototype = this.prototype;
  Fn.prototype = new F();
  return Fn;
};

module.exports = bind;


