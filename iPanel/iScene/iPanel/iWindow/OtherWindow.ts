module iPanel {
	export module iScene {
		// export module iPanel {
			export module iWindow {
				export class OtherWindow extends iPanel.iScene.iPanel.iWindow.Window {
					public mapPanel:iPanel.iScene.iPanel.iWindow.iSystem.iMap.MapPanel;
					private rebirth:iPanel.iScene.iPanel.iWindow.iSystem.ClickButton;

					public constructor()
					{
						super();
						var _loc1_:egret.Sprite = <any>new iPanel.iCell.BasicCell(200,540);
						this.addChild(_loc1_);
						this.setMap();
						this.setHelp();
						this.setShop();
						this.setSpecialShop();
						this.setRebirth();
						this.setSave();
					}

					private setHelp():any
					{
						var helpDown:Function = <any>null;
						helpDown = function ():any
						{
							iGlobal.Global.stage.addChild(iGlobal.Global.helpPanel);
							iGlobal.Global.helpPanel.visible = true;
							this["setBefore"]();
						};
						var help:iPanel.iScene.iPanel.iWindow.iSystem.ClickButton = new iPanel.iScene.iPanel.iWindow.iSystem.ClickButton("button_help",50);
						this.addChild(help);
						help.x = 10;
						help.y = 100;
						help.downFunction = helpDown;
						var help_text:iPanel.iCell.StringCell = new iPanel.iCell.StringCell("帮助",100,32);
						this.addChild(help_text);
						help_text.x = 100;
						help_text.y = 100;
					}

					private setMap():any
					{
						var _self__:any = this;
						var mapDown:Function = <any>null;
						mapDown = function ()
						{
							iGlobal.Global.stage.addChild(_self__.mapPanel);
							_self__.mapPanel.visible = true;
						};
						this.mapPanel = new iPanel.iScene.iPanel.iWindow.iSystem.iMap.MapPanel();
						var mapButton:iPanel.iScene.iPanel.iWindow.iSystem.ClickButton = new iPanel.iScene.iPanel.iWindow.iSystem.ClickButton("button_map",50);
						this.addChild(mapButton);
						mapButton.x = 10;
						mapButton.y = 10;
						mapButton.downFunction = mapDown;
						var text:iPanel.iCell.StringCell = new iPanel.iCell.StringCell("地图",100,32);
						this.addChild(text);
						text.x = 100;
						text.y = 10;
					}

					private setShop():any
					{
						var shopDown:Function = <any>null;
						shopDown = function ():any
						{
							iGlobal.Global.stage.addChild(iGlobal.Global.shopPanel);
							iGlobal.Global.shopPanel.visible = true;
							this["setBefore"]();
						};
						var shop:iPanel.iScene.iPanel.iWindow.iSystem.ClickButton = new iPanel.iScene.iPanel.iWindow.iSystem.ClickButton("button_shop",50);
						this.addChild(shop);
						shop.x = 10;
						shop.y = 200;
						shop.downFunction = shopDown;
						var shop_text:iPanel.iCell.StringCell = new iPanel.iCell.StringCell("商店",100,32);
						this.addChild(shop_text);
						shop_text.x = 100;
						shop_text.y = 200;
					}

					private setSpecialShop():any
					{
						var specialShopDown:Function = <any>null;
						specialShopDown = function ():any
						{
							iGlobal.Global.stage.addChild(iGlobal.Global.specialShopPanel);
							iGlobal.Global.specialShopPanel.visible = true;
							this["setBefore"]();
						};
						var specialShop:iPanel.iScene.iPanel.iWindow.iSystem.ClickButton = new iPanel.iScene.iPanel.iWindow.iSystem.ClickButton("button_shop",50);
						this.addChild(specialShop);
						specialShop.x = 10;
						specialShop.y = 280;
						specialShop.downFunction = specialShopDown;
						var specialShop_text:iPanel.iCell.StringCell = new iPanel.iCell.StringCell("特殊商店",150,32);
						this.addChild(specialShop_text);
						specialShop_text.x = 60;
						specialShop_text.y = 280;
					}

					private setRebirth():any
					{
						var _self__:any = this;
						var rebirthDown:Function = <any>null;
						rebirthDown = function ()
						{
							var _loc1_:iPanel.iScene.RaceScene = new iPanel.iScene.RaceScene();
							iGlobal.Global.stage.addChild(_loc1_);
							tool.Effect.gradientIn(_loc1_);
							_self__.rebirth.touchEnabled = false;
							_self__.rebirth.touchChildren = false;
							iData.iPlayer.TitleList.updateTitleInfo("reborn");
							iGlobal.Player.caculate = flash.checkInt(0);
						};
						this.rebirth = new iPanel.iScene.iPanel.iWindow.iSystem.ClickButton("button_rebirth",50);
						this.addChild(this.rebirth);
						this.rebirth.x = 10;
						this.rebirth.y = 350;
						this.rebirth.downFunction = rebirthDown;
						this.updateBirth();
						var rebirth_text:iPanel.iCell.StringCell = new iPanel.iCell.StringCell("转生",100,32);
						this.addChild(rebirth_text);
						rebirth_text.x = 100;
						rebirth_text.y = 350;
						var intro:iPanel.iCell.StringCell = new iPanel.iCell.StringCell("当你达到20岁之后",150,16);
						this.addChild(intro);
						intro.x = 35;
						intro.y = 400;
						intro = new iPanel.iCell.StringCell("可以选择转生",150,16);
						this.addChild(intro);
						intro.x = 40;
						intro.y = 420;
						intro = new iPanel.iCell.StringCell("技能和装备会保留",150,16);
						this.addChild(intro);
						intro.x = 40;
						intro.y = 440;
					}

					private setSave():any
					{
						var saveDown:Function = <any>null;
						saveDown = function ()
						{
							iGlobal.Player.save();
							iPanel.iScene.MainScene.allInfoPanel.addText("记录已经保存!");
						};
						var save:iPanel.iScene.iPanel.iWindow.iSystem.ClickButton = new iPanel.iScene.iPanel.iWindow.iSystem.ClickButton("button_save",50);
						this.addChild(save);
						save.x = 10;
						save.y = 470;
						save.downFunction = saveDown;
						var save_text:iPanel.iCell.StringCell = new iPanel.iCell.StringCell("保存",100,32);
						this.addChild(save_text);
						save_text.x = 100;
						save_text.y = 470;
						var s_t:iPanel.iCell.StringCell = new iPanel.iCell.StringCell("自动保存/30s",100,16);
						this.addChild(s_t);
						s_t.x = 80;
						s_t.y = 510;
					}

					public updateBirth():any
					{
						if(iGlobal.Player.age >= 20)
						{
							this.rebirth.touchEnabled = true;
							this.rebirth.touchChildren = true;
						}
						else
						{
							this.rebirth.touchEnabled = false;
							this.rebirth.touchChildren = false;
						}
					}

				}
			}
		}
	}
// }

// flash.extendsClass("iPanel.iScene.iPanel.iWindow.OtherWindow","iPanel.iScene.iPanel.iWindow.Window")
