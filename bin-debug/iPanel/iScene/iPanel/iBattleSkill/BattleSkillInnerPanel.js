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
            var iBattleSkill;
            (function (iBattleSkill) {
                var BattleSkillInnerPanel = (function (_super) {
                    __extends(BattleSkillInnerPanel, _super);
                    function BattleSkillInnerPanel() {
                        var _this = _super.call(this) || this;
                        _this.GAP = 20;
                        _this.yStart = -5;
                        _this.xStart1 = 5;
                        _this.xStart2 = 10;
                        _this.att = new iPanel.iCell.StringCell("攻击", 100, 24);
                        _this.def = new iPanel.iCell.StringCell("防御", 100, 24);
                        _this.bg = new egret.Sprite();
                        _this.addChild(_this.bg);
                        _this.panel = new egret.Sprite();
                        _this.attPanel = new egret.Sprite();
                        _this.defPanel = new egret.Sprite();
                        _this.addChild(_this.panel);
                        _this.update();
                        return _this;
                    }
                    BattleSkillInnerPanel.prototype.update = function () {
                        var _loc3_ = flash.checkInt(0);
                        var _loc4_ = flash.checkInt(0);
                        var _loc5_ = null;
                        this.remove();
                        var _loc1_ = iGlobal.Player.attackSkillList;
                        var _loc2_ = flash.checkInt(_loc1_.length);
                        if (_loc2_ > 0) {
                            this.panel.addChild(this.att);
                            this.att.x = this.xStart1;
                            this.att.y = this.yStart;
                            _loc3_ = flash.checkInt(iGlobal.Player.spellChance + 20 + _loc2_ * 5);
                            if (_loc3_ > 95) {
                                _loc3_ = flash.checkInt(95);
                            }
                            _loc4_ = flash.checkInt(0);
                            while (_loc4_ < _loc2_) {
                                _loc5_ = new iPanel.iCell.StringCell(_loc1_[_loc4_].skillData.realName + "  " + (_loc3_ / _loc2_ * 100 >> 0) / 100 + "%", 160);
                                this.attPanel.addChild(_loc5_);
                                _loc5_.y = this.GAP * _loc4_;
                                _loc4_++;
                            }
                            this.panel.addChild(this.attPanel);
                            this.attPanel.x = this.xStart2;
                            this.attPanel.y = this.yStart + 30;
                        }
                        _loc1_ = iGlobal.Player.defenceSkillList;
                        _loc2_ = flash.checkInt(_loc1_.length);
                        if (_loc2_ > 0) {
                            this.panel.addChild(this.def);
                            this.def.x = this.xStart1;
                            this.def.y = this.attPanel.y + this.attPanel.height;
                            _loc3_ = flash.checkInt(iGlobal.Player.spellChance + _loc2_ * 20);
                            if (_loc3_ > 95) {
                                _loc3_ = flash.checkInt(95);
                            }
                            _loc4_ = flash.checkInt(0);
                            while (_loc4_ < _loc2_) {
                                _loc5_ = new iPanel.iCell.StringCell(_loc1_[_loc4_].skillData.realName + "  " + (_loc3_ / _loc2_ * 100 >> 0) / 100 + "%", 160);
                                this.defPanel.addChild(_loc5_);
                                _loc5_.y = this.GAP * _loc4_;
                                _loc4_++;
                            }
                            this.panel.addChild(this.defPanel);
                            this.defPanel.x = this.xStart2;
                            this.defPanel.y = this.def.y + 30;
                        }
                        this.drawBg();
                    };
                    BattleSkillInnerPanel.prototype.remove = function () {
                        var _loc1_ = flash.checkInt(0);
                        if (this.panel.contains(this.att)) {
                            this.panel.removeChild(this.att);
                        }
                        if (this.panel.contains(this.def)) {
                            this.panel.removeChild(this.def);
                        }
                        _loc1_ = flash.checkInt(this.attPanel.numChildren - 1);
                        while (_loc1_ >= 0) {
                            this.attPanel.removeChildAt(_loc1_);
                            _loc1_--;
                        }
                        _loc1_ = flash.checkInt(this.defPanel.numChildren - 1);
                        while (_loc1_ >= 0) {
                            this.defPanel.removeChildAt(_loc1_);
                            _loc1_--;
                        }
                    };
                    BattleSkillInnerPanel.prototype.drawBg = function () {
                        this.bg.graphics.clear();
                        this.bg.graphics.beginFill(16777215, 0);
                        this.bg.graphics.drawRect(0, 0, 170, this.height);
                        this.bg.graphics.endFill();
                    };
                    return BattleSkillInnerPanel;
                }(iPanel.InnerPanel));
                iBattleSkill.BattleSkillInnerPanel = BattleSkillInnerPanel;
                __reflect(BattleSkillInnerPanel.prototype, "iPanel.iScene.iPanel.iBattleSkill.BattleSkillInnerPanel");
            })(iBattleSkill = iPanel.iBattleSkill || (iPanel.iBattleSkill = {}));
        })(iPanel = iScene.iPanel || (iScene.iPanel = {}));
    })(iScene = iPanel_1.iScene || (iPanel_1.iScene = {}));
})(iPanel || (iPanel = {}));
flash.extendsClass("iPanel.iScene.iPanel.iBattleSkill.BattleSkillInnerPanel", "iPanel.InnerPanel");
//# sourceMappingURL=BattleSkillInnerPanel.js.map