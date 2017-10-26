module iData {
	export module iSkill {
		export module iBuff {
			export class BuffCorrosion extends iData.iSkill.iBuff.Buff {

				public constructor(param1:number)
				{
					super(param1);
					this.name = "corrosion";
					this.count = param1;
				}

				public run():any
				{
				}

				public combine(param1:iData.iSkill.iBuff.Buff):any
				{
					this.count = this.count + param1.count;
				}

			}
		}
	}
}

