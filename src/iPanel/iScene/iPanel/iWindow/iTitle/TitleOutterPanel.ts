module iPanel {
	export module iScene {
		// export module iPanel {
			export module iWindow {
				export module iTitle {
					export class TitleOutterPanel extends iPanel.OutterPanel {

						public constructor()
						{
							super(540);
						}

						protected setInnerPanel():any
						{
							this.innerPanel = new iPanel.iScene.iPanel.iWindow.iTitle.TitleInnerPanel();
							this.addChild(this.innerPanel);
						}

					}
				}
			}
		}
	}
}

// flash.extendsClass("iPanel.iScene.iPanel.iWindow.iTitle.TitleOutterPanel","iPanel.OutterPanel")
