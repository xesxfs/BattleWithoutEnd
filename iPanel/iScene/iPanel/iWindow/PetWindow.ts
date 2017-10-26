module iPanel {
	export module iScene {
		// export module iPanel {
			export module iWindow {
				export class PetWindow extends iPanel.iScene.iPanel.iWindow.Window {
					private panel:iPanel.iScene.iPanel.iWindow.iPet.PetInnerPanel;
					private textBag:flash.TextField;

					public constructor()
					{
						super();
						this.textBag = iGlobal.Global.getTextField(32,7631988);
						var _loc1_:iPanel.iScene.iPanel.iWindow.iPet.PetOutterPanel = new iPanel.iScene.iPanel.iWindow.iPet.PetOutterPanel();
						this.addChild(_loc1_);
						_loc1_.x = 0;
						_loc1_.y = 40;
						this.panel = flash.As3As(_loc1_.innerPanel,iPanel.iScene.iPanel.iWindow.iPet.PetInnerPanel);
						this.setBagText();
						this.addEventListener(tool.MyEvent.Update,flash.bind(this.updateBagText,this),null,true);
					}

					private updateBagText(param1:egret.Event = null):any
					{
						this.textBag.htmlText = "<p align=\'center\'>" + iGlobal.Player.petList.length + "/" + iGlobal.Player.PETMAX + "</p>";
					}

					private setBagText()
					{
						var _loc1_:egret.Sprite = <any>new iPanel.iCell.BasicCell(200,40);
						this.addChild(_loc1_);
						_loc1_.x = 0;
						_loc1_.y = 0;
						this.textBag.width = 200;
						this.textBag.htmlText = "<p align=\'center\'>" + iGlobal.Player.petList.length + "/" + iGlobal.Player.PETMAX + "</p>";
						_loc1_.addChild(this.textBag);
					}

					public update()
					{
						this.panel.update();
						this.updateBagText();
					}

				}
			}
		}
	}
// }

// flash.extendsClass("iPanel.iScene.iPanel.iWindow.PetWindow","iPanel.iScene.iPanel.iWindow.Window")
