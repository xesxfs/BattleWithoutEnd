module iData {
	export module iSkill {
		export module iBuff {
			export class Buff extends egret.HashObject {
				public name:string;
				public count:number = 0;

				public constructor(param1:number)
				{
					super();
				}

				public run():any
				{
				}

				public combine(param1:iData.iSkill.iBuff.Buff):any
				{
				}

				public isOver():boolean
				{
					if(this.count <= 0)
					{
						return true;
					}
					return false;
				}

			}
		}
	}
}

