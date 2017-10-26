module iPanel {
	export module iScene {
		
			export module iAllInfo {
				export class AllInfoOutterPanel extends iPanel.OutterPanel {

					public constructor()
					{
						super(345,false);
					}

					protected setInnerPanel():any
					{
						this.innerPanel = new iPanel.iScene.iPanel.iAllInfo.AllInfoInnerPanel();
						this.addChild(this.innerPanel);
					}

				}
			
		}
	}
}

flash.extendsClass("iPanel.iScene.iPanel.iAllInfo.AllInfoOutterPanel","iPanel.OutterPanel")
