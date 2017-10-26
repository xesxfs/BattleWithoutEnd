module iData {
	export module iSkill {
		export class ActiveSkillData extends iData.iSkill.SkillData {
			public type:string;
			public setList:Array<any>;
			public behaveFunction:Function;

			public constructor(param1:string,param2:string,param3:string,param4:string,param5:Array<Array<iData.iItem.Stat>>,param6:Array<Array<iData.iItem.Stat>>,param7:Array<number>,param8:Array<any>,param9:Function,param10:Function = null)
			{
				super(param1,param2,param4,param5,param6,param7,param9);
				this.type = param3;
				this.setList = param8;
				this.behaveFunction = param10;
			}

		}
	}
}

