module iData {
	/**基本属性 */
	export class BasicStatus {
		/*血*/
		public hp: number = 0;
		/*蓝*/
		public mp: number = 0;
		/*力量*/
		public str: number = 0;
		/*敏捷*/
		public dex: number = 0;
		/*智力*/
		public intelligence: number = 0;
		/*意志*/
		public will: number = 0;
		/*幸运*/
		public luck: number = 0;
		/*攻击伤害*/
		public attack: iData.iNumber.DamageNumber;
		/*平衡*/
		public balance: number = 0;
		/*暴击*/
		public crit: number = 0;
		/*暴击倍数*/
		public crit_mul: number = 0;
		/*防御*/
		public defence: number = 0;
		/*护甲*/
		public protection: number = 0;
		public spellChance: number = 0;
		public manaConsumption: number = 0;
		/*无视护甲*/
		public protectionIgnore: number = 0;
		public protectionReduce: number = 0;
		/*魔法伤害*/
		public magicDamage: number = 0;

		public constructor(param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number = 0, param9: number = 0, param10: number = 0, param11: number = 0, param12: number = 0, param13: number = 0, param14: number = 0, param15: number = 0, param16: number = 0, param17: number = 0, param18: number = 0) {

			this.hp = param1;
			this.mp = param2;
			this.str = param3;
			this.dex = param4;
			this.intelligence = param5;
			this.will = param6;
			this.luck = param7;
			this.attack = new iData.iNumber.DamageNumber(param8, param9);
			this.balance = param10;
			this.crit = param11;
			this.crit_mul = param12;
			this.defence = param13;
			this.protection = param14;
			this.spellChance = param15;
			this.protectionIgnore = param16;
			this.protectionReduce = param17;
			this.magicDamage = param18;
		}

		public clone(): iData.BasicStatus {
			return new iData.BasicStatus(this.hp, this.mp, this.str, this.dex, this.intelligence, this.will, this.luck, this.attack.min, this.attack.max, this.balance, this.crit, this.crit_mul, this.defence, this.protection, this.spellChance, this.protectionIgnore, this.protectionReduce);
		}

	}
}

