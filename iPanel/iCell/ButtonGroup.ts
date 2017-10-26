module iPanel {
	export module iCell {
		export class ButtonGroup {
			private buttonList: Array<iPanel.iCell.ButtonCell>;

			public constructor() {

				this.buttonList = new Array<iPanel.iCell.ButtonCell>();
			}

			public addButton(param1: iPanel.iCell.ButtonCell): boolean {
				var _loc2_: number = this.buttonList.length;
				var _loc3_: number = 0;
				while (_loc3_ < _loc2_) {
					if (this.buttonList[_loc3_] == param1) {
						return false;
					}
					_loc3_++;
				}
				this.buttonList.push(param1);
				param1.buttonGroup = this;
				return true;
			}

			public setDown(param1: iPanel.iCell.ButtonCell) {
				var _loc2_: number = this.buttonList.length;
				var _loc3_: number = 0;
				while (_loc3_ < _loc2_) {
					if (this.buttonList[_loc3_] == param1) {
						param1.setDown();
					}
					else {
						this.buttonList[_loc3_].setBefore();
					}
					_loc3_++;
				}
			}

		}
	}
}

