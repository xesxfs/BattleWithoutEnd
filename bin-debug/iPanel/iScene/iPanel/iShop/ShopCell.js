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
                var ShopCell = (function (_super) {
                    __extends(ShopCell, _super);
                    function ShopCell(param1) {
                        var _this = _super.call(this, param1) || this;
                        _this.downFunction = flash.bind(_this.setBefore, _this);
                        _this.updateMoneyButton();
                        return _this;
                    }
                    ShopCell.prototype.setEquipButton = function () {
                    };
                    ShopCell.prototype.updateMoneyButton = function () {
                        if (iGlobal.Player.gold > this.equip.getSellMoney()) {
                            this.moneyButton.touchChildren = true;
                            this.moneyButton.touchEnabled = true;
                            this.m_text = "";
                        }
                        else {
                            this.moneyButton.touchChildren = false;
                            this.moneyButton.touchEnabled = false;
                            this.m_text = "<font color=\'#ff4040\'>Can\'t afford</font>";
                        }
                    };
                    ShopCell.prototype.setMoneyButton = function () {
                        var _self__ = this;
                        var _this = undefined;
                        var moneyDown = null;
                        moneyDown = function () {
                            if (iGlobal.Player.addItem(_self__.equip)) {
                                iGlobal.Player.loseMoney(_self__.equip.getSellMoney());
                                if (_this.parent) {
                                    _this.parent.removeChild(_this);
                                }
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
                    ShopCell.prototype.addInfoWindow = function () {
                        var _loc3_ = null;
                        this.infoWindow = new iPanel.iCell.ItemInfoWindow(this.equip.getSellDesciption() + this.m_text);
                        this.addChild(this.infoWindow);
                        this.infoWindow.x = 205;
                        var _loc1_ = flash.checkInt(0);
                        var _loc2_ = flash.localToGlobal(this, new egret.Point(0, 0));
                        if (_loc2_.y + this.infoWindow.height > iGlobal.Global.stage.stageHeight) {
                            _loc2_ = flash.globalToLocal(this, new egret.Point(0, iGlobal.Global.stage.stageHeight - this.infoWindow.height));
                            _loc1_ = flash.checkInt(_loc2_.y);
                        }
                        this.infoWindow.y = _loc1_;
                        if (flash.As3is(this.equip, iData.iItem.Weapon)) {
                            switch (this.equip.position) {
                                case iData.iItem.Weapon.ONEHAND:
                                    _loc3_ = "leftHand";
                                    break;
                                case iData.iItem.Weapon.OFFHAND:
                                    _loc3_ = "rightHand";
                                    break;
                                case iData.iItem.Weapon.TWOHAND:
                                    _loc3_ = "leftHand";
                            }
                        }
                        else {
                            _loc3_ = this.equip.position;
                        }
                        if (iGlobal.Player[_loc3_]) {
                            this.equipedInfoWindow = new iPanel.iCell.ItemInfoWindow(iGlobal.Player[_loc3_].getDescription());
                            this.addChild(this.equipedInfoWindow);
                            this.equipedInfoWindow.x = 340;
                            this.equipedInfoWindow.y = _loc1_;
                        }
                    };
                    return ShopCell;
                }(iPanel.iCell.EquipmentCell));
                iShop.ShopCell = ShopCell;
                __reflect(ShopCell.prototype, "iPanel.iScene.iPanel.iShop.ShopCell");
            })(iShop = iPanel.iShop || (iPanel.iShop = {}));
        })(iPanel = iScene.iPanel || (iScene.iPanel = {}));
    })(iScene = iPanel_1.iScene || (iPanel_1.iScene = {}));
})(iPanel || (iPanel = {}));
flash.extendsClass("iPanel.iScene.iPanel.iShop.ShopCell", "iPanel.iCell.EquipmentCell");
//# sourceMappingURL=ShopCell.js.map