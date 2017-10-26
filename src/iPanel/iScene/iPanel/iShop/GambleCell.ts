module iPanel {
	export module iScene {
	
			export module iShop {
				export class GambleCell extends iPanel.iCell.EquipmentCell {
					public moneyButton:iPanel.iCell.EquipButton;
					public money:number = 0;
					private m_text:string;

					public constructor(param1:iData.iItem.Equipment)
					{
						super(param1);
						this.money = flash.checkInt(10000 + Math.random() * 100000 * (1 + iGlobal.Player.combatPower / 700));
						this.text.text = this.equip.realName + "?";
						this.downFunction = flash.bind(this.setBefore,this);
						this.updateMoneyButton();
					}

					protected setEquipButton()
					{
					}

					public updateMoneyButton():any
					{
						if(iGlobal.Player.gold > this.money)
						{
							this.moneyButton.touchChildren = true;
							this.moneyButton.touchEnabled = true;
							this.m_text = "<p align=\'right\'>$ " + this.money + "</p>";
						}
						else
						{
							this.moneyButton.touchChildren = false;
							this.moneyButton.touchEnabled = false;
							this.m_text = "<p align=\'right\'><font color=\'#ff4040\'>$ " + this.money + "</font></p>";
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
								iGlobal.Player.loseMoney(_self__.money);
								if(_this.parent)
								{
									_this.parent.removeChild(_this);
								}
								iGlobal.Player.save();
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
						this.infoWindow = new iPanel.iCell.ItemInfoWindow("<p align=\'center\'>???</p>" + this.m_text);
						this.addChild(this.infoWindow);
						this.infoWindow.x = -135;
						var _loc1_:number = flash.checkInt(0);
						var _loc2_:egret.Point = flash.localToGlobal(this,new egret.Point(0,0));
						if(_loc2_.y + this.infoWindow.height > iGlobal.Global.stage.stageHeight)
						{
							_loc2_ = flash.globalToLocal(this,new egret.Point(0,iGlobal.Global.stage.stageHeight - this.infoWindow.height));
							_loc1_ = flash.checkInt(_loc2_.y);
						}
						this.infoWindow.y = _loc1_;
					}

				}
			
		}
	}
}

flash.extendsClass("iPanel.iScene.iPanel.iShop.GambleCell","iPanel.iCell.EquipmentCell")
