module iData {
	export module iItem {
		/**装备 */
		export class Equipment {
			/**装备部位 */
			public static HEAD: string;
			public static BODY: string;
			public static FEET: string;
			public static NECKLACE: string;
			public static RING: string;
			/**装备颜色 */
			public static GREEN: string;
			public static BLUE: string;
			public static YELLOW: string;
			public static ORANGE: string;
			public static PURPLE: string;
			public static GREEN_H: number;
			public static BLUE_H: number;
			public static YELLOW_H: number;
			public static ORANGE_H: number;
			public static GRAY_H: number;
			public static PURPLE_H: number;

			public sortWeight: number = 0;
			public position: string;
			public type: string;
			public name: string;
			public realName: string;
			public level: number = 0;
			public quality: number = 0;

			/**基础属性 */
			public basicStat: Array<iData.iItem.Stat>;
			/**基础品质 */
			public qualityStat: Array<iData.iItem.Stat>;
			/**等级属性 */
			public levelStat: Array<iData.iItem.Stat>;
			/**几率 */
			private ratio: number = 0;
			private isBoss: boolean = false;


			public constructor(equipmentData: iData.iItem.EquipmentData, ratio: number, isBoos: boolean = false) {

				this.ratio = (ratio * 100 >> 0) / 100;
				if (this.ratio > 65) {
					this.ratio = 65;
				}
				this.level = 0;
				this.levelStat = new Array<iData.iItem.Stat>();
				this.isBoss = isBoos;
				this.setData(equipmentData);
				this.generateBasicStat(equipmentData.stat, this.ratio);
				this.generateQuality(this.ratio);
			}
			/**加载装备信息 */
			public static load(param1: string): iData.iItem.Equipment {
				var _loc3_: iData.iItem.Equipment = <any>null;
				var _loc4_: number = 0;
				var _loc6_: Array<any> = <any>null;
				var _loc2_: Array<any> = param1.split("#");
				_loc4_ = 0;
				while (_loc4_ < iData.iItem.EquipmentList.list.length) {
					if (iData.iItem.EquipmentList.list[_loc4_].name == _loc2_[0]) {
						//这里
						if (iData.iItem.EquipmentList.list[_loc4_] instanceof iData.iItem.WeaponData) {
							//这里
							var loc4 = iData.iItem.EquipmentList.list[_loc4_] as iData.iItem.WeaponData
							_loc3_ = new iData.iItem.Weapon(loc4, _loc2_[2]);
						}
						else {
							_loc3_ = new iData.iItem.Equipment(iData.iItem.EquipmentList.list[_loc4_], _loc2_[2]);
						}
						break;
					}
					_loc4_++;
				}
				_loc3_.quality = _loc2_[3];
				_loc3_.basicStat = new Array<iData.iItem.Stat>();
				var _loc5_: Array<any> = (<string>_loc2_[4]).split("%");
				_loc4_ = 0;
				while (_loc4_ < _loc5_.length) {
					if (_loc5_[_loc4_] != "") {
						_loc3_.basicStat.push(iData.iItem.Stat.load(_loc5_[_loc4_]));
					}
					_loc4_++;
				}
				_loc3_.qualityStat = new Array<iData.iItem.Stat>();
				if (_loc3_.quality > 0) {
					_loc6_ = (<string>_loc2_[5]).split("%");
					_loc4_ = 0;
					while (_loc4_ < _loc6_.length) {
						if (_loc6_[_loc4_] != "") {
							_loc3_.qualityStat.push(iData.iItem.Stat.load(_loc6_[_loc4_]));
						}
						_loc4_++;
					}
				}
				_loc3_.setLevel(_loc2_[1]);
				return _loc3_;
			}

			protected setData(equipmentData: iData.iItem.EquipmentData): any {
				this.position = equipmentData.position;
				this.type = equipmentData.type;
				this.name = equipmentData.name;
				this.realName = equipmentData.realName;
				this.sortWeight = equipmentData.sortWeight;
			}
			/**生成基本属性 */
			private generateBasicStat(rangeStat: Array<iData.iItem.RangeStat>, ratio: number): any {
				this.basicStat = new Array<iData.iItem.Stat>();
				var leng: number = rangeStat.length;
				var i: number = 0;
				while (i < leng) {
					this.basicStat.push(iData.iItem.Stat.generate(rangeStat[i], ratio));
					i++;
				}
				if (this.basicStat.length > 0) {
					if (this.basicStat[0].name == iData.iItem.Stat.attackMin) {
						if (this.basicStat[0].value > this.basicStat[1].value) {
							this.basicStat[0] = new iData.iItem.Stat(iData.iItem.Stat.attackMin, this.basicStat[1].value);
						}
					}
				}
			}
			/**生成品质 */
			private generateQuality(ratio: number): any {
				var _loc2_: number = 10 + ratio * 10;
				if (iGlobal.Player.basicStatus) {
					_loc2_ = _loc2_ - iGlobal.Player.combatPower / 30;
				}
				if (_loc2_ > 70) {
					_loc2_ = 70;
				}
				if (_loc2_ < 20) {
					_loc2_ = 20;
				}
				this.quality = tool.MyMath.balanceRandom(_loc2_) * 5.1;
				if (this.isBoss) {
					this.quality = tool.MyMath.balanceRandom(80) * 5.5;
				}
				this.generateQualityStat(ratio);
			}
			/**生成品质属性 */
			private generateQualityStat(ratio: number): any {
				var _loc3_: number = 0;
				var _loc4_: iData.iItem.Stat = <any>null;
				var _loc5_: number = 0;
				var _loc6_: iData.iItem.Stat = <any>null;
				this.qualityStat = new Array<iData.iItem.Stat>();
				var _loc2_: number = 0;
				while (_loc2_ < this.quality) {
					_loc3_ = (iData.iItem.StatList.list.length - 1) * Math.random();
					if (this.type == iData.iItem.EquipType.ACCESORY) {
						_loc3_ = (iData.iItem.StatList.list.length - 2) * Math.random();
					}
					if (this instanceof iData.iItem.Weapon) {
						_loc3_ = iData.iItem.StatList.list.length * Math.random();
					}
					_loc4_ = iData.iItem.StatList.list[_loc3_];
					_loc5_ = _loc4_.value * Math.random() * Math.random() * ratio;
					if (this.quality == 5) {
						_loc5_ = _loc4_.value * (Math.random() * Math.random() * 0.85 + 0.15) * ratio;
					}
					_loc5_++;
					_loc6_ = new iData.iItem.Stat(_loc4_.name, _loc5_);
					this.qualityStat.push(_loc6_);
					_loc2_++;
				}
			}
			/**设置等级 */
			public setLevel(level: number) {
				// level = level;
				this.level = level;
				if (level < 0) {
					this.level = 0;
					return;
				}
				if (level > 15) {
					this.level = 15;
				}
				this.generateLevelStat();
			}

			public levelup() {
				this.level++;
				this.generateLevelStat();
			}

			public canLevelup(): boolean {
				if (iGlobal.Player.gold > this.getMoney() && this.level < 15) {
					return true;
				}
				return false;
			}
			/**生成等级属性 */
			private generateLevelStat() {
				var _loc1_: Array<iData.iItem.Stat> = <any>null;
				var _loc2_: number = 0;
				this.levelStat = new Array<iData.iItem.Stat>();
				if (this.level == 0) {
					return;
				}
				if (this.type != iData.iItem.EquipType.ACCESORY) {
					if (this instanceof iData.iItem.Weapon) {
						_loc1_ = iData.iItem.WeaponType[this.type.toUpperCase() + "_BASE"];
					}
					else {
						_loc1_ = iData.iItem.EquipType[this.type.toUpperCase() + "_BASE"];
					}
					_loc2_ = 0;
					while (_loc2_ < _loc1_.length) {
						if (this instanceof iData.iItem.Weapon) {
							this.levelStat.push(new iData.iItem.Stat(_loc1_[_loc2_].name, _loc1_[_loc2_].value * Math.pow(1.5, this.level - 1) * (1 + 0.2 * this.quality)));
						}
						else {
							this.levelStat.push(new iData.iItem.Stat(_loc1_[_loc2_].name, _loc1_[_loc2_].value * Math.pow(1.3, this.level - 1) * (1 + 0.2 * this.quality)));
						}
						_loc2_++;
					}
				}
				else {
					_loc2_ = 0;
					while (_loc2_ < this.qualityStat.length) {
						this.levelStat.push(new iData.iItem.Stat(this.qualityStat[_loc2_].name, this.qualityStat[_loc2_].value * Math.pow(1.2, this.level - 1) * (1 + 0.2 * this.quality) * 0.4));
						_loc2_++;
					}
				}
			}
			/**转换部位 */
			private getPostion(): string {
				switch (this.position) {
					case iData.iItem.Equipment.HEAD:
						return "头部";
					case iData.iItem.Equipment.BODY:
						return "身体";
					case iData.iItem.Equipment.FEET:
						return "脚部";
					case iData.iItem.Equipment.NECKLACE:
						return "项链";
					case iData.iItem.Equipment.RING:
						return "戒指";
					case iData.iItem.Weapon.OFFHAND:
						return "副手";
					case iData.iItem.Weapon.ONEHAND:
						return "单手";
					case iData.iItem.Weapon.TWOHAND:
						return "双手";
					default:
						return this.position;
				}
			}
			/**类型转换 */
			private getType(): string {
				switch (this.type) {
					case iData.iItem.EquipType.ACCESORY:
						return "饰品";
					case iData.iItem.EquipType.HEAVY:
						return "重甲";
					case iData.iItem.EquipType.MEDIUM:
						return "中甲";
					case iData.iItem.EquipType.LIGHT:
						return "轻甲";
					case iData.iItem.WeaponType.AXE:
						return "斧";
					case iData.iItem.WeaponType.BOW:
						return "弓";
					case iData.iItem.WeaponType.CROSSBOW:
						return "弩";
					case iData.iItem.WeaponType.DAGGER:
						return "匕首";
					case iData.iItem.WeaponType.SCEPTRE:
						return "权杖";
					case iData.iItem.WeaponType.SHIELD:
						return "盾牌";
					case iData.iItem.WeaponType.STAFF:
						return "法杖";
					case iData.iItem.WeaponType.SWORD:
						return "剑";
					case iData.iItem.WeaponType.TOME:
						return "书";
					default:
						return this.type;
				}
			}
			/**描述显示 */
			public getDescription(): string {
				var _loc2_: number = 0;
				var _loc1_: any = <any>"<p align=\'center\'>" + this.getNameHTML();
				if (this.level) {
					_loc1_ = _loc1_ + (" +" + this.level);
					if (this.level == 15) {
						_loc1_ = _loc1_ + "(MAX)";
					}
				}
				_loc1_ = _loc1_ + "</p>";
				_loc1_ = _loc1_ + ("<p align=\'center\'><font size=\'16\'>" + tool.MyMath.FirstLetterToUpper(this.getPostion()) + "," + tool.MyMath.FirstLetterToUpper(this.getType()));
				if (this instanceof iData.iItem.Weapon) {
					//这里
					var loc1 = this as iData.iItem.Weapon;
					_loc1_ = _loc1_ + ("," + tool.MyMath.FirstLetterToUpper(loc1.getCategory()));
				}
				_loc1_ = _loc1_ + "</font></p>";
				_loc1_ = _loc1_ + "<font size=\'20\'>";
				_loc2_ = 0;
				while (_loc2_ < this.basicStat.length) {
					if (this.basicStat[_loc2_].name == iData.iItem.Stat.attackMin) {
						_loc1_ = _loc1_ + ("  攻击 " + (this.basicStat[_loc2_].value >> 0) + "~" + (this.basicStat[_loc2_ + 1].value >> 0) + "<br/>");
						_loc2_++;
					}
					else {
						_loc1_ = _loc1_ + ("  " + tool.MyMath.FirstLetterToUpper(this.basicStat[_loc2_].statTranslate()) + " " + (this.basicStat[_loc2_].value >> 0) + "<br/>");
					}
					_loc2_++;
				}
				_loc1_ = _loc1_ + "<font color=\'#00AF64\'>";
				_loc2_ = 0;
				while (_loc2_ < this.qualityStat.length) {
					_loc1_ = _loc1_ + ("  " + tool.MyMath.FirstLetterToUpper(this.qualityStat[_loc2_].statTranslate()) + " +" + (this.qualityStat[_loc2_].value >> 0) + "<br/>");
					_loc2_++;
				}
				_loc1_ = _loc1_ + "</font><font color=\'#4b5ed7\'>";
				_loc2_ = 0;
				while (_loc2_ < this.levelStat.length) {
					_loc1_ = _loc1_ + ("  " + tool.MyMath.FirstLetterToUpper(this.levelStat[_loc2_].statTranslate()) + " +" + (this.levelStat[_loc2_].value >> 0) + "<br/>");
					_loc2_++;
				}
				_loc1_ = _loc1_ + "</font></font>";
				_loc1_ = _loc1_ + ("<p align=\'right\'>$ " + this.getMoney() + "</p>");
				return _loc1_;
			}
			/***出售描述 */
			public getSellDesciption(): string {
				var _loc2_: number = 0;
				var _loc1_: any = <any>"<p align=\'center\'>" + this.getNameHTML();
				if (this.level) {
					_loc1_ = _loc1_ + (" +" + this.level);
				}
				_loc1_ = _loc1_ + "</p>";
				_loc1_ = _loc1_ + "<p align=\'center\' ><font color=\'#ff4040\'>FOR SALE</font></p>";
				_loc1_ = _loc1_ + ("<p align=\'center\'><font size=\'16\'>" + tool.MyMath.FirstLetterToUpper(this.getPostion()) + "," + tool.MyMath.FirstLetterToUpper(this.getType()));
				if (this instanceof iData.iItem.Weapon) {
					//这里
					var loc1 = this as iData.iItem.Weapon;
					_loc1_ = _loc1_ + ("," + tool.MyMath.FirstLetterToUpper(loc1.getCategory()));
				}
				_loc1_ = _loc1_ + "</font></p>";
				_loc1_ = _loc1_ + "<font size=\'20\'>";
				_loc2_ = 0;
				while (_loc2_ < this.basicStat.length) {
					if (this.basicStat[_loc2_].name == iData.iItem.Stat.attackMin) {
						_loc1_ = _loc1_ + ("  攻击 " + (this.basicStat[_loc2_].value >> 0) + "~" + (this.basicStat[_loc2_ + 1].value >> 0) + "<br/>");
						_loc2_++;
					}
					else {
						_loc1_ = _loc1_ + ("  " + tool.MyMath.FirstLetterToUpper(this.basicStat[_loc2_].statTranslate()) + " " + (this.basicStat[_loc2_].value >> 0) + "<br/>");
					}
					_loc2_++;
				}
				_loc1_ = _loc1_ + "<font color=\'#00AF64\'>";
				_loc2_ = 0;
				while (_loc2_ < this.qualityStat.length) {
					_loc1_ = _loc1_ + ("  " + tool.MyMath.FirstLetterToUpper(this.qualityStat[_loc2_].statTranslate()) + " +" + (this.qualityStat[_loc2_].value >> 0) + "<br/>");
					_loc2_++;
				}
				_loc1_ = _loc1_ + "</font><font color=\'#4b5ed7\'>";
				_loc2_ = 0;
				while (_loc2_ < this.levelStat.length) {
					_loc1_ = _loc1_ + ("  " + tool.MyMath.FirstLetterToUpper(this.levelStat[_loc2_].statTranslate()) + " +" + (this.levelStat[_loc2_].value >> 0) + "<br/>");
					_loc2_++;
				}
				_loc1_ = _loc1_ + "</font></font>";
				_loc1_ = _loc1_ + ("<p align=\'right\'>$ " + this.getSellMoney() + "</p>");
				return _loc1_;
			}

			public getMoney(): number {
				return (this.ratio * 30 >> 0) * (this.level + 1);
			}

			public getSellMoney(): number {
				var _loc1_: number = this.getMoney() * 10 * (1 + this.quality * this.quality);
				return _loc1_;
			}

			public getNameHTML(): string {
				var _loc1_: string = <any>null;
				switch (this.quality) {
					case 1:
						_loc1_ = iData.iItem.Equipment.GREEN;
						break;
					case 2:
						_loc1_ = iData.iItem.Equipment.BLUE;
						break;
					case 3:
						_loc1_ = iData.iItem.Equipment.YELLOW;
						break;
					case 4:
						_loc1_ = iData.iItem.Equipment.ORANGE;
						break;
					case 5:
						_loc1_ = iData.iItem.Equipment.PURPLE;
				}
				return "<font color=\'" + _loc1_ + "\'>" + tool.MyMath.FirstLetterToUpper(this.realName) + "</font>";
			}
			/**根据品质取得颜色 */
			public getColor(): string {
				var _loc1_: string = <any>null;
				switch (this.quality) {
					case 1:
						_loc1_ = iData.iItem.Equipment.GREEN;
						break;
					case 2:
						_loc1_ = iData.iItem.Equipment.BLUE;
						break;
					case 3:
						_loc1_ = iData.iItem.Equipment.YELLOW;
						break;
					case 4:
						_loc1_ = iData.iItem.Equipment.ORANGE;
						break;
					case 5:
						_loc1_ = iData.iItem.Equipment.PURPLE;
				}
				return _loc1_;
			}

			public getColorInHex(): number {
				var _loc1_: number = 0;
				switch (this.quality) {
					case 0:
						_loc1_ = iData.iItem.Equipment.GRAY_H;
						break;
					case 1:
						_loc1_ = iData.iItem.Equipment.GREEN_H;
						break;
					case 2:
						_loc1_ = iData.iItem.Equipment.BLUE_H;
						break;
					case 3:
						_loc1_ = iData.iItem.Equipment.YELLOW_H;
						break;
					case 4:
						_loc1_ = iData.iItem.Equipment.ORANGE_H;
						break;
					case 5:
						_loc1_ = iData.iItem.Equipment.PURPLE_H;
				}
				return _loc1_;
			}
			/**保存 */
			public save(): string {
				var _loc2_: number = 0;
				var _loc1_: any = <any>"";
				_loc1_ = _loc1_ + (this.name + "#" + this.level + "#" + this.ratio + "#" + this.quality);
				_loc1_ = _loc1_ + "#";
				_loc2_ = 0;
				while (_loc2_ < this.basicStat.length) {
					_loc1_ = _loc1_ + (this.basicStat[_loc2_].save() + "%");
					_loc2_++;
				}
				if (this.quality > 0) {
					_loc1_ = _loc1_ + "#";
					_loc2_ = 0;
					while (_loc2_ < this.qualityStat.length) {
						_loc1_ = _loc1_ + (this.qualityStat[_loc2_].save() + "%");
						_loc2_++;
					}
				}
				return _loc1_;
			}

		}
	}
}
/***装备颜色值 */
iData.iItem.Equipment.HEAD = "head";
iData.iItem.Equipment.BODY = "body";
iData.iItem.Equipment.FEET = "feet";
iData.iItem.Equipment.NECKLACE = "necklace";
iData.iItem.Equipment.RING = "ring";
iData.iItem.Equipment.GREEN = "#4BB814";
iData.iItem.Equipment.BLUE = "#4a60d7";
iData.iItem.Equipment.YELLOW = "#a6a500";
iData.iItem.Equipment.ORANGE = "#ff7100";
iData.iItem.Equipment.PURPLE = "#9840be";
iData.iItem.Equipment.GREEN_H = 4962324;
iData.iItem.Equipment.BLUE_H = 4874455;
iData.iItem.Equipment.YELLOW_H = 10921216;
iData.iItem.Equipment.ORANGE_H = 16740608;
iData.iItem.Equipment.GRAY_H = 7631988;
iData.iItem.Equipment.PURPLE_H = 9978046;
