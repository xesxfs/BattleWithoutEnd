var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var iPanel;
(function (iPanel_1) {
    var iScene;
    (function (iScene) {
        var iPanel;
        (function (iPanel) {
            var PetInfoPanel = (function (_super) {
                __extends(PetInfoPanel, _super);
                function PetInfoPanel() {
                    var _this = _super.call(this, 185, 80) || this;
                    _this.beginX = 10;
                    _this.beginY = 10;
                    _this.yGap = 20;
                    _this.sXGap = 50;
                    _this.init();
                    return _this;
                }
                PetInfoPanel.prototype.init = function () {
                    var _loc1_ = new iPanel.iCell.StringCell("宠物");
                    this.addChild(_loc1_);
                    _loc1_.x = this.beginX;
                    _loc1_.y = this.beginY;
                    this._name = new iPanel.iCell.StringCell("", 120);
                    this.addChild(this._name);
                    this._name.x = this.beginX + this.sXGap;
                    this._name.y = this.beginY;
                    var _loc2_ = new iPanel.iCell.StringCell("Lv");
                    this.addChild(_loc2_);
                    _loc2_.x = this.beginX;
                    _loc2_.y = this.beginY + this.yGap;
                    this.lv = new iPanel.iCell.StringCell("");
                    this.addChild(this.lv);
                    this.lv.x = this.beginX + this.sXGap - 30;
                    this.lv.y = this.beginY + this.yGap;
                    var _loc3_ = new iPanel.iCell.StringCell("Exp");
                    this.addChild(_loc3_);
                    _loc3_.x = this.beginX + 50;
                    _loc3_.y = this.beginY + this.yGap;
                    this.exp = new iPanel.iBar.Bar(50, 100, 7932074);
                    this.addChild(this.exp);
                    this.exp.x = this.beginX + 80;
                    this.exp.y = this.beginY + this.yGap + 13;
                    var _loc4_ = new iPanel.iCell.StringCell("HP");
                    this.addChild(_loc4_);
                    _loc4_.x = this.beginX;
                    _loc4_.y = this.beginY + this.yGap * 2;
                    this.hp = new iPanel.iBar.Bar(100, 100, 12522257);
                    this.addChild(this.hp);
                    this.hp.x = this.beginX + 25;
                    this.hp.y = this.beginY + this.yGap * 2 + 13;
                };
                PetInfoPanel.prototype.update = function () {
                    if (iPanel.iScene.MainScene.battle["pet"]) {
                        this._name.setText(iPanel.iScene.MainScene.battle["pet"].realName);
                        this.updateLv();
                        this.updateHp();
                        this.updateExp();
                    }
                    else {
                        this._name.setText("");
                        this.lv.setText("");
                        this.hp.Value = 0;
                        this.hp.Max = 1;
                        this.exp.Value = 0;
                        this.exp.Max = 1;
                    }
                };
                PetInfoPanel.prototype.updateHp = function () {
                    if (iPanel.iScene.MainScene.battle["pet"]) {
                        this.hp.Value = iPanel.iScene.MainScene.battle["petHp"];
                        this.hp.Max = iPanel.iScene.MainScene.battle["pet"].hp;
                    }
                };
                PetInfoPanel.prototype.updateExp = function () {
                    if (iPanel.iScene.MainScene.battle["pet"]) {
                        this.exp.Value = iPanel.iScene.MainScene.battle["pet"].exp;
                        this.exp.Max = iPanel.iScene.MainScene.battle["pet"].getLevelExp();
                    }
                };
                PetInfoPanel.prototype.updateLv = function () {
                    if (iPanel.iScene.MainScene.battle["pet"]) {
                        this.lv.setText(iPanel.iScene.MainScene.battle["pet"].level + "");
                    }
                };
                return PetInfoPanel;
            }(iPanel.iCell.BasicCell));
            iPanel.PetInfoPanel = PetInfoPanel;
            __reflect(PetInfoPanel.prototype, "iPanel.iScene.iPanel.PetInfoPanel");
        })(iPanel = iScene.iPanel || (iScene.iPanel = {}));
    })(iScene = iPanel_1.iScene || (iPanel_1.iScene = {}));
})(iPanel || (iPanel = {}));
flash.extendsClass("iPanel.iScene.iPanel.PetInfoPanel", "iPanel.iCell.BasicCell");
//# sourceMappingURL=PetInfoPanel.js.map