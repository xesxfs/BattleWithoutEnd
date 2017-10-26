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
        var MainScene = (function (_super) {
            __extends(MainScene, _super);
            function MainScene() {
                var _this = _super.call(this) || this;
                _this.setBackground();
                _this.setPlayerInfo();
                _this.setMonsterInfo();
                _this.setPetInfo();
                _this.setBattleSkillPanel();
                _this.setAllInfoPanel();
                _this.setLootPanel();
                _this.setOther();
                _this.setBattle();
                _this.addChild(new tool.FPSShow());
                iGlobal.Global.shopPanel = new iScene.iPanel.iScene.iPanel.ShopPanel();
                iGlobal.Global.helpPanel = new iScene.iPanel.iScene.iPanel.HelpPanel();
                iGlobal.Global.specialShopPanel = new iScene.iPanel.iScene.iPanel.SpecialShopPanel();
                return _this;
            }
            MainScene.prototype.setBackground = function () {
                var _loc1_ = new egret.Sprite();
                _loc1_.graphics.beginFill(12632256, 1);
                _loc1_.graphics.drawRect(0, 0, 800, 600);
                _loc1_.graphics.endFill();
                this.addChild(_loc1_);
            };
            MainScene.prototype.setPlayerInfo = function () {
                iScene.iPanel.iScene.MainScene.playerInfoPanel = new iScene.iPanel.iScene.iPanel.PlayerInfoPanel();
                this.addChild(iScene.iPanel.iScene.MainScene.playerInfoPanel);
                iScene.iPanel.iScene.MainScene.playerInfoPanel.x = 10;
                iScene.iPanel.iScene.MainScene.playerInfoPanel.y = 10;
            };
            MainScene.prototype.setMonsterInfo = function () {
                iScene.iPanel.iScene.MainScene.monsterInfoPanel = new iScene.iPanel.iScene.iPanel.MonsterInfoPanel();
                this.addChild(iScene.iPanel.iScene.MainScene.monsterInfoPanel);
                iScene.iPanel.iScene.MainScene.monsterInfoPanel.x = 400;
                iScene.iPanel.iScene.MainScene.monsterInfoPanel.y = 10;
            };
            MainScene.prototype.setPetInfo = function () {
                iScene.iPanel.iScene.MainScene.petInfoPanel = new iScene.iPanel.iScene.iPanel.PetInfoPanel();
                this.addChild(iScene.iPanel.iScene.MainScene.petInfoPanel);
                iScene.iPanel.iScene.MainScene.petInfoPanel.x = 400;
                iScene.iPanel.iScene.MainScene.petInfoPanel.y = 150;
            };
            MainScene.prototype.setOther = function () {
                iScene.iPanel.iScene.MainScene.otherPanel = new iScene.iPanel.iScene.iPanel.OtherPanel();
                this.addChild(iScene.iPanel.iScene.MainScene.otherPanel);
                iScene.iPanel.iScene.MainScene.otherPanel.x = 590;
                iScene.iPanel.iScene.MainScene.otherPanel.y = 10;
            };
            MainScene.prototype.setBattleSkillPanel = function () {
                iScene.iPanel.iScene.MainScene.battleSkillPanel = new iScene.iPanel.iScene.iPanel.BattleSkillPanel();
                this.addChild(iScene.iPanel.iScene.MainScene.battleSkillPanel);
                iScene.iPanel.iScene.MainScene.battleSkillPanel.x = 415;
                iScene.iPanel.iScene.MainScene.battleSkillPanel.y = 235;
            };
            MainScene.prototype.setAllInfoPanel = function () {
                iScene.iPanel.iScene.MainScene.allInfoPanel = new iScene.iPanel.iScene.iPanel.AllInfoPanel();
                this.addChild(iScene.iPanel.iScene.MainScene.allInfoPanel);
                iScene.iPanel.iScene.MainScene.allInfoPanel.x = 10;
                iScene.iPanel.iScene.MainScene.allInfoPanel.y = 235;
            };
            MainScene.prototype.setBattle = function () {
                iScene.iPanel.iScene.MainScene.battle = new Battle();
                iScene.iPanel.iScene.MainScene.battle["init"]();
            };
            MainScene.prototype.setXpBar = function () {
                iScene.iPanel.iScene.MainScene.xpBar = new iScene.iPanel.iBar.Bar(575, 100, 7932074, "exp: ");
                this.addChild(iScene.iPanel.iScene.MainScene.xpBar);
                iScene.iPanel.iScene.MainScene.xpBar.x = 10;
                iScene.iPanel.iScene.MainScene.xpBar.y = 235;
            };
            MainScene.prototype.setLootPanel = function () {
                iScene.iPanel.iScene.MainScene.lootPanel = new iScene.iPanel.iScene.iPanel.LootPanel();
                this.addChild(iScene.iPanel.iScene.MainScene.lootPanel);
                iScene.iPanel.iScene.MainScene.lootPanel.x = 415;
                iScene.iPanel.iScene.MainScene.lootPanel.y = 405;
            };
            return MainScene;
        }(egret.Sprite));
        iScene.MainScene = MainScene;
        __reflect(MainScene.prototype, "iPanel.iScene.MainScene");
    })(iScene = iPanel.iScene || (iPanel.iScene = {}));
})(iPanel || (iPanel = {}));
flash.extendsClass("iPanel.iScene.MainScene", "egret.Sprite");
//# sourceMappingURL=MainScene.js.map