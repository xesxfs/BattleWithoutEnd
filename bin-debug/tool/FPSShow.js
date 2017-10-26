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
    var FPSShow = (function (_super) {
        __extends(FPSShow, _super);
        function FPSShow() {
            var _this = _super.call(this) || this;
            _this.count = 0;
            _this.init();
            return _this;
        }
        FPSShow.prototype.init = function () {
            var _self__ = this;
            this.txt = new flash.TextField();
            this.txt.textColor = flash.checkUint(16711680);
            _self__.addChild(this.txt);
            var _loc1_ = new egret.Timer(1000);
            _loc1_.addEventListener(egret.TimerEvent.TIMER, flash.bind(this.timerHandler, this), null);
            this.addEventListener(egret.Event.ENTER_FRAME, flash.bind(this.onEnterFrame, this), null);
            _loc1_.start();
            this.touchChildren = false;
            this.touchEnabled = false;
        };
        FPSShow.prototype.timerHandler = function (param1) {
            this.txt.text = "FPS:" + this.count;
            this.count = flash.checkInt(0);
        };
        FPSShow.prototype.onEnterFrame = function (param1) {
            this.count++;
        };
        return FPSShow;
    }(egret.Sprite));
    tool.FPSShow = FPSShow;
    __reflect(FPSShow.prototype, "tool.FPSShow");
})(tool || (tool = {}));
flash.extendsClass("tool.FPSShow", "egret.Sprite");
//# sourceMappingURL=FPSShow.js.map