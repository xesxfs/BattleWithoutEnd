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
            var PlayerInfoPanel = (function (_super) {
                __extends(PlayerInfoPanel, _super);
                function PlayerInfoPanel() {
                    var _this = _super.call(this, 385, 220) || this;
                    _this.beginX = 10;
                    _this.beginY = 10;
                    _this.sXGap = 40;
                    _this.bXGap = 120;
                    _this.yGap = 25;
                    _this.setPosition();
                    _this.upDate();
                    return _this;
                }
                PlayerInfoPanel.prototype.setPosition = function () {
                    var _loc1_ = new iPanel.iCell.StringCell("名字");
                    this.addChild(_loc1_);
                    _loc1_.x = this.beginX;
                    _loc1_.y = this.beginY;
                    this._name = new iPanel.iCell.StringCell("Jason", 200);
                    this.addChild(this._name);
                    this._name.x = this.beginX + this.sXGap;
                    this._name.y = this.beginY;
                    var _loc2_ = new Array();
                    var _loc3_ = new iPanel.iCell.StringCell("种族");
                    _loc2_.push(_loc3_);
                    this.race = new iPanel.iCell.StringCell(iGlobal.Player.race.name.toUpperCase());
                    _loc2_.push(this.race);
                    var _loc4_ = new iPanel.iCell.StringCell("年龄");
                    _loc2_.push(_loc4_);
                    this.age = new iPanel.iCell.StringInfoCell("17", "还剩:");
                    _loc2_.push(this.age);
                    var _loc5_ = new iPanel.iCell.StringCell("LV");
                    _loc2_.push(_loc5_);
                    this.lv = new iPanel.iCell.StringCell("20");
                    _loc2_.push(this.lv);
                    _loc2_.push(new iPanel.iCell.StringCell("HP"));
                    _loc2_.push(this.hp = new iPanel.iBar.Bar(80, 100, 12522257));
                    _loc2_.push(new iPanel.iCell.StringCell("MP"));
                    _loc2_.push(this.mp = new iPanel.iBar.Bar(80, 100, 424351));
                    _loc2_.push(new iPanel.iCell.StringCell("EXP"));
                    _loc2_.push(this.exp = new iPanel.iBar.Bar(80, 100, 7932074));
                    _loc2_.push(new iPanel.iCell.StringCell("金钱"));
                    _loc2_.push(this.gold = new iPanel.iCell.StringCell("23424"));
                    _loc2_.push(new iPanel.iCell.StringInfoCell("力量", "增加基础攻击力"));
                    _loc2_.push(this.str = new iPanel.iCell.StringCell("13"));
                    _loc2_.push(new iPanel.iCell.StringInfoCell("敏捷", "影响平衡，增加使用远程武器时候的攻击力"));
                    _loc2_.push(this.dex = new iPanel.iCell.StringCell("14"));
                    _loc2_.push(new iPanel.iCell.StringInfoCell("智力", "增加魔法伤害和技能释放率"));
                    _loc2_.push(this.intelligence = new iPanel.iCell.StringCell("123"));
                    _loc2_.push(new iPanel.iCell.StringInfoCell("意志", "影响暴击"));
                    _loc2_.push(this.will = new iPanel.iCell.StringCell("213"));
                    _loc2_.push(new iPanel.iCell.StringInfoCell("幸运", "影响暴击和...？"));
                    _loc2_.push(this.luck = new iPanel.iCell.StringCell("12"));
                    _loc2_.push(new iPanel.iCell.StringInfoCell("AP", "技能点，提升技能"));
                    _loc2_.push(this.ap = new iPanel.iCell.StringCell("23"));
                    _loc2_.push(new iPanel.iCell.StringInfoCell("战斗力", "显示了你当前的基础战斗力，不包括装备的加成 "));
                    _loc2_.push(this.cp = new iPanel.iCell.StringCell("100"));
                    _loc2_.push(new iPanel.iCell.StringInfoCell("攻击", "物理输出"));
                    _loc2_.push(this.attack = new iPanel.iCell.StringCell("12~23"));
                    _loc2_.push(new iPanel.iCell.StringInfoCell("平衡", "影响伤害的平衡，值越大，输出接近最大值的可能性越大"));
                    _loc2_.push(this.balance = new iPanel.iCell.StringCell("100"));
                    _loc2_.push(new iPanel.iCell.StringInfoCell("暴击", "暴击概率，可被对方护甲减少"));
                    _loc2_.push(this.crit = new iPanel.iCell.StringCell("50%"));
                    _loc2_.push(new iPanel.iCell.StringInfoCell("暴击倍数", "暴击倍数，影响暴击时造成输出的倍数"));
                    _loc2_.push(this.crit_mul = new iPanel.iCell.StringCell("100%"));
                    _loc2_.push(new iPanel.iCell.StringInfoCell("防御", "防御，直接抵消伤害"));
                    _loc2_.push(this.defence = new iPanel.iCell.StringCell("100"));
                    _loc2_.push(new iPanel.iCell.StringInfoCell("护甲", "护甲，按百分比抵消伤害，抵消多少百分比鼠标移到到护甲数值上有写"));
                    _loc2_.push(this.protection = new iPanel.iCell.StringInfoCell("100", "50%"));
                    _loc2_.push(new iPanel.iCell.StringInfoCell("无视护甲", "无视敌方护甲的数值"));
                    _loc2_.push(this.pro_ignore = new iPanel.iCell.StringCell("0"));
                    var _loc6_ = flash.checkInt(_loc2_.length);
                    var _loc7_ = flash.checkInt(0);
                    while (_loc7_ < _loc6_) {
                        this.addChild(_loc2_[_loc7_]);
                        _loc2_[_loc7_].x = this.beginX + this.sXGap * (_loc7_ % 2) + this.bXGap * (_loc7_ / 14 >> 0);
                        _loc2_[_loc7_].y = this.beginY + this.yGap + this.yGap * (_loc7_ % 14 / 2 >> 0);
                        _loc7_++;
                    }
                    this.hp.x = this.beginX + 30;
                    this.hp.y = this.hp.y + 13;
                    this.mp.x = this.beginX + 30;
                    this.mp.y = this.mp.y + 13;
                    this.exp.x = this.beginX + 30;
                    this.exp.y = this.exp.y + 13;
                    this.crit_mul.x = this.crit_mul.x + 30;
                    this.pro_ignore.x = this.pro_ignore.x + 30;
                    this.cp.x = this.cp.x + 10;
                };
                PlayerInfoPanel.prototype.upDate = function () {
                    if (iGlobal.Player.title) {
                        this._name.setText(iGlobal.Player.title.realName + "" + iGlobal.Player.playerName);
                    }
                    else {
                        this._name.setText(iGlobal.Player.playerName);
                    }
                    this.race.setText(iGlobal.Player.race.name.toUpperCase());
                    this.age.setText(iGlobal.Player.age + "");
                    var _loc1_ = "";
                    var _loc2_ = iGlobal.Player.race;
                    var _loc3_ = flash.checkInt(iGlobal.Player.age);
                    var _loc4_ = flash.checkInt(17 - _loc3_);
                    if (_loc4_ < 1 && _loc3_ <= 25) {
                        _loc4_ = flash.checkInt(1);
                    }
                    if (_loc3_ < 25) {
                        _loc1_ = _loc1_ + ("Hp   +" + (_loc2_.ageupList[_loc3_ - 10].hp + 1) + "<br/>");
                        _loc1_ = _loc1_ + ("Mp   +" + (_loc2_.ageupList[_loc3_ - 10].mp + 1) + "<br/>");
                        _loc1_ = _loc1_ + ("力量 +" + _loc2_.ageupList[_loc3_ - 10].str + "<br/>");
                        _loc1_ = _loc1_ + ("敏捷 +" + _loc2_.ageupList[_loc3_ - 10].dex + "<br/>");
                        _loc1_ = _loc1_ + ("意志 +" + _loc2_.ageupList[_loc3_ - 10].will + "<br/>");
                        _loc1_ = _loc1_ + ("智力 +" + _loc2_.ageupList[_loc3_ - 10].intelligence + "<br/>");
                        _loc1_ = _loc1_ + ("幸运 +" + _loc2_.ageupList[_loc3_ - 10].luck + "<br/>");
                        _loc1_ = _loc1_ + ("AP   +" + _loc4_ + "<br/>");
                    }
                    else {
                        _loc1_ = _loc1_ + ("Hp   +" + 1 + "<br/>");
                        _loc1_ = _loc1_ + ("Mp   +" + 1 + "<br/>");
                        _loc1_ = _loc1_ + ("力量 +" + 0 + "<br/>");
                        _loc1_ = _loc1_ + ("敏捷 +" + 0 + "<br/>");
                        _loc1_ = _loc1_ + ("意志 +" + 0 + "<br/>");
                        _loc1_ = _loc1_ + ("智力 +" + 0 + "<br/>");
                        _loc1_ = _loc1_ + ("幸运 +" + 0 + "<br/>");
                        _loc1_ = _loc1_ + ("AP   +" + 0 + "<br/>");
                    }
                    this.age.setInfo("年龄增长时:<br/>" + _loc1_ + "长大还剩:" + this.timeToGrowup());
                    this.lv.setText(iGlobal.Player.lv + "");
                    if (iGlobal.Player.str < iGlobal.Player.basicStr) {
                        this.str.setText(this.redText(iGlobal.Player.str + "") + "<font size=\'12\'>(" + iGlobal.Player.basicStr + ")</font>");
                    }
                    else {
                        this.str.setText(this.greenText(iGlobal.Player.str + "") + "<font size=\'12\'>(" + iGlobal.Player.basicStr + ")</font>");
                    }
                    if (iGlobal.Player.dex < iGlobal.Player.basicDex) {
                        this.dex.setText(this.redText(iGlobal.Player.dex + "") + "<font size=\'12\'>(" + iGlobal.Player.basicDex + ")</font>");
                    }
                    else {
                        this.dex.setText(this.greenText(iGlobal.Player.dex + "") + "<font size=\'12\'>(" + iGlobal.Player.basicDex + ")</font>");
                    }
                    if (iGlobal.Player.intelligence < iGlobal.Player.basicInt) {
                        this.intelligence.setText(this.redText(iGlobal.Player.intelligence + "") + "<font size=\'12\'>(" + iGlobal.Player.basicInt + ")</font>");
                    }
                    else {
                        this.intelligence.setText(this.greenText(iGlobal.Player.intelligence + "") + "<font size=\'12\'>(" + iGlobal.Player.basicInt + ")</font>");
                    }
                    if (iGlobal.Player.will < iGlobal.Player.basicWill) {
                        this.will.setText(this.redText(iGlobal.Player.will + "") + "<font size=\'12\'>(" + iGlobal.Player.basicWill + ")</font>");
                    }
                    else {
                        this.will.setText(this.greenText(iGlobal.Player.will + "") + "<font size=\'12\'>(" + iGlobal.Player.basicWill + ")</font>");
                    }
                    if (iGlobal.Player.luck < iGlobal.Player.basicLuck) {
                        this.luck.setText(this.redText(iGlobal.Player.luck + "") + "<font size=\'12\'>(" + iGlobal.Player.basicLuck + ")</font>");
                    }
                    else {
                        this.luck.setText(this.greenText(iGlobal.Player.luck + "") + "<font size=\'12\'>(" + iGlobal.Player.basicLuck + ")</font>");
                    }
                    if (iGlobal.Player.attMin > iGlobal.Player.attMax) {
                        this.attack.setText(iGlobal.Player.attMax + "~" + iGlobal.Player.attMin + "");
                    }
                    else {
                        this.attack.setText(iGlobal.Player.attMin + "~" + iGlobal.Player.attMax + "");
                    }
                    this.balance.setText(iGlobal.Player.balance + "");
                    this.crit.setText(iGlobal.Player.crit + "");
                    this.defence.setText(iGlobal.Player.defence + "");
                    this.protection.setText(iGlobal.Player.protection + "");
                    this.protection.setInfo(this.caculatePro() + "%");
                    this.gold.setText(iGlobal.Player.gold + "");
                    this.ap.setText(iGlobal.Player.ap + "");
                    this.cp.setText((iGlobal.Player.combatPower * 100 >> 0) / 100 + "");
                    this.crit_mul.setText(iGlobal.Player.crit_mul + "%");
                    this.pro_ignore.setText(iGlobal.Player.protectionIgnore + "");
                    this.upDateHpAndMp();
                };
                PlayerInfoPanel.prototype.greenText = function (param1) {
                    return "<font color=\'#e3b20a\'>" + param1 + "</font>";
                };
                PlayerInfoPanel.prototype.redText = function (param1) {
                    return "<font color=\'#ff4040\'>" + param1 + "</font>";
                };
                PlayerInfoPanel.prototype.caculatePro = function () {
                    return iGlobal.Player.protection * 6 / (iGlobal.Player.protection * 6 + 100) * 100;
                };
                PlayerInfoPanel.prototype.upDateHpAndMp = function () {
                    if (iPanel.iScene.MainScene.battle) {
                        this.hp.Value = iPanel.iScene.MainScene.battle["playerHp"];
                        this.mp.Value = iPanel.iScene.MainScene.battle["playerMp"];
                    }
                    this.hp.Max = iGlobal.Player.hp;
                    this.mp.Max = iGlobal.Player.mp;
                };
                PlayerInfoPanel.prototype.upDateExp = function () {
                    this.exp.Value = iGlobal.Player.xp;
                    this.exp.Max = iGlobal.Player.getLevelExp();
                };
                PlayerInfoPanel.prototype.timeToGrowup = function () {
                    var _loc1_ = flash.checkInt(iGlobal.Player.caculate % 2400);
                    _loc1_ = flash.checkInt(2400 - _loc1_);
                    var _loc2_ = flash.checkInt(_loc1_ / 120);
                    var _loc3_ = flash.checkInt((_loc1_ - _loc2_ * 120) / 2);
                    return _loc2_ + ":" + _loc3_;
                };
                return PlayerInfoPanel;
            }(iPanel.iCell.BasicCell));
            iPanel.PlayerInfoPanel = PlayerInfoPanel;
            __reflect(PlayerInfoPanel.prototype, "iPanel.iScene.iPanel.PlayerInfoPanel");
        })(iPanel = iScene.iPanel || (iScene.iPanel = {}));
    })(iScene = iPanel_1.iScene || (iPanel_1.iScene = {}));
})(iPanel || (iPanel = {}));
flash.extendsClass("iPanel.iScene.iPanel.PlayerInfoPanel", "iPanel.iCell.BasicCell");
//# sourceMappingURL=PlayerInfoPanel.js.map