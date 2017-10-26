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
                    var PetInfoWindow = (function (_super) {
                        __extends(PetInfoWindow, _super);
                        function PetInfoWindow(param1) {
                            var _this = _super.call(this, 0, 0) || this;
                            _this.textTitle = iGlobal.Global.getTextField(24);
                            _this.textTitle.multiline = true;
                            _this.addChild(_this.textTitle);
                            _this.pet = param1;
                            _this.touchEnabled = true;
                            _this.touchChildren = true;
                            return _this;
                        }
                        PetInfoWindow.prototype.draw = function (param1, param2) {
                            param1 = flash.checkInt(param1);
                            param2 = flash.checkInt(param2);
                            this.graphics.clear();
                            this.textTitle.width = 130;
                            this.textTitle.htmlText = this.petInfo();
                            this.setSkill();
                            _super.prototype.draw.call(this, 130, this.textTitle.textHeight + 5 + 40);
                        };
                        PetInfoWindow.prototype.getType = function () {
                            switch (this.pet.type) {
                                case iData.iPet.PetType.ATTACK:
                                    return "攻击型";
                                case iData.iPet.PetType.BALANCE:
                                    return "平衡型";
                                case iData.iPet.PetType.DEFENCE:
                                    return "防御型";
                                case iData.iPet.PetType.MAGIC:
                                    return "魔法型";
                                default:
                                    return this.pet.type;
                            }
                        };
                        PetInfoWindow.prototype.petInfo = function () {
                            var _loc1_ = "<p align=\'center\'>" + this.pet.realName + " Lv." + this.pet.level + "</p>";
                            _loc1_ = _loc1_ + ("<p align=\'center\'><font size=\'20\'>" + this.getType() + "</font></p>");
                            _loc1_ = _loc1_ + "<font size=\'16\'>";
                            _loc1_ = _loc1_ + ("  Hp\t" + this.pet.hp + "<br/>");
                            _loc1_ = _loc1_ + ("  Mp\t" + this.pet.mp + "<br/>");
                            _loc1_ = _loc1_ + ("  攻击\t" + this.pet.attmin + "~" + this.pet.attmax + "<br/>");
                            _loc1_ = _loc1_ + ("  平衡\t" + this.pet.balance + "<br/>");
                            _loc1_ = _loc1_ + ("  暴击率\t" + this.pet.cri + "%<br/>");
                            _loc1_ = _loc1_ + ("  暴击倍数\t" + this.pet.crimul + "%<br/>");
                            _loc1_ = _loc1_ + ("  防御\t" + this.pet.defence + "<br/>");
                            _loc1_ = _loc1_ + ("  护甲\t" + this.pet.pro + "<br/>");
                            _loc1_ = _loc1_ + ("  魔法攻击\t" + this.pet.magicatt + "%<br/>");
                            _loc1_ = _loc1_ + "</font>";
                            return _loc1_;
                        };
                        PetInfoWindow.prototype.setSkill = function () {
                            var _loc2_ = null;
                            var _loc1_ = flash.checkInt(0);
                            while (_loc1_ < this.pet.skillList.length) {
                                _loc2_ = new iPanel.iScene.iPanel.iWindow.iPet.PetSkillCell(this.pet.skillList[_loc1_]);
                                this.addChild(_loc2_);
                                _loc2_.x = _loc1_ * 30 + 2 + _loc1_ * 2;
                                _loc2_.y = this.textTitle.textHeight + 5;
                                _loc1_++;
                            }
                        };
                        return PetInfoWindow;
                    }(iPanel.iCell.InfoWindow));
                    iPet.PetInfoWindow = PetInfoWindow;
                    __reflect(PetInfoWindow.prototype, "iPanel.iScene.iPanel.iWindow.iPet.PetInfoWindow");
                })(iPet = iWindow.iPet || (iWindow.iPet = {}));
            })(iWindow = iPanel.iWindow || (iPanel.iWindow = {}));
        })(iPanel = iScene.iPanel || (iScene.iPanel = {}));
    })(iScene = iPanel_1.iScene || (iPanel_1.iScene = {}));
})(iPanel || (iPanel = {}));
flash.extendsClass("iPanel.iScene.iPanel.iWindow.iPet.PetInfoWindow", "iPanel.iCell.InfoWindow");
//# sourceMappingURL=PetInfoWindow.js.map