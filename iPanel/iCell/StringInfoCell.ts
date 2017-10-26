module iPanel {
	export module iCell {
		export class StringInfoCell extends egret.Sprite {
			public infoWindow: iPanel.iCell.StringInfoWindow;
			public textField: egret.TextField;
			public info: string;
			private w: number = 0;
			private size: number = 16;

			public constructor(param1: string, param2: string, param3: number = 100) {
				super();
				this.infoWindow = iGlobal.Global.stringInfoWindow;
				this.textField = iGlobal.Global.getTextField(16);
				this.info = param2;
				this.w = param3;
				this.addChild(this.textField);
				this.setText(param1);
				// this.addEventListener(egret.TouchEvent.TOUCH_MOVE,flash.bind(this.onMouseMove,this),null);
				// this.addEventListener(flash.MouseEvent.MOUSE_OVER,flash.bind(this.onMouseOver,this),null);
				// this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,flash.bind(this.onMouseOut,this),null);
				this.touchChildren = false;
			}

			// public onMouseMove(param1:flash.MouseEvent)
			// {
			// 	var _loc2_:egret.Point = flash.localToGlobal(this,new egret.Point(this["mouseX"] + 15,this["mouseY"] + 15));
			// 	this.infoWindow.x = _loc2_.x;
			// 	this.infoWindow.y = _loc2_.y;
			// 	if(this.infoWindow.x + this.infoWindow.width > iGlobal.Global.stage.stageWidth)
			// 	{
			// 		this.infoWindow.x = this.infoWindow.x - this.infoWindow.width - 30;
			// 	}
			// }

			// public onMouseOver(param1:flash.MouseEvent)
			// {
			// 	this.filters = [new flash.GlowFilter(5066061,0.66,13,13)];
			// 	if(this.parent)
			// 	{
			// 		this.parent.addChildAt(this,this.parent.numChildren - 1);
			// 	}
			// 	iGlobal.Global.setStringInfoWindow(this.info);
			// }

			// public onMouseOut(param1:flash.MouseEvent)
			// {
			// 	this.filters = [];
			// 	iGlobal.Global.hideInfoWindow();
			// }

			public setInfo(param1: string): any {
				this.info = param1;
			}

			public setText(param1: string): any {
				var _loc2_: number = 0;
				this.textField.width = this.w + 100;
				this.textField.text = param1;
				this.textField.width = this.textField.textWidth + 6;
				if (this.textField.width > this.w) {
					this.removeChild(this.textField);
					_loc2_ = 1;
					while (_loc2_ < this.size) {
						this.textField = iGlobal.Global.getTextField(this.size - _loc2_);
						this.textField.width = this.w + 100;
						this.textField.text = param1;
						this.textField.width = this.textField.textWidth + 6;
						if (this.textField.width < this.w) {
							break;
						}
						_loc2_++;
					}
					this.addChild(this.textField);
				}
				this.graphics.clear();
				this.graphics.beginFill(16777215, 0.95);
				this.graphics.drawRoundRect(0, 0, this.textField.textWidth + 6, this.textField.textHeight + 2, 3);
				this.graphics.endFill();
			}

		}
	}
}

// flash.extendsClass("iPanel.iCell.StringInfoCell","egret.Sprite")
