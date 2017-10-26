module iPanel {
	export module iScene {
		// export module iPanel {
			export module iWindow {
				export module iPet {
					export class PetOutterPanel extends iPanel.OutterPanel {

						public constructor()
						{
							super(495,false);
						}

						protected setInnerPanel():any
						{
							this.innerPanel = new iPanel.iScene.iPanel.iWindow.iPet.PetInnerPanel();
							this.addChild(this.innerPanel);
						}

					}
				}
			}
		}
	}
// }

// flash.extendsClass("iPanel.iScene.iPanel.iWindow.iPet.PetOutterPanel","iPanel.OutterPanel")
