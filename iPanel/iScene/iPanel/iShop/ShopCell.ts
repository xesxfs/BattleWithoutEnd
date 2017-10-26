module iPanel {
	export module iScene {

			export module iShop {
				export class ShopCell extends iPanel.iCell.EquipmentCell {
					public moneyButton:iPanel.iCell.EquipButton;
					private m_text:string;

					public constructor(param1:iData.iItem.Equipment)
					{
						super(param1);
						this.downFunction = flash.bind(this.setBefore,this);
						this.updateMoneyButton();
					}

					protected setEquipButton()
					{
					}

					public updateMoneyButton():any
					{
						if(iGlobal.Player.gold > this.equip.getSellMoney())
						{
							this.moneyButton.touchChildren = true;
							this.moneyButton.touchEnabled = true;
							this.m_text = "";
						}
						else
						{
							this.moneyButton.touchChildren = false;
							this.moneyButton.touchEnabled = false;
							this.m_text = "<font color=\'#ff4040\'>Can\'t afford</font>";
						}
					}

					protected setMoneyButton()
					{
						var _self__:any = this;
						var _this:any = undefined;
						var moneyDown:Function = <any>null;
						moneyDown = function ()
						{
							if(iGlobal.Player.addItem(_self__.equip))
							{
								iGlobal.Player.loseMoney(_self__.equip.getSellMoney());
								if(_this.parent)
								{
									_this.parent.removeChild(_this);
								}
							}
							this.setBefore();
						};
						this.moneyButton = new iPanel.iCell.EquipButton("money");
						this.addChild(this.moneyButton);
						this.moneyButton.x = 172;
						this.moneyButton.y = 15;
						this.moneyButton.downFunction = moneyDown;
						_this = this;
					}

					protected addInfoWindow():any
					{
						var _loc3_:string = <any>null;
						this.infoWindow = new iPanel.iCell.ItemInfoWindow(this.equip.getSellDesciption() + this.m_text);
						this.addChild(this.infoWindow);
						this.infoWindow.x = 205;
						var _loc1_:number = flash.checkInt(0);
						var _loc2_:egret.Point = flash.localToGlobal(this,new egret.Point(0,0));
						if(_loc2_.y + this.infoWindow.height > iGlobal.Global.stage.stageHeight)
						{
							_loc2_ = flash.globalToLocal(this,new egret.Point(0,iGlobal.Global.stage.stageHeight - this.infoWindow.height));
							_loc1_ = flash.checkInt(_loc2_.y);
						}
						this.infoWindow.y = _loc1_;
						if(flash.As3is(this.equip,iData.iItem.Weapon))
						{
							switch(this.equip.position)
							{
							case iData.iItem.Weapon.ONEHAND :
								_loc3_ = "leftHand";
								break;
							case iData.iItem.Weapon.OFFHAND :
								_loc3_ = "rightHand";
								break;
							case iData.iItem.Weapon.TWOHAND :
								_loc3_ = "leftHand";
							}
						}
						else
						{
							_loc3_ = this.equip.position;
						}
						if(iGlobal.Player[_loc3_])
						{
							this.equipedInfoWindow = new iPanel.iCell.ItemInfoWindow(iGlobal.Player[_loc3_].getDescription());
							this.addChild(this.equipedInfoWindow);
							this.equipedInfoWindow.x = 340;
							this.equipedInfoWindow.y = _loc1_;
						}
					}

				}
			}
		
	}
}

flash.extendsClass("iPanel.iScene.iPanel.iShop.ShopCell","iPanel.iCell.EquipmentCell")
