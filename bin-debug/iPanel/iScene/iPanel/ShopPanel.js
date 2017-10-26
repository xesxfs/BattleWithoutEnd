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
            var ShopPanel = (function (_super) {
                __extends(ShopPanel, _super);
                function ShopPanel() {
                    var _this = _super.call(this, 550, 500) || this;
                    _this.gap = 50;
                    _this.startX1 = 50;
                    _this.startY1 = 110;
                    _this.startX2 = 250;
                    _this.graphics.lineStyle(2, 7631988);
                    _this.graphics.drawRect(0, 0, 550, 500);
                    _this.init();
                    return _this;
                }
                ShopPanel.prototype.init = function () {
                    var _this = undefined;
                    var hideDown = null;
                    hideDown = function () {
                        _this.visible = false;
                        this["setBefore"]();
                    };
                    this.time = new iPanel.iCell.StringCell("1200", 100, 32);
                    this.addChild(this.time);
                    this.time.x = 450;
                    this.time.y = 460;
                    this.gold = new iPanel.iCell.StringCell("金钱", 200, 32);
                    this.addChild(this.gold);
                    this.gold.x = 30;
                    this.gold.y = 460;
                    var title = new iPanel.iCell.StringCell("商店", 300, 54);
                    this.addChild(title);
                    title.x = 200;
                    title.y = 10;
                    var equip_text = new iPanel.iCell.StringCell("出售", 100, 32);
                    this.addChild(equip_text);
                    equip_text.x = 100;
                    equip_text.y = 70;
                    var gamble_text = new iPanel.iCell.StringCell("赌博", 100, 32);
                    this.addChild(gamble_text);
                    gamble_text.x = 350;
                    gamble_text.y = 70;
                    this.itemPanel = new egret.Sprite();
                    this.addChild(this.itemPanel);
                    this.itemPanel.x = this.startX1;
                    this.itemPanel.y = this.startY1;
                    this.updateTime();
                    var hide = new iPanel.iScene.FlickerButton("退出", 100, 48);
                    this.addChild(hide);
                    hide.x = 420;
                    hide.y = 10;
                    hide.downFunction = hideDown;
                    _this = this;
                    this.updateShop();
                };
                ShopPanel.prototype.updateTime = function () {
                    var _loc1_ = flash.checkInt(iGlobal.Player.caculate % 600);
                    _loc1_ = flash.checkInt(600 - _loc1_);
                    var _loc2_ = flash.checkInt(_loc1_ / 120);
                    var _loc3_ = flash.checkInt((_loc1_ - _loc2_ * 120) / 2);
                    this.time.setText(_loc2_ + ":" + _loc3_);
                    this.gold.setText("金钱: " + iGlobal.Player.gold);
                };
                ShopPanel.prototype.updateMoneyButton = function () {
                    var _loc2_ = undefined;
                    var _loc1_ = flash.checkInt(0);
                    while (_loc1_ < this.itemPanel.numChildren) {
                        _loc2_ = this.itemPanel.getChildAt(_loc1_);
                        if (flash.As3is(_loc2_, iPanel.iScene.iPanel.iShop.GambleCell)) {
                            (flash.As3As(_loc2_, iPanel.iScene.iPanel.iShop.GambleCell)).updateMoneyButton();
                        }
                        else {
                            (flash.As3As(_loc2_, iPanel.iScene.iPanel.iShop.ShopCell)).updateMoneyButton();
                        }
                        _loc1_++;
                    }
                };
                ShopPanel.prototype.updateShop = function () {
                    var _loc1_ = flash.checkInt(0);
                    var _loc2_ = NaN;
                    var _loc3_ = null;
                    var _loc4_ = null;
                    var _loc5_ = null;
                    var _loc6_ = null;
                    _loc1_ = flash.checkInt(this.itemPanel.numChildren - 1);
                    while (_loc1_ >= 0) {
                        this.itemPanel.removeChildAt(_loc1_);
                        _loc1_--;
                    }
                    _loc1_ = flash.checkInt(0);
                    while (_loc1_ < 7) {
                        _loc2_ = Math.random() * 3 * (1 + iGlobal.Player.luck / 400) * (1 + iGlobal.Player.combatPower / 1000);
                        _loc3_ = iData.iItem.EquipmentList.list[iData.iItem.EquipmentList.list.length * Math.random() >> 0];
                        if (flash.As3is(_loc3_, iData.iItem.WeaponData)) {
                            _loc4_ = new iData.iItem.Weapon(flash.As3As(_loc3_, iData.iItem.WeaponData), _loc2_);
                        }
                        else {
                            _loc4_ = new iData.iItem.Equipment(_loc3_, _loc2_);
                        }
                        _loc5_ = new iPanel.iScene.iPanel.iShop.ShopCell(_loc4_);
                        this.itemPanel.addChild(_loc5_);
                        _loc5_.x = 0;
                        _loc5_.y = _loc1_ * this.gap;
                        _loc1_++;
                    }
                    _loc1_ = flash.checkInt(0);
                    while (_loc1_ < 7) {
                        _loc2_ = Math.random() * 6 * (1 + iGlobal.Player.luck / 200) * (1 + iGlobal.Player.combatPower / 700);
                        _loc3_ = iData.iItem.EquipmentList.list[iData.iItem.EquipmentList.list.length * Math.random() >> 0];
                        if (flash.As3is(_loc3_, iData.iItem.WeaponData)) {
                            _loc4_ = new iData.iItem.Weapon(flash.As3As(_loc3_, iData.iItem.WeaponData), _loc2_);
                        }
                        else {
                            _loc4_ = new iData.iItem.Equipment(_loc3_, _loc2_);
                        }
                        _loc6_ = new iPanel.iScene.iPanel.iShop.GambleCell(_loc4_);
                        this.itemPanel.addChild(_loc6_);
                        _loc6_.x = this.startX2;
                        _loc6_.y = _loc1_ * this.gap;
                        _loc1_++;
                    }
                };
                return ShopPanel;
            }(iPanel.iCell.BasicCell));
            iPanel.ShopPanel = ShopPanel;
            __reflect(ShopPanel.prototype, "iPanel.iScene.iPanel.ShopPanel");
        })(iPanel = iScene.iPanel || (iScene.iPanel = {}));
    })(iScene = iPanel_1.iScene || (iPanel_1.iScene = {}));
})(iPanel || (iPanel = {}));
flash.extendsClass("iPanel.iScene.iPanel.ShopPanel", "iPanel.iCell.BasicCell");
//# sourceMappingURL=ShopPanel.js.map