module iPanel {
	export module iScene {
		// export module iPanel {
			export module iWindow {
				export class SystemWindow extends iPanel.iScene.iWindow.Window {
					private startX:number = 10;
					private startY:number = 10;
					private gapY:number = 30;
					private gapX:number = 70;
					private gapBigY:number = 60;
					private fontSize_small:number = 16;
					private fontSize_meddle:number = 24;
					private fontSize_big:number = 32;
					private lootStartX:number = 10;
					private lootStartY:number = 110;
					private lootGapSmallY:number = 20;
					private lootGapY:number = 25;
					private lootGapMidY:number = 45;
					private lootGapBitY:number = 65;
					private lootGapX:number = 65;

					public constructor()
					{
						super();
						var _loc1_:egret.Sprite = <any>new iPanel.iCell.BasicCell(200,540);
						this.addChild(_loc1_);
						this.setToggle();
						this.setItemToggle();
					}

					private setToggle():any
					{
						var battleDown:Function = <any>null;
						var battleUp:Function = <any>null;
						var battleIntroDown:Function = <any>null;
						var battleIntroUp:Function = <any>null;
						var moneyDown:Function = <any>null;
						var moneyUp:Function = <any>null;
						var expDown:Function = <any>null;
						var expUp:Function = <any>null;
						var itemDown:Function = <any>null;
						var itemUp:Function = <any>null;
						battleDown = function ():any
						{
							iGlobal.Global.battle_toggle = true;
						};
						battleUp = function ():any
						{
							iGlobal.Global.battle_toggle = false;
						};
						battleIntroDown = function ():any
						{
							iGlobal.Global.battleIntro_toggle = true;
						};
						battleIntroUp = function ():any
						{
							iGlobal.Global.battleIntro_toggle = false;
						};
						moneyDown = function ():any
						{
							iGlobal.Global.money_toggle = true;
						};
						moneyUp = function ():any
						{
							iGlobal.Global.money_toggle = false;
						};
						expDown = function ():any
						{
							iGlobal.Global.exp_toggle = true;
						};
						expUp = function ():any
						{
							iGlobal.Global.exp_toggle = false;
						};
						itemDown = function ():any
						{
							iGlobal.Global.item_toggle = true;
						};
						itemUp = function ():any
						{
							iGlobal.Global.item_toggle = false;
						};
						var text:iPanel.iCell.StringCell = new iPanel.iCell.StringCell("日志显示",150,this.fontSize_big);
						this.addChild(text);
						text.x = 5;
						text.y = 10;
						var battle:iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox = new iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox("战况",this.fontSize_small,iGlobal.Global.battle_toggle);
						this.addChild(battle);
						battle.x = 10;
						battle.y = 60;
						battle.downFunction = battleDown;
						battle.upFunction = battleUp;
						var battleIntro:iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox = new iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox("战果",this.fontSize_small,iGlobal.Global.battleIntro_toggle);
						this.addChild(battleIntro);
						battleIntro.x = 70;
						battleIntro.y = 60;
						battleIntro.downFunction = battleIntroDown;
						battleIntro.upFunction = battleIntroUp;
						var money:iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox = new iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox("$",this.fontSize_small,iGlobal.Global.money_toggle);
						this.addChild(money);
						money.x = 140;
						money.y = 60;
						money.downFunction = moneyDown;
						money.upFunction = moneyUp;
						var exp:iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox = new iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox("Exp",this.fontSize_small,iGlobal.Global.exp_toggle);
						this.addChild(exp);
						exp.x = 10;
						exp.y = 90;
						exp.downFunction = expDown;
						exp.upFunction = expUp;
						var item:iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox = new iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox("道具",this.fontSize_small,iGlobal.Global.item_toggle);
						this.addChild(item);
						item.x = 70;
						item.y = 90;
						item.downFunction = itemDown;
						item.upFunction = itemUp;
					}

					private setItemToggle():any
					{
						var item0Down:Function = <any>null;
						var item0Up:Function = <any>null;
						var item1Down:Function = <any>null;
						var item1Up:Function = <any>null;
						var item2Down:Function = <any>null;
						var item2Up:Function = <any>null;
						var item3Down:Function = <any>null;
						var item3Up:Function = <any>null;
						var item4Down:Function = <any>null;
						var item4Up:Function = <any>null;
						var item5Down:Function = <any>null;
						var item5Up:Function = <any>null;
						item0Down = function ():any
						{
							iGlobal.Global.item0_toggle = true;
						};
						item0Up = function ():any
						{
							iGlobal.Global.item0_toggle = false;
						};
						item1Down = function ():any
						{
							iGlobal.Global.item1_toggle = true;
						};
						item1Up = function ():any
						{
							iGlobal.Global.item1_toggle = false;
						};
						item2Down = function ():any
						{
							iGlobal.Global.item2_toggle = true;
						};
						item2Up = function ():any
						{
							iGlobal.Global.item2_toggle = false;
						};
						item3Down = function ():any
						{
							iGlobal.Global.item3_toggle = true;
						};
						item3Up = function ():any
						{
							iGlobal.Global.item3_toggle = false;
						};
						item4Down = function ():any
						{
							iGlobal.Global.item4_toggle = true;
						};
						item4Up = function ():any
						{
							iGlobal.Global.item4_toggle = false;
						};
						item5Down = function ():any
						{
							iGlobal.Global.item5_toggle = true;
						};
						item5Up = function ():any
						{
							iGlobal.Global.item5_toggle = false;
						};
						var text:iPanel.iCell.StringCell = new iPanel.iCell.StringCell("道具拾取",150,this.fontSize_big);
						this.addChild(text);
						text.x = 5;
						text.y = this.lootStartY;
						var item0:iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox = new iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox("基础",this.fontSize_small,iGlobal.Global.item0_toggle);
						this.addChild(item0);
						item0.x = this.lootStartX;
						item0.y = this.lootStartY + this.lootGapMidY * 1;
						item0.downFunction = item0Down;
						item0.upFunction = item0Up;
						var item1:iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox = new iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox("<font color=\'" + iData.iItem.Equipment.GREEN + "\'>精品</font>",this.fontSize_small,iGlobal.Global.item1_toggle);
						this.addChild(item1);
						item1.x = this.lootStartX + this.lootGapX * 1;
						item1.y = this.lootStartY + this.lootGapMidY * 1;
						item1.downFunction = item1Down;
						item1.upFunction = item1Up;
						var item2:iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox = new iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox("<font color=\'" + iData.iItem.Equipment.BLUE + "\'>稀有</font>",this.fontSize_small,iGlobal.Global.item2_toggle);
						this.addChild(item2);
						item2.x = this.lootStartX + this.lootGapX * 2;
						item2.y = this.lootStartY + this.lootGapMidY * 1;
						item2.downFunction = item2Down;
						item2.upFunction = item2Up;
						var item3:iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox = new iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox("<font color=\'" + iData.iItem.Equipment.YELLOW + "\'>完美</font>",this.fontSize_small,iGlobal.Global.item3_toggle);
						this.addChild(item3);
						item3.x = this.lootStartX + this.lootGapX * 0;
						item3.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapY * 1;
						item3.downFunction = item3Down;
						item3.upFunction = item3Up;
						var item4:iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox = new iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox("<font color=\'" + iData.iItem.Equipment.ORANGE + "\'>史诗</font>",this.fontSize_small,iGlobal.Global.item4_toggle);
						this.addChild(item4);
						item4.x = this.lootStartX + this.lootGapX * 1;
						item4.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapY * 1;
						item4.downFunction = item4Down;
						item4.upFunction = item4Up;
						var item5:iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox = new iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox("<font color=\'" + iData.iItem.Equipment.PURPLE + "\'>传奇</font>",this.fontSize_small,iGlobal.Global.item5_toggle);
						this.addChild(item5);
						item5.x = this.lootStartX + this.lootGapX * 2;
						item5.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapY * 1;
						item5.downFunction = item5Down;
						item5.upFunction = item5Up;
						this.setWeaponToggle();
						this.setOffhand();
						this.setHead();
						this.setBody();
						this.setFeet();
						this.setAccessory();
					}

					private setWeaponToggle():any
					{
						var swordDown:Function = <any>null;
						var swordUp:Function = <any>null;
						var axeDown:Function = <any>null;
						var axeUp:Function = <any>null;
						var bowDown:Function = <any>null;
						var bowUp:Function = <any>null;
						var crossbowDown:Function = <any>null;
						var crossbowUp:Function = <any>null;
						var sceptreDown:Function = <any>null;
						var sceptreUp:Function = <any>null;
						var staffDown:Function = <any>null;
						var staffUp:Function = <any>null;
						swordDown = function ():any
						{
							iGlobal.Global.sword_toggle = true;
						};
						swordUp = function ():any
						{
							iGlobal.Global.sword_toggle = false;
						};
						axeDown = function ():any
						{
							iGlobal.Global.axe_toggle = true;
						};
						axeUp = function ():any
						{
							iGlobal.Global.axe_toggle = false;
						};
						bowDown = function ():any
						{
							iGlobal.Global.bow_toggle = true;
						};
						bowUp = function ():any
						{
							iGlobal.Global.bow_toggle = false;
						};
						crossbowDown = function ():any
						{
							iGlobal.Global.crossbow_toggle = true;
						};
						crossbowUp = function ():any
						{
							iGlobal.Global.crossbow_toggle = false;
						};
						sceptreDown = function ():any
						{
							iGlobal.Global.sceptre_toggle = true;
						};
						sceptreUp = function ():any
						{
							iGlobal.Global.sceptre_toggle = false;
						};
						staffDown = function ():any
						{
							iGlobal.Global.staff_toggle = true;
						};
						staffUp = function ():any
						{
							iGlobal.Global.staff_toggle = false;
						};
						var text:iPanel.iCell.StringCell = new iPanel.iCell.StringCell("武器拾取",150,20);
						this.addChild(text);
						text.x = this.lootStartX + this.lootGapX * 0;
						text.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 1 + this.lootGapY * 1;
						var sword:iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox = new iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox("剑",this.fontSize_small,iGlobal.Global.sword_toggle);
						this.addChild(sword);
						sword.x = this.lootStartX + this.lootGapX * 0;
						sword.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 1 + this.lootGapY * 2;
						sword.downFunction = swordDown;
						sword.upFunction = swordUp;
						var axe:iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox = new iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox("斧",this.fontSize_small,iGlobal.Global.axe_toggle);
						this.addChild(axe);
						axe.x = this.lootStartX + this.lootGapX * 1;
						axe.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 1 + this.lootGapY * 2;
						axe.downFunction = axeDown;
						axe.upFunction = axeUp;
						var bow:iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox = new iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox("弓",this.fontSize_small,iGlobal.Global.bow_toggle);
						this.addChild(bow);
						bow.x = this.lootStartX + this.lootGapX * 2;
						bow.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 1 + this.lootGapY * 2;
						bow.downFunction = bowDown;
						bow.upFunction = bowUp;
						var crossbow:iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox = new iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox("弩",this.fontSize_small,iGlobal.Global.crossbow_toggle);
						this.addChild(crossbow);
						crossbow.x = this.lootStartX + this.lootGapX * 0;
						crossbow.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 1 + this.lootGapY * 3;
						crossbow.downFunction = crossbowDown;
						crossbow.upFunction = crossbowUp;
						var sceptre:iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox = new iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox("权杖",this.fontSize_small,iGlobal.Global.sceptre_toggle);
						this.addChild(sceptre);
						sceptre.x = this.lootStartX + this.lootGapX * 1;
						sceptre.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 1 + this.lootGapY * 3;
						sceptre.downFunction = sceptreDown;
						sceptre.upFunction = sceptreUp;
						var staff:iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox = new iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox("法杖",this.fontSize_small,iGlobal.Global.staff_toggle);
						this.addChild(staff);
						staff.x = this.lootStartX + this.lootGapX * 2;
						staff.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 1 + this.lootGapY * 3;
						staff.downFunction = staffDown;
						staff.upFunction = staffUp;
					}

					private setOffhand():any
					{
						var daggerDown:Function = <any>null;
						var daggerUp:Function = <any>null;
						var tomeDown:Function = <any>null;
						var tomeUp:Function = <any>null;
						var shieldDown:Function = <any>null;
						var shieldUp:Function = <any>null;
						daggerDown = function ():any
						{
							iGlobal.Global.dagger_toggle = true;
						};
						daggerUp = function ():any
						{
							iGlobal.Global.dagger_toggle = false;
						};
						tomeDown = function ():any
						{
							iGlobal.Global.tome_toggle = true;
						};
						tomeUp = function ():any
						{
							iGlobal.Global.tome_toggle = false;
						};
						shieldDown = function ():any
						{
							iGlobal.Global.shield_toggle = true;
						};
						shieldUp = function ():any
						{
							iGlobal.Global.shield_toggle = false;
						};
						var text:iPanel.iCell.StringCell = new iPanel.iCell.StringCell("副手拾取",150,20);
						this.addChild(text);
						text.x = this.lootStartX + this.lootGapX * 0;
						text.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 2 + this.lootGapY * 3;
						var dagger:iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox = new iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox("匕首",this.fontSize_small,iGlobal.Global.dagger_toggle);
						this.addChild(dagger);
						dagger.x = this.lootStartX + this.lootGapX * 0;
						dagger.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 2 + this.lootGapY * 4;
						dagger.downFunction = daggerDown;
						dagger.upFunction = daggerUp;
						var tome:iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox = new iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox("书",this.fontSize_small,iGlobal.Global.tome_toggle);
						this.addChild(tome);
						tome.x = this.lootStartX + this.lootGapX * 1;
						tome.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 2 + this.lootGapY * 4;
						tome.downFunction = tomeDown;
						tome.upFunction = tomeUp;
						var shield:iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox = new iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox("盾",this.fontSize_small,iGlobal.Global.shield_toggle);
						this.addChild(shield);
						shield.x = this.lootStartX + this.lootGapX * 2;
						shield.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 2 + this.lootGapY * 4;
						shield.downFunction = shieldDown;
						shield.upFunction = shieldUp;
					}

					private setHead():any
					{
						var headLightDown:Function = <any>null;
						var headLightUp:Function = <any>null;
						var headMediumDown:Function = <any>null;
						var headMediumUp:Function = <any>null;
						var headHeavyDown:Function = <any>null;
						var headHeavyUp:Function = <any>null;
						headLightDown = function ():any
						{
							iGlobal.Global.head_light_toggle = true;
						};
						headLightUp = function ():any
						{
							iGlobal.Global.head_light_toggle = false;
						};
						headMediumDown = function ():any
						{
							iGlobal.Global.head_medium_toggle = true;
						};
						headMediumUp = function ():any
						{
							iGlobal.Global.head_medium_toggle = false;
						};
						headHeavyDown = function ():any
						{
							iGlobal.Global.head_heavy_toggle = true;
						};
						headHeavyUp = function ():any
						{
							iGlobal.Global.head_heavy_toggle = false;
						};
						var text:iPanel.iCell.StringCell = new iPanel.iCell.StringCell("头部拾取",150,20);
						this.addChild(text);
						text.x = this.lootStartX + this.lootGapX * 0;
						text.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 3 + this.lootGapY * 4;
						var headLight:iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox = new iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox("轻甲",this.fontSize_small,iGlobal.Global.head_light_toggle);
						this.addChild(headLight);
						headLight.x = this.lootStartX + this.lootGapX * 0;
						headLight.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 3 + this.lootGapY * 5;
						headLight.downFunction = headLightDown;
						headLight.upFunction = headLightUp;
						var headMedium:iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox = new iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox("中甲",this.fontSize_small,iGlobal.Global.head_medium_toggle);
						this.addChild(headMedium);
						headMedium.x = this.lootStartX + this.lootGapX * 1;
						headMedium.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 3 + this.lootGapY * 5;
						headMedium.downFunction = headMediumDown;
						headMedium.upFunction = headMediumUp;
						var headHeavy:iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox = new iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox("重甲",this.fontSize_small,iGlobal.Global.head_heavy_toggle);
						this.addChild(headHeavy);
						headHeavy.x = this.lootStartX + this.lootGapX * 2;
						headHeavy.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 3 + this.lootGapY * 5;
						headHeavy.downFunction = headHeavyDown;
						headHeavy.upFunction = headHeavyUp;
					}

					private setBody():any
					{
						var bodyLightDown:Function = <any>null;
						var bodyLightUp:Function = <any>null;
						var bodyMediumDown:Function = <any>null;
						var bodyMediumUp:Function = <any>null;
						var bodyHeavyDown:Function = <any>null;
						var bodyHeavyUp:Function = <any>null;
						bodyLightDown = function ():any
						{
							iGlobal.Global.body_light_toggle = true;
						};
						bodyLightUp = function ():any
						{
							iGlobal.Global.body_light_toggle = false;
						};
						bodyMediumDown = function ():any
						{
							iGlobal.Global.body_medium_toggle = true;
						};
						bodyMediumUp = function ():any
						{
							iGlobal.Global.body_medium_toggle = false;
						};
						bodyHeavyDown = function ():any
						{
							iGlobal.Global.body_heavy_toggle = true;
						};
						bodyHeavyUp = function ():any
						{
							iGlobal.Global.body_heavy_toggle = false;
						};
						var text:iPanel.iCell.StringCell = new iPanel.iCell.StringCell("身体拾取",150,20);
						this.addChild(text);
						text.x = this.lootStartX + this.lootGapX * 0;
						text.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 4 + this.lootGapY * 5;
						var bodyLight:iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox = new iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox("轻甲",this.fontSize_small,iGlobal.Global.body_light_toggle);
						this.addChild(bodyLight);
						bodyLight.x = this.lootStartX + this.lootGapX * 0;
						bodyLight.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 4 + this.lootGapY * 6;
						bodyLight.downFunction = bodyLightDown;
						bodyLight.upFunction = bodyLightUp;
						var bodyMedium:iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox = new iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox("中甲",this.fontSize_small,iGlobal.Global.body_medium_toggle);
						this.addChild(bodyMedium);
						bodyMedium.x = this.lootStartX + this.lootGapX * 1;
						bodyMedium.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 4 + this.lootGapY * 6;
						bodyMedium.downFunction = bodyMediumDown;
						bodyMedium.upFunction = bodyMediumUp;
						var bodyHeavy:iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox = new iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox("重甲",this.fontSize_small,iGlobal.Global.body_heavy_toggle);
						this.addChild(bodyHeavy);
						bodyHeavy.x = this.lootStartX + this.lootGapX * 2;
						bodyHeavy.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 4 + this.lootGapY * 6;
						bodyHeavy.downFunction = bodyHeavyDown;
						bodyHeavy.upFunction = bodyHeavyUp;
					}

					private setFeet():any
					{
						var feetLightDown:Function = <any>null;
						var feetLightUp:Function = <any>null;
						var feetMediumDown:Function = <any>null;
						var feetMediumUp:Function = <any>null;
						var feetHeavyDown:Function = <any>null;
						var feetHeavyUp:Function = <any>null;
						feetLightDown = function ():any
						{
							iGlobal.Global.feet_light_toggle = true;
						};
						feetLightUp = function ():any
						{
							iGlobal.Global.feet_light_toggle = false;
						};
						feetMediumDown = function ():any
						{
							iGlobal.Global.feet_medium_toggle = true;
						};
						feetMediumUp = function ():any
						{
							iGlobal.Global.feet_medium_toggle = false;
						};
						feetHeavyDown = function ():any
						{
							iGlobal.Global.feet_heavy_toggle = true;
						};
						feetHeavyUp = function ():any
						{
							iGlobal.Global.feet_heavy_toggle = false;
						};
						var text:iPanel.iCell.StringCell = new iPanel.iCell.StringCell("足部拾取",150,20);
						this.addChild(text);
						text.x = this.lootStartX + this.lootGapX * 0;
						text.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 5 + this.lootGapY * 6;
						var feetLight:iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox = new iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox("轻甲",this.fontSize_small,iGlobal.Global.feet_light_toggle);
						this.addChild(feetLight);
						feetLight.x = this.lootStartX + this.lootGapX * 0;
						feetLight.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 5 + this.lootGapY * 7;
						feetLight.downFunction = feetLightDown;
						feetLight.upFunction = feetLightUp;
						var feetMedium:iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox = new iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox("中甲",this.fontSize_small,iGlobal.Global.feet_medium_toggle);
						this.addChild(feetMedium);
						feetMedium.x = this.lootStartX + this.lootGapX * 1;
						feetMedium.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 5 + this.lootGapY * 7;
						feetMedium.downFunction = feetMediumDown;
						feetMedium.upFunction = feetMediumUp;
						var feetHeavy:iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox = new iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox("重甲",this.fontSize_small,iGlobal.Global.feet_heavy_toggle);
						this.addChild(feetHeavy);
						feetHeavy.x = this.lootStartX + this.lootGapX * 2;
						feetHeavy.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 5 + this.lootGapY * 7;
						feetHeavy.downFunction = feetHeavyDown;
						feetHeavy.upFunction = feetHeavyUp;
					}

					private setAccessory():any
					{
						var ringDown:Function = <any>null;
						var ringUp:Function = <any>null;
						var necklaceDown:Function = <any>null;
						var necklaceUp:Function = <any>null;
						ringDown = function ():any
						{
							iGlobal.Global.ring_toggle = true;
						};
						ringUp = function ():any
						{
							iGlobal.Global.ring_toggle = false;
						};
						necklaceDown = function ():any
						{
							iGlobal.Global.necklace_toggle = true;
						};
						necklaceUp = function ():any
						{
							iGlobal.Global.necklace_toggle = false;
						};
						var text:iPanel.iCell.StringCell = new iPanel.iCell.StringCell("饰品拾取",150,20);
						this.addChild(text);
						text.x = this.lootStartX + this.lootGapX * 0;
						text.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 6 + this.lootGapY * 7;
						var ring:iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox = new iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox("戒指",this.fontSize_small,iGlobal.Global.ring_toggle);
						this.addChild(ring);
						ring.x = this.lootStartX + this.lootGapX * 0;
						ring.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 6 + this.lootGapY * 8;
						ring.downFunction = ringDown;
						ring.upFunction = ringUp;
						var necklace:iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox = new iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox("项链",this.fontSize_small,iGlobal.Global.necklace_toggle);
						this.addChild(necklace);
						necklace.x = this.lootStartX + this.lootGapX * 1;
						necklace.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 6 + this.lootGapY * 8;
						necklace.downFunction = necklaceDown;
						necklace.upFunction = necklaceUp;
					}

					private autoSell():any
					{
						var autoSellDown:Function = <any>null;
						var autoSellUp:Function = <any>null;
						autoSellDown = function ():any
						{
							iGlobal.Global.autoSell_toggle = true;
						};
						autoSellUp = function ():any
						{
							iGlobal.Global.autoSell_toggle = false;
						};
						var autoSell:iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox = new iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox("Auto sell lowest value while bag is full",this.fontSize_small,iGlobal.Global.autoSell_toggle);
						this.addChild(autoSell);
						autoSell.x = this.lootStartX + this.lootGapX * 0;
						autoSell.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 7 + this.lootGapY * 8 + 10;
						autoSell.downFunction = autoSellDown;
						autoSell.upFunction = autoSellUp;
					}

				}
			}
		}
	}
// }

// flash.extendsClass("iPanel.iScene.iPanel.iWindow.SystemWindow","iPanel.iScene.iPanel.iWindow.Window")
