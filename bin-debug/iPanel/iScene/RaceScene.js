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
    var iScene;
    (function (iScene) {
        var RaceScene = (function (_super) {
            __extends(RaceScene, _super);
            function RaceScene() {
                var _this = _super.call(this) || this;
                _this.chosenAge = 10;
                _this.px = 100;
                _this.py = 150;
                _this.pg = 80;
                _this.background = new egret.Sprite();
                _this.human = new iScene.iPanel.iScene.RaceButton("before_human", "after_human", iData.RaceList.HUMAN);
                _this.elf = new iScene.iPanel.iScene.RaceButton("before_elf", "after_elf", iData.RaceList.ELF);
                _this.giant = new iScene.iPanel.iScene.RaceButton("before_giant", "after_giant", iData.RaceList.GIANT);
                _this.dwarf = new iScene.iPanel.iScene.RaceButton("before_dwarf", "after_dwarf", iData.RaceList.DWARF);
                _this.undeath = new iScene.iPanel.iScene.RaceButton("before_undeath", "after_undeath", iData.RaceList.UNDEATH);
                _this.background.graphics.beginFill(16777215, 1);
                _this.background.graphics.drawRect(0, 0, 800, 600);
                _this.background.graphics.endFill();
                _this.addChild(_this.background);
                var _loc1_ = new caption_mc();
                _this.addChild(_loc1_);
                _loc1_.x = 150;
                _loc1_.y = -30;
                _this.setRaceButtons();
                _this.setAgeButtons();
                _this.setInfoPanel();
                return _this;
            }
            RaceScene.prototype.setRaceButtons = function () {
                var _self__ = this;
                var aa = null;
                aa = function () {
                    if (_self__.agePanel.visible == false) {
                        _self__.agePanel.visible = true;
                        tool.Effect.fadeIn(_self__.agePanel, 10);
                    }
                    _self__.chosenRace = this["race"];
                    _self__.updataInfo();
                };
                this.addChild(this.human);
                this.human.x = this.px;
                this.human.y = this.py;
                this.human.downFunction = aa;
                this.addChild(this.elf);
                this.elf.x = this.px;
                this.elf.y = this.py + this.pg;
                this.elf.downFunction = aa;
                this.addChild(this.giant);
                this.giant.x = this.px;
                this.giant.y = this.py + this.pg * 2;
                this.giant.downFunction = aa;
                this.addChild(this.undeath);
                this.undeath.x = this.px;
                this.undeath.y = this.py + this.pg * 3;
                this.undeath.downFunction = aa;
                this.addChild(this.dwarf);
                this.dwarf.x = this.px;
                this.dwarf.y = this.py + this.pg * 4;
                this.dwarf.downFunction = aa;
                var buttonGroup = new iScene.iPanel.iCell.ButtonGroup();
                buttonGroup.addButton(this.human);
                buttonGroup.addButton(this.elf);
                buttonGroup.addButton(this.giant);
                buttonGroup.addButton(this.dwarf);
                buttonGroup.addButton(this.undeath);
            };
            RaceScene.prototype.setAgeButtons = function () {
                var _self__ = this;
                var p = null;
                this.agePanel = new egret.Sprite();
                this.addChild(this.agePanel);
                this.agePanel.y = 200;
                this.agePanel.x = 380;
                var buttonGroup2 = new iScene.iPanel.iCell.ButtonGroup();
                var i = flash.checkInt(0);
                while (i < 8) {
                    var aa = function () {
                        if (_self__.infoPanel.visible == false) {
                            _self__.infoPanel.visible = true;
                            tool.Effect.fadeIn(_self__.infoPanel, 10);
                        }
                        _self__.chosenAge = flash.checkInt(this["age"]);
                        _self__.updataInfo();
                    };
                    p = new iScene.iPanel.iScene.PeopleModel(10 + i);
                    this.agePanel.addChild(p);
                    p.y = 0;
                    p.x = i * 50;
                    buttonGroup2.addButton(p);
                    p.downFunction = aa;
                    i++;
                }
                this.agePanel.visible = false;
            };
            RaceScene.prototype.setInfoPanel = function () {
                var _self__ = this;
                var _this = undefined;
                var okDown = null;
                okDown = function () {
                    var addMain = null;
                    addMain = function () {
                        var _loc1_ = null;
                        if (iGlobal.Global.sound_toggle) {
                            iGlobal.Global.soundOut();
                        }
                        if (iGlobal.Global.mainScene) {
                            iGlobal.Global.mainScene.visible = true;
                            tool.Effect.fadeIn(iGlobal.Global.mainScene);
                        }
                        else {
                            _loc1_ = new iScene.iPanel.iScene.MainScene();
                            iGlobal.Global.mainScene = _loc1_;
                            iGlobal.Global.stage.addChild(_loc1_);
                            tool.Effect.fadeIn(_loc1_);
                        }
                    };
                    tool.Effect.explodeOut(_this, 2, 4294967295, addMain);
                    iGlobal.Player.burn(_self__.chosenAge, _self__.chosenRace);
                    if (iGlobal.Global.sound_toggle) {
                        iGlobal.Global.playSound();
                    }
                    if (iGlobal.Global.mainScene) {
                        iGlobal.Global.mainScene.visible = false;
                    }
                };
                this.infoPanel = new egret.Sprite();
                this.addChild(this.infoPanel);
                this.infoPanel.x = 380;
                this.infoPanel.y = 150;
                this.ageText = iGlobal.Global.getTextField();
                this.ageText.text = "年龄:10";
                this.infoPanel.addChild(this.ageText);
                this.initialText = iGlobal.Global.getTextField();
                this.initialText.text = "初始属性:";
                this.initialText.width = 420;
                this.infoPanel.addChild(this.initialText);
                this.initialText.y = 170;
                this.ageGrowText = iGlobal.Global.getTextField();
                this.ageGrowText.text = "年龄成长:";
                this.ageGrowText.width = 400;
                this.infoPanel.addChild(this.ageGrowText);
                this.ageGrowText.y = 220;
                var mention = iGlobal.Global.getTextField(16);
                mention.width = 300;
                mention.text = "(升级时增长属性是当前年龄增长的1/4)";
                this.infoPanel.addChild(mention);
                mention.x = 100;
                mention.y = 260;
                var okButton = new iScene.iPanel.iScene.FlickerButton("确定", 250, 50);
                this.infoPanel.addChild(okButton);
                okButton.x = 100;
                okButton.y = 300;
                okButton.downFunction = okDown;
                _this = this;
                this.infoPanel.visible = false;
            };
            RaceScene.prototype.updataInfo = function () {
                this.ageText.text = "年龄:" + this.chosenAge;
                var _loc1_ = this.chosenRace.caculateStat(this.chosenAge);
                this.initialText.text = "初始属性:   力量 " + _loc1_.str + " 敏捷 " + _loc1_.dex + " 智力 " + _loc1_.intelligence + " 意志 " + _loc1_.will + " 幸运 " + _loc1_.luck;
                _loc1_ = this.chosenRace.ageupList[this.chosenAge - 10];
                this.ageGrowText.text = "年龄增长:   力量+" + _loc1_.str + " 敏捷+" + _loc1_.dex + " 智力+" + _loc1_.intelligence + " 意志+" + _loc1_.will + " 幸运+" + _loc1_.luck;
            };
            return RaceScene;
        }(egret.Sprite));
        iScene.RaceScene = RaceScene;
        __reflect(RaceScene.prototype, "iPanel.iScene.RaceScene");
    })(iScene = iPanel.iScene || (iPanel.iScene = {}));
})(iPanel || (iPanel = {}));
flash.extendsClass("iPanel.iScene.RaceScene", "egret.Sprite");
//# sourceMappingURL=RaceScene.js.map