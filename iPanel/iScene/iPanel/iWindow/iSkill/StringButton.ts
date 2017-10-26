module iPanel {
	// export module iScene {
		export module iPanel {
			export module iWindow {
				export module iSkill {
					export class StringButton extends iPanel.iCell.ButtonCell {
						private bg:egret.Sprite;
						private text:string;
						private color:number = 0;

						public constructor(param1:string,param2:number)
						{
							super("flash.display.Sprite","flash.display.Sprite");
							param2 = flash.checkUint(param2);
							this.bg = new iPanel.iCell.BasicCell(66,25);
							this.addChild(this.bg);
							this.text = param1;
							this.color = flash.checkUint(param2);
							this.init();
						}

						private init():any
						{
							var _loc1_:flash.TextField = iGlobal.Global.getTextField(18);
							_loc1_.htmlText = "<p align=\'center\'>" + this.text + "</p>";
							_loc1_.width = 60;
							this.before.addChild(_loc1_);
							_loc1_.x = 2;
							_loc1_.y = 2;
							var _loc2_:flash.TextField = iGlobal.Global.getTextField(18);
							_loc2_.htmlText = "<p align=\'center\'>" + this.text + "</p>";
							_loc2_.width = 60;
							this.after.addChild(_loc2_);
							_loc2_.x = 2;
							_loc2_.y = 2;
							_loc2_.textColor = flash.checkUint(this.color);
						}

						public setBefore()
						{
							super.setBefore();
							this.filters = [];
						}

						public setDown()
						{
							super.setDown();
							this.filters = [new flash.GlowFilter(5066061,0.66,13,13)];
							if(this.parent)
							{
								this.parent.addChildAt(this,this.parent.numChildren - 1);
							}
						}

					}
				}
			}
		}
	}
// }

// flash.extendsClass("iPanel.iScene.iPanel.iWindow.iSkill.StringButton","iPanel.iCell.ButtonCell")
