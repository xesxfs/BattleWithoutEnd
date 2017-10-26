module iPanel {
	export module iCell {
		export class EquipmentCell extends iPanel.iCell.AdvancedCell {
			public equip:iData.iItem.Equipment;
			protected filter_mc:egret.Sprite;
			protected be_mc:egret.Sprite;
			protected af_mc:egret.Sprite;
			protected equipedInfoWindow:iPanel.iCell.ItemInfoWindow;

			public constructor(param1:iData.iItem.Equipment)
			{
				super(200,50);
				this.equip = param1;
				this.init();
			}

			private init()
			{
				this.filter_mc = new egret.Sprite();
				this.filter_mc.graphics.beginFill(16777215);
				this.filter_mc.graphics.drawCircle(15,15,14);
				this.filter_mc.graphics.endFill();
				this.before.addChild(this.filter_mc);
				this.filter_mc.x = 10;
				this.filter_mc.y = 10;
				// if(flash.As3is(this.equip,iData.iItem.Weapon))
				// {
				// 	this.be_mc = new (<any>flash.getDefinitionByName("mc_" + this.equip.type))();
				// }
				// else
				// {
				// 	this.be_mc = new (<any>flash.getDefinitionByName("mc_" + this.equip.position + "_" + this.equip.type))();
				// }
				// this.before.addChild(this.be_mc);
				// this.be_mc.width = 30;
				// this.be_mc.height = 30;
				// this.be_mc.x = 10;
				// this.be_mc.y = 10;
				// if(flash.As3is(this.equip,iData.iItem.Weapon))
				// {
				// 	this.af_mc = new (<any>flash.getDefinitionByName("mc_" + this.equip.type))();
				// }
				// else
				// {
				// 	this.af_mc = new (<any>flash.getDefinitionByName("mc_" + this.equip.position + "_" + this.equip.type))();
				// }
				// this.after.addChild(this.af_mc);
				// this.af_mc.width = 30;
				// this.af_mc.height = 30;
				// this.af_mc.x = 10;
				// this.af_mc.y = 10;
				// this.af_mc["transform"].colorTransform = new flash.ColorTransform(1,1,1,1,255,255,255,0);
				// this.text = iGlobal.Global.getTextField(24);
				// this.text.width = 110;
				// this.text.htmlText = this.equip.getNameHTML();
				// if(this.equip.level)
				// {
				// 	this.text.htmlText = this.text.htmlText + (" +" + this.equip.level);
				// }
				this.addChild(this.text);
				this.text.x = 50;
				this.text.y = 10;
				this.setEquipButton();
				this.setMoneyButton();
				this.setFilter();
				this.infoWindow = new iPanel.iCell.ItemInfoWindow(this.equip.getDescription());
			}

			public update():any
			{
				this.removeInfoWindow();
				this.infoWindow = new iPanel.iCell.ItemInfoWindow(this.equip.getDescription());
				// this.text.htmlText = this.equip.getNameHTML();
				// if(this.equip.level)
				// {
				// 	this.text.htmlText = this.text.htmlText + (" +" + this.equip.level);
				// }
				this.html = this.equip.getNameHTML() + " +" + this.equip.level;
				if(this.buttonDown)
				{
					this.addInfoWindow();
				}
				this.setFilter();
			}

			private setFilter():any
			{
				if(this.equip.level >= 7)
				{
					// this.filter_mc.filters = [new flash.GlowFilter(16711680,0.66,this.equip.level + 3,this.equip.level + 3)];
					// this.af_mc.filters = [new flash.GlowFilter(5066061,0.66,13,13)];
					// this.text.filters = [new flash.GlowFilter(16777215,0.66,5,5)];
				}
			}

			protected setEquipButton()
			{
				var _self__:any = this;
				var equipDown:Function = <any>null;
				equipDown = function ()
				{
					iGlobal.Player.removeItem(_self__.equip);
					iGlobal.Player.equip(_self__.equip);
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
					iGlobal.Player.removeItem(_self__.equip);
					iGlobal.Player.addMoney(_self__.equip.getMoney());
					_self__.dispatchEvent(new tool.MyEvent(tool.MyEvent.Update));
				};
				var moneyButton:iPanel.iCell.EquipButton = new iPanel.iCell.EquipButton("money");
				this.addChild(moneyButton);
				moneyButton.x = 172;
				moneyButton.y = 15;
				moneyButton.downFunction = moneyDown;
			}

			protected addInfoWindow():any
			{
				var _loc1_:string = <any>null;
				var _loc2_:egret.Point = <any>null;
				super.addInfoWindow();
				// if(flash.As3is(this.equip,iData.iItem.Weapon))
				// {
				// 	switch(this.equip.position)
				// 	{
				// 	case iData.iItem.Weapon.ONEHAND :
				// 		_loc1_ = "leftHand";
				// 		break;
				// 	case iData.iItem.Weapon.OFFHAND :
				// 		_loc1_ = "rightHand";
				// 		break;
				// 	case iData.iItem.Weapon.TWOHAND :
				// 		_loc1_ = "leftHand";
				// 	}
				// }
				// else
				// {
				// 	_loc1_ = this.equip.position;
				// }
				// if(iGlobal.Player[_loc1_])
				// {
				// 	this.equipedInfoWindow = new iPanel.iCell.ItemInfoWindow(iGlobal.Player[_loc1_].getDescription());
				// 	this.addChild(this.equipedInfoWindow);
				// 	this.equipedInfoWindow.x = -270;
				// 	this.equipedInfoWindow.y = 0;
				// 	_loc2_ = flash.localToGlobal(this,new egret.Point(0,0));
				// 	if(_loc2_.y + this.equipedInfoWindow.height > iGlobal.Global.stage.stageHeight)
				// 	{
				// 		_loc2_ = flash.globalToLocal(this,new egret.Point(0,iGlobal.Global.stage.stageHeight - this.equipedInfoWindow.height));
				// 		this.equipedInfoWindow.y = _loc2_.y;
				// 	}
				// }
			}

			protected removeInfoWindow():any
			{
				super.removeInfoWindow();
				if(this.equipedInfoWindow)
				{
					this.removeChild(this.equipedInfoWindow);
					this.equipedInfoWindow = null;
				}
			}

		}
	}
}

// flash.extendsClass("iPanel.iCell.EquipmentCell","iPanel.iCell.AdvancedCell")
