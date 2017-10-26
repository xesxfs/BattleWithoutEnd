module iPanel {
	export module iCell {
		export class StringInfoWindow extends iPanel.iCell.InfoWindow {
			private textField: egret.TextField;

			public constructor() {
				super(0, 0);
				this.textField = iGlobal.Global.getTextField(20);
				// this.textField.textAlign = egret.TextFieldAutoSize.LEFT;
				this.textField.multiline = true;
				this.addChild(this.textField);
				this.touchChildren = false;
				this.touchEnabled = false;
			}

			public setText(param1: string): any {
				var _loc3_: number = 0;
				var _loc4_: number = 0;
				this.graphics.clear();
				this.textField.text = param1;
				this.textField.width = 300;
				var _loc2_: number = (this.textField.textWidth);
				if (_loc2_ < 200) {
					_loc3_ = (_loc2_ + 4);
					_loc4_ = (this.textField.textHeight + 2);
					this.textField.width = _loc3_ + 2;
				}
				else {
					this.textField.width = 200;
					_loc3_ = (204);
					_loc4_ = (this.textField.height + 2);
				}
				super.draw(_loc3_, _loc4_);
			}

		}
	}
}

// flash.extendsClass("iPanel.iCell.StringInfoWindow","iPanel.iCell.InfoWindow")
