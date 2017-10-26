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
    var iCell;
    (function (iCell) {
        var EquipmentCell = (function (_super) {
            __extends(EquipmentCell, _super);
            function EquipmentCell(param1) {
                var _this = _super.call(this, 200, 50) || this;
                _this.equip = param1;
                _this.init();
                return _this;
            }
            EquipmentCell.prototype.init = function () {
                this.filter_mc = new egret.Sprite();
                this.filter_mc.graphics.beginFill(16777215);
                this.filter_mc.graphics.drawCircle(15, 15, 14);
                this.filter_mc.graphics.endFill();
                this.before.addChild(this.filter_mc);
                this.filter_mc.x = 10;
                this.filter_mc.y = 10;
                // if(flash.As3is(this.equip,iData.iItem.Weapon))
                // {
                // 	this.be_mc = new (<any>flash.getDefinitionByName("mc_" + this.equip.type))();
                // }
                // else
                // {
                // 	this.be_mc = new (<any>flash.getDefinitionByName("mc_" + this.equip.position + "_" + this.equip.type))();
                // }
                // this.before.addChild(this.be_mc);
                // this.be_mc.width = 30;
                // this.be_mc.height = 30;
                // this.be_mc.x = 10;
                // this.be_mc.y = 10;
                // if(flash.As3is(this.equip,iData.iItem.Weapon))
                // {
                // 	this.af_mc = new (<any>flash.getDefinitionByName("mc_" + this.equip.type))();
                // }
                // else
                // {
                // 	this.af_mc = new (<any>flash.getDefinitionByName("mc_" + this.equip.position + "_" + this.equip.type))();
                // }
                // this.after.addChild(this.af_mc);
                // this.af_mc.width = 30;
                // this.af_mc.height = 30;
                // this.af_mc.x = 10;
                // this.af_mc.y = 10;
                // this.af_mc["transform"].colorTransform = new flash.ColorTransform(1,1,1,1,255,255,255,0);
                // this.text = iGlobal.Global.getTextField(24);
                // this.text.width = 110;
                // this.text.htmlText = this.equip.getNameHTML();
                // if(this.equip.level)
                // {
                // 	this.text.htmlText = this.text.htmlText + (" +" + this.equip.level);
                // }
                this.addChild(this.text);
                this.text.x = 50;
                this.text.y = 10;
                this.setEquipButton();
                this.setMoneyButton();
                this.setFilter();
                this.infoWindow = new iPanel.iCell.ItemInfoWindow(this.equip.getDescription());
            };
            EquipmentCell.prototype.update = function () {
                this.removeInfoWindow();
                this.infoWindow = new iPanel.iCell.ItemInfoWindow(this.equip.getDescription());
                // this.text.htmlText = this.equip.getNameHTML();
                // if(this.equip.level)
                // {
                // 	this.text.htmlText = this.text.htmlText + (" +" + this.equip.level);
                // }
                this.html = this.equip.getNameHTML() + " +" + this.equip.level;
                if (this.buttonDown) {
                    this.addInfoWindow();
                }
                this.setFilter();
            };
            EquipmentCell.prototype.setFilter = function () {
                if (this.equip.level >= 7) {
                }
            };
            EquipmentCell.prototype.setEquipButton = function () {
                var _self__ = this;
                var equipDown = null;
                equipDown = function () {
                    iGlobal.Player.removeItem(_self__.equip);
                    iGlobal.Player.equip(_self__.equip);
                    _self__.dispatchEvent(new tool.MyEvent(tool.MyEvent.Update));
                };
                var equipButton = new iPanel.iCell.EquipButton("equip");
                this.addChild(equipButton);
                equipButton.x = 150;
                equipButton.y = 15;
                equipButton.downFunction = equipDown;
            };
            EquipmentCell.prototype.setMoneyButton = function () {
                var _self__ = this;
                var moneyDown = null;
                moneyDown = function () {
                    iGlobal.Player.removeItem(_self__.equip);
                    iGlobal.Player.addMoney(_self__.equip.getMoney());
                    _self__.dispatchEvent(new tool.MyEvent(tool.MyEvent.Update));
                };
                var moneyButton = new iPanel.iCell.EquipButton("money");
                this.addChild(moneyButton);
                moneyButton.x = 172;
                moneyButton.y = 15;
                moneyButton.downFunction = moneyDown;
            };
            EquipmentCell.prototype.addInfoWindow = function () {
                var _loc1_ = null;
                var _loc2_ = null;
                _super.prototype.addInfoWindow.call(this);
                // if(flash.As3is(this.equip,iData.iItem.Weapon))
                // {
                // 	switch(this.equip.position)
                // 	{
                // 	case iData.iItem.Weapon.ONEHAND :
                // 		_loc1_ = "leftHand";
                // 		break;
                // 	case iData.iItem.Weapon.OFFHAND :
                // 		_loc1_ = "rightHand";
                // 		break;
                // 	case iData.iItem.Weapon.TWOHAND :
                // 		_loc1_ = "leftHand";
                // 	}
                // }
                // else
                // {
                // 	_loc1_ = this.equip.position;
                // }
                // if(iGlobal.Player[_loc1_])
                // {
                // 	this.equipedInfoWindow = new iPanel.iCell.ItemInfoWindow(iGlobal.Player[_loc1_].getDescription());
                // 	this.addChild(this.equipedInfoWindow);
                // 	this.equipedInfoWindow.x = -270;
                // 	this.equipedInfoWindow.y = 0;
                // 	_loc2_ = flash.localToGlobal(this,new egret.Point(0,0));
                // 	if(_loc2_.y + this.equipedInfoWindow.height > iGlobal.Global.stage.stageHeight)
                // 	{
                // 		_loc2_ = flash.globalToLocal(this,new egret.Point(0,iGlobal.Global.stage.stageHeight - this.equipedInfoWindow.height));
                // 		this.equipedInfoWindow.y = _loc2_.y;
                // 	}
                // }
            };
            EquipmentCell.prototype.removeInfoWindow = function () {
                _super.prototype.removeInfoWindow.call(this);
                if (this.equipedInfoWindow) {
                    this.removeChild(this.equipedInfoWindow);
                    this.equipedInfoWindow = null;
                }
            };
            return EquipmentCell;
        }(iPanel.iCell.AdvancedCell));
        iCell.EquipmentCell = EquipmentCell;
        __reflect(EquipmentCell.prototype, "iPanel.iCell.EquipmentCell");
    })(iCell = iPanel.iCell || (iPanel.iCell = {}));
})(iPanel || (iPanel = {}));
// flash.extendsClass("iPanel.iCell.EquipmentCell","iPanel.iCell.AdvancedCell")
//# sourceMappingURL=EquipmentCell.js.map