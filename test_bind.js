function bind(obj, ...arg) {
  obj = typeof obj === "object" && obj !== null ? obj : window;
  let _this = this;
  return function (...args) {
    let allArs = [...arg, ...args];
    return _this.call(obj, ...allArs);
  };
}

module.exports = bind;
