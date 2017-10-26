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
            var iWindow;
            (function (iWindow) {
                var iPet;
                (function (iPet) {
                    var PetCell = (function (_super) {
                        __extends(PetCell, _super);
                        function PetCell(param1) {
                            var _this = _super.call(this, 200, 50) || this;
                            _this.pet = param1;
                            _this.init();
                            return _this;
                        }
                        PetCell.prototype.init = function () {
                            this.be_mc = new (flash.getDefinitionByName("pet_" + this.pet.mc_name))();
                            this.before.addChild(this.be_mc);
                            this.be_mc.width = 30;
                            this.be_mc.height = 30;
                            this.be_mc.x = 10;
                            this.be_mc.y = 10;
                            this.af_mc = new (flash.getDefinitionByName("pet_" + this.pet.mc_name))();
                            this.after.addChild(this.af_mc);
                            this.af_mc.width = 30;
                            this.af_mc.height = 30;
                            this.af_mc.x = 10;
                            this.af_mc.y = 10;
                            this.af_mc["transform"].colorTransform = new flash.ColorTransform(1, 1, 1, 1, 255, 255, 255, 0);
                            this.text = iGlobal.Global.getTextField(20);
                            this.text.width = 120;
                            this.text.htmlText = this.pet.realName;
                            if (this.pet.level) {
                                this.text.htmlText = this.text.htmlText + (" Lv." + this.pet.level);
                            }
                            this.addChild(this.text);
                            this.text.x = 50;
                            this.text.y = 10;
                            this.setEquipButton();
                            this.setMoneyButton();
                            this.infoWindow = new iPanel.iScene.iPanel.iWindow.iPet.PetInfoWindow(this.pet);
                        };
                        PetCell.prototype.setEquipButton = function () {
                            var _self__ = this;
                            var equipDown = null;
                            equipDown = function () {
                                iGlobal.Player.removePet(_self__.pet);
                                iGlobal.Player.setPet(_self__.pet);
                                _self__.dispatchEvent(new tool.MyEvent(tool.MyEvent.Update));
                            };
                            var equipButton = new iPanel.iCell.EquipButton("equip");
                            this.addChild(equipButton);
                            equipButton.x = 150;
                            equipButton.y = 15;
                            equipButton.downFunction = equipDown;
                        };
                        PetCell.prototype.setMoneyButton = function () {
                            var _self__ = this;
                            var moneyDown = null;
                            moneyDown = function () {
                                iGlobal.Player.removePet(_self__.pet);
                                _self__.dispatchEvent(new tool.MyEvent(tool.MyEvent.Update));
                            };
                            var moneyButton = new iPanel.iCell.EquipButton("money");
                            this.addChild(moneyButton);
                            moneyButton.x = 172;
                            moneyButton.y = 15;
                            moneyButton.downFunction = moneyDown;
                        };
                        PetCell.prototype.update = function () {
                            this.infoWindow.draw(0, 0);
                            this.text.htmlText = this.pet.realName;
                            if (this.pet.level) {
                                this.text.htmlText = this.text.htmlText + (" Lv." + this.pet.level);
                            }
                        };
                        return PetCell;
                    }(iPanel.iCell.AdvancedCell));
                    iPet.PetCell = PetCell;
                    __reflect(PetCell.prototype, "iPanel.iScene.iPanel.iWindow.iPet.PetCell");
                })(iPet = iWindow.iPet || (iWindow.iPet = {}));
            })(iWindow = iPanel.iWindow || (iPanel.iWindow = {}));
        })(iPanel = iScene.iPanel || (iScene.iPanel = {}));
    })(iScene = iPanel_1.iScene || (iPanel_1.iScene = {}));
})(iPanel || (iPanel = {}));
flash.extendsClass("iPanel.iScene.iPanel.iWindow.iPet.PetCell", "iPanel.iCell.AdvancedCell");
//# sourceMappingURL=PetCell.js.map