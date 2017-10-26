module iData {
	export module iSkill {
		export module iBuff {
			export class BuffFrozen extends iData.iSkill.iBuff.Buff {

				public constructor(param1:number)
				{
					super(param1);
					this.name = "frozen";
					this.count = param1;
				}

				public run():any
				{
					this.count--;
					iPanel.iScene.MainScene.allInfoPanel.addText(iPanel.iScene.MainScene.battle.monster.nameHtml + "被<font color=\'#ff4040\'>冰冻了!</font>",iGlobal.Global.battle);
				}

				public combine(param1:iData.iSkill.iBuff.Buff):any
				{
					this.count = param1.count;
				}

			}
		}
	}
}
