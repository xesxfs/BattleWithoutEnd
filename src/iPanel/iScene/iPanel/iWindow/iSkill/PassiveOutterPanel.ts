module iPanel {
	export module iScene {
		// export module iPanel {
			export module iWindow {
				export module iSkill {
					export class PassiveOutterPanel extends iPanel.OutterPanel {

						public constructor()
						{
							super(515);
						}

						protected setInnerPanel():any
						{
							this.innerPanel = new iPanel.iScene.iPanel.iWindow.iSkill.PassiveInnerPanel();
							this.addChild(this.innerPanel);
						}

					}
				}
			}
		}
	}
// }

// flash.extendsClass("iPanel.iScene.iPanel.iWindow.iSkill.PassiveOutterPanel","iPanel.OutterPanel")
