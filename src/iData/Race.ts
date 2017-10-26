module iData {
	export class Race {
		/*种族名字*/
		public name: string;
		/*最初属性*/
		public initial: iData.BasicStatus;
		/*年龄属性列表*/
		public ageupList: Array<iData.BasicStatus>;

		public constructor(name: string, initial: iData.BasicStatus, ageupList: Array<iData.BasicStatus>) {

			this.name = name;
			this.initial = initial;
			this.ageupList = ageupList;
		}

		/*通过年龄计算属性值*/
		public caculateStat(age: number): iData.BasicStatus {
			var _loc2_: iData.BasicStatus = this.initial.clone();
			var _loc3_: number = age - 25;
			if (age > 25) {
				age = 25;
			}
			var _loc4_: number = 10;
			while (_loc4_ < age) {
				_loc2_.hp = _loc2_.hp + (this.ageupList[_loc4_ - 10].hp + 1);
				_loc2_.mp = _loc2_.mp + (this.ageupList[_loc4_ - 10].mp + 1);
				_loc2_.str = _loc2_.str + this.ageupList[_loc4_ - 10].str;
				_loc2_.dex = _loc2_.dex + this.ageupList[_loc4_ - 10].dex;
				_loc2_.will = _loc2_.will + this.ageupList[_loc4_ - 10].will;
				_loc2_.intelligence = _loc2_.intelligence + this.ageupList[_loc4_ - 10].intelligence;
				_loc2_.luck = _loc2_.luck + this.ageupList[_loc4_ - 10].luck;
				_loc4_++;
			}
			/*25岁后只加hp和mp*/
			if (age == 25) {
				_loc2_.hp = _loc2_.hp + _loc3_;
				_loc2_.mp = _loc2_.mp + _loc3_;
			}
			return _loc2_;
		}

	}
}

