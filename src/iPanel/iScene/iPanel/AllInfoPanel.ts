module iPanel {
	export module iScene {
		// export module iPanel {
			export class AllInfoPanel extends iPanel.iCell.BasicCell {
				public panel:iPanel.iScene.iPanel.iAllInfo.AllInfoInnerPanel;

				public constructor()
				{
					super(400,355);
					var _loc1_:iPanel.iScene.iPanel.iAllInfo.AllInfoOutterPanel = new iPanel.iScene.iPanel.iAllInfo.AllInfoOutterPanel();
					this.addChild(_loc1_);
					_loc1_.y = 10;
					this.panel = flash.As3As(_loc1_.innerPanel,iPanel.iScene.iPanel.iAllInfo.AllInfoInnerPanel);
				}

				public addText(param1:string,param2:string = "other")
				{
					if(iGlobal.Global[param2 + "_toggle"])
					{
						this.panel.addText(param1);
						return ;
					}
				}

			// }
		}
	}
}

// flash.extendsClass("iPanel.iScene.iPanel.AllInfoPanel","iPanel.iCell.BasicCell")
