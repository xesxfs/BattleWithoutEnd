module iPanel {
	export module iScene {
		export class MainScene extends egret.Sprite {
			public static playerInfoPanel:iPanel.iScene.iPanel.PlayerInfoPanel;
			public static monsterInfoPanel:iPanel.iScene.iPanel.MonsterInfoPanel;
			public static petInfoPanel:iPanel.iScene.iPanel.PetInfoPanel;
			public static otherPanel:iPanel.iScene.iPanel.OtherPanel;
			public static battleSkillPanel:iPanel.iScene.iPanel.BattleSkillPanel;
			public static allInfoPanel:iPanel.iScene.iPanel.AllInfoPanel;
			public static xpBar:iPanel.iBar.Bar;
			public static lootPanel:iPanel.iScene.iPanel.LootPanel;
			public static battle:iData.Battle;

			public constructor()
			{
				super();
				this.setBackground();
				this.setPlayerInfo();
				this.setMonsterInfo();
				this.setPetInfo();
				this.setBattleSkillPanel();
				this.setAllInfoPanel();
				this.setLootPanel();
				this.setOther();
				this.setBattle();
				this.addChild(new tool.FPSShow());
				iGlobal.Global.shopPanel = new iPanel.iScene.iPanel.ShopPanel();
				iGlobal.Global.helpPanel = new iPanel.iScene.iPanel.HelpPanel();
				iGlobal.Global.specialShopPanel = new iPanel.iScene.iPanel.SpecialShopPanel();
			}

			private setBackground()
			{
				var _loc1_:egret.Sprite = new egret.Sprite();
				_loc1_.graphics.beginFill(12632256,1);
				_loc1_.graphics.drawRect(0,0,800,600);
				_loc1_.graphics.endFill();
				this.addChild(_loc1_);
			}

			private setPlayerInfo()
			{
				iPanel.iScene.MainScene.playerInfoPanel = new iPanel.iScene.iPanel.PlayerInfoPanel();
				this.addChild(iPanel.iScene.MainScene.playerInfoPanel);
				iPanel.iScene.MainScene.playerInfoPanel.x = 10;
				iPanel.iScene.MainScene.playerInfoPanel.y = 10;
			}

			private setMonsterInfo()
			{
				iPanel.iScene.MainScene.monsterInfoPanel = new iPanel.iScene.iPanel.MonsterInfoPanel();
				this.addChild(iPanel.iScene.MainScene.monsterInfoPanel);
				iPanel.iScene.MainScene.monsterInfoPanel.x = 400;
				iPanel.iScene.MainScene.monsterInfoPanel.y = 10;
			}

			private setPetInfo()
			{
				iPanel.iScene.MainScene.petInfoPanel = new iPanel.iScene.iPanel.PetInfoPanel();
				this.addChild(iPanel.iScene.MainScene.petInfoPanel);
				iPanel.iScene.MainScene.petInfoPanel.x = 400;
				iPanel.iScene.MainScene.petInfoPanel.y = 150;
			}

			private setOther()
			{
				iPanel.iScene.MainScene.otherPanel = new iPanel.iScene.iPanel.OtherPanel();
				this.addChild(iPanel.iScene.MainScene.otherPanel);
				iPanel.iScene.MainScene.otherPanel.x = 590;
				iPanel.iScene.MainScene.otherPanel.y = 10;
			}

			private setBattleSkillPanel()
			{
				iPanel.iScene.MainScene.battleSkillPanel = new iPanel.iScene.iPanel.BattleSkillPanel();
				this.addChild(iPanel.iScene.MainScene.battleSkillPanel);
				iPanel.iScene.MainScene.battleSkillPanel.x = 415;
				iPanel.iScene.MainScene.battleSkillPanel.y = 235;
			}

			private setAllInfoPanel()
			{
				iPanel.iScene.MainScene.allInfoPanel = new iPanel.iScene.iPanel.AllInfoPanel();
				this.addChild(iPanel.iScene.MainScene.allInfoPanel);
				iPanel.iScene.MainScene.allInfoPanel.x = 10;
				iPanel.iScene.MainScene.allInfoPanel.y = 235;
			}

			private setBattle()
			{
				iPanel.iScene.MainScene.battle = new Battle();
				iPanel.iScene.MainScene.battle["init"]();
			}

			private setXpBar()
			{
				iPanel.iScene.MainScene.xpBar = new iPanel.iBar.Bar(575,100,7932074,"exp: ");
				this.addChild(iPanel.iScene.MainScene.xpBar);
				iPanel.iScene.MainScene.xpBar.x = 10;
				iPanel.iScene.MainScene.xpBar.y = 235;
			}

			private setLootPanel()
			{
				iPanel.iScene.MainScene.lootPanel = new iPanel.iScene.iPanel.LootPanel();
				this.addChild(iPanel.iScene.MainScene.lootPanel);
				iPanel.iScene.MainScene.lootPanel.x = 415;
				iPanel.iScene.MainScene.lootPanel.y = 405;
			}

		}
	}
}

flash.extendsClass("iPanel.iScene.MainScene","egret.Sprite")
