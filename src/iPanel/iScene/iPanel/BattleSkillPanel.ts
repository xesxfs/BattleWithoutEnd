module iPanel {
	export module iScene {
		// export module iPanel {
			export class BattleSkillPanel extends iPanel.iCell.BasicCell {
				public panel:iPanel.iScene.iPanel.iBattleSkill.BattleSkillInnerPanel;

				public constructor()
				{
					super(170,165);
					var _loc1_:iPanel.iScene.iPanel.iBattleSkill.BattleSkillOutterPanel = new iPanel.iScene.iPanel.iBattleSkill.BattleSkillOutterPanel();
					this.addChild(_loc1_);
					_loc1_.y = 10;
					this.panel = flash.As3As(_loc1_.innerPanel,iPanel.iScene.iPanel.iBattleSkill.BattleSkillInnerPanel);
					this.update();
				}

				public update():any
				{
					this.panel.update();
				}

			}
		}
	}
// }

// flash.extendsClass("iPanel.iScene.iPanel.BattleSkillPanel","iPanel.iCell.BasicCell")
