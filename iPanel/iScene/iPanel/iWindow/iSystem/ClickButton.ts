module iPanel {
	export module iScene {
		// export module iPanel {
			export module iWindow {
				export module iSystem {
					export class ClickButton extends iPanel.iCell.ButtonCell {
						private FIX:number = 20;

						public constructor(param1:string,param2:number)
						{
							super("flash.display.Sprite","flash.display.Sprite");
							param2 = flash.checkInt(param2);
							this.FIX = flash.checkInt(param2);
							var _loc3_:egret.Sprite = <any>new doubleCircle();
							_loc3_.width = this.FIX;
							_loc3_.height = this.FIX;
							_loc3_["transform"].colorTransform = new flash.ColorTransform(1,1,1,1,255,255,255,0);
							this.before.addChild(_loc3_);
							var _loc4_:egret.Sprite = <any>new (<any>flash.getDefinitionByName(param1))();
							this.before.addChild(_loc4_);
							this.setMcPosition(_loc4_);
							var _loc5_:egret.Sprite = <any>new doubleCircle();
							_loc5_.width = this.FIX;
							_loc5_.height = this.FIX;
							this.after.addChild(_loc5_);
							var _loc6_:egret.Sprite = <any>new (<any>flash.getDefinitionByName(param1))();
							_loc6_["transform"].colorTransform = new flash.ColorTransform(1,1,1,1,255,255,255,0);
							this.after.addChild(_loc6_);
							this.setMcPosition(_loc6_);
						}

						private setMcPosition(param1:egret.Sprite):any
						{
							var _loc2_:number = <any>NaN;
							if(param1.width > param1.height)
							{
								_loc2_ = this.FIX / 2 / param1.width;
							}
							else
							{
								_loc2_ = this.FIX / 2 / param1.height;
							}
							param1.scaleX = _loc2_;
							param1.scaleY = _loc2_;
							param1.x = this.FIX / 2 - param1.width / 2;
							param1.y = this.FIX / 2 - param1.height / 2;
						}

						public setDown()
						{
							super.setDown();
							this.setBefore();
						}

					}
				}
			}
		}
	// }
}

// flash.extendsClass("iPanel.iScene.iPanel.iWindow.iSystem.ClickButton","iPanel.iCell.ButtonCell")
