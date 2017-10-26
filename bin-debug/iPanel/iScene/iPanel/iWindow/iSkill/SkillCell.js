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
                var iSkill;
                (function (iSkill) {
                    var SkillCell = (function (_super) {
                        __extends(SkillCell, _super);
                        function SkillCell(param1) {
                            var _this = _super.call(this, 200, 50) || this;
                            _this.yellow = 14922250;
                            _this.skill = param1;
                            _this.bg = new egret.Sprite();
                            _this.bg.graphics.lineStyle(1, 13487565, 0.8);
                            _this.bg.graphics.beginFill(16777215, 0.95);
                            _this.bg.graphics.drawRect(0, 0, 200, 50);
                            _this.bg.graphics.endFill();
                            _this.addChild(_this.bg);
                            _this.setInfo();
                            _this.setLvupButton();
                            _this.update();
                            _this.addEventListener(flash.MouseEvent.MOUSE_OVER, flash.bind(_this.onMouseOver, _this), null);
                            _this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, flash.bind(_this.onMouseOut, _this), null);
                            return _this;
                        }
                        SkillCell.prototype.setInfo = function () {
                            this.mc = new (flash.getDefinitionByName("mc_" + tool.MyMath.StringFormChange(this.skill.skillData.name.toLowerCase(), " ", "_")))();
                            this.addChild(this.mc);
                            this.mc.width = 30;
                            this.mc.height = 30;
                            this.mc.x = 10;
                            this.mc.y = 10;
                            this.text = iGlobal.Global.getTextField(24);
                            this.text.width = 140;
                            this.text.text = this.skill.skillData.realName + " " + (15 - this.skill.level).toString(16).toUpperCase();
                            this.addChild(this.text);
                            this.text.x = 50;
                            this.text.y = 10;
                            this.infoWindow = new iPanel.iCell.ItemInfoWindow(this.skill.getDescription());
                        };
                        SkillCell.prototype.onMouseOver = function (param1) {
                            this.filters = [new flash.GlowFilter(5066061, 0.66, 13, 13)];
                            if (this.parent) {
                                this.parent.addChildAt(this, this.parent.numChildren - 1);
                            }
                            this.addInfoWindow();
                        };
                        SkillCell.prototype.onMouseOut = function (param1) {
                            this.filters = [];
                            this.removeInfoWindow();
                        };
                        SkillCell.prototype.setLvupButton = function () {
                            var _self__ = this;
                            var lvupDown = null;
                            lvupDown = function () {
                                this["setBefore"]();
                                _self__.skill.levelup();
                                _self__.dispatchEvent(new tool.MyEvent(tool.MyEvent.Update));
                            };
                            this.lvupButton = new iPanel.iCell.EquipButton("lvup");
                            this.addChild(this.lvupButton);
                            this.lvupButton.x = 172;
                            this.lvupButton.y = 15;
                            this.lvupButton.downFunction = lvupDown;
                        };
                        SkillCell.prototype.update = function () {
                            this.text.text = this.skill.skillData.realName + " " + (15 - this.skill.level).toString(16).toUpperCase();
                            this.removeInfoWindow();
                            this.infoWindow = new iPanel.iCell.ItemInfoWindow(this.skill.getDescription());
                            if (this.skill.canLevelup()) {
                                this.lvupButton.visible = true;
                            }
                            else {
                                this.lvupButton.visible = false;
                            }
                        };
                        SkillCell.prototype.addInfoWindow = function () {
                            this.addChild(this.infoWindow);
                            this.infoWindow.x = -135;
                            this.infoWindow.y = 0;
                            var _loc1_ = flash.localToGlobal(this, new egret.Point(0, 0));
                            if (_loc1_.y + this.infoWindow.height > iGlobal.Global.stage.stageHeight) {
                                _loc1_ = flash.globalToLocal(this, new egret.Point(0, iGlobal.Global.stage.stageHeight - this.infoWindow.height));
                                this.infoWindow.y = _loc1_.y;
                            }
                        };
                        SkillCell.prototype.removeInfoWindow = function () {
                            if (this.contains(this.infoWindow)) {
                                this.removeChild(this.infoWindow);
                            }
                        };
                        return SkillCell;
                    }(iPanel.iCell.BasicCell));
                    iSkill.SkillCell = SkillCell;
                    __reflect(SkillCell.prototype, "iPanel.iScene.iPanel.iWindow.iSkill.SkillCell");
                })(iSkill = iWindow.iSkill || (iWindow.iSkill = {}));
            })(iWindow = iPanel.iWindow || (iPanel.iWindow = {}));
        })(iPanel = iScene.iPanel || (iScene.iPanel = {}));
    })(iScene = iPanel_1.iScene || (iPanel_1.iScene = {}));
})(iPanel || (iPanel = {}));
flash.extendsClass("iPanel.iScene.iPanel.iWindow.iSkill.SkillCell", "iPanel.iCell.BasicCell");
//# sourceMappingURL=SkillCell.js.map