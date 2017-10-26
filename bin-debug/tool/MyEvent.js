var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tool;
(function (tool) {
    var MyEvent = (function (_super) {
        __extends(MyEvent, _super);
        function MyEvent(param1) {
            return _super.call(this, param1) || this;
        }
        return MyEvent;
    }(egret.Event));
    tool.MyEvent = MyEvent;
    __reflect(MyEvent.prototype, "tool.MyEvent");
})(tool || (tool = {}));
tool.MyEvent.Change = "change";
tool.MyEvent.Update = "myupdate";
tool.MyEvent.MyScroll = "myScroll";
flash.extendsClass("tool.MyEvent", "egret.Event");
//# sourceMappingURL=MyEvent.js.map