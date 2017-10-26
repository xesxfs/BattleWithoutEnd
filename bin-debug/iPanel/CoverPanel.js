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
    var CoverPanel = (function (_super) {
        __extends(CoverPanel, _super);
        function CoverPanel(param1, param2) {
            var _this = _super.call(this) || this;
            _this.w = NaN;
            _this.h = NaN;
            _this.isUpper = false;
            _this.isLower = false;
            // param1 = flash.checkInt(param1);
            // param2 = flash.checkInt(param2);
            // this.FILTER = new flash.BlurFilter(0,20,4);
            _this.upper = new egret.Sprite();
            _this.upper.graphics.beginFill(0);
            _this.upper.graphics.drawRect(0, -10, param1, param2 * 3 / 4);
            _this.upper.graphics.endFill();
            _this.addChild(_this.upper);
            _this.lower = new egret.Sprite();
            _this.lower.graphics.beginFill(0);
            _this.lower.graphics.drawRect(0, param2 / 4, param1, param2 * 3 / 4);
            _this.lower.graphics.endFill();
            _this.addChild(_this.lower);
            _this.w = param1;
            _this.h = param2;
            return _this;
        }
        CoverPanel.prototype.applyUpperBlur = function () {
            if (!this.isUpper) {
                this.upper.graphics.clear();
                this.upper.graphics.beginFill(0);
                this.upper.graphics.drawRect(0, 20, this.w, this.h * 3 / 4);
                this.upper.graphics.endFill();
                // this.upper.filters = [this.FILTER];
                this.isUpper = true;
            }
        };
        CoverPanel.prototype.removeUpperBlur = function () {
            if (this.isUpper) {
                this.upper.graphics.clear();
                this.upper.graphics.beginFill(0);
                this.upper.graphics.drawRect(0, -10, this.w, this.h * 3 / 4);
                this.upper.graphics.endFill();
                this.upper.filters = [];
                this.isUpper = false;
            }
        };
        CoverPanel.prototype.applyLowerBlur = function () {
            this.lower.graphics.clear();
            this.lower.graphics.beginFill(0);
            this.lower.graphics.drawRect(0, this.h / 4 - 20, this.w, this.h * 3 / 4);
            this.lower.graphics.endFill();
            // this.lower.filters = [this.FILTER];
        };
        CoverPanel.prototype.removeLowerBlur = function () {
            this.lower.graphics.clear();
            this.lower.graphics.beginFill(0);
            this.lower.graphics.drawRect(0, this.h / 4, this.w, this.h * 3 / 4);
            this.lower.graphics.endFill();
            this.lower.filters = [];
        };
        return CoverPanel;
    }(egret.Sprite));
    iPanel.CoverPanel = CoverPanel;
    __reflect(CoverPanel.prototype, "iPanel.CoverPanel");
})(iPanel || (iPanel = {}));
// flash.extendsClass("iPanel.CoverPanel","egret.Sprite")
//# sourceMappingURL=CoverPanel.js.map