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
                    var PetSkillCell = (function (_super) {
                        __extends(PetSkillCell, _super);
                        function PetSkillCell(param1) {
                            var _this = _super.call(this, "flash.display.Sprite", "flash.display.Sprite") || this;
                            _this.SIZE = 30;
                            _this.infoWindow = iGlobal.Global.itemInfoWindow;
                            _this.petSkill = param1;
                            var _loc2_ = new egret.Sprite();
                            _loc2_.graphics.beginFill(0, 0);
                            _loc2_.graphics.drawCircle(15, 15, 30);
                            _loc2_.graphics.endFill();
                            _this.addChild(_loc2_);
                            var _loc3_ = new (flash.getDefinitionByName("pSkill_" + tool.MyMath.StringFormChange(_this.petSkill.skillData.name.toLowerCase(), " ", "_")))();
                            if (_this.petSkill.level) {
                                _loc3_.filters = [new flash.GlowFilter(16711680, 0.66, 5, 5)];
                            }
                            _this.before.addChild(_loc3_);
                            _loc3_.width = _this.SIZE;
                            _loc3_.height = _this.SIZE;
                            _loc3_ = new (flash.getDefinitionByName("pSkill_" + tool.MyMath.StringFormChange(_this.petSkill.skillData.name.toLowerCase(), " ", "_")))();
                            _this.after["transform"].colorTransform = new flash.ColorTransform(0, 0, 0, 1, 227, 178, 10, 5);
                            _this.after.addChild(_loc3_);
                            _loc3_.width = _this.SIZE;
                            _loc3_.height = _this.SIZE;
                            _this.downFunction = flash.bind(_this.setBefore, _this);
                            _this.addEventListener(egret.TouchEvent.TOUCH_MOVE, flash.bind(_this.onMouseMove, _this), null);
                            return _this;
                        }
                        PetSkillCell.prototype.onMouseMove = function (param1) {
                            var _loc2_ = flash.localToGlobal(this, new egret.Point(this["mouseX"] + 15, this["mouseY"] + 15));
                            this.infoWindow.x = _loc2_.x;
                            this.infoWindow.y = _loc2_.y;
                            if (_loc2_.x + 135 > iGlobal.Global.stage.stageWidth) {
                                this.infoWindow.x = this.infoWindow.x - 135;
                            }
                            if (_loc2_.y + this.infoWindow.height > iGlobal.Global.stage.stageHeight) {
                                this.infoWindow.y = this.infoWindow.y - (this.infoWindow.height - 15);
                            }
                        };
                        PetSkillCell.prototype.setBefore = function () {
                            _super.prototype.setBefore.call(this);
                            iGlobal.Global.hideItemInfoWindow();
                        };
                        PetSkillCell.prototype.setAfter = function () {
                            _super.prototype.setAfter.call(this);
                            if (this.petSkill) {
                                iGlobal.Global.setItemInfoWindow(this.getDescription());
                            }
                        };
                        PetSkillCell.prototype.getDescription = function () {
                            var _loc1_ = "<p align=\'center\'>" + this.petSkill.getRealName() + "</p>";
                            _loc1_ = _loc1_ + this.petSkill.skillData.desFunction(this.petSkill);
                            return _loc1_;
                        };
                        return PetSkillCell;
                    }(iPanel.iCell.ButtonCell));
                    iPet.PetSkillCell = PetSkillCell;
                    __reflect(PetSkillCell.prototype, "iPanel.iScene.iPanel.iWindow.iPet.PetSkillCell");
                })(iPet = iWindow.iPet || (iWindow.iPet = {}));
            })(iWindow = iPanel.iWindow || (iPanel.iWindow = {}));
        })(iPanel = iScene.iPanel || (iScene.iPanel = {}));
    })(iScene = iPanel_1.iScene || (iPanel_1.iScene = {}));
})(iPanel || (iPanel = {}));
flash.extendsClass("iPanel.iScene.iPanel.iWindow.iPet.PetSkillCell", "iPanel.iCell.ButtonCell");
//# sourceMappingURL=PetSkillCell.js.map