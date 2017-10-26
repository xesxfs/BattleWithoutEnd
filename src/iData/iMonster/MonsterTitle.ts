module iData {
	export module iMonster {
		export class MonsterTitle {
			public name: string;
			public statMulList: Array<iData.iMonster.StatMul>;
			public xpMul: number = NaN;
			public goldMul: number = NaN;
			public dropMul: number = NaN;

			public constructor(name: string, statMul: Array<iData.iMonster.StatMul>, xpMul: number, goldMul: number, dropMul: number) {
				this.name = name;
				this.statMulList = statMul;
				this.xpMul = xpMul;
				this.goldMul = goldMul;
				this.dropMul = dropMul;
			}

			public get description(): string {
				var _loc1_: string = "";
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
				if (_loc1_ == "") {
					_loc1_ = "???";
				}
				return _loc1_;
			}

		}
	}
}

