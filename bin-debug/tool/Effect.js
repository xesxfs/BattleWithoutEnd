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
    var Effect = (function (_super) {
        __extends(Effect, _super);
        function Effect() {
            var _this = _super.call(this) || this;
            _this = _super.call(this) || this;
            return _this;
        }
        Effect.fadeIn = function (param1, param2) {
            if (param2 === void 0) { param2 = 10; }
            var enter = null;
            var sprite = param1;
            var count = param2;
            enter = function (param1) {
                sprite.alpha = sprite.alpha + 1 / count;
                if (sprite.alpha >= 1) {
                    sprite.removeEventListener(egret.Event.ENTER_FRAME, enter, null);
                }
            };
            sprite.alpha = 0;
            sprite.addEventListener(egret.Event.ENTER_FRAME, enter, null);
        };
        Effect.fadeOut = function (param1, param2, param3) {
            if (param2 === void 0) { param2 = 10; }
            if (param3 === void 0) { param3 = null; }
            var enter = null;
            var object = param1;
            var count = param2;
            var behaveFunction = param3;
            enter = function (param1) {
                object.alpha = object.alpha - 1 / count;
                if (object.alpha <= 0) {
                    object.removeEventListener(egret.Event.ENTER_FRAME, enter, null);
                    if (object) {
                        if (flash.As3is(object, egret.Sprite)) {
                            (flash.As3As(object, egret.Sprite)).touchEnabled = true;
                            (flash.As3As(object, egret.Sprite)).touchChildren = true;
                        }
                    }
                    if (behaveFunction) {
                        behaveFunction();
                    }
                }
            };
            if (flash.As3is(object, egret.Sprite)) {
                (flash.As3As(object, egret.Sprite)).touchEnabled = false;
                (flash.As3As(object, egret.Sprite)).touchChildren = false;
            }
            object.addEventListener(egret.Event.ENTER_FRAME, enter, null);
        };
        Effect.explodeOut = function (param1, param2, param3, param4) {
            if (param4 === void 0) { param4 = null; }
            var _loc5_ = new flash.BitmapData(param1.width, param1.height, true, 0);
            var _loc6_ = flash.getBounds(param1, param1).x;
            var _loc7_ = flash.getBounds(param1, param1).y;
            _loc5_.draw2(param1, new egret.Matrix(1, 0, 0, 1, -_loc6_, -_loc7_));
            var _loc8_ = new flash.Bitmap(_loc5_);
            param1.parent.addChild(_loc8_);
            param1.parent.removeChild(param1);
            _loc8_.x = _loc6_;
            _loc8_.y = _loc7_;
            new tool.HideMessageThread(_loc8_, param2, param3, param4).run();
        };
        Effect.gradientIn = function (param1, param2) {
            if (param2 === void 0) { param2 = 30; }
            var fillType = null;
            var colors = null;
            var alphas = null;
            var ratios = null;
            var matr = null;
            var spreadMethod = null;
            var cover = null;
            var times = flash.checkInt(0);
            var onEnterFrame = null;
            var object = param1;
            var count = flash.checkInt(param2);
            onEnterFrame = function (param1) {
                var _loc2_ = 1200 / count;
                cover.graphics.clear();
                matr.createGradientBox(50 + times * _loc2_, 50 + times * _loc2_, 0, -25 - times * _loc2_ / 2, -25 - times * _loc2_ / 2);
                ratios = [0 + 255 / count * times, 255];
                cover.graphics["beginGradientFill"](fillType, colors, alphas, ratios, matr, spreadMethod);
                cover.graphics.drawCircle(0, 0, 100 + times * _loc2_);
                times++;
                if (times > count) {
                    object.removeEventListener(egret.Event.ENTER_FRAME, onEnterFrame, null);
                    object.cacheAsBitmap = false;
                    object.mask = null;
                    object.removeChild(cover);
                    cover = null;
                }
            };
            var rect = flash.getBounds(object, object);
            fillType = flash.GradientType.RADIAL;
            colors = [16711680, 255];
            alphas = [100, 0];
            ratios = [0, 255];
            matr = new egret.Matrix();
            matr.createGradientBox(50, 50, 0, -25, -25);
            spreadMethod = flash.SpreadMethod.PAD;
            cover = new egret.Sprite();
            cover.graphics["beginGradientFill"](fillType, colors, alphas, ratios, matr, spreadMethod);
            cover.graphics.drawCircle(0, 0, 100);
            object.addChild(cover);
            cover.cacheAsBitmap = true;
            object.cacheAsBitmap = true;
            object.mask = cover;
            cover.x = object.stage.stageWidth / 2;
            cover.y = object.stage.stageHeight / 2;
            times = flash.checkInt(1);
            object.addEventListener(egret.Event.ENTER_FRAME, onEnterFrame, null);
        };
        Effect.gradientInOutsideFirst = function (param1, param2, param3, param4, param5) {
            param2 = flash.checkInt(param2);
            param3 = flash.checkInt(param3);
            param4 = flash.checkInt(param4);
            param5 = flash.checkInt(param5);
            var fillType = null;
            var colors = null;
            var alphas = null;
            var ratios = null;
            var matr = null;
            var spreadMethod = null;
            var cover = null;
            var times = flash.checkInt(0);
            var onEnterFrame = null;
            var object = param1;
            var count = flash.checkInt(param2);
            var size = flash.checkInt(param3);
            var px = flash.checkInt(param4);
            var py = flash.checkInt(param5);
            onEnterFrame = function (param1) {
                var _loc2_ = size / count;
                cover.graphics.clear();
                matr.createGradientBox(size, size, 0, -size / 2, -size / 2);
                ratios = [255 - 255 / count * times, 255 - 255 / count * times / 5 * 4];
                cover.graphics["beginGradientFill"](fillType, colors, alphas, ratios, matr, spreadMethod);
                cover.graphics.drawCircle(0, 0, size);
                times++;
                if (times > count) {
                    object.removeEventListener(egret.Event.ENTER_FRAME, onEnterFrame, null);
                    object.cacheAsBitmap = false;
                    object.mask = null;
                    object.removeChild(cover);
                    cover = null;
                }
            };
            if (object.mask) {
                return;
            }
            var rect = flash.getBounds(object, object);
            fillType = flash.GradientType.RADIAL;
            colors = [16711680, 255];
            alphas = [0, 100];
            ratios = [255, 255];
            matr = new egret.Matrix();
            matr.createGradientBox(size, size, 0, -size / 2, -size / 2);
            spreadMethod = flash.SpreadMethod.PAD;
            cover = new egret.Sprite();
            cover.graphics["beginGradientFill"](fillType, colors, alphas, ratios, matr, spreadMethod);
            cover.graphics.drawCircle(0, 0, size);
            object.addChild(cover);
            cover.cacheAsBitmap = true;
            object.cacheAsBitmap = true;
            object.mask = cover;
            cover.x = px;
            cover.y = py;
            times = flash.checkInt(1);
            object.addEventListener(egret.Event.ENTER_FRAME, onEnterFrame, null);
        };
        return Effect;
    }(egret.HashObject));
    tool.Effect = Effect;
    __reflect(Effect.prototype, "tool.Effect");
})(tool || (tool = {}));
//# sourceMappingURL=Effect.js.map