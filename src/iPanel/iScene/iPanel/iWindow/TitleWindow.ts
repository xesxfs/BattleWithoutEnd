module iPanel {
	export module iScene {
		// export module iPanel {
			export module iWindow {
				export class TitleWindow extends iPanel.iScene.iPanel.iWindow.Window {
					private panel:iPanel.iScene.iPanel.iWindow.iTitle.TitleInnerPanel;

					public constructor()
					{
						super();
						var _loc1_:iPanel.iScene.iPanel.iWindow.iTitle.TitleOutterPanel = new iPanel.iScene.iPanel.iWindow.iTitle.TitleOutterPanel();
						this.panel = flash.As3As(_loc1_.innerPanel,iPanel.iScene.iPanel.iWindow.iTitle.TitleInnerPanel);
						this.addChild(_loc1_);
						_loc1_.x = 0;
						_loc1_.y = 0;
					}

					public update():any
					{
						this.panel.onUpdate();
					}

				}
			}
		}
	// }
}

// flash.extendsClass("iPanel.iScene.iPanel.iWindow.TitleWindow","iPanel.iScene.iPanel.iWindow.Window")
