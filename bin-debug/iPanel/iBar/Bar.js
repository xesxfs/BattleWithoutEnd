var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var iPanel;
(function (iPanel) {
    var iBar;
    (function (iBar) {
        var Bar = (function (_super) {
            __extends(Bar, _super);
            function Bar(param1, param2, param3, param4) {
                if (param4 === void 0) { param4 = ""; }
                var _this = _super.call(this) || this;
                _this._max = NaN;
                _this._value = 0;
                _this._aim = 0;
                _this.RATIO = 0.1;
                _this.w = NaN;
                _this.fcolor = 0;
                _this.isMouseOver = false;
                _this.infoWindow = iGlobal.Global.stringInfoWindow;
                _this.w = param1;
                _this._max = param2;
                _this.fcolor = param3;
                _this.text = param4;
                _this.drawBg();
                _this.line = new egret.Sprite();
                _this.addChild(_this.line);
                _this.updateMc();
                _this.addEventListener(egret.Event.ENTER_FRAME, _this.onEnterFrame, _this, null);
                return _this;
                // this.addEventListener(flash.MouseEvent.MOUSE_OVER,flash.bind(this.onMouseOver,this),null);
                // this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,flash.bind(this.onMouseOut,this),null);
            }
            // private onMouseOver(param1:flash.MouseEvent)
            // {
            // 	this.filters = [new flash.GlowFilter(this.fcolor,0.66,4,4)];
            // 	var _loc2_:egret.Point = flash.localToGlobal(this,new egret.Point(this["mouseX"] + 15,this["mouseY"] + 15));
            // 	this.infoWindow.x = _loc2_.x;
            // 	this.infoWindow.y = _loc2_.y;
            // 	this.infoWindow.y = _loc2_.y;
            // 	this.isMouseOver = true;
            // 	iGlobal.Global.setStringInfoWindow(this.text + (this._value >> 0) + "/" + this._max);
            // }
            // private onMouseOut(param1:flash.MouseEvent)
            // {
            // 	this.filters = [];
            // 	this.isMouseOver = false;
            // 	iGlobal.Global.hideInfoWindow();
            // }
            Bar.prototype.updateMc = function () {
                this.line.graphics.clear();
                this.line.graphics.lineStyle(2, 15066597);
                this.line.graphics.moveTo(0, 0);
                this.line.graphics.lineTo(this.w, 0);
                this.line.graphics.lineStyle(2, this.fcolor);
                this.line.graphics.moveTo(0, 0);
                if (this._value < 0) {
                    this.line.graphics.lineTo(0, 0);
                }
                else if (this._value > this._max) {
                    this.line.graphics.lineTo(this.w, 0);
                }
                else {
                    this.line.graphics.lineTo(this._value / this._max * this.w, 0);
                }
            };
            Bar.prototype.onEnterFrame = function (param1) {
                if (Math.abs(this._aim - this._value) > this._max / 100) {
                    this._value = this._value + (this._aim - this._value) * this.RATIO;
                }
                else {
                    this._value = this._aim;
                }
                this.updateMc();
            };
            Object.defineProperty(Bar.prototype, "Max", {
                set: function (param1) {
                    this._max = param1;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Bar.prototype, "Value", {
                get: function () {
                    return this._value;
                },
                set: function (param1) {
                    this._aim = param1;
                    if (this.isMouseOver) {
                        iGlobal.Global.setStringInfoWindow(this.text + (this._value >> 0) + "/" + this._max);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Bar.prototype.drawBg = function () {
                this.bg = new egret.Sprite();
                this.addChild(this.bg);
                this.bg.graphics.beginFill(4095, 0);
                this.bg.graphics.drawRect(-3, 0, this.w, 8);
                this.bg.graphics.endFill();
            };
            return Bar;
        }(egret.Sprite));
        iBar.Bar = Bar;
        __reflect(Bar.prototype, "iPanel.iBar.Bar");
    })(iBar = iPanel.iBar || (iPanel.iBar = {}));
})(iPanel || (iPanel = {}));
//# sourceMappingURL=Bar.js.map