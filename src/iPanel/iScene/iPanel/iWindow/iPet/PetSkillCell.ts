module iPanel {
	export module iScene {
		// export module iPanel {
			export module iWindow {
				export module iPet {
					export class PetSkillCell extends iPanel.iCell.ButtonCell {
						private infoWindow:iPanel.iCell.ItemInfoWindow;
						public petSkill:iData.iPet.iPetSkill.PetSkill;
						private SIZE:number = 30;

						public constructor(param1:iData.iPet.iPetSkill.PetSkill)
						{
							super("flash.display.Sprite","flash.display.Sprite");
							this.infoWindow = iGlobal.Global.itemInfoWindow;
							this.petSkill = param1;
							var _loc2_:egret.Sprite = new egret.Sprite();
							_loc2_.graphics.beginFill(0,0);
							_loc2_.graphics.drawCircle(15,15,30);
							_loc2_.graphics.endFill();
							this.addChild(_loc2_);
							var _loc3_:egret.Sprite = <any>new (<any>flash.getDefinitionByName("pSkill_" + tool.MyMath.StringFormChange(this.petSkill.skillData.name.toLowerCase()," ","_")))();
							if(this.petSkill.level)
							{
								_loc3_.filters = [new flash.GlowFilter(16711680,0.66,5,5)];
							}
							this.before.addChild(_loc3_);
							_loc3_.width = this.SIZE;
							_loc3_.height = this.SIZE;
							_loc3_ = new (<any>flash.getDefinitionByName("pSkill_" + tool.MyMath.StringFormChange(this.petSkill.skillData.name.toLowerCase()," ","_")))();
							this.after["transform"].colorTransform = new flash.ColorTransform(0,0,0,1,227,178,10,5);
							this.after.addChild(_loc3_);
							_loc3_.width = this.SIZE;
							_loc3_.height = this.SIZE;
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
							if(_loc2_.y + this.infoWindow.height > iGlobal.Global.stage.stageHeight)
							{
								this.infoWindow.y = this.infoWindow.y - (this.infoWindow.height - 15);
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
							if(this.petSkill)
							{
								iGlobal.Global.setItemInfoWindow(this.getDescription());
							}
						}

						private getDescription():string
						{
							var _loc1_:any = <any>"<p align=\'center\'>" + this.petSkill.getRealName() + "</p>";
							_loc1_ = _loc1_ + this.petSkill.skillData.desFunction(this.petSkill);
							return _loc1_;
						}

					}
				}
			}
		// }
	}
}

// flash.extendsClass("iPanel.iScene.iPanel.iWindow.iPet.PetSkillCell","iPanel.iCell.ButtonCell")
