module iGlobal {
	export class Player {
		public static BAGMAX: number;
		public static PETMAX: number;
		public static caculate: number;
		public static playerName: string;
		public static lv: number = 0;
		public static age: number = 0;
		public static race: iData.Race;
		/**基本属性状态 */
		public static basicStatus: iData.BasicStatus;
		/**技能属性状态 */
		public static skillStatus: iData.BasicStatus;
		/**装备属性状态 */
		public static equipStatus: iData.BasicStatus;
		public static ap: number = 0;
		public static gold: number = 0;
		public static xp: number = 0;
		public static skillList: Array<iData.iSkill.Skill>;
		public static equipSkillList: Array<iData.iSkill.ActiveSkill>;
		public static itemList: Array<iData.iItem.Equipment>;
		public static titleList: Array<iData.iPlayer.Title>;
		public static petList: Array<iData.iPet.Pet>;
		/**当前携带的宠物 */
		public static pet: iData.iPet.Pet;
		public static title: iData.iPlayer.Title;
		public static apCost: number = 0;
		public static storeLv: number = 0;
		public static head: iData.iItem.Equipment;
		public static feet: iData.iItem.Equipment;
		public static body: iData.iItem.Equipment;
		public static necklace: iData.iItem.Equipment;
		public static ring: iData.iItem.Equipment;
		public static leftHand: iData.iItem.Weapon;
		public static rightHand: iData.iItem.Weapon;

		public constructor() {

		}

		public static burn(age: number, race: iData.Race) {
			iGlobal.Player.age = age;
			iGlobal.Player.race = race;
			iGlobal.Player.lv = 1;
			iGlobal.Player.caculateInitStat();
			if (<any>!iGlobal.Player.leftHand) {
				iGlobal.Player.equip(new iData.iItem.Weapon((iData.iItem.EquipmentList.list[1] as iData.iItem.WeaponData), 1));
			}
			iGlobal.Player.addSkill(iData.iSkill.SkillDataList.COMBAT_MASTERY);
			iGlobal.Player.addSkill(iData.iSkill.SkillDataList.SMASH);
			iGlobal.Player.addSkill(iData.iSkill.SkillDataList.CRITICAL_HIT);
			iGlobal.Player.addSkill(iData.iSkill.SkillDataList.COUNTERATTACK);
			iGlobal.Player.addSkill(iData.iSkill.SkillDataList.DEFENCE);
			iGlobal.Player.addSkill(iData.iSkill.SkillDataList.MAGIC_MASTERY);
			iGlobal.Player.addSkill(iData.iSkill.SkillDataList.FIREBOLT);
			iGlobal.Player.addSkill(iData.iSkill.SkillDataList.ICEBOLT);
			iGlobal.Player.addSkill(iData.iSkill.SkillDataList.LIGHTNINGBOLT);
			iGlobal.Player.addSkill(iData.iSkill.SkillDataList.BLACKSMITHING);
			iGlobal.Player.addSkill(iData.iSkill.SkillDataList.RANGE_MASTERY);
			iGlobal.Player.addSkill(iData.iSkill.SkillDataList.MIRAGE_MISSILE);
			iData.iPlayer.TitleList.updateTitleInfo("begin");
			iGlobal.Player.updateAllInfo();
			//iGlobal.Player.save();
		}

		private static caculateInitStat() {
			iGlobal.Player.basicStatus = iGlobal.Player.race.caculateStat(iGlobal.Player.age);
		}

		private static caculateLevelStat() {
		}

		public static ageup() {
			iGlobal.Player.caculate = 0;
			if (iGlobal.Player.age < 25) {
				iGlobal.Player.basicStatus.hp = iGlobal.Player.basicStatus.hp + (iGlobal.Player.race.ageupList[iGlobal.Player.age - 10].hp + 1);
				iGlobal.Player.basicStatus.mp = iGlobal.Player.basicStatus.mp + (iGlobal.Player.race.ageupList[iGlobal.Player.age - 10].mp + 1);
				iGlobal.Player.basicStatus.str = iGlobal.Player.basicStatus.str + iGlobal.Player.race.ageupList[iGlobal.Player.age - 10].str;
				iGlobal.Player.basicStatus.dex = iGlobal.Player.basicStatus.dex + iGlobal.Player.race.ageupList[iGlobal.Player.age - 10].dex;
				iGlobal.Player.basicStatus.will = iGlobal.Player.basicStatus.will + iGlobal.Player.race.ageupList[iGlobal.Player.age - 10].will;
				iGlobal.Player.basicStatus.intelligence = iGlobal.Player.basicStatus.intelligence + iGlobal.Player.race.ageupList[iGlobal.Player.age - 10].intelligence;
				iGlobal.Player.basicStatus.luck = iGlobal.Player.basicStatus.luck + iGlobal.Player.race.ageupList[iGlobal.Player.age - 10].luck;
			}
			else {
				iGlobal.Player.basicStatus.hp = iGlobal.Player.basicStatus.hp + 1;
				iGlobal.Player.basicStatus.mp = iGlobal.Player.basicStatus.mp + 1;
			}
			iGlobal.Player.age++;
			var _loc1_: number = 18 - iGlobal.Player.age;
			if (_loc1_ < 1 && iGlobal.Player.age <= 25) {
				_loc1_ = 1;
			}
			if (_loc1_ > 0) {
				iGlobal.Player.addAp(_loc1_);
			}
			iGlobal.Player.updateInfoWindow();
			iPanel.iScene.MainScene.allInfoPanel.addText("<font color=\'#ff4040\'>你长大了! 你现在" + iGlobal.Player.age + "岁了!</font>");
			iData.iPlayer.TitleList.updateTitleInfo("age", iGlobal.Player.age);
			iPanel.iScene.MainScene.otherPanel.otherWindow.updateBirth();
		}

		public static get combatPower(): number {
			var _loc1_: number = iGlobal.Player.basicStatus.hp + iGlobal.Player.skillStatus.hp;
			var _loc2_: number = iGlobal.Player.basicStatus.mp + iGlobal.Player.skillStatus.mp;
			var _loc3_: number = iGlobal.Player.basicStatus.str + iGlobal.Player.skillStatus.str;
			var _loc4_: number = iGlobal.Player.basicStatus.intelligence + iGlobal.Player.skillStatus.intelligence;
			var _loc5_: number = iGlobal.Player.basicStatus.dex + iGlobal.Player.skillStatus.dex;
			var _loc6_: number = iGlobal.Player.basicStatus.will + iGlobal.Player.skillStatus.will;
			var _loc7_: number = iGlobal.Player.basicStatus.luck + iGlobal.Player.skillStatus.luck;
			var _loc8_: any = _loc1_ + 0.5 * _loc2_ + _loc3_ + 0.2 * _loc4_ + 0.1 * _loc5_ + 0.5 * _loc6_ + 0.1 * _loc7_ + iGlobal.Player.apCost;
			return _loc1_ + 0.5 * _loc2_ + _loc3_ + 0.2 * _loc4_ + 0.1 * _loc5_ + 0.5 * _loc6_ + 0.1 * _loc7_ + iGlobal.Player.apCost;
		}

		public static addItem(equipmentData: iData.iItem.Equipment): boolean {
			if (iGlobal.Player.itemList.length >= iGlobal.Player.BAGMAX) {
				iPanel.iScene.MainScene.allInfoPanel.addText("背包满了!", iGlobal.Global.item);
				return false;
			}
			iGlobal.Player.itemList.push(equipmentData);
			if (iPanel.iScene.MainScene.allInfoPanel) {
				iPanel.iScene.MainScene.allInfoPanel.addText("你获得了" + equipmentData.getNameHTML() + "!", iGlobal.Global.item);
			}
			if (iPanel.iScene.MainScene.otherPanel) {
				if (iPanel.iScene.MainScene.otherPanel.itemWindow) {
					iPanel.iScene.MainScene.otherPanel.itemWindow.addOneItem();
				}
			}
			return true;
		}

		public static addPet(param1: iData.iPet.Pet): boolean {
			if (iGlobal.Player.petList.length >= iGlobal.Player.PETMAX) {
				iPanel.iScene.MainScene.allInfoPanel.addText("宠物栏满了!", iGlobal.Global.item);
				return false;
			}
			iGlobal.Player.petList.push(param1);
			if (iPanel.iScene.MainScene.allInfoPanel) {
				iPanel.iScene.MainScene.allInfoPanel.addText("你获得了" + param1.name + "!", iGlobal.Global.item);
			}
			if (iPanel.iScene.MainScene.otherPanel) {
				iPanel.iScene.MainScene.otherPanel.petWindow.update();
			}
			return true;
		}

		public static removeItem(param1: iData.iItem.Equipment): boolean {
			var _loc2_: number = iGlobal.Player.itemList.length;
			var _loc3_: number = 0;
			while (_loc3_ < _loc2_) {
				if (iGlobal.Player.itemList[_loc3_] == param1) {
					iGlobal.Player.itemList.splice(_loc3_, 1);
					return true;
				}
				_loc3_++;
			}
			return false;
		}

		public static addSkill(param1: iData.iSkill.SkillData) {
			var _loc2_: number = iGlobal.Player.skillList.length;
			var _loc3_: number = 0;
			while (_loc3_ < _loc2_) {
				if (iGlobal.Player.skillList[_loc3_].skillData.name == param1.name) {
					return;
				}
				_loc3_++;
			}
			if (param1 instanceof iData.iSkill.PassiveSkillData) {
				iGlobal.Player.skillList.push(new iData.iSkill.PassiveSkill(param1 as iData.iSkill.PassiveSkillData));
			}
			else {
				iGlobal.Player.skillList.push(new iData.iSkill.ActiveSkill(param1 as iData.iSkill.ActiveSkillData));
			}
			if (iPanel.iScene.MainScene.allInfoPanel) {
				iPanel.iScene.MainScene.allInfoPanel.addText("你获得了技能<font color=\'#ff4040\'>" + param1.name + "</font>");
			}
		}

		public static getSkill(param1: iData.iSkill.SkillData): iData.iSkill.Skill {
			var _loc2_: number = iGlobal.Player.skillList.length;
			var _loc3_: number = 0;
			while (_loc3_ < _loc2_) {
				if (iGlobal.Player.skillList[_loc3_].skillData.name == param1.name) {
					return iGlobal.Player.skillList[_loc3_];
				}
				_loc3_++;
			}
			return null;
		}

		public static isSkillEquiped(param1: iData.iSkill.Skill): boolean {
			var _loc2_: number = iGlobal.Player.equipSkillList.length;
			var _loc3_: number = 0;
			while (_loc3_ < _loc2_) {
				if (iGlobal.Player.equipSkillList[_loc3_] == param1) {
					return true;
				}
				_loc3_++;
			}
			return false;
		}

		public static equipSkill(param1: iData.iSkill.Skill): boolean {
			if (iGlobal.Player.isSkillEquiped(param1)) {
				return false;
			}
			var _loc2_: number = iGlobal.Player.skillList.length;
			var _loc3_: number = 0;
			while (_loc3_ < _loc2_) {
				if (iGlobal.Player.skillList[_loc3_] == param1) {
					iGlobal.Player.equipSkillList.push(param1);
					iGlobal.Player.updateBattleSkillWindow();
					return true;
				}
				_loc3_++;
			}
			return false;
		}

		public static unequipSkill(param1: iData.iSkill.Skill): boolean {
			var _loc2_: number = iGlobal.Player.equipSkillList.length;
			var _loc3_: number = 0;
			while (_loc3_ < _loc2_) {
				if (iGlobal.Player.equipSkillList[_loc3_] == param1) {
					iGlobal.Player.equipSkillList.splice(_loc3_, 1);
					iGlobal.Player.updateBattleSkillWindow();
					return true;
				}
				_loc3_++;
			}
			return false;
		}

		/**人物当前技能列表 */
		public static get attackSkillList(): Array<iData.iSkill.ActiveSkill> {
			var _loc3_: string = <any>null;
			var _loc1_: Array<iData.iSkill.ActiveSkill> = new Array<iData.iSkill.ActiveSkill>();
			var _loc2_: number = iGlobal.Player.equipSkillList.length;
			if (iGlobal.Player.leftHand) {
				_loc3_ = iGlobal.Player.leftHand.category;
			}
			else {
				_loc3_ = iData.iItem.WeaponCategory.MELEE;
			}
			var _loc4_: number = 0;
			while (_loc4_ < _loc2_) {
				if ((iGlobal.Player.equipSkillList[_loc4_].skillData as iData.iSkill.ActiveSkillData).type == iData.iSkill.SkillType.ATTACK) {
					if (iGlobal.Player.equipSkillList[_loc4_].skillData.category == iData.iSkill.SkillCategory.ALL || iGlobal.Player.equipSkillList[_loc4_].skillData.category == iData.iSkill.SkillCategory.MAGIC || iGlobal.Player.equipSkillList[_loc4_].skillData.category == _loc3_) {
						_loc1_.push(iGlobal.Player.equipSkillList[_loc4_]);
					}
				}
				_loc4_++;
			}
			return _loc1_;
		}

		public static get defenceSkillList(): Array<iData.iSkill.ActiveSkill> {
			var _loc3_: string = <any>null;
			var _loc1_: Array<iData.iSkill.ActiveSkill> = new Array<iData.iSkill.ActiveSkill>();
			var _loc2_: number = iGlobal.Player.equipSkillList.length;
			if (iGlobal.Player.leftHand) {
				_loc3_ = iGlobal.Player.leftHand.category;
			}
			else {
				_loc3_ = iData.iItem.WeaponCategory.MELEE;
			}
			var _loc4_: number = 0;
			while (_loc4_ < _loc2_) {
				if ((iGlobal.Player.equipSkillList[_loc4_].skillData as iData.iSkill.ActiveSkillData).type == iData.iSkill.SkillType.DEFENCE) {
					if (iGlobal.Player.equipSkillList[_loc4_].skillData.category == iData.iSkill.SkillCategory.ALL || iGlobal.Player.equipSkillList[_loc4_].skillData.category == iData.iSkill.SkillCategory.MAGIC || iGlobal.Player.equipSkillList[_loc4_].skillData.category == _loc3_) {
						_loc1_.push(iGlobal.Player.equipSkillList[_loc4_]);
					}
				}
				_loc4_++;
			}
			return _loc1_;
		}

		public static equip(param1: iData.iItem.Equipment): any {
			if (param1 as iData.iItem.Weapon) {
				switch (param1.position) {
					case iData.iItem.Weapon.ONEHAND:
						iGlobal.Player.unequip("leftHand");
						iGlobal.Player.leftHand = (param1 as iData.iItem.Weapon);
						iGlobal.Player.updateSkillInfo();
						break;
					case iData.iItem.Weapon.OFFHAND:
						iGlobal.Player.unequip("rightHand");
						if (iGlobal.Player.leftHand && iGlobal.Player.leftHand.position == iData.iItem.Weapon.TWOHAND) {
							iGlobal.Player.unequip("leftHand");
						}
						iGlobal.Player.rightHand = (param1 as iData.iItem.Weapon);
						break;
					case iData.iItem.Weapon.TWOHAND:
						iGlobal.Player.unequip("leftHand");
						iGlobal.Player.unequip("rightHand");
						iGlobal.Player.leftHand = (param1 as iData.iItem.Weapon);
						iGlobal.Player.updateSkillInfo();
				}
			}
			else {
				if (iGlobal.Player[param1.position]) {
					iGlobal.Player.unequip(param1.position);
				}
				iGlobal.Player[param1.position] = param1;
			}
			iGlobal.Player.updateEquipInfo();
			iGlobal.Player.updateBattleSkillWindow();
		}

		public static unequip(param1: string): any {
			if (iGlobal.Player[param1]) {
				iGlobal.Player.addItem(iGlobal.Player[param1]);
				iGlobal.Player[param1] = null;
				iGlobal.Player.updateEquipInfo();
				iGlobal.Player.updateSkillInfo();
			}
			iGlobal.Player.updateBattleSkillWindow();
		}

		public static addTitle(param1: iData.iPlayer.Title): any {
			iGlobal.Player.titleList.push(param1);
		}

		public static setTitle(param1: iData.iPlayer.Title): any {
			if (iGlobal.Player.title == param1) {
				iGlobal.Player.title = null;
			}
			else {
				iGlobal.Player.title = param1;
			}
			iGlobal.Player.updateInfoWindow();
		}

		public static setPet(param1: iData.iPet.Pet): any {
			if (iGlobal.Player.pet == param1) {
				iGlobal.Player.pet = null;
			}
			else {
				if (iGlobal.Player.pet) {
					iGlobal.Player.addPet(iGlobal.Player.pet);
				}
				iGlobal.Player.pet = param1;
			}
			iGlobal.Player.updatePetInfoWindow();
			iGlobal.Player.updateEquipWindow();
		}

		public static removePet(param1: iData.iPet.Pet): boolean {
			var _loc2_: number = iGlobal.Player.petList.length;
			var _loc3_: number = 0;
			while (_loc3_ < _loc2_) {
				if (iGlobal.Player.petList[_loc3_] == param1) {
					iGlobal.Player.petList.splice(_loc3_, 1);
					return true;
				}
				_loc3_++;
			}
			return false;
		}

		public static addAp(param1: number): any {
			iGlobal.Player.ap = iGlobal.Player.ap + param1;
			iGlobal.Player.updateInfoWindow();
			iGlobal.Player.updateSkillPanel();
			if (param1 > 0) {
				iPanel.iScene.MainScene.allInfoPanel.addText("<font color=\'#FF4040\'>你获得了" + param1 + " ap!</font>");
			}
			else {
				iGlobal.Player.apCost = iGlobal.Player.apCost - param1;
			}
		}

		public static loseMoney(param1: number): any {
			iGlobal.Player.gold = iGlobal.Player.gold - param1;
			iPanel.iScene.MainScene.allInfoPanel.addText("你<font color=\'#FF4040\'>失去了" + "$" + param1 + "</font>.", iGlobal.Global.money);
			iGlobal.Player.updateInfoWindow();
			if (iPanel.iScene.MainScene.lootPanel) {
				iPanel.iScene.MainScene.lootPanel.money = iPanel.iScene.MainScene.lootPanel.money - param1;
			}
			if (iGlobal.Global.shopPanel) {
				iGlobal.Global.shopPanel.updateMoneyButton();
			}
			if (iGlobal.Global.specialShopPanel) {
				iGlobal.Global.specialShopPanel.update();
			}
		}

		public static addMoney(param1: number): any {
			if (iGlobal.Player.gold <= 1000000000) {
				iGlobal.Player.gold = iGlobal.Player.gold + param1;
				iPanel.iScene.MainScene.allInfoPanel.addText("你获得了<font color=\'#FFA640\'>" + "$" + param1 + "</font>.", iGlobal.Global.money);
				iGlobal.Player.updateInfoWindow();
				if (iPanel.iScene.MainScene.lootPanel) {
					iPanel.iScene.MainScene.lootPanel.money = iPanel.iScene.MainScene.lootPanel.money + param1;
				}
			}
			if (iGlobal.Global.shopPanel) {
				iGlobal.Global.shopPanel.updateMoneyButton();
			}
			if (iGlobal.Global.specialShopPanel) {
				iGlobal.Global.specialShopPanel.update();
			}
			if (iGlobal.Global.kongregate) {
				iGlobal.Global.kongregate.stats.submit("Money", iGlobal.Player.gold);
			}
		}

		public static loseExp(): any {
			var _loc1_: number = iGlobal.Player.xp / 100;
			iPanel.iScene.MainScene.allInfoPanel.addText("你<font color=\'#ff4040\'>失去了" + _loc1_ + "</font>经验.", iGlobal.Global.exp);
			iGlobal.Player.xp = iGlobal.Player.xp - _loc1_;
			iGlobal.Player.updateXpBar();
			if (iPanel.iScene.MainScene.lootPanel) {
				iPanel.iScene.MainScene.lootPanel.exp = iPanel.iScene.MainScene.lootPanel.exp - _loc1_;
			}
		}

		public static addExp(param1: number): any {
			if (iGlobal.Player.getLevelExp() < 0) {
				return;
			}
			iGlobal.Player.xp = iGlobal.Player.xp + param1;
			iPanel.iScene.MainScene.allInfoPanel.addText("你获得了<font color=\'#4a60d7\'>" + param1 + "</font>经验.", iGlobal.Global.exp);
			if (iGlobal.Player.xp > iGlobal.Player.getLevelExp()) {
				iGlobal.Player.levelUp();
			}
			iGlobal.Player.updateXpBar();
			if (iPanel.iScene.MainScene.lootPanel) {
				iPanel.iScene.MainScene.lootPanel.exp = iPanel.iScene.MainScene.lootPanel.exp + param1;
			}
		}

		private static levelUp(): any {
			iGlobal.Player.lv++;
			if (iGlobal.Player.age < 25) {
				iGlobal.Player.basicStatus.hp = iGlobal.Player.basicStatus.hp + (iGlobal.Player.race.ageupList[iGlobal.Player.age - 10].hp / 4 + 1);
				iGlobal.Player.basicStatus.mp = iGlobal.Player.basicStatus.mp + (iGlobal.Player.race.ageupList[iGlobal.Player.age - 10].mp / 4 + 1);
				iGlobal.Player.basicStatus.str = iGlobal.Player.basicStatus.str + iGlobal.Player.race.ageupList[iGlobal.Player.age - 10].str / 4;
				iGlobal.Player.basicStatus.dex = iGlobal.Player.basicStatus.dex + iGlobal.Player.race.ageupList[iGlobal.Player.age - 10].dex / 4;
				iGlobal.Player.basicStatus.will = iGlobal.Player.basicStatus.will + iGlobal.Player.race.ageupList[iGlobal.Player.age - 10].will / 4;
				iGlobal.Player.basicStatus.intelligence = iGlobal.Player.basicStatus.intelligence + iGlobal.Player.race.ageupList[iGlobal.Player.age - 10].intelligence / 4;
				iGlobal.Player.basicStatus.luck = iGlobal.Player.basicStatus.luck + iGlobal.Player.race.ageupList[iGlobal.Player.age - 10].luck / 4;
			}
			else {
				iGlobal.Player.basicStatus.hp = iGlobal.Player.basicStatus.hp + 1;
				iGlobal.Player.basicStatus.mp = iGlobal.Player.basicStatus.mp + 1;
			}
			iGlobal.Player.addAp(1);
			iGlobal.Player.xp = 0;
			if (iPanel.iScene.MainScene.xpBar) {
				iPanel.iScene.MainScene.xpBar.Value = 0;
				iPanel.iScene.MainScene.xpBar.Max = iGlobal.Player.getLevelExp();
			}
			iGlobal.Player.updateInfoWindow();
			iGlobal.Player.updateXpBar();
			iPanel.iScene.MainScene.allInfoPanel.addText("<font color=\'#ff4040\'>升级了! 你现在是 Lv." + iGlobal.Player.lv + "!</font>");
			if (iGlobal.Player.age == 10) {
				iData.iPlayer.TitleList.updateTitleInfo("age10", iGlobal.Player.lv);
			}
			if (iGlobal.Global.kongregate) {
				iGlobal.Global.kongregate.stats.submit("CP", iGlobal.Player.combatPower);
				iGlobal.Global.kongregate.stats.submit("STR", iGlobal.Player.str);
				iGlobal.Global.kongregate.stats.submit("DEX", iGlobal.Player.dex);
				iGlobal.Global.kongregate.stats.submit("INT", iGlobal.Player.intelligence);
				iGlobal.Global.kongregate.stats.submit("WILL", iGlobal.Player.will);
				iGlobal.Global.kongregate.stats.submit("LUCK", iGlobal.Player.luck);
			}
		}

		public static getLevelExp(): number {
			if (iGlobal.Player.lv >= 200) {
				return -1;
			}
			return iGlobal.Player.lv * iGlobal.Player.lv * ((iGlobal.Player.lv + 1) * (iGlobal.Player.lv + 1) - 13 * (iGlobal.Player.lv + 1) + 82);
		}

		public static get attack(): number {
			var _loc1_: number = 0;
			if (iGlobal.Player.attMin > iGlobal.Player.attMax) {
				_loc1_ = iGlobal.Player.attMax + (iGlobal.Player.attMin - iGlobal.Player.attMax) * tool.MyMath.balanceRandom(iGlobal.Player.balance);
			}
			else {
				_loc1_ = iGlobal.Player.attMin + (iGlobal.Player.attMax - iGlobal.Player.attMin) * tool.MyMath.balanceRandom(iGlobal.Player.balance);
			}
			return _loc1_;
		}

		public static get attMin(): number {
			var _loc2_: string = <any>null;
			var _loc1_: number = iGlobal.Player.basicStatus.attack.min + iGlobal.Player.skillStatus.attack.min + iGlobal.Player.equipStatus.attack.min + iGlobal.Player.str / 3;
			if (iGlobal.Player.leftHand) {
				_loc2_ = iGlobal.Player.leftHand.category;
			}
			else {
				_loc2_ = iData.iItem.WeaponCategory.MELEE;
			}
			if (_loc2_ == iData.iItem.WeaponCategory.RANGED) {
				_loc1_ = _loc1_ + iGlobal.Player.dex / 3;
			}
			_loc1_ = iGlobal.Player.formula_title_stat(_loc1_, iData.iItem.Stat.ATTACK);
			return _loc1_;
		}

		public static get attMax(): number {
			var _loc2_: string = <any>null;
			var _loc1_: number = iGlobal.Player.basicStatus.attack.max + iGlobal.Player.skillStatus.attack.max + iGlobal.Player.equipStatus.attack.max + iGlobal.Player.str / 2.5;
			if (iGlobal.Player.leftHand) {
				_loc2_ = iGlobal.Player.leftHand.category;
			}
			else {
				_loc2_ = iData.iItem.WeaponCategory.MELEE;
			}
			if (_loc2_ == iData.iItem.WeaponCategory.RANGED) {
				_loc1_ = _loc1_ + iGlobal.Player.dex / 2.5;
			}
			_loc1_ = iGlobal.Player.formula_title_stat(_loc1_, iData.iItem.Stat.ATTACK);
			return _loc1_;
		}
		/**当前人物血量 */
		public static get hp(): number {
			return iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.hp), iData.iItem.Stat.hp);
		}
		/**当前人物蓝量 */
		public static get mp(): number {
			return iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.mp), iData.iItem.Stat.mp);
		}

		public static get str(): number {
			var _loc1_: number = iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.str), iData.iItem.Stat.str);
			iData.iPlayer.TitleList.updateTitleInfo(iData.iItem.Stat.str, _loc1_);
			return _loc1_;
		}

		public static get dex(): number {
			var _loc1_: number = iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.dex), iData.iItem.Stat.dex);
			iData.iPlayer.TitleList.updateTitleInfo(iData.iItem.Stat.dex, _loc1_);
			return _loc1_;
		}

		public static get intelligence(): number {
			var _loc1_: number = iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.intelligence), iData.iItem.Stat.intelligence);
			iData.iPlayer.TitleList.updateTitleInfo(iData.iItem.Stat.intelligence, _loc1_);
			return _loc1_;
		}

		public static get will(): number {
			var _loc1_: number = iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.will), iData.iItem.Stat.will);
			iData.iPlayer.TitleList.updateTitleInfo(iData.iItem.Stat.will, _loc1_);
			return _loc1_;
		}

		public static get luck(): number {
			var _loc1_: number = iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.luck), iData.iItem.Stat.luck);
			iData.iPlayer.TitleList.updateTitleInfo(iData.iItem.Stat.luck, _loc1_);
			return _loc1_;
		}

		public static get defence(): number {
			return iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.defence), iData.iItem.Stat.defence);
		}

		public static get protection(): number {
			return iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.protection), iData.iItem.Stat.protection);
		}

		public static get balance(): number {
			var _loc1_: number = iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.balance) + (iGlobal.Player.dex - 10) / 4, iData.iItem.Stat.balance);
			if (_loc1_ > 100) {
				_loc1_ = 100;
			}
			return _loc1_;
		}

		public static get crit(): number {
			return iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.crit) + iGlobal.Player.will / 5 + iGlobal.Player.luck / 5, iData.iItem.Stat.crit);
		}

		public static get crit_mul(): number {
			return iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.crit_mul) + 100, iData.iItem.Stat.crit_mul);
		}

		/**法术释放几率 */
		public static get spellChance(): number {
			return iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.spellChance) + iGlobal.Player.intelligence / 20, iData.iItem.Stat.spellChance);
		}

		public static get protectionIgnore(): number {
			return iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.protectionIgnore), iData.iItem.Stat.protectionIgnore);
		}

		public static get protectionReduce(): number {
			return iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.protectionReduce), iData.iItem.Stat.protectionReduce);
		}

		public static get magicDamage(): number {
			return iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.magicDamage) + iGlobal.Player.intelligence / 20, iData.iItem.Stat.magicDamage);
		}

		public static get magicBalance(): number {
			var _loc1_: number = (iGlobal.Player.intelligence - 10) / 4 + 30;
			if (_loc1_ > 99) {
				_loc1_ = 99;
			}
			return _loc1_;
		}

		public static get basicStr(): number {
			return iGlobal.Player.formula_BasicStatAddUp(iData.iItem.Stat.str);
		}

		public static get basicDex(): number {
			return iGlobal.Player.formula_BasicStatAddUp(iData.iItem.Stat.dex);
		}

		public static get basicInt(): number {
			return iGlobal.Player.formula_BasicStatAddUp(iData.iItem.Stat.intelligence);
		}

		public static get basicWill(): number {
			return iGlobal.Player.formula_BasicStatAddUp(iData.iItem.Stat.will);
		}

		public static get basicLuck(): number {
			return iGlobal.Player.formula_BasicStatAddUp(iData.iItem.Stat.luck);
		}

		private static formula_statAdd(param1: iData.BasicStatus, param2: iData.BasicStatus, param3: string): number {
			return param1[param3] + param2[param3];
		}

		private static formula_StatAddUp(param1: string): number {
			return iGlobal.Player.basicStatus[param1] + iGlobal.Player.skillStatus[param1] + iGlobal.Player.equipStatus[param1];
		}

		private static formula_title_stat(param1: number, param2: string): number {
			var _loc3_: number = 0;
			var _loc4_: number = 0;
			if (iGlobal.Player.title) {
				_loc3_ = iGlobal.Player.title.statMulList.length;
				_loc4_ = 0;
				while (_loc4_ < _loc3_) {
					if (iGlobal.Player.title.statMulList[_loc4_].name == param2) {
						param1 = param1 * iGlobal.Player.title.statMulList[_loc4_].mul;
						param1 = param1 + iGlobal.Player.title.statMulList[_loc4_].add;
						return param1;
					}
					_loc4_++;
				}
			}
			return param1;
		}

		private static formula_BasicStatAddUp(param1: string): number {
			return iGlobal.Player.basicStatus[param1] + iGlobal.Player.skillStatus[param1];
		}

		private static updateInfoWindow(): any {
			if (iPanel.iScene.MainScene.playerInfoPanel) {
				iPanel.iScene.MainScene.playerInfoPanel.upDate();
			}
		}

		public static updatePetInfoWindow(): any {
			if (iPanel.iScene.MainScene.petInfoPanel) {
				iPanel.iScene.MainScene.petInfoPanel.update();
			}
		}

		public static updateAllInfo(): any {
			iGlobal.Player.updateSkillInfo();
			iGlobal.Player.updateEquipInfo();
		}

		public static updateSkillInfo(): any {
			var _loc2_: iData.iSkill.SkillData = <any>null;
			var _loc3_: number = 0;
			var _loc5_: number = 0;
			iGlobal.Player.skillStatus = new iData.BasicStatus(0, 0, 0, 0, 0, 0, 0);
			var _loc1_: number = iGlobal.Player.skillList.length;
			var _loc4_: number = 0;
			while (_loc4_ < _loc1_) {
				_loc2_ = iGlobal.Player.skillList[_loc4_].skillData;
				_loc3_ = iGlobal.Player.skillList[_loc4_].level;
				_loc5_ = 0;
				while (_loc5_ < _loc2_.statList[_loc3_].length) {
					iGlobal.Player.skillStatus[_loc2_.statList[_loc3_][_loc5_].name] = iGlobal.Player.skillStatus[_loc2_.statList[_loc3_][_loc5_].name] + _loc2_.statList[_loc3_][_loc5_].value;
					_loc5_++;
				}
				if (_loc2_.effectList && iGlobal.Player.leftHand) {
					if (iGlobal.Player.leftHand.category == _loc2_.category) {
						_loc5_ = 0;
						while (_loc5_ < _loc2_.effectList[_loc3_].length) {
							if (_loc2_.effectList[_loc3_][_loc5_].name == iData.iItem.Stat.attackMin) {
								iGlobal.Player.skillStatus.attack.min = iGlobal.Player.skillStatus.attack.min + _loc2_.effectList[_loc3_][_loc5_].value;
							}
							else if (_loc2_.effectList[_loc3_][_loc5_].name == iData.iItem.Stat.attackMax) {
								iGlobal.Player.skillStatus.attack.max = iGlobal.Player.skillStatus.attack.max + _loc2_.effectList[_loc3_][_loc5_].value;
							}
							else {
								iGlobal.Player.skillStatus[_loc2_.effectList[_loc3_][_loc5_].name] = iGlobal.Player.skillStatus[_loc2_.effectList[_loc3_][_loc5_].name] + _loc2_.effectList[_loc3_][_loc5_].value;
							}
							_loc5_++;
						}
					}
				}
				_loc4_++;
			}
			iGlobal.Player.updateInfoWindow();
		}

		private static updateEquipInfo(): any {
			var _loc3_: number = 0;
			var _loc4_: Array<iData.iItem.Stat> = <any>null;
			var _loc5_: number = 0;
			iGlobal.Player.equipStatus = new iData.BasicStatus(0, 0, 0, 0, 0, 0, 0);
			var _loc1_: Array<any> = ["leftHand", "rightHand", "feet", "head", "necklace", "ring", "body"];
			var _loc2_: number = 0;
			while (_loc2_ < _loc1_.length) {
				if (iGlobal.Player[_loc1_[_loc2_]]) {
					_loc3_ = (iGlobal.Player[_loc1_[_loc2_]] as iData.iItem.Equipment).basicStat.length;
					_loc4_ = (iGlobal.Player[_loc1_[_loc2_]] as iData.iItem.Equipment).basicStat;
					_loc5_ = 0;
					while (_loc5_ < _loc3_) {
						if (_loc4_[_loc5_].name == iData.iItem.Stat.attackMin) {
							iGlobal.Player.equipStatus.attack.min = iGlobal.Player.equipStatus.attack.min + _loc4_[_loc5_].value;
						}
						else if (_loc4_[_loc5_].name == iData.iItem.Stat.attackMax) {
							iGlobal.Player.equipStatus.attack.max = iGlobal.Player.equipStatus.attack.max + _loc4_[_loc5_].value;
						}
						else if (_loc4_[_loc5_].name == iData.iItem.Stat.ATTACK) {
							iGlobal.Player.equipStatus.attack.min = iGlobal.Player.equipStatus.attack.min + _loc4_[_loc5_].value;
							iGlobal.Player.equipStatus.attack.max = iGlobal.Player.equipStatus.attack.max + _loc4_[_loc5_].value;
						}
						else {
							iGlobal.Player.equipStatus[_loc4_[_loc5_].name] = iGlobal.Player.equipStatus[_loc4_[_loc5_].name] + _loc4_[_loc5_].value;
						}
						_loc5_++;
					}
					_loc3_ = (iGlobal.Player[_loc1_[_loc2_]] as iData.iItem.Equipment).qualityStat.length;
					_loc4_ = (iGlobal.Player[_loc1_[_loc2_]] as iData.iItem.Equipment).qualityStat;
					_loc5_ = 0;
					while (_loc5_ < _loc3_) {
						if (_loc4_[_loc5_].name == iData.iItem.Stat.attackMin) {
							iGlobal.Player.equipStatus.attack.min = iGlobal.Player.equipStatus.attack.min + _loc4_[_loc5_].value;
						}
						else if (_loc4_[_loc5_].name == iData.iItem.Stat.attackMax) {
							iGlobal.Player.equipStatus.attack.max = iGlobal.Player.equipStatus.attack.max + _loc4_[_loc5_].value;
						}
						else if (_loc4_[_loc5_].name == iData.iItem.Stat.ATTACK) {
							iGlobal.Player.equipStatus.attack.min = iGlobal.Player.equipStatus.attack.min + _loc4_[_loc5_].value;
							iGlobal.Player.equipStatus.attack.max = iGlobal.Player.equipStatus.attack.max + _loc4_[_loc5_].value;
						}
						else {
							iGlobal.Player.equipStatus[_loc4_[_loc5_].name] = iGlobal.Player.equipStatus[_loc4_[_loc5_].name] + _loc4_[_loc5_].value;
						}
						_loc5_++;
					}
					_loc3_ = (iGlobal.Player[_loc1_[_loc2_]] as iData.iItem.Equipment).levelStat.length;
					_loc4_ = (iGlobal.Player[_loc1_[_loc2_]] as iData.iItem.Equipment).levelStat;
					_loc5_ = 0;
					while (_loc5_ < _loc3_) {
						if (_loc4_[_loc5_].name == iData.iItem.Stat.attackMin) {
							iGlobal.Player.equipStatus.attack.min = iGlobal.Player.equipStatus.attack.min + _loc4_[_loc5_].value;
						}
						else if (_loc4_[_loc5_].name == iData.iItem.Stat.attackMax) {
							iGlobal.Player.equipStatus.attack.max = iGlobal.Player.equipStatus.attack.max + _loc4_[_loc5_].value;
						}
						else if (_loc4_[_loc5_].name == iData.iItem.Stat.ATTACK) {
							iGlobal.Player.equipStatus.attack.min = iGlobal.Player.equipStatus.attack.min + _loc4_[_loc5_].value;
							iGlobal.Player.equipStatus.attack.max = iGlobal.Player.equipStatus.attack.max + _loc4_[_loc5_].value;
						}
						else {
							iGlobal.Player.equipStatus[_loc4_[_loc5_].name] = iGlobal.Player.equipStatus[_loc4_[_loc5_].name] + _loc4_[_loc5_].value;
						}
						_loc5_++;
					}
				}
				_loc2_++;
			}
			iGlobal.Player.updateInfoWindow();
			iGlobal.Player.updateEquipWindow();
		}

		private static updateEquipWindow(): any {
			if (iPanel.iScene.MainScene.otherPanel && iPanel.iScene.MainScene.otherPanel.equipWindow) {
				iPanel.iScene.MainScene.otherPanel.equipWindow.update();
			}
		}

		public static updateBattleSkillWindow(): any {
			if (iPanel.iScene.MainScene.battleSkillPanel) {
				iPanel.iScene.MainScene.battleSkillPanel.update();
			}
		}

		private static updateXpBar(): any {
			if (iPanel.iScene.MainScene.playerInfoPanel) {
				iPanel.iScene.MainScene.playerInfoPanel.upDateExp();
			}
		}

		private static updateSkillPanel(): any {
			if (iPanel.iScene.MainScene.otherPanel && iPanel.iScene.MainScene.otherPanel.skillWindow) {
				iPanel.iScene.MainScene.otherPanel.skillWindow.onUpdate();
			}
		}

		//手动保存
		// public static manuallySave():any
		// {
		// 	var _loc4_:number = 0;
		// 	var _loc1_:any = <any>iGlobal.Player.playerName + "<>" + iPanel.iScene.SaveScene.slot + "<>";
		// 	var _loc2_:any = <any>"";
		// 	_loc2_ = _loc2_ + "@BASIC:";
		// 	var _loc3_:Array<any> = ["lv","age","ap","xp","gold","apCost","caculate","BAGMAX","PETMAX"];
		// 	_loc4_ = 0;
		// 	while(_loc4_ < _loc3_.length)
		// 	{
		// 		_loc2_ = _loc2_ + (_loc3_[_loc4_] + "," + iGlobal.Player[_loc3_[_loc4_]] + ",");
		// 		_loc4_++;
		// 	}
		// 	_loc2_ = _loc2_ + "@RACE:";
		// 	_loc2_ = _loc2_ + iGlobal.Player.race.name;
		// 	_loc3_ = ["head","body","feet","necklace","ring","leftHand","rightHand"];
		// 	_loc2_ = _loc2_ + "@EQUIP:";
		// 	_loc4_ = 0;
		// 	while(_loc4_ < _loc3_.length)
		// 	{
		// 		if(iGlobal.Player[_loc3_[_loc4_]])
		// 		{
		// 			_loc2_ = _loc2_ + (_loc3_[_loc4_] + "," + (iGlobal.Player[_loc3_[_loc4_]] as iData.iItem.Equipment).save() + ",");
		// 		}
		// 		_loc4_++;
		// 	}
		// 	_loc2_ = _loc2_ + "@ITEM:";
		// 	_loc4_ = 0;
		// 	while(_loc4_ < iGlobal.Player.itemList.length)
		// 	{
		// 		_loc2_ = _loc2_ + (iGlobal.Player.itemList[_loc4_].save() + ",");
		// 		_loc4_++;
		// 	}
		// 	_loc2_ = _loc2_ + "@SKILL:";
		// 	_loc4_ = 0;
		// 	while(_loc4_ < iGlobal.Player.skillList.length)
		// 	{
		// 		_loc2_ = _loc2_ + (iGlobal.Player.skillList[_loc4_].save() + ",");
		// 		_loc4_++;
		// 	}
		// 	_loc2_ = _loc2_ + "@TITLE:";
		// 	_loc4_ = 0;
		// 	while(_loc4_ < iData.iPlayer.TitleList.list.length)
		// 	{
		// 		_loc2_ = _loc2_ + (iData.iPlayer.TitleList.list[_loc4_].save() + ",");
		// 		_loc4_++;
		// 	}
		// 	_loc2_ = _loc2_ + "@OTHER:";
		// 	_loc3_ = ["hp","mp","luck","intelligence","str","dex","will"];
		// 	_loc4_ = 0;
		// 	while(_loc4_ < _loc3_.length)
		// 	{
		// 		_loc2_ = _loc2_ + (_loc3_[_loc4_] + "," + iGlobal.Player.basicStatus[_loc3_[_loc4_]] + ",");
		// 		_loc4_++;
		// 	}
		// 	_loc2_ = _loc2_ + "@GLOBAL:";
		// 	_loc3_ = ["battle","battleIntro","money","exp","item","item0","item1","item2","item3","item4","sword","axe","bow","crossbow","sceptre","staff","dagger","tome","shield","head_light","head_medium","head_heavy","body_light","body_medium","body_heavy","feet_light","feet_medium","feet_heavy","ring","necklace"];
		// 	_loc2_ = _loc2_ + "toggle,";
		// 	_loc4_ = 0;
		// 	while(_loc4_ < _loc3_.length)
		// 	{
		// 		_loc2_ = _loc2_ + (_loc3_[_loc4_] + "#" + iGlobal.Global[_loc3_[_loc4_] + "_toggle"] + "#");
		// 		_loc4_++;
		// 	}
		// 	_loc2_ = _loc2_ + "@SELECTION:";
		// 	_loc2_ = _loc2_ + ("map," + iGlobal.Global.map.mapData.name + "#");
		// 	if(iGlobal.Player.title)
		// 	{
		// 		_loc2_ = _loc2_ + ("title," + iGlobal.Player.title.name);
		// 	}
		// 	_loc2_ = _loc2_ + "@PET:";
		// 	_loc4_ = 0;
		// 	while(_loc4_ < iGlobal.Player.petList.length)
		// 	{
		// 		_loc2_ = _loc2_ + (iGlobal.Player.petList[_loc4_].save() + ",");
		// 		_loc4_++;
		// 	}
		// 	_loc2_ = _loc2_ + "@EQUIPEDPET:";
		// 	if(iGlobal.Player.pet)
		// 	{
		// 		_loc2_ = _loc2_ + iGlobal.Player.pet.save();
		// 	}
		// 	var _loc5_:egret.ByteArray = new egret.ByteArray();
		// 	_loc5_.writeUTFBytes(_loc2_);
		// 	_loc5_.compress();
		// 	_loc1_ = _loc1_ + tool.Base64.Encode(_loc5_);
		// 	var _loc6_:flash.net.FileReference = <any>new FileReference();
		// 	_loc6_["save"](_loc1_,iPanel.iScene.SaveScene.slot);
		// }

		//手动读取
		// public static manualLoad(param1:string):any
		// {
		// 	var _loc7_:Array<any> = <any>null;
		// 	var _loc8_:Array<any> = <any>null;
		// 	var _loc9_:Array<any> = <any>null;
		// 	var _loc10_:Array<any> = <any>null;
		// 	var _loc11_:Array<any> = <any>null;
		// 	var _loc12_:Array<any> = <any>null;
		// 	var _loc13_:Array<any> = <any>null;
		// 	var _loc14_:Array<any> = <any>null;
		// 	var _loc15_:Array<any> = <any>null;
		// 	var _loc16_:Array<any> = <any>null;
		// 	var _loc17_:number = 0;
		// 	var _loc18_:Array<any> = <any>null;
		// 	var _loc19_:Array<any> = <any>null;
		// 	var _loc20_:number = 0;
		// 	var _loc2_:Array<any> = param1.split("<>");
		// 	iGlobal.Player.playerName = _loc2_[0];
		// 	iPanel.iScene.SaveScene.slot = _loc2_[1];
		// 	var _loc3_:egret.ByteArray = tool.Base64.Decode(_loc2_[2]);
		// 	_loc3_.uncompress();
		// 	var _loc4_:string = _loc3_.toString();
		// 	var _loc5_:Array<any> = _loc4_.split("@");
		// 	var _loc6_:number = 0;
		// 	while(_loc6_ < _loc5_.length)
		// 	{
		// 		_loc7_ = (<string>_loc5_[_loc6_]).split(":");
		// 		switch(_loc7_[0])
		// 		{
		// 		case "BASIC" :
		// 			_loc8_ = (<string>_loc7_[1]).split(",");
		// 			_loc17_ = flash.checkInt(0);
		// 			while(_loc17_ < _loc8_.length)
		// 			{
		// 				if(_loc8_[_loc17_] != "")
		// 				{
		// 					iGlobal.Player[_loc8_[_loc17_]] = _loc8_[_loc17_ + 1];
		// 				}
		// 				_loc17_ = flash.checkInt(_loc17_ + 2);
		// 			}
		// 			break;
		// 		case "RACE" :
		// 			_loc17_ = flash.checkInt(0);
		// 			while(_loc17_ < iData.RaceList.list.length)
		// 			{
		// 				if(_loc7_[1] == "undeath")
		// 				{
		// 					iGlobal.Player.race = iData.RaceList.UNDEATH;
		// 					break;
		// 				}
		// 				if(_loc7_[1] == iData.RaceList.list[_loc17_].name)
		// 				{
		// 					iGlobal.Player.race = iData.RaceList.list[_loc17_];
		// 					break;
		// 				}
		// 				_loc17_++;
		// 			}
		// 			break;
		// 		case "EQUIP" :
		// 			_loc9_ = (<string>_loc7_[1]).split(",");
		// 			_loc17_ = flash.checkInt(0);
		// 			while(_loc17_ < _loc9_.length)
		// 			{
		// 				if(_loc9_[_loc17_] != "")
		// 				{
		// 					iGlobal.Player[_loc9_[_loc17_]] = iData.iItem.Equipment.load(_loc9_[_loc17_ + 1]);
		// 				}
		// 				_loc17_ = flash.checkInt(_loc17_ + 2);
		// 			}
		// 			break;
		// 		case "ITEM" :
		// 			_loc10_ = (<string>_loc7_[1]).split(",");
		// 			_loc17_ = flash.checkInt(0);
		// 			while(_loc17_ < _loc10_.length)
		// 			{
		// 				if(_loc10_[_loc17_] != "")
		// 				{
		// 					iGlobal.Player.itemList.push(iData.iItem.Equipment.load(_loc10_[_loc17_]));
		// 				}
		// 				_loc17_++;
		// 			}
		// 			break;
		// 		case "SKILL" :
		// 			_loc11_ = (<string>_loc7_[1]).split(",");
		// 			_loc17_ = flash.checkInt(0);
		// 			while(_loc17_ < _loc11_.length)
		// 			{
		// 				if(_loc11_[_loc17_] != "")
		// 				{
		// 					iGlobal.Player.skillList.push(iData.iSkill.Skill.load(_loc11_[_loc17_]));
		// 				}
		// 				_loc17_++;
		// 			}
		// 			break;
		// 		case "TITLE" :
		// 			_loc12_ = (<string>_loc7_[1]).split(",");
		// 			_loc17_ = flash.checkInt(0);
		// 			while(_loc17_ < iData.iPlayer.TitleList.list.length)
		// 			{
		// 				iData.iPlayer.TitleList.list[_loc17_].load(_loc12_[_loc17_]);
		// 				_loc17_++;
		// 			}
		// 			break;
		// 		case "OTHER" :
		// 			_loc13_ = (<string>_loc7_[1]).split(",");
		// 			iGlobal.Player.basicStatus = new iData.BasicStatus(0,0,0,0,0,0,0);
		// 			_loc17_ = flash.checkInt(0);
		// 			while(_loc17_ < _loc13_.length)
		// 			{
		// 				if(_loc13_[_loc17_] != "")
		// 				{
		// 					iGlobal.Player.basicStatus[_loc13_[_loc17_]] = _loc13_[_loc17_ + 1];
		// 				}
		// 				_loc17_ = flash.checkInt(_loc17_ + 2);
		// 			}
		// 			break;
		// 		case "GLOBAL" :
		// 			_loc14_ = (<string>_loc7_[1]).split(",");
		// 			switch(_loc14_[0])
		// 			{
		// 			case "toggle" :
		// 				_loc18_ = (<string>_loc14_[1]).split("#");
		// 				_loc17_ = flash.checkInt(0);
		// 				while(_loc17_ < _loc18_.length)
		// 				{
		// 					if(_loc18_[_loc17_] != "")
		// 					{
		// 						if(_loc18_[_loc17_ + 1] == "true")
		// 						{
		// 							iGlobal.Global[_loc18_[_loc17_] + "_toggle"] = true;
		// 						}
		// 						else
		// 						{
		// 							iGlobal.Global[_loc18_[_loc17_] + "_toggle"] = false;
		// 						}
		// 					}
		// 					_loc17_ = flash.checkInt(_loc17_ + 2);
		// 				}
		// 			}
		// 			break;
		// 		case "SELECTION" :
		// 			_loc15_ = (<string>_loc7_[1]).split("#");
		// 			_loc17_ = flash.checkInt(0);
		// 			while(_loc17_ < _loc15_.length)
		// 			{
		// 				_loc19_ = (<string>_loc15_[_loc17_]).split(",");
		// 				switch(_loc19_[0])
		// 				{
		// 				case "map" :
		// 					_loc20_ = flash.checkInt(0);
		// 					while(_loc20_ < iData.iMap.MapList.list.length)
		// 					{
		// 						if(_loc19_[1] == iData.iMap.MapList.list[_loc20_].name)
		// 						{
		// 							iGlobal.Global.map = new iData.iMap.Map(iData.iMap.MapList.list[_loc20_]);
		// 						}
		// 						_loc20_++;
		// 					}
		// 					break;
		// 				case "title" :
		// 					_loc20_ = flash.checkInt(0);
		// 					while(_loc20_ < iData.iPlayer.TitleList.list.length)
		// 					{
		// 						if(_loc19_[1] == iData.iPlayer.TitleList.list[_loc20_].name)
		// 						{
		// 							iGlobal.Player.title = iData.iPlayer.TitleList.list[_loc20_];
		// 						}
		// 						_loc20_++;
		// 					}
		// 				}
		// 				_loc17_++;
		// 			}
		// 			break;
		// 		case "PET" :
		// 			_loc16_ = (<string>_loc7_[1]).split(",");
		// 			_loc17_ = flash.checkInt(0);
		// 			while(_loc17_ < _loc16_.length)
		// 			{
		// 				if(_loc16_[_loc17_] != "")
		// 				{
		// 					iGlobal.Player.petList.push(iData.iPet.Pet.load(_loc16_[_loc17_]));
		// 				}
		// 				_loc17_++;
		// 			}
		// 			break;
		// 		case "EQUIPEDPET" :
		// 			if(_loc7_[1] != "")
		// 			{
		// 				iGlobal.Player.pet = iData.iPet.Pet.load(_loc7_[1]);
		// 			}
		// 		}
		// 		_loc6_++;
		// 	}
		// 	if(<any>!iGlobal.Player.basicStatus)
		// 	{
		// 		iGlobal.Player.caculateInitStat();
		// 	}
		// 	iGlobal.Player.updateAllInfo();
		// 	iGlobal.Player.updateXpBar();
		// }

		//自动保存
		// public static save():any
		// {
		// 	var _loc6_:number = flash.checkInt(0);
		// 	var _loc1_:flash.SharedObject = flash.SharedObject.getLocal(iPanel.iScene.SaveScene.slot);
		// 	_loc1_.data["userName"] = iGlobal.Player.playerName;
		// 	var _loc2_:flash.As3Date = new flash.As3Date();
		// 	var _loc3_:any = <any>"[" + (_loc2_.getMonth() + 1) + "/" + _loc2_.getDate() + "/" + _loc2_.getHours() + ":" + _loc2_.getMinutes() + "]";
		// 	_loc1_.data["time"] = _loc3_;
		// 	var _loc4_:any = <any>"";
		// 	_loc4_ = _loc4_ + "@BASIC:";
		// 	var _loc5_:Array<any> = ["lv","age","ap","xp","gold","apCost","caculate","BAGMAX","PETMAX"];
		// 	_loc6_ = flash.checkInt(0);
		// 	while(_loc6_ < _loc5_.length)
		// 	{
		// 		_loc4_ = _loc4_ + (_loc5_[_loc6_] + "," + iGlobal.Player[_loc5_[_loc6_]] + ",");
		// 		_loc6_++;
		// 	}
		// 	_loc4_ = _loc4_ + "@RACE:";
		// 	_loc4_ = _loc4_ + iGlobal.Player.race.name;
		// 	_loc5_ = ["head","body","feet","necklace","ring","leftHand","rightHand"];
		// 	_loc4_ = _loc4_ + "@EQUIP:";
		// 	_loc6_ = flash.checkInt(0);
		// 	while(_loc6_ < _loc5_.length)
		// 	{
		// 		if(iGlobal.Player[_loc5_[_loc6_]])
		// 		{
		// 			_loc4_ = _loc4_ + (_loc5_[_loc6_] + "," + (flash.As3As(iGlobal.Player[_loc5_[_loc6_]],iData.iItem.Equipment)).save() + ",");
		// 		}
		// 		_loc6_++;
		// 	}
		// 	_loc4_ = _loc4_ + "@ITEM:";
		// 	_loc6_ = flash.checkInt(0);
		// 	while(_loc6_ < iGlobal.Player.itemList.length)
		// 	{
		// 		_loc4_ = _loc4_ + (iGlobal.Player.itemList[_loc6_].save() + ",");
		// 		_loc6_++;
		// 	}
		// 	_loc4_ = _loc4_ + "@SKILL:";
		// 	_loc6_ = flash.checkInt(0);
		// 	while(_loc6_ < iGlobal.Player.skillList.length)
		// 	{
		// 		_loc4_ = _loc4_ + (iGlobal.Player.skillList[_loc6_].save() + ",");
		// 		_loc6_++;
		// 	}
		// 	_loc4_ = _loc4_ + "@TITLE:";
		// 	_loc6_ = flash.checkInt(0);
		// 	while(_loc6_ < iData.iPlayer.TitleList.list.length)
		// 	{
		// 		_loc4_ = _loc4_ + (iData.iPlayer.TitleList.list[_loc6_].save() + ",");
		// 		_loc6_++;
		// 	}
		// 	_loc4_ = _loc4_ + "@OTHER:";
		// 	_loc5_ = ["hp","mp","luck","intelligence","str","dex","will"];
		// 	_loc6_ = flash.checkInt(0);
		// 	while(_loc6_ < _loc5_.length)
		// 	{
		// 		_loc4_ = _loc4_ + (_loc5_[_loc6_] + "," + iGlobal.Player.basicStatus[_loc5_[_loc6_]] + ",");
		// 		_loc6_++;
		// 	}
		// 	_loc4_ = _loc4_ + "@GLOBAL:";
		// 	_loc5_ = ["battle","battleIntro","money","exp","item","item0","item1","item2","item3","item4","sword","axe","bow","crossbow","sceptre","staff","dagger","tome","shield","head_light","head_medium","head_heavy","body_light","body_medium","body_heavy","feet_light","feet_medium","feet_heavy","ring","necklace","sound"];
		// 	_loc4_ = _loc4_ + "toggle,";
		// 	_loc6_ = flash.checkInt(0);
		// 	while(_loc6_ < _loc5_.length)
		// 	{
		// 		_loc4_ = _loc4_ + (_loc5_[_loc6_] + "#" + iGlobal.Global[_loc5_[_loc6_] + "_toggle"] + "#");
		// 		_loc6_++;
		// 	}
		// 	_loc4_ = _loc4_ + "@SELECTION:";
		// 	_loc4_ = _loc4_ + ("map," + iGlobal.Global.map.mapData.name + "#");
		// 	if(iGlobal.Player.title)
		// 	{
		// 		_loc4_ = _loc4_ + ("title," + iGlobal.Player.title.name);
		// 	}
		// 	_loc4_ = _loc4_ + "@PET:";
		// 	_loc6_ = flash.checkInt(0);
		// 	while(_loc6_ < iGlobal.Player.petList.length)
		// 	{
		// 		_loc4_ = _loc4_ + (iGlobal.Player.petList[_loc6_].save() + ",");
		// 		_loc6_++;
		// 	}
		// 	_loc4_ = _loc4_ + "@EQUIPEDPET:";
		// 	if(iGlobal.Player.pet)
		// 	{
		// 		_loc4_ = _loc4_ + iGlobal.Player.pet.save();
		// 	}
		// 	var _loc7_:flash.ByteArray = new flash.ByteArray();
		// 	_loc7_.writeUTFBytes(_loc4_);
		// 	_loc7_.compress();
		// 	_loc1_.data["info"] = tool.Base64.Encode(_loc7_);
		// 	_loc1_.flush();
		// }

		//自动读取
		// public static load():any
		// {
		// 	var _loc6_:Array<any> = <any>null;
		// 	var _loc7_:Array<any> = <any>null;
		// 	var _loc8_:Array<any> = <any>null;
		// 	var _loc9_:Array<any> = <any>null;
		// 	var _loc10_:Array<any> = <any>null;
		// 	var _loc11_:Array<any> = <any>null;
		// 	var _loc12_:Array<any> = <any>null;
		// 	var _loc13_:Array<any> = <any>null;
		// 	var _loc14_:Array<any> = <any>null;
		// 	var _loc15_:Array<any> = <any>null;
		// 	var _loc16_:number = 0;
		// 	var _loc17_:Array<any> = <any>null;
		// 	var _loc18_:Array<any> = <any>null;
		// 	var _loc19_:number = 0;
		// 	var _loc1_:flash.SharedObject = flash.SharedObject.getLocal(iPanel.iScene.SaveScene.slot);
		// 	iGlobal.Player.playerName = _loc1_.data["userName"];
		// 	var _loc2_:flash.ByteArray = tool.Base64.Decode(_loc1_.data["info"]);
		// 	_loc2_.uncompress();
		// 	var _loc3_:string = _loc2_.toString();
		// 	var _loc4_:Array<any> = _loc3_.split("@");
		// 	var _loc5_:number = 0;
		// 	while(_loc5_ < _loc4_.length)
		// 	{
		// 		_loc6_ = (<string>_loc4_[_loc5_]).split(":");
		// 		switch(_loc6_[0])
		// 		{
		// 		case "BASIC" :
		// 			_loc7_ = (<string>_loc6_[1]).split(",");
		// 			_loc16_ = 0;
		// 			while(_loc16_ < _loc7_.length)
		// 			{
		// 				if(_loc7_[_loc16_] != "")
		// 				{
		// 					iGlobal.Player[_loc7_[_loc16_]] = _loc7_[_loc16_ + 1];
		// 				}
		// 				_loc16_ = _loc16_ + 2;
		// 			}
		// 			break;
		// 		case "RACE" :
		// 			_loc16_ = 0;
		// 			while(_loc16_ < iData.RaceList.list.length)
		// 			{
		// 				if(_loc6_[1] == "undeath")
		// 				{
		// 					iGlobal.Player.race = iData.RaceList.UNDEATH;
		// 					break;
		// 				}
		// 				if(_loc6_[1] == iData.RaceList.list[_loc16_].name)
		// 				{
		// 					iGlobal.Player.race = iData.RaceList.list[_loc16_];
		// 					break;
		// 				}
		// 				_loc16_++;
		// 			}
		// 			break;
		// 		case "EQUIP" :
		// 			_loc8_ = (<string>_loc6_[1]).split(",");
		// 			_loc16_ = 0;
		// 			while(_loc16_ < _loc8_.length)
		// 			{
		// 				if(_loc8_[_loc16_] != "")
		// 				{
		// 					iGlobal.Player[_loc8_[_loc16_]] = iData.iItem.Equipment.load(_loc8_[_loc16_ + 1]);
		// 				}
		// 				_loc16_ = _loc16_ + 2;
		// 			}
		// 			break;
		// 		case "ITEM" :
		// 			_loc9_ = (<string>_loc6_[1]).split(",");
		// 			_loc16_ = 0;
		// 			while(_loc16_ < _loc9_.length)
		// 			{
		// 				if(_loc9_[_loc16_] != "")
		// 				{
		// 					iGlobal.Player.itemList.push(iData.iItem.Equipment.load(_loc9_[_loc16_]));
		// 				}
		// 				_loc16_++;
		// 			}
		// 			break;
		// 		case "SKILL" :
		// 			_loc10_ = (<string>_loc6_[1]).split(",");
		// 			_loc16_ = 0;
		// 			while(_loc16_ < _loc10_.length)
		// 			{
		// 				if(_loc10_[_loc16_] != "")
		// 				{
		// 					iGlobal.Player.skillList.push(iData.iSkill.Skill.load(_loc10_[_loc16_]));
		// 				}
		// 				_loc16_++;
		// 			}
		// 			break;
		// 		case "TITLE" :
		// 			_loc11_ = (<string>_loc6_[1]).split(",");
		// 			_loc16_ = 0;
		// 			while(_loc16_ < iData.iPlayer.TitleList.list.length)
		// 			{
		// 				iData.iPlayer.TitleList.list[_loc16_].load(_loc11_[_loc16_]);
		// 				_loc16_++;
		// 			}
		// 			break;
		// 		case "OTHER" :
		// 			_loc12_ = (<string>_loc6_[1]).split(",");
		// 			iGlobal.Player.basicStatus = new iData.BasicStatus(0,0,0,0,0,0,0);
		// 			_loc16_ = 0;
		// 			while(_loc16_ < _loc12_.length)
		// 			{
		// 				if(_loc12_[_loc16_] != "")
		// 				{
		// 					iGlobal.Player.basicStatus[_loc12_[_loc16_]] = _loc12_[_loc16_ + 1];
		// 				}
		// 				_loc16_ = _loc16_ + 2;
		// 			}
		// 			break;
		// 		case "GLOBAL" :
		// 			_loc13_ = (<string>_loc6_[1]).split(",");
		// 			switch(_loc13_[0])
		// 			{
		// 			case "toggle" :
		// 				_loc17_ = (<string>_loc13_[1]).split("#");
		// 				_loc16_ = 0;
		// 				while(_loc16_ < _loc17_.length)
		// 				{
		// 					if(_loc17_[_loc16_] != "")
		// 					{
		// 						if(_loc17_[_loc16_ + 1] == "true")
		// 						{
		// 							iGlobal.Global[_loc17_[_loc16_] + "_toggle"] = true;
		// 						}
		// 						else
		// 						{
		// 							iGlobal.Global[_loc17_[_loc16_] + "_toggle"] = false;
		// 						}
		// 					}
		// 					_loc16_ = _loc16_ + 2;
		// 				}
		// 			}
		// 			break;
		// 		case "SELECTION" :
		// 			_loc14_ = (<string>_loc6_[1]).split("#");
		// 			_loc16_ = 0;
		// 			while(_loc16_ < _loc14_.length)
		// 			{
		// 				_loc18_ = (<string>_loc14_[_loc16_]).split(",");
		// 				switch(_loc18_[0])
		// 				{
		// 				case "map" :
		// 					_loc19_ = 0;
		// 					while(_loc19_ < iData.iMap.MapList.list.length)
		// 					{
		// 						if(_loc18_[1] == iData.iMap.MapList.list[_loc19_].name)
		// 						{
		// 							iGlobal.Global.map = new iData.iMap.Map(iData.iMap.MapList.list[_loc19_]);
		// 						}
		// 						_loc19_++;
		// 					}
		// 					break;
		// 				case "title" :
		// 					_loc19_ = 0;
		// 					while(_loc19_ < iData.iPlayer.TitleList.list.length)
		// 					{
		// 						if(_loc18_[1] == iData.iPlayer.TitleList.list[_loc19_].name)
		// 						{
		// 							iGlobal.Player.title = iData.iPlayer.TitleList.list[_loc19_];
		// 						}
		// 						_loc19_++;
		// 					}
		// 				}
		// 				_loc16_++;
		// 			}
		// 			break;
		// 		case "PET" :
		// 			_loc15_ = (<string>_loc6_[1]).split(",");
		// 			_loc16_ = 0;
		// 			while(_loc16_ < _loc15_.length)
		// 			{
		// 				if(_loc15_[_loc16_] != "")
		// 				{
		// 					iGlobal.Player.petList.push(iData.iPet.Pet.load(_loc15_[_loc16_]));
		// 				}
		// 				_loc16_++;
		// 			}
		// 			break;
		// 		case "EQUIPEDPET" :
		// 			if(_loc6_[1] != "")
		// 			{
		// 				iGlobal.Player.pet = iData.iPet.Pet.load(_loc6_[1]);
		// 			}
		// 		}
		// 		_loc5_++;
		// 	}
		// 	if(<any>!iGlobal.Player.basicStatus)
		// 	{
		// 		iGlobal.Player.caculateInitStat();
		// 	}
		// 	iGlobal.Player.updateAllInfo();
		// 	iGlobal.Player.updateXpBar();
		// }

	}
}

iGlobal.Player.BAGMAX = 50;
iGlobal.Player.PETMAX = 10;
iGlobal.Player.caculate = 0;
iGlobal.Player.playerName = "Jason";
iGlobal.Player.skillStatus = new iData.BasicStatus(0, 0, 0, 0, 0, 0, 0);
iGlobal.Player.equipStatus = new iData.BasicStatus(0, 0, 0, 0, 0, 0, 0);
iGlobal.Player.skillList = new Array<iData.iSkill.Skill>();
iGlobal.Player.equipSkillList = new Array<iData.iSkill.ActiveSkill>();
iGlobal.Player.itemList = new Array<iData.iItem.Equipment>();
iGlobal.Player.titleList = new Array<iData.iPlayer.Title>();
iGlobal.Player.petList = new Array<iData.iPet.Pet>();
