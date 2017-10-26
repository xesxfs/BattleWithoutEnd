module iData {
	export class Battle extends egret.HashObject {
		public turn: number = 1;
		public playerHp: number = 0;
		public playerMp: number = 0;
		/**当前遇见的怪物 */
		public monster: iData.iMonster.Monster;
		public monsterHp: number = 0;
		public petHp: number = 0;
		public petMp: number = 0;
		public pet: iData.iPet.Pet;
		public boss: iData.iMonster.Boss;
		public timer: egret.Timer;
		public CR: number = 50;

		public constructor() {
			super();
			this.timer = new egret.Timer(500);
			this.timer.addEventListener(egret.TimerEvent.TIMER, this.run, null);
			this.timer.start();
		}


		/**
		 * 生成遇见的怪物
		 */
		public init() {
			var _loc1_: iData.iMonster.Monster;
			if (<any>!this.boss) {
				this.boss = iGlobal.Global.map.getBoss();
			}
			/**5%的概率生产一个Boss */
			if (Math.random() < 0.05) {
				this.monster = this.boss;
				this.monsterHp = this.boss.hpleft;
			}
			else {
				/**随机一个普通怪物 */
				_loc1_ = new iData.iMonster.Monster(iGlobal.Global.map.mapData.monsterList[Math.random() * iGlobal.Global.map.mapData.monsterList.length >> 0]);
				this.monster = _loc1_;
				this.monsterHp = this.monster.hp;
			}

			this.playerHp = iGlobal.Player.hp;
			this.playerMp = iGlobal.Player.mp;
			this.pet = iGlobal.Player.pet;
			if (this.pet) {
				this.petHp = iGlobal.Player.pet.hp;
				this.petMp = iGlobal.Player.pet.mp;
			}
			//更新界面
			iPanel.iScene.MainScene.monsterInfoPanel.update();
			iPanel.iScene.MainScene.petInfoPanel.update();

			if (this.monster.title) {
				iPanel.iScene.MainScene.allInfoPanel.addText("你遇到了" + this.monster.nameHtml + " " + this.monster.title.name + "!", iGlobal.Global.battleIntro);
			}
			else {
				iPanel.iScene.MainScene.allInfoPanel.addText("你遇到了" + this.monster.nameHtml + "!", iGlobal.Global.battleIntro);
			}
			this.turn = 1;
			if (iPanel.iScene.MainScene.lootPanel) {
				iPanel.iScene.MainScene.lootPanel.update();
			}
		}

		public changeTurn() {
			this.turn = this.turn * -1;
			if (this.checkDead()) {
				this.turn = 1;
			}
		}
		/**
		 * 检查是否死忙
		 * @returns boolean
		 */
		private checkDead(): boolean {
			if (this.playerHp <= 0) {
				if (this.monster instanceof iData.iMonster.Boss) {
					this.boss.hpleft = this.monsterHp;
				}
				this.playerDie();
				this.init();
				return true;
			}
			if (this.petHp <= 0) {
				this.pet = null;
			}
			if (this.monsterHp <= 0) {
				if (this.monster instanceof iData.iMonster.Boss) {
					this.boss = null;
				}
				this.giveTrophy();
				this.init();
				return true;
			}
			return false;
		}

		private playerDie(): any {
			iPanel.iScene.MainScene.allInfoPanel.addText("<font color=\'#ff4040\'>你被击败了!</font>", iGlobal.Global.battleIntro);
		}

		private giveTrophy(): any {
			iPanel.iScene.MainScene.allInfoPanel.addText(this.monster.nameHtml + "<font color=\'#21c4af\'>被击败了!</font>", iGlobal.Global.battleIntro);
			iGlobal.Player.addExp(this.monster.exp);
			iGlobal.Player.addMoney(this.monster.money);
			this.monster.dropItem();
			this.monster.dropPet();
			if (this.monster.CP / iGlobal.Player.combatPower > 3) {
				iPlayer.TitleList.updateTitleInfo("kill", 0, 1);
			}
			if (this.pet) {
				this.pet.addExp(this.monster.exp);
			}
		}

		/**500毫秒运行 */
		public run(param1: egret.Event = null) {

			if (this.monster) {
				this.fight();
			}
			iGlobal.Player.caculate++;
			if (iGlobal.Player.caculate > 2400) {
				iGlobal.Player.ageup();
			}
			if (iGlobal.Player.caculate % 60 == 0) {
				//iGlobal.Player.save();
			}
			if (iGlobal.Global.shopPanel) {
				iGlobal.Global.shopPanel.updateTime();
				if (iGlobal.Player.caculate % 600 == 0) {
					iGlobal.Global.shopPanel.updateShop();
				}
			}
		}

		/**进行回合 */
		private fight(): any {
			if (this.turn > 0) {
				this.playerTurn();
				this.petTurn();
			}
			else {
				this.monsterTurn();
			}
			iPanel.iScene.MainScene.playerInfoPanel.upDateHpAndMp();
			iPanel.iScene.MainScene.monsterInfoPanel.updateHp();
			iPanel.iScene.MainScene.petInfoPanel.updateHp();
			this.changeTurn();
		}

		/**人物回合 */
		private playerTurn(): any {
			var _loc3_: number = 0;
			var _loc4_: iData.iSkill.ActiveSkill = <any>null;
			var _loc1_: boolean = <any>false;
			var _loc2_: number = iGlobal.Player.attackSkillList.length;
			if (_loc2_ > 0) {
				_loc3_ = iGlobal.Player.spellChance + 20 + _loc2_ * 5;
				if (_loc3_ > 95) {
					_loc3_ = 95;
				}
				if (Math.random() * 100 < _loc3_) {
					_loc4_ = iGlobal.Player.attackSkillList[Math.random() * _loc2_ >> 0];
					//这里
					var loc4 = _loc4_.skillData as iData.iSkill.ActiveSkillData;

					if (loc4.behaveFunction(_loc4_)) {
						_loc1_ = true;
					}
				}
			}
			if (<any>!_loc1_) {
				this.playerAttack();
			}
		}

		/**宠物回合 */
		private petTurn(): any {
			var _loc3_: any = 0;
			var _loc4_: iData.iPet.iPetSkill.PetSkill = <any>null;
			if (<any>!this.pet || this.petHp <= 0) {
				return;
			}
			var _loc1_: boolean = <any>false;
			var _loc2_: Array<iData.iPet.iPetSkill.PetSkill> = <any>this.pet.getAttackSkill();
			if (_loc2_.length > 0) {
				if (Math.random() * 100 < 50) {
					_loc3_ = Math.random() * _loc2_.length >> 0;
					if (_loc2_[_loc3_].skillData.behaveFunction(_loc2_[_loc3_])) {
						_loc1_ = true;
					}
				}
			}
			if (<any>!_loc1_) {
				_loc4_ = this.pet.getSkill(iPet.iPetSkill.PetSkillList.double_hit);
				if (_loc4_) {
					this.petAttack();
					if (Math.random() * 100 < _loc4_.getSetArray()[0]) {
						this.petAttack();
					}
				}
				else {
					this.petAttack();
				}
			}
			this.petEndTurn();
		}

		private petEndTurn(): any {
			var _loc1_: iData.iPet.iPetSkill.PetSkill = <any>this.pet.getSkill(iPet.iPetSkill.PetSkillList.meditation);
			if (_loc1_) {
				this.playerMp = this.playerMp + _loc1_.getSetArray()[0] * this.pet.level;
				if (this.playerMp > iGlobal.Player.mp) {
					this.playerMp = iGlobal.Player.mp;
				}
				this.petMp = this.petMp + _loc1_.getSetArray()[0] * this.pet.level;
				if (this.petMp > this.pet.mp) {
					this.petMp = this.pet.mp;
				}
				iPanel.iScene.MainScene.allInfoPanel.addText("你的宠物恢复了你和他自身的<font color=\'#4a60d7\' size=\'16\'>" + (_loc1_.getSetArray()[0] * this.pet.level >> 0) + "</font>Mp", iGlobal.Global.battle);
			}
			_loc1_ = this.pet.getSkill(iPet.iPetSkill.PetSkillList.heal);
			if (_loc1_) {
				this.playerHp = this.playerHp + _loc1_.getSetArray()[0] * this.pet.level;
				if (this.playerHp > iGlobal.Player.hp) {
					this.playerHp = iGlobal.Player.hp;
				}
				this.petHp = this.petHp + _loc1_.getSetArray()[0] * this.pet.level;
				if (this.petHp > this.pet.hp) {
					this.petHp = this.pet.hp;
				}
				iPanel.iScene.MainScene.allInfoPanel.addText("你的宠物恢复了你和他自身的<font color=\'#7AEE3C\' size=\'16\'>" + (_loc1_.getSetArray()[0] * this.pet.level >> 0) + "</font>Hp", iGlobal.Global.battle);
			}
		}

		/**怪物回合 */
		private monsterTurn(): any {
			var _loc2_: iData.iPet.iPetSkill.PetSkill;
			this.monster.runBuff();
			var _loc1_: iData.iSkill.iBuff.Buff = <any>this.monster.isContainBuff("frozen");
			if (_loc1_ == null && this.monsterHp > 0) {
				if (this.pet) {
					_loc2_ = this.pet.getSkill(iPet.iPetSkill.PetSkillList.taunt);
					if (_loc2_) {
						this.monsterAttackPet();
					}
					else if (Math.random() < 0.5) {
						this.monsterAttackPlayer();
					}
					else {
						this.monsterAttackPet();
					}
				}
				else {
					this.monsterAttackPlayer();
				}
			}
		}

		private monsterAttackPlayer(): any {
			var _loc3_: number = 0;
			var _loc4_: iData.iSkill.ActiveSkill = <any>null;
			var _loc1_: boolean = <any>false;
			var _loc2_: number = iGlobal.Player.defenceSkillList.length;
			if (_loc2_ > 0) {
				_loc3_ = iGlobal.Player.spellChance + _loc2_ * 20;
				if (_loc3_ > 95) {
					_loc3_ = 95;
				}
				if (Math.random() * 100 < _loc3_) {
					_loc4_ = iGlobal.Player.defenceSkillList[Math.random() * _loc2_ >> 0];
					//这里
					var loc4 = _loc4_.skillData as iData.iSkill.ActiveSkillData;
					if (loc4.behaveFunction(_loc4_)) {
						_loc1_ = true;
					}
				}
			}
			if (<any>!_loc1_) {
				this.monsterAttack();
			}
		}

		private monsterAttackPet(): any {
			var _loc1_: number = 0;
			var _loc2_: number;
			var _loc3_: number = 0;
			_loc1_ = this.monster.crit - this.pet.pro * 2;
			if (_loc1_ > this.CR) {
				_loc1_ = this.CR;
			}
			_loc2_ = 1;
			if (Math.random() * 100 < _loc1_) {
				_loc2_ = this.monster.crit_mul / 100;
			}
			_loc3_ = (this.monster.attack * _loc2_ - this.pet.defence) * (1 - this.caculateProtection(this.pet.pro));
			if (_loc3_ < 1) {
				_loc3_ = 1;
			}
			var _loc4_: iData.iPet.iPetSkill.PetSkill = <any>this.pet.getSkill(iPet.iPetSkill.PetSkillList.dodge);
			if (_loc4_) {
				if (Math.random() * 100 < _loc4_.getSetArray()[0]) {
					iPanel.iScene.MainScene.allInfoPanel.addText("你的宠物回避了" + this.monster.nameHtml + "的攻击!", iGlobal.Global.battle);
					return;
				}
			}
			this.petHp = this.petHp - _loc3_;
			if (_loc2_ > 1) {
				iPanel.iScene.MainScene.allInfoPanel.addText(this.monster.nameHtml + "对你的宠物造成了<font color=\'#ff4040\' size=\'20\'>" + _loc3_ + "!</font>伤害", iGlobal.Global.battle);
			}
			else {
				iPanel.iScene.MainScene.allInfoPanel.addText(this.monster.nameHtml + "对你的宠物造成了<font color=\'#ff4040\'>" + _loc3_ + "</font>伤害", iGlobal.Global.battle);
			}
			_loc4_ = this.pet.getSkill(iPet.iPetSkill.PetSkillList.injury_resile);
			if (_loc4_) {
				if (Math.random() * 100 < _loc4_.getSetArray()[0]) {
					this.monsterHp = this.monsterHp - _loc3_ * _loc4_.getSetArray()[1] / 100;
					iPanel.iScene.MainScene.allInfoPanel.addText("你的宠物反弹了<font color=\'#ff4040\'>" + _loc3_ + "</font>伤害给" + this.monster.nameHtml, iGlobal.Global.battle);
				}
			}
			_loc4_ = this.pet.getSkill(iPet.iPetSkill.PetSkillList.counterattack);
			if (_loc4_) {
				if (Math.random() * 100 < _loc4_.getSetArray()[0]) {
					_loc1_ = this.pet.cri - this.monster.protection * 2;
					if (_loc1_ > this.CR) {
						_loc1_ = this.CR;
					}
					_loc2_ = 1;
					if (Math.random() * 100 < _loc1_) {
						_loc2_ = this.pet.crimul / 100;
					}
					_loc3_ = (this.pet.attack * _loc2_ - this.monster.defence) * (1 - this.caculateProtection(this.monster.protection));
					_loc3_ = _loc3_ * (_loc4_.getSetArray()[1] / 100);
					if (_loc3_ < 1) {
						_loc3_ = 1;
					}
					this.monsterHp = this.monsterHp - _loc3_;
					iPanel.iScene.MainScene.allInfoPanel.addText("你的宠物成功反击了<font color=\'#ff4040\'>" + _loc3_ + "</font>伤害给" + this.monster.nameHtml, iGlobal.Global.battle);
				}
			}
		}

		private caculateProtection(param1: number): number {
			param1 = param1;
			if (param1 >= 0) {
				return 0.06 * param1 / (1 + 0.06 * param1);
			}
			if (param1 < -100) {
				return -1;
			}
			return -(1 - Math.pow(0.94, -param1));
		}

		private petAttack() {
			var _loc1_: number = this.pet.cri - this.monster.protection * 2;
			if (_loc1_ > this.CR) {
				_loc1_ = this.CR;
			}
			var _loc2_: number = <any>1;
			if (Math.random() * 100 < _loc1_) {
				_loc2_ = this.pet.crimul / 100;
			}
			var _loc3_: number = (this.pet.attack * _loc2_ - this.monster.defence) * (1 - this.caculateProtection(this.monster.protection));
			if (_loc3_ < 1) {
				_loc3_ = 1;
			}
			var _loc4_: iData.iPet.iPetSkill.PetSkill = <any>this.pet.getSkill(iPet.iPetSkill.PetSkillList.good_or_evil);
			if (_loc4_) {
				if (Math.random() * 100 < _loc4_.getSetArray()[0]) {
					_loc2_ = _loc2_ * 2;
				}
				else {
					this.monsterHp = this.monsterHp + _loc3_;
					if (this.monsterHp > this.monster.hp) {
						this.monsterHp = this.monster.hp;
					}
					iPanel.iScene.MainScene.allInfoPanel.addText("你的宠物给" + this.monster.nameHtml + "回复了<font color=\'#7AEE3C\' size=\'16\'>" + _loc3_ + "</font> hp", iGlobal.Global.battle);
					return;
				}
			}
			this.monsterHp = this.monsterHp - _loc3_;
			if (_loc2_ > 1) {
				iPanel.iScene.MainScene.allInfoPanel.addText("你的宠物对" + this.monster.nameHtml + "造成了<font color=\'#ff4040\' size=\'20\'>" + _loc3_ + "!</font> 伤害", iGlobal.Global.battle);
			}
			else {
				iPanel.iScene.MainScene.allInfoPanel.addText("你的宠物对" + this.monster.nameHtml + "造成了<font color=\'#ff4040\'>" + _loc3_ + "</font> 伤害" + this.monster.nameHtml, iGlobal.Global.battle);
			}
			_loc4_ = this.pet.getSkill(iPet.iPetSkill.PetSkillList.life_drain);
			if (_loc4_) {
				this.petHp = this.petHp + _loc3_ * _loc4_.getSetArray()[0] / 100;
				iPanel.iScene.MainScene.allInfoPanel.addText("你的宠物恢复了<font color=\'#7AEE3C\' size=\'16\'>" + _loc3_ + "</font> hp", iGlobal.Global.battle);
			}
		}

		private monsterAttack() {
			var _loc1_: number = this.monster.crit - iGlobal.Player.protection * 2;
			if (_loc1_ > this.CR) {
				_loc1_ = this.CR;
			}
			var _loc2_: number = <any>1;
			if (Math.random() * 100 < _loc1_) {
				_loc2_ = this.monster.crit_mul / 100;
			}
			var _loc3_: number = (this.monster.attack * _loc2_ - iGlobal.Player.defence) * (1 - this.caculateProtection(iGlobal.Player.protection));
			if (_loc3_ < 1) {
				_loc3_ = 1;
			}
			this.playerHp = this.playerHp - _loc3_;
			if (_loc2_ > 1) {
				iPanel.iScene.MainScene.allInfoPanel.addText(this.monster.nameHtml + "对你造成了<font color=\'#ff4040\' size=\'20\'>" + _loc3_ + "!</font>伤害", iGlobal.Global.battle);
			}
			else {
				iPanel.iScene.MainScene.allInfoPanel.addText(this.monster.nameHtml + "对你造成了<font color=\'#ff4040\'>" + _loc3_ + "</font>伤害", iGlobal.Global.battle);
			}
			iPlayer.TitleList.updateTitleInfo("endure", _loc3_);
		}

		private playerAttack() {
			var _loc1_: number = iGlobal.Player.crit - (this.monster.protection - iGlobal.Player.protectionReduce) * 2;
			if (_loc1_ > this.CR) {
				_loc1_ = this.CR;
			}
			var _loc2_: number = <any>1;
			if (Math.random() * 100 < _loc1_) {
				_loc2_ = iGlobal.Player.crit_mul / 100;
			}
			var _loc3_: number = (iGlobal.Player.attack * _loc2_ - this.monster.defence) * (1 - this.caculateProtection(this.monster.protection - iGlobal.Player.protectionReduce - iGlobal.Player.protectionIgnore));
			if (_loc3_ < 1) {
				_loc3_ = 1;
			}
			this.monsterHp = this.monsterHp - _loc3_;
			if (_loc2_ > 1) {
				iPanel.iScene.MainScene.allInfoPanel.addText("你对" + this.monster.nameHtml + "造成了<font color=\'#ff4040\' size=\'20\'>" + _loc3_ + "!</font>伤害" + this.monster.nameHtml, iGlobal.Global.battle);
				iPlayer.TitleList.updateTitleInfo("crit", 0, 1);
			}
			else {
				iPanel.iScene.MainScene.allInfoPanel.addText("你对" + this.monster.nameHtml + "造成了<font color=\'#ff4040\'>" + _loc3_ + "</font>伤害", iGlobal.Global.battle);
				iPlayer.TitleList.updateTitleInfo("crit", 0, -1);
			}
			iPlayer.TitleList.updateTitleInfo("damage", _loc3_, _loc3_);
		}

	}
}

