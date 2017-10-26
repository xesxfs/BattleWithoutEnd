module iPanel {
	export module iCell {
		export class StringCell extends iPanel.iCell.BasicCell {
			private size: number = 0;
			public w: number = 0;
			public textField: egret.TextField;

			public constructor(param1: string, param2: number = 100, param3: number = 16) {
				super(0, 0);
				this.size = param3;
				this.w = param2;
				this.textField = iGlobal.Global.getTextField(param3);
				this.addChild(this.textField);
				this.setText(param1);
				this.touchChildren = false;
				this.touchEnabled = false;
			}

			public setText(param1: string): any {
				var _loc2_: number = 0;
				this.graphics.clear();
				if (this.contains(this.textField)) {
					this.removeChild(this.textField);
				}
				this.textField = iGlobal.Global.getTextField(this.size);
				this.addChild(this.textField);
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
			}

		}
	}
}

// flash.extendsClass("iPanel.iCell.StringCell","iPanel.iCell.BasicCell")
