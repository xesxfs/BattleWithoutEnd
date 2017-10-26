module iData {
	export module iSkill {
		export class SkillData {
			public name: string;
			public realName: string;
			public category: string;
			public statList: Array<Array<iData.iItem.Stat>>;
			public effectList: Array<Array<iData.iItem.Stat>>;
			public lvupCostList: Array<number>;
			public desFunction: Function;

			public constructor(param1: string, param2: string, param3: string, param4: Array<Array<iData.iItem.Stat>>, param5: Array<Array<iData.iItem.Stat>>, param6: Array<number>, param7: Function) {

				this.name = param1;
				this.realName = param2;
				this.category = param3;
				this.statList = param4;
				this.effectList = param5;
				this.lvupCostList = param6;
				this.desFunction = param7;
			}

		}
	}
}

