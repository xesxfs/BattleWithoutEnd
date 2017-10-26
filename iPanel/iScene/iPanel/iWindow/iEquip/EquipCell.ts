module iPanel {
	export module iScene {

			export module iWindow {
				export module iEquip {
					export class EquipCell extends iPanel.iCell.ButtonCell {
						private infoWindow:iPanel.iCell.ItemInfoWindow;
						public equip:iData.iItem.Equipment;
						public position:string;
						private SIZE:number = 80;

						public constructor(param1:iData.iItem.Equipment = null,param2:string = "")
						{
							super("flash.display.Sprite","flash.display.Sprite");
							var _loc4_:egret.Sprite = <any>null;
							this.infoWindow = iGlobal.Global.itemInfoWindow;
							this.position = param2;
							this.equip = param1;
							var _loc3_:egret.Sprite = new egret.Sprite();
							_loc3_.graphics.beginFill(16777215);
							_loc3_.graphics.drawCircle(40,40,39);
							_loc3_.graphics.endFill();
							this.before.addChild(_loc3_);
							if(param1 == null)
							{
								_loc4_ = new mc_mode();
							}
							else
							{
								if(flash.As3is(this.equip,iData.iItem.Weapon))
								{
									_loc4_ = new (<any>flash.getDefinitionByName("mc_" + this.equip.type))();
								}
								else
								{
									_loc4_ = new (<any>flash.getDefinitionByName("mc_" + this.equip.position + "_" + this.equip.type))();
								}
								_loc4_["transform"].colorTransform = new flash.ColorTransform(0,0,0,1,this.equip.getColorInHex() >> 16,this.equip.getColorInHex() >> 8 & 255,this.equip.getColorInHex() & 255);
								if(this.equip.level >= 7)
								{
									_loc3_.filters = [new flash.GlowFilter(16711680,0.66,this.equip.level + 3,this.equip.level + 3)];
								}
							}
							this.before.addChild(_loc4_);
							_loc4_.width = this.SIZE;
							_loc4_.height = this.SIZE;
							if(param1 == null)
							{
								_loc4_ = new mc_mode();
							}
							else
							{
								if(flash.As3is(this.equip,iData.iItem.Weapon))
								{
									_loc4_ = new (<any>flash.getDefinitionByName("mc_" + this.equip.type))();
								}
								else
								{
									_loc4_ = new (<any>flash.getDefinitionByName("mc_" + this.equip.position + "_" + this.equip.type))();
								}
								this.after["transform"].colorTransform = new flash.ColorTransform(0,0,0,1,227,178,10,5);
							}
							this.after.addChild(_loc4_);
							_loc4_.width = this.SIZE;
							_loc4_.height = this.SIZE;
							this.downFunction = flash.bind(this.setBefore,this);
							this.addEventListener(egret.TouchEvent.TOUCH_MOVE,flash.bind(this.onMouseMove,this),null);
						}

						public onMouseMove(param1:flash.MouseEvent)
						{
							var _loc2_:egret.Point = flash.localToGlobal(this,new egret.Point(this["mouseX"] + 15,this["mouseY"] + 15));
							this.infoWindow.x = _loc2_.x;
							this.infoWindow.y = _loc2_.y;
							if(_loc2_.x + 135 > iGlobal.Global.stage.stageWidth)
							{
								this.infoWindow.x = this.infoWindow.x - 135;
							}
						}

						public setBefore()
						{
							super.setBefore();
							iGlobal.Global.hideItemInfoWindow();
						}

						public setAfter()
						{
							super.setAfter();
							if(this.equip)
							{
								iGlobal.Global.setItemInfoWindow(this.equip.getDescription());
							}
						}

					}
				
			}
		}
	}
}

flash.extendsClass("iPanel.iScene.iPanel.iWindow.iEquip.EquipCell","iPanel.iCell.ButtonCell")
