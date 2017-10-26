module iPanel {
	export module iScene {
		
			export module iWindow {
				export module iItem {
					export class ItemOutterPanel extends iPanel.OutterPanel {

						public constructor()
						{
							super(360,false);
						}

						protected setInnerPanel():any
						{
							this.innerPanel = new iPanel.iScene.iPanel.iWindow.iItem.ItemInnerPanel();
							this.addChild(this.innerPanel);
						}

					}
				}
			
		}
	}
}

flash.extendsClass("iPanel.iScene.iPanel.iWindow.iItem.ItemOutterPanel","iPanel.OutterPanel")
