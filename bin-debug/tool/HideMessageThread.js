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
    var HideMessageThread = (function (_super) {
        __extends(HideMessageThread, _super);
        function HideMessageThread(param1, param2, param3, param4) {
            if (param4 === void 0) { param4 = null; }
            var _this = _super.call(this) || this;
            _this.gap = 1;
            _this.ignoreColor = 0;
            _this.out = false;
            _this = _super.call(this) || this;
            _this.FILTER_BLUR = new flash.BlurFilter(4, 4, flash.BitmapFilterQuality.LOW);
            _this.POINT_ZERO = new egret.Point();
            _this.message = param1;
            _this.parent = param1.parent;
            _this.particles = new Array();
            _this.gap = flash.checkInt(param2);
            _this.ignoreColor = flash.checkUint(param3);
            _this.behaveFunction = param4;
            return _this;
        }
        HideMessageThread.prototype.run = function () {
            var _loc1_ = null;
            var _loc2_ = flash.checkUint(0);
            var _loc3_ = NaN;
            var _loc4_ = NaN;
            var _loc5_ = NaN;
            var _loc6_ = NaN;
            var _loc7_ = flash.checkUint(0);
            var _loc8_ = flash.checkUint(0);
            var _loc9_ = null;
            _loc1_ = this.message.stage;
            _loc9_ = (this.message).bitmapData;
            _loc3_ = (this.message).bitmapData.width;
            _loc4_ = _loc9_.height;
            _loc5_ = this.message.x;
            _loc6_ = this.message.y;
            _loc7_ = flash.checkUint(0);
            while (_loc7_ < _loc3_) {
                _loc8_ = flash.checkUint(0);
                while (_loc8_ < _loc4_) {
                    _loc2_ = flash.checkUint(_loc9_.getPixel32(_loc7_, _loc8_));
                    if (_loc2_) {
                        if (_loc2_ != this.ignoreColor) {
                            this.particles.push(new tool.HideMessageParticle(_loc5_ + _loc7_, _loc6_ + _loc8_, _loc2_));
                        }
                    }
                    _loc8_ = flash.checkUint(_loc8_ + this.gap);
                }
                _loc7_ = flash.checkUint(_loc7_ + this.gap);
            }
            _loc9_.dispose();
            this.film = new flash.BitmapData(_loc1_.stageWidth, _loc1_.stageHeight, true, 0);
            this.wrapper = new flash.Bitmap(this.film);
            this.wrapper = new flash.Bitmap(this.film);
            this.parent.addChild(this.wrapper);
            this.parent.removeChild(this.message);
            this.parent.addEventListener(egret.Event.ENTER_FRAME, flash.bind(this.step, this), null);
        };
        HideMessageThread.prototype.step = function (param1) {
            if (param1 === void 0) { param1 = null; }
            var _loc2_ = flash.checkUint(0);
            var _loc3_ = flash.checkUint(0);
            var _loc4_ = null;
            var _loc5_ = null;
            this.film["lock"]();
            this.film["applyFilter"](this.film, this.film.rect, this.POINT_ZERO, this.FILTER_BLUR);
            var _loc6_ = flash.checkInt(1);
            _loc3_ = flash.checkUint(this.particles.length);
            _loc2_ = flash.checkUint(0);
            while (_loc2_ < _loc3_) {
                _loc5_ = this.particles[_loc2_];
                _loc5_.update();
                this.film["setPixel32"](_loc5_.x, _loc5_.y, _loc5_.color);
                if (!this.film.rect.contains(_loc5_.x, _loc5_.y)) {
                    this.particles.splice(_loc2_, 1);
                    _loc2_--;
                    _loc3_ = flash.checkUint(this.particles.length);
                }
                _loc2_ = flash.checkUint(_loc2_ + _loc6_);
            }
            this.film["unlock"]();
            if (_loc3_ > 20) {
                if (_loc3_ < 50) {
                    if (!this.out) {
                        console.log("run");
                        tool.Effect.fadeOut(this.wrapper, 30, this.behaveFunction);
                        this.out = true;
                    }
                }
            }
            else {
                this.parent.removeEventListener(egret.Event.ENTER_FRAME, flash.bind(this.step, this), null);
                this.finalize();
            }
        };
        HideMessageThread.prototype.finalize = function () {
            this.parent.removeChild(this.wrapper);
            this.film.dispose();
            this.parent = null;
            this.wrapper = null;
            this.message = null;
        };
        return HideMessageThread;
    }(egret.HashObject));
    tool.HideMessageThread = HideMessageThread;
    __reflect(HideMessageThread.prototype, "tool.HideMessageThread");
})(tool || (tool = {}));
//# sourceMappingURL=HideMessageThread.js.map