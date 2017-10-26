module iPanel {
	export module iScene {
		// export module iPanel {
			export module iWindow {
				export module iPet {
					export class PetCell extends iPanel.iCell.AdvancedCell {
						public pet:iData.iPet.Pet;
						protected be_mc:egret.Sprite;
						protected af_mc:egret.Sprite;

						public constructor(param1:iData.iPet.Pet)
						{
							super(200,50);
							this.pet = param1;
							this.init();
						}

						private init()
						{
							this.be_mc = new (<any>flash.getDefinitionByName("pet_" + this.pet.mc_name))();
							this.before.addChild(this.be_mc);
							this.be_mc.width = 30;
							this.be_mc.height = 30;
							this.be_mc.x = 10;
							this.be_mc.y = 10;
							this.af_mc = new (<any>flash.getDefinitionByName("pet_" + this.pet.mc_name))();
							this.after.addChild(this.af_mc);
							this.af_mc.width = 30;
							this.af_mc.height = 30;
							this.af_mc.x = 10;
							this.af_mc.y = 10;
							this.af_mc["transform"].colorTransform = new flash.ColorTransform(1,1,1,1,255,255,255,0);
							this.text = iGlobal.Global.getTextField(20);
							this.text.width = 120;
							this.text.htmlText = this.pet.realName;
							if(this.pet.level)
							{
								this.text.htmlText = this.text.htmlText + (" Lv." + this.pet.level);
							}
							this.addChild(this.text);
							this.text.x = 50;
							this.text.y = 10;
							this.setEquipButton();
							this.setMoneyButton();
							this.infoWindow = new iPanel.iScene.iPanel.iWindow.iPet.PetInfoWindow(this.pet);
						}

						protected setEquipButton()
						{
							var _self__:any = this;
							var equipDown:Function = <any>null;
							equipDown = function ()
							{
								iGlobal.Player.removePet(_self__.pet);
								iGlobal.Player.setPet(_self__.pet);
								_self__.dispatchEvent(new tool.MyEvent(tool.MyEvent.Update));
							};
							var equipButton:iPanel.iCell.EquipButton = new iPanel.iCell.EquipButton("equip");
							this.addChild(equipButton);
							equipButton.x = 150;
							equipButton.y = 15;
							equipButton.downFunction = equipDown;
						}

						protected setMoneyButton()
						{
							var _self__:any = this;
							var moneyDown:Function = <any>null;
							moneyDown = function ()
							{
								iGlobal.Player.removePet(_self__.pet);
								_self__.dispatchEvent(new tool.MyEvent(tool.MyEvent.Update));
							};
							var moneyButton:iPanel.iCell.EquipButton = new iPanel.iCell.EquipButton("money");
							this.addChild(moneyButton);
							moneyButton.x = 172;
							moneyButton.y = 15;
							moneyButton.downFunction = moneyDown;
						}

						public update():any
						{
							this.infoWindow.draw(0,0);
							this.text.htmlText = this.pet.realName;
							if(this.pet.level)
							{
								this.text.htmlText = this.text.htmlText + (" Lv." + this.pet.level);
							}
						}

					}
				}
			// }
		}
	}
}

// flash.extendsClass("iPanel.iScene.iPanel.iWindow.iPet.PetCell","iPanel.iCell.AdvancedCell")
