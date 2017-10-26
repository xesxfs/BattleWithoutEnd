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
                var iEquip;
                (function (iEquip) {
                    var EquipCell = (function (_super) {
                        __extends(EquipCell, _super);
                        function EquipCell(param1, param2) {
                            if (param1 === void 0) { param1 = null; }
                            if (param2 === void 0) { param2 = ""; }
                            var _this = _super.call(this, "flash.display.Sprite", "flash.display.Sprite") || this;
                            _this.SIZE = 80;
                            var _loc4_ = null;
                            _this.infoWindow = iGlobal.Global.itemInfoWindow;
                            _this.position = param2;
                            _this.equip = param1;
                            var _loc3_ = new egret.Sprite();
                            _loc3_.graphics.beginFill(16777215);
                            _loc3_.graphics.drawCircle(40, 40, 39);
                            _loc3_.graphics.endFill();
                            _this.before.addChild(_loc3_);
                            if (param1 == null) {
                                _loc4_ = new mc_mode();
                            }
                            else {
                                if (flash.As3is(_this.equip, iData.iItem.Weapon)) {
                                    _loc4_ = new (flash.getDefinitionByName("mc_" + _this.equip.type))();
                                }
                                else {
                                    _loc4_ = new (flash.getDefinitionByName("mc_" + _this.equip.position + "_" + _this.equip.type))();
                                }
                                _loc4_["transform"].colorTransform = new flash.ColorTransform(0, 0, 0, 1, _this.equip.getColorInHex() >> 16, _this.equip.getColorInHex() >> 8 & 255, _this.equip.getColorInHex() & 255);
                                if (_this.equip.level >= 7) {
                                    _loc3_.filters = [new flash.GlowFilter(16711680, 0.66, _this.equip.level + 3, _this.equip.level + 3)];
                                }
                            }
                            _this.before.addChild(_loc4_);
                            _loc4_.width = _this.SIZE;
                            _loc4_.height = _this.SIZE;
                            if (param1 == null) {
                                _loc4_ = new mc_mode();
                            }
                            else {
                                if (flash.As3is(_this.equip, iData.iItem.Weapon)) {
                                    _loc4_ = new (flash.getDefinitionByName("mc_" + _this.equip.type))();
                                }
                                else {
                                    _loc4_ = new (flash.getDefinitionByName("mc_" + _this.equip.position + "_" + _this.equip.type))();
                                }
                                _this.after["transform"].colorTransform = new flash.ColorTransform(0, 0, 0, 1, 227, 178, 10, 5);
                            }
                            _this.after.addChild(_loc4_);
                            _loc4_.width = _this.SIZE;
                            _loc4_.height = _this.SIZE;
                            _this.downFunction = flash.bind(_this.setBefore, _this);
                            _this.addEventListener(egret.TouchEvent.TOUCH_MOVE, flash.bind(_this.onMouseMove, _this), null);
                            return _this;
                        }
                        EquipCell.prototype.onMouseMove = function (param1) {
                            var _loc2_ = flash.localToGlobal(this, new egret.Point(this["mouseX"] + 15, this["mouseY"] + 15));
                            this.infoWindow.x = _loc2_.x;
                            this.infoWindow.y = _loc2_.y;
                            if (_loc2_.x + 135 > iGlobal.Global.stage.stageWidth) {
                                this.infoWindow.x = this.infoWindow.x - 135;
                            }
                        };
                        EquipCell.prototype.setBefore = function () {
                            _super.prototype.setBefore.call(this);
                            iGlobal.Global.hideItemInfoWindow();
                        };
                        EquipCell.prototype.setAfter = function () {
                            _super.prototype.setAfter.call(this);
                            if (this.equip) {
                                iGlobal.Global.setItemInfoWindow(this.equip.getDescription());
                            }
                        };
                        return EquipCell;
                    }(iPanel.iCell.ButtonCell));
                    iEquip.EquipCell = EquipCell;
                    __reflect(EquipCell.prototype, "iPanel.iScene.iPanel.iWindow.iEquip.EquipCell");
                })(iEquip = iWindow.iEquip || (iWindow.iEquip = {}));
            })(iWindow = iPanel.iWindow || (iPanel.iWindow = {}));
        })(iPanel = iScene.iPanel || (iScene.iPanel = {}));
    })(iScene = iPanel_1.iScene || (iPanel_1.iScene = {}));
})(iPanel || (iPanel = {}));
flash.extendsClass("iPanel.iScene.iPanel.iWindow.iEquip.EquipCell", "iPanel.iCell.ButtonCell");
//# sourceMappingURL=EquipCell.js.map