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
            var SpecialShopPanel = (function (_super) {
                __extends(SpecialShopPanel, _super);
                function SpecialShopPanel() {
                    var _this = _super.call(this, 550, 500) || this;
                    _this.bCost = 0;
                    _this.pCost = 0;
                    _this.graphics.lineStyle(2, 7631988);
                    _this.graphics.drawRect(0, 0, 550, 500);
                    _this.init();
                    return _this;
                }
                SpecialShopPanel.prototype.init = function () {
                    var _self__ = this;
                    var _this = undefined;
                    var hideDown = null;
                    var bagDown = null;
                    var petDown = null;
                    hideDown = function () {
                        _this.visible = false;
                        this["setBefore"]();
                    };
                    bagDown = function () {
                        iGlobal.Player.loseMoney(_self__.bCost);
                        iGlobal.Player.BAGMAX++;
                        iPanel.iScene.MainScene.otherPanel.itemWindow.updateBagText();
                        this["setBefore"]();
                    };
                    petDown = function () {
                        iGlobal.Player.loseMoney(_self__.pCost);
                        iGlobal.Player.PETMAX++;
                        iPanel.iScene.MainScene.otherPanel.petWindow.update();
                        this["setBefore"]();
                    };
                    var title = new iPanel.iCell.StringCell("特殊商店", 300, 54);
                    this.addChild(title);
                    title.x = 170;
                    title.y = 10;
                    var hide = new iPanel.iScene.FlickerButton("退出", 100, 48);
                    this.addChild(hide);
                    hide.x = 420;
                    hide.y = 10;
                    hide.downFunction = hideDown;
                    _this = this;
                    this.bag = new iPanel.iScene.iPanel.iWindow.iSystem.ClickButton("button_bagSlot", 100);
                    this.addChild(this.bag);
                    this.bag.x = 50;
                    this.bag.y = 100;
                    this.bag.downFunction = bagDown;
                    var bag_text = new iPanel.iCell.StringCell("背包拓展", 100, 32);
                    this.addChild(bag_text);
                    bag_text.x = 50;
                    bag_text.y = 200;
                    this.bag_cost = new iPanel.iCell.StringCell("", 120, 32);
                    this.addChild(this.bag_cost);
                    this.bag_cost.x = 50;
                    this.bag_cost.y = 250;
                    this.pet = new iPanel.iScene.iPanel.iWindow.iSystem.ClickButton("button_petSlot", 100);
                    this.addChild(this.pet);
                    this.pet.x = 400;
                    this.pet.y = 100;
                    this.pet.downFunction = petDown;
                    var pet_text = new iPanel.iCell.StringCell("宠物拓展", 100, 32);
                    this.addChild(pet_text);
                    pet_text.x = 400;
                    pet_text.y = 200;
                    this.pet_cost = new iPanel.iCell.StringCell("", 120, 32);
                    this.addChild(this.pet_cost);
                    this.pet_cost.x = 400;
                    this.pet_cost.y = 250;
                    this.update();
                };
                SpecialShopPanel.prototype.update = function () {
                    this.bCost = flash.checkInt((iGlobal.Player.BAGMAX - 49) * 1000000);
                    this.pCost = flash.checkInt((iGlobal.Player.PETMAX - 9) * 5000000);
                    if (iGlobal.Player.BAGMAX >= 100) {
                        this.bCost = flash.checkInt(-1);
                    }
                    if (iGlobal.Player.PETMAX >= 20) {
                        this.pCost = flash.checkInt(-1);
                    }
                    if (iGlobal.Player.gold >= this.bCost && this.bCost != -1) {
                        this.bag_cost.setText("$" + this.bCost);
                        this.bag.touchChildren = true;
                        this.bag.touchEnabled = true;
                    }
                    else if (iGlobal.Player.gold < this.bCost && this.bCost != -1) {
                        this.bag_cost.setText("<font color=\'#ff4040\'>$" + this.bCost + "</font>");
                        this.bag.touchChildren = false;
                        this.bag.touchEnabled = false;
                    }
                    else {
                        this.bag_cost.setText("最大");
                        this.bag.touchChildren = false;
                        this.bag.touchEnabled = false;
                    }
                    if (iGlobal.Player.gold >= this.pCost && this.pCost != -1) {
                        this.pet_cost.setText("$" + this.pCost);
                        this.pet.touchChildren = true;
                        this.pet.touchEnabled = true;
                    }
                    else if (iGlobal.Player.gold < this.pCost && this.pCost != -1) {
                        this.pet_cost.setText("<font color=\'#ff4040\'>$" + this.pCost + "</font>");
                        this.pet.touchChildren = false;
                        this.pet.touchEnabled = false;
                    }
                    else {
                        this.pet_cost.setText("最大");
                        this.pet.touchChildren = false;
                        this.pet.touchEnabled = false;
                    }
                };
                return SpecialShopPanel;
            }(iPanel.iCell.BasicCell));
            iPanel.SpecialShopPanel = SpecialShopPanel;
            __reflect(SpecialShopPanel.prototype, "iPanel.iScene.iPanel.SpecialShopPanel");
        })(iPanel = iScene.iPanel || (iScene.iPanel = {}));
    })(iScene = iPanel_1.iScene || (iPanel_1.iScene = {}));
})(iPanel || (iPanel = {}));
flash.extendsClass("iPanel.iScene.iPanel.SpecialShopPanel", "iPanel.iCell.BasicCell");
//# sourceMappingURL=SpecialShopPanel.js.map