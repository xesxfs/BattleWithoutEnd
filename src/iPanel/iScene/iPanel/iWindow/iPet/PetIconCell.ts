module iPanel {
	export module iScene {
	
			export module iWindow {
				export module iPet {
					export class PetIconCell extends iPanel.iCell.ButtonCell {
						private SIZE:number = 80;

						public constructor(param1:iData.iPet.Pet = null)
						{
							super("flash.display.Sprite","flash.display.Sprite");
							var _loc2_:egret.Sprite = <any>null;
							var _loc3_:egret.Sprite = <any>null;
							if(param1 == null)
							{
								_loc2_ = new mc_mode();
							}
							else
							{
								_loc2_ = new (<any>flash.getDefinitionByName("pet_" + param1.mc_name))();
							}
							this.before.addChild(_loc2_);
							_loc2_.width = this.SIZE;
							_loc2_.height = this.SIZE;
							if(param1 == null)
							{
								_loc3_ = new mc_mode();
							}
							else
							{
								_loc3_ = new (<any>flash.getDefinitionByName("pet_" + param1.mc_name))();
							}
							this.after.addChild(_loc3_);
							_loc3_.width = this.SIZE;
							_loc3_.height = this.SIZE;
						}

					}
				}
			
		}
	}
}

// flash.extendsClass("iPanel.iScene.iPanel.iWindow.iPet.PetIconCell","iPanel.iCell.ButtonCell")
