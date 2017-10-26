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
    var iScene;
    (function (iScene) {
        var PeopleModel = (function (_super) {
            __extends(PeopleModel, _super);
            function PeopleModel(param1) {
                var _this = _super.call(this, "flash.display.Sprite", "flash.display.Sprite") || this;
                _this.age = 0;
                param1 = flash.checkInt(param1);
                _this.age = flash.checkInt(param1);
                _this.bg = new iScene.iPanel.iCell.BasicCell(50, 100);
                _this.bg2 = new iScene.iPanel.iCell.BasicCell(50, 100);
                _this.bg2["transform"].colorTransform = new flash.ColorTransform(0.9, 0.7, 0, 0.95);
                _this.init();
                return _this;
            }
            PeopleModel.prototype.init = function () {
                this.before.addChild(this.bg);
                this.after.addChild(this.bg2);
                this.p = new egret.Sprite();
                this.p2 = new egret.Sprite();
                this.before.addChild(this.p);
                this.after.addChild(this.p2);
                this.drawPeople(this.p, 7631988);
                this.drawPeople(this.p2, 16777215);
            };
            PeopleModel.prototype.drawPeople = function (param1, param2) {
                param2 = flash.checkUint(param2);
                var _loc3_ = flash.checkInt(this.age - 10);
                param1.y = 15 - _loc3_ * 3;
                param1.graphics.beginFill(param2, 1);
                param1.graphics.drawCircle(25, 30, 10);
                param1.graphics.drawRect(15, 40, 20, 30 + _loc3_);
                param1.graphics.drawRect(15, 70 + _loc3_, 5, 8 + _loc3_ * 2);
                param1.graphics.drawRect(30, 70 + _loc3_, 5, 8 + _loc3_ * 2);
                param1.graphics.drawRect(9, 40, 5, 15 + _loc3_ * 2);
                param1.graphics.drawRect(36, 40, 5, 15 + _loc3_ * 2);
                param1.graphics.endFill();
            };
            PeopleModel.prototype.setBefore = function () {
                _super.prototype.setBefore.call(this);
                this.filters = [];
            };
            PeopleModel.prototype.setDown = function () {
                _super.prototype.setDown.call(this);
                this.filters = [new flash.GlowFilter(5066061, 0.66, 13, 13)];
                if (this.parent) {
                    this.parent.addChildAt(this, this.parent.numChildren - 1);
                }
            };
            return PeopleModel;
        }(iScene.iPanel.iCell.ButtonCell));
        iScene.PeopleModel = PeopleModel;
        __reflect(PeopleModel.prototype, "iPanel.iScene.PeopleModel");
    })(iScene = iPanel.iScene || (iPanel.iScene = {}));
})(iPanel || (iPanel = {}));
flash.extendsClass("iPanel.iScene.PeopleModel", "iPanel.iCell.ButtonCell");
//# sourceMappingURL=PeopleModel.js.map