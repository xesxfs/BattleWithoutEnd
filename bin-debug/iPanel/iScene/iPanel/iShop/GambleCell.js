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
            var iShop;
            (function (iShop) {
                var GambleCell = (function (_super) {
                    __extends(GambleCell, _super);
                    function GambleCell(param1) {
                        var _this = _super.call(this, param1) || this;
                        _this.money = 0;
                        _this.money = flash.checkInt(10000 + Math.random() * 100000 * (1 + iGlobal.Player.combatPower / 700));
                        _this.text.text = _this.equip.realName + "?";
                        _this.downFunction = flash.bind(_this.setBefore, _this);
                        _this.updateMoneyButton();
                        return _this;
                    }
                    GambleCell.prototype.setEquipButton = function () {
                    };
                    GambleCell.prototype.updateMoneyButton = function () {
                        if (iGlobal.Player.gold > this.money) {
                            this.moneyButton.touchChildren = true;
                            this.moneyButton.touchEnabled = true;
                            this.m_text = "<p align=\'right\'>$ " + this.money + "</p>";
                        }
                        else {
                            this.moneyButton.touchChildren = false;
                            this.moneyButton.touchEnabled = false;
                            this.m_text = "<p align=\'right\'><font color=\'#ff4040\'>$ " + this.money + "</font></p>";
                        }
                    };
                    GambleCell.prototype.setMoneyButton = function () {
                        var _self__ = this;
                        var _this = undefined;
                        var moneyDown = null;
                        moneyDown = function () {
                            if (iGlobal.Player.addItem(_self__.equip)) {
                                iGlobal.Player.loseMoney(_self__.money);
                                if (_this.parent) {
                                    _this.parent.removeChild(_this);
                                }
                                iGlobal.Player.save();
                            }
                            this.setBefore();
                        };
                        this.moneyButton = new iPanel.iCell.EquipButton("money");
                        this.addChild(this.moneyButton);
                        this.moneyButton.x = 172;
                        this.moneyButton.y = 15;
                        this.moneyButton.downFunction = moneyDown;
                        _this = this;
                    };
                    GambleCell.prototype.addInfoWindow = function () {
                        this.infoWindow = new iPanel.iCell.ItemInfoWindow("<p align=\'center\'>???</p>" + this.m_text);
                        this.addChild(this.infoWindow);
                        this.infoWindow.x = -135;
                        var _loc1_ = flash.checkInt(0);
                        var _loc2_ = flash.localToGlobal(this, new egret.Point(0, 0));
                        if (_loc2_.y + this.infoWindow.height > iGlobal.Global.stage.stageHeight) {
                            _loc2_ = flash.globalToLocal(this, new egret.Point(0, iGlobal.Global.stage.stageHeight - this.infoWindow.height));
                            _loc1_ = flash.checkInt(_loc2_.y);
                        }
                        this.infoWindow.y = _loc1_;
                    };
                    return GambleCell;
                }(iPanel.iCell.EquipmentCell));
                iShop.GambleCell = GambleCell;
                __reflect(GambleCell.prototype, "iPanel.iScene.iPanel.iShop.GambleCell");
            })(iShop = iPanel.iShop || (iPanel.iShop = {}));
        })(iPanel = iScene.iPanel || (iScene.iPanel = {}));
    })(iScene = iPanel_1.iScene || (iPanel_1.iScene = {}));
})(iPanel || (iPanel = {}));
flash.extendsClass("iPanel.iScene.iPanel.iShop.GambleCell", "iPanel.iCell.EquipmentCell");
//# sourceMappingURL=GambleCell.js.map