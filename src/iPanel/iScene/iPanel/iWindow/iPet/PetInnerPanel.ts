module iPanel {
	export module iScene {
		// export module iPanel {
			export module iWindow {
				export module iPet {
					export class PetInnerPanel extends iPanel.InnerPanel {
						private Gap:number = 50;
						public selectCell:iPanel.iScene.iPanel.iWindow.iPet.PetCell;
						public buttonGroup:iPanel.iCell.ButtonGroup;
						private listSprite:egret.Sprite;

						public constructor()
						{
							super();
							this.update();
							this.addEventListener(tool.MyEvent.Update,flash.bind(this.onUpdate,this),null,true);
						}

						private onUpdate(param1:egret.Event):any
						{
							this.update();
						}

						public update():any
						{
							this.updateList();
						}

						private updateList():any
						{
							var _loc3_:iPanel.iScene.iPanel.iWindow.iPet.PetCell = <any>null;
							if(this.listSprite)
							{
								this.removeChild(this.listSprite);
							}
							this.listSprite = new egret.Sprite();
							this.addChild(this.listSprite);
							this.buttonGroup = new iPanel.iCell.ButtonGroup();
							var _loc1_:number = flash.checkInt(iGlobal.Player.petList.length);
							var _loc2_:number = flash.checkInt(0);
							while(_loc2_ < _loc1_)
							{
								_loc3_ = new iPanel.iScene.iPanel.iWindow.iPet.PetCell(iGlobal.Player.petList[_loc2_]);
								this.listSprite.addChild(_loc3_);
								_loc3_.y = _loc2_ * this.Gap;
								this.buttonGroup.addButton(_loc3_);
								_loc2_++;
							}
						}

					}
				// }
			}
		}
	}
}

// flash.extendsClass("iPanel.iScene.iPanel.iWindow.iPet.PetInnerPanel","iPanel.InnerPanel")
