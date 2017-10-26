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
                    var PassiveInnerPanel = (function (_super) {
                        __extends(PassiveInnerPanel, _super);
                        function PassiveInnerPanel() {
                            var _this = _super.call(this) || this;
                            _this.Gap = 50;
                            var _loc3_ = null;
                            _this.listSprite = new egret.Sprite();
                            _this.addChild(_this.listSprite);
                            var _loc1_ = flash.checkInt(0);
                            var _loc2_ = flash.checkInt(0);
                            while (_loc2_ < iGlobal.Player.skillList.length) {
                                if (flash.As3is(iGlobal.Player.skillList[_loc2_], iData.iSkill.PassiveSkill)) {
                                    _loc3_ = new iPanel.iScene.iPanel.iWindow.iSkill.SkillCell(iGlobal.Player.skillList[_loc2_]);
                                    _this.listSprite.addChild(_loc3_);
                                    _loc3_.y = _this.Gap * _loc1_;
                                    _loc1_++;
                                }
                                _loc2_++;
                            }
                            return _this;
                        }
                        PassiveInnerPanel.prototype.update = function () {
                            var _loc1_ = flash.checkInt(0);
                            while (_loc1_ < this.listSprite.numChildren) {
                                (flash.As3As(this.listSprite.getChildAt(_loc1_), iPanel.iScene.iPanel.iWindow.iSkill.SkillCell)).update();
                                _loc1_++;
                            }
                            this.addCell();
                        };
                        PassiveInnerPanel.prototype.addCell = function () {
                            var _loc3_ = null;
                            var _loc1_ = flash.checkInt(0);
                            var _loc2_ = flash.checkInt(0);
                            while (_loc2_ < iGlobal.Player.skillList.length) {
                                if (flash.As3is(iGlobal.Player.skillList[_loc2_], iData.iSkill.PassiveSkill)) {
                                    _loc1_++;
                                    if (_loc1_ > this.listSprite.numChildren) {
                                        _loc3_ = new iPanel.iScene.iPanel.iWindow.iSkill.SkillCell(iGlobal.Player.skillList[_loc2_]);
                                        this.listSprite.addChild(_loc3_);
                                        _loc3_.y = this.Gap * (_loc1_ - 1);
                                    }
                                }
                                _loc2_++;
                            }
                        };
                        return PassiveInnerPanel;
                    }(iPanel.InnerPanel));
                    iSkill.PassiveInnerPanel = PassiveInnerPanel;
                    __reflect(PassiveInnerPanel.prototype, "iPanel.iScene.iPanel.iWindow.iSkill.PassiveInnerPanel");
                })(iSkill = iWindow.iSkill || (iWindow.iSkill = {}));
            })(iWindow = iPanel.iWindow || (iPanel.iWindow = {}));
        })(iPanel = iScene.iPanel || (iScene.iPanel = {}));
    })(iScene = iPanel_1.iScene || (iPanel_1.iScene = {}));
})(iPanel || (iPanel = {}));
flash.extendsClass("iPanel.iScene.iPanel.iWindow.iSkill.PassiveInnerPanel", "iPanel.InnerPanel");
//# sourceMappingURL=PassiveInnerPanel.js.map