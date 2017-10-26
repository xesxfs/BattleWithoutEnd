module iData {
	export module iMonster {
		export class Monster {
			/***称号 */
			public title: iData.iMonster.MonsterTitle;
			/**数据 */
			public data: iData.iMonster.MonsterData;

			public buffList: Array<iData.iSkill.iBuff.Buff>;

			public RED: string = "#ff4040";
			public BLUE: string = "#4a60d7";
			public YELLOW: string = "#FFA640";
			public GREEN: string = "#4BB814";
			public BROWN: string = "#bf7130";
			public PURPLE: string = "#BC38d3";
			public PINK: string = "#EE6b9c";

			public constructor(monsterData: iData.iMonster.MonsterData) {

				this.data = monsterData.clone();
				this.buffList = new Array<iData.iSkill.iBuff.Buff>();
				this.generateTitle();
			}

			protected generateTitle() {
				if (Math.random() > 0.8) {
					this.title = iData.iMonster.MonsterTitleList.list[iData.iMonster.MonsterTitleList.list.length * Math.random() >> 0];
					this.addTitleStat();
				}
			}
			/**增加称号单位属性 */
			protected addTitleStat() {
				var _loc3_: iData.iMonster.StatMul = <any>null;
				var _loc1_: number = this.title.statMulList.length;
				var _loc2_: number = 0;
				while (_loc2_ < _loc1_) {
					_loc3_ = this.title.statMulList[_loc2_];
					if (_loc3_.name == iData.iItem.Stat.attackMin) {
						this.data.attack = new iData.iNumber.DamageNumber(this.data.attack.min * _loc3_.mul + _loc3_.add, this.data.attack.max);
					}
					else if (_loc3_.name == iData.iItem.Stat.attackMax) {
						this.data.attack = new iData.iNumber.DamageNumber(this.data.attack.min, this.data.attack.max * _loc3_.mul + _loc3_.add);
					}
					else if (_loc3_.name == iData.iItem.Stat.ATTACK) {
						this.data.attack = new iData.iNumber.DamageNumber(this.data.attack.min * _loc3_.mul + _loc3_.add, this.data.attack.max * _loc3_.mul + _loc3_.add);
					}
					else {
						this.data[_loc3_.name] = this.data[_loc3_.name] * _loc3_.mul;
						this.data[_loc3_.name] = this.data[_loc3_.name] + _loc3_.add;
					}
					_loc2_++;
				}
			}

			public addBuff(param1: iData.iSkill.iBuff.Buff): any {
				var _loc2_: iData.iSkill.iBuff.Buff = this.isContainBuff(param1.name);
				if (_loc2_ == null) {
					this.buffList.push(param1);
				}
				else {
					_loc2_.combine(param1);
				}
				iPanel.iScene.MainScene.monsterInfoPanel.updateBuff();
			}

			public runBuff(): any {
				var _loc1_: number = this.buffList.length;
				var _loc2_: number = 0;
				while (_loc2_ < _loc1_) {
					this.buffList[_loc2_].run();
					_loc2_++;
				}
				this.removeBuff();
			}

			public removeBuff(): any {
				var _loc1_: number = this.buffList.length;
				var _loc2_: number = 0;
				while (_loc2_ < _loc1_) {
					if (this.buffList[_loc2_].isOver()) {
						this.buffList.splice(_loc2_, 1);
						iPanel.iScene.MainScene.monsterInfoPanel.updateBuff();
						return;
					}
					_loc2_++;
				}
			}

			public isContainBuff(param1: string): iData.iSkill.iBuff.Buff {
				var _loc2_: number = this.buffList.length;
				var _loc3_: number = 0;
				while (_loc3_ < _loc2_) {
					if (this.buffList[_loc3_].name == param1) {
						return this.buffList[_loc3_];
					}
					_loc3_++;
				}
				return null;
			}

			public get CP(): number {
				return this.data.CP;
			}

			public get money(): number {
				var _loc1_: number = (this.CP / iGlobal.Player.combatPower + iGlobal.Global.map.mapData.modifier) * this.CP / 10 * (1 + iGlobal.Player.luck / 300);
				if (this.title) {
					_loc1_ = _loc1_ * this.title.goldMul;
				}
				return _loc1_;
			}

			public get exp(): number {
				var _loc1_: number = (this.CP / iGlobal.Player.combatPower + iGlobal.Global.map.mapData.modifier) * this.CP * (1 + iGlobal.Player.luck / 300);
				if (this.title) {
					_loc1_ = _loc1_ * this.title.xpMul;
				}
				return _loc1_;
			}

			public get dropRate(): number {
				var _loc1_: number = (this.CP / iGlobal.Player.combatPower + iGlobal.Global.map.mapData.modifier) * (1 + iGlobal.Player.luck / 300);
				if (this.title) {
					_loc1_ = _loc1_ * this.title.dropMul;
				}
				return _loc1_;
			}

			public dropItem() {
				var _loc1_: iData.iItem.EquipmentData = <any>null;
				var _loc2_: iData.iItem.Equipment = <any>null;
				var _loc3_: boolean = <any>false;
				if (Math.random() * 100 < 20 * this.dropRate) {
					_loc1_ = iData.iItem.EquipmentList.list[iData.iItem.EquipmentList.list.length * Math.random() >> 0];
					if (_loc1_ instanceof iData.iItem.WeaponData) {
						var loc1 = _loc1_ as iData.iItem.WeaponData;
						_loc2_ = new iData.iItem.Weapon(loc1, this.dropRate);
					}
					else {
						_loc2_ = new iData.iItem.Equipment(_loc1_, this.dropRate);
					}
					_loc3_ = false;
					if (<any>!iGlobal.Global["item" + _loc2_.quality + "_toggle"]) {
						_loc3_ = true;
					}
					if (<any>!_loc3_) {
						if ((_loc2_ instanceof iData.iItem.Weapon) || _loc2_.type == iData.iItem.EquipType.ACCESORY) {
							if (<any>!iGlobal.Global[_loc2_.name + "_toggle"]) {
								_loc3_ = true;
							}
						}
						else if (<any>!iGlobal.Global[_loc2_.position + "_" + _loc2_.type + "_toggle"]) {
							_loc3_ = true;
						}
					}
					if (<any>!_loc3_ && iGlobal.Player.addItem(_loc2_)) {
						if (iPanel.iScene.MainScene.lootPanel) {
							switch (_loc2_.quality) {
								case 0:
									iPanel.iScene.MainScene.lootPanel.basic++;
									break;
								case 1:
									iPanel.iScene.MainScene.lootPanel.magic++;
									break;
								case 2:
									iPanel.iScene.MainScene.lootPanel.rare++;
									break;
								case 3:
									iPanel.iScene.MainScene.lootPanel.perfect++;
									break;
								case 4:
									iPanel.iScene.MainScene.lootPanel.epic++;
									break;
								case 5:
									iPanel.iScene.MainScene.lootPanel.legendary++;
							}
						}
					}
					else {
						_loc3_ = true;
					}
					if (_loc3_) {
						iGlobal.Player.addMoney(_loc2_.getMoney());
					}
				}
			}

			public dropPet() {
			}

			public get nameHtml(): string {
				var _loc2_: string = <any>null;
				var _loc3_: string = <any>null;
				var _loc1_: number = this.CP / iGlobal.Player.combatPower;
				if (_loc1_ < 0.8) {
					_loc2_ = this.PINK;
					_loc3_ = "WEAKEST";
				}
				else if (_loc1_ < 1) {
					_loc2_ = this.PURPLE;
					_loc3_ = "WEAK";
				}
				else if (_loc1_ < 1.4) {
					_loc2_ = this.BROWN;
					_loc3_ = "NORMAL";
				}
				else if (_loc1_ < 2) {
					_loc2_ = this.GREEN;
					_loc3_ = "STRONG";
				}
				else if (_loc1_ < 3) {
					_loc2_ = this.YELLOW;
					_loc3_ = "AWFUL";
				}
				else {
					_loc2_ = this.RED;
					_loc3_ = "BOSS";
				}
				return "<font color=\'" + _loc2_ + "\'>" + this.data.realName + "</font>";
			}

			public get attack(): number {
				return this.data.attack.min + (this.data.attack.max - this.data.attack.min) * tool.MyMath.balanceRandom(this.balance);
			}

			public get hp(): number {
				return this.data.hp;
			}

			public get balance(): number {
				if (this.data.balance > 100) {
					this.data.balance = 100;
				}
				if (this.data.balance < 0) {
					this.data.balance = 0;
				}
				return this.data.balance;
			}

			public get crit(): number {
				return this.data.crit;
			}

			public get crit_mul(): number {
				return this.data.crit_mul;
			}

			public get defence(): number {
				return this.data.defence;
			}

			public get protection(): number {
				var _loc1_: number = this.data.protection;
				var _loc2_: iData.iSkill.iBuff.Buff = this.isContainBuff("corrosion");
				if (_loc2_ != null) {
					_loc1_ = _loc1_ - _loc2_.count;
				}
				return _loc1_;
			}

		}
	}
}

