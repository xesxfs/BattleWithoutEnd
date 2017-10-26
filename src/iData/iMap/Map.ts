module iData {
	export module iMap {
		export class Map {
			public mapData: iData.iMap.MapData;
			public averageCp: number = 0;

			public constructor(mapData: iData.iMap.MapData) {

				this.mapData = mapData;
				this.setAverageCp();
			}
			/**平均战力 */
			public setAverageCp() {
				var _loc3_: number = 0;
				var _loc1_: number = 0;
				var _loc2_: number = this.mapData.monsterList.length;
				while (_loc3_ < _loc2_) {
					_loc1_ = _loc1_ + this.mapData.monsterList[_loc3_].CP;
					_loc3_++;
				}
				this.averageCp = _loc1_ / _loc2_;
			}

			/**获得一个Boss */
			public getBoss(): iData.iMonster.Boss {
				//在当前地图，怪物列表随机一个怪物，生成本地图的Boss
				var _loc1_: iData.iMonster.Boss = new iData.iMonster.Boss(this.mapData.monsterList[Math.random() * this.mapData.monsterList.length >> 0]);
				return _loc1_;
			}

		}
	}
}

