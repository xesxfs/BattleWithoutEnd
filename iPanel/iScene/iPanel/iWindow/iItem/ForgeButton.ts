module iPanel {
	export module iScene {
	
			export module iWindow {
				export module iItem {
					export class ForgeButton extends iPanel.iCell.ButtonCell {
						private R:number = 50;

						public constructor()
						{
							super("mc_forge","mc_forge");
							this.after["transform"].colorTransform = new flash.ColorTransform(0,0,0,1,227,178,10,5);
							this.before.height = this.R;
							this.before.width = this.R;
							this.after.height = this.R;
							this.after.width = this.R;
						}

					}
				}
			}
		
	}
}

flash.extendsClass("iPanel.iScene.iPanel.iWindow.iItem.ForgeButton","iPanel.iCell.ButtonCell")
