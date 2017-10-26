module iData {
	export module iPlayer {
		export class Title {
			public name: string;
			public realName: string;
			public statMulList: Array<iData.iMonster.StatMul>;
			public maxFix: number = 0;
			public countFix: number = 0;
			public max: number = 0;
			public count: number = 0;
			public description: string;
			public behaveFunction: Function;
			public isGot: boolean = false;

			public constructor(name: string, realName: string, description: string, statMulList: Array<iData.iMonster.StatMul>, maxFix: number = 0, countFix: number = 0, behaveFunction: Function = null) {

				this.name = name;
				this.realName = realName;
				this.description = description;
				this.statMulList = statMulList;
				this.maxFix = maxFix;
				this.countFix = countFix;
				this.behaveFunction = behaveFunction;
			}

			public setGot(): any {
				if (<any>!this.isGot) {
					this.isGot = true;
					if (iPanel.iScene.MainScene.allInfoPanel) {
						iPanel.iScene.MainScene.allInfoPanel.addText("<font color=\'" + iData.iItem.Equipment.ORANGE + "\'>You get Title &lt;" + this.name + "&gt; </font>");
					}
					if (this.behaveFunction) {
						this.behaveFunction();
					}
					if (iPanel.iScene.MainScene.otherPanel) {
						if (iPanel.iScene.MainScene.otherPanel.titleWindow) {
							iPanel.iScene.MainScene.otherPanel.titleWindow.update();
						}
					}
				}
			}

			public updateInfo(max: number = 0, count: number = 0): any {
				if (max > this.max) {
					this.max = max;
				}
				if (count < 0) {
					this.count = 0;
				}
				else {
					this.count = this.count + count;
				}
				if (this.isGot) {
					return;
				}
				if (this.count >= this.countFix && this.max >= this.maxFix) {
					this.setGot();
				}
			}

			public getDescription(): string {
				var _loc1_: any = <any>"";
				_loc1_ = _loc1_ + ("<p align=\'center\'>" + this.description + "</p>");
				_loc1_ = _loc1_ + "--------------<br/>";
				if (this.maxFix != 0) {
					_loc1_ = _loc1_ + ("记录:" + this.max + "<br/>");
					_loc1_ = _loc1_ + "--------------<br/>";
				}
				if (this.countFix != 0) {
					_loc1_ = _loc1_ + ("记录:" + this.count + "<br/>");
					_loc1_ = _loc1_ + "--------------<br/>";
				}
				var _loc2_: number = this.statMulList.length;
				var _loc3_: number = 0;
				while (_loc3_ < _loc2_) {
					if (this.statMulList[_loc3_].add > 0) {
						_loc1_ = _loc1_ + ("<font size=\'20\' color=\'" + iData.iItem.Equipment.GREEN + "\'>  " + tool.MyMath.FirstLetterToUpper(this.statMulList[_loc3_].statTranslate()) + " +" + this.statMulList[_loc3_].add + "</font><br/>");
					}
					else if (this.statMulList[_loc3_].add < 0) {
						_loc1_ = _loc1_ + ("<font size=\'20\' color=\'#ff4040\'>  " + tool.MyMath.FirstLetterToUpper(this.statMulList[_loc3_].statTranslate()) + " " + this.statMulList[_loc3_].add + "</font><br/>");
					}
					if (this.statMulList[_loc3_].mul > 1) {
						_loc1_ = _loc1_ + ("<font size=\'20\' color=\'" + iData.iItem.Equipment.GREEN + "\'>  " + tool.MyMath.FirstLetterToUpper(this.statMulList[_loc3_].statTranslate()) + " x" + this.statMulList[_loc3_].mul + "</font><br/>");
					}
					else if (this.statMulList[_loc3_].mul < 1) {
						_loc1_ = _loc1_ + ("<font size=\'20\' color=\'#ff4040\'>  " + tool.MyMath.FirstLetterToUpper(this.statMulList[_loc3_].statTranslate()) + " x" + this.statMulList[_loc3_].mul + "</font><br/>");
					}
					_loc3_++;
				}
				return _loc1_;
			}

			public save(): string {
				var _loc1_: any = <any>"";
				_loc1_ = _loc1_ + (this.max + "#" + this.count + "#");
				if (this.isGot) {
					_loc1_ = _loc1_ + "1";
				}
				else {
					_loc1_ = _loc1_ + "0";
				}
				return _loc1_;
			}

			public load(loadStr: string): any {
				var _loc2_: Array<any> = loadStr.split("#");
				this.max = _loc2_[0];
				this.count = _loc2_[1];
				if (_loc2_[2] == 0) {
					this.isGot = false;
				}
				else {
					this.isGot = true;
				}
			}

		}
	}
}

