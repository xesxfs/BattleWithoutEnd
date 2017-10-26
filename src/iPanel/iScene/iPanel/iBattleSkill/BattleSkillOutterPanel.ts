module iPanel {
	export module iScene {
	
			export module iBattleSkill {
				export class BattleSkillOutterPanel extends iPanel.OutterPanel {

					public constructor()
					{
						super(155,false);
					}

					protected setInnerPanel():any
					{
						this.innerPanel = new iPanel.iScene.iPanel.iBattleSkill.BattleSkillInnerPanel();
						this.addChild(this.innerPanel);
					}

				}
			
		}
	}
}

flash.extendsClass("iPanel.iScene.iPanel.iBattleSkill.BattleSkillOutterPanel","iPanel.OutterPanel")
