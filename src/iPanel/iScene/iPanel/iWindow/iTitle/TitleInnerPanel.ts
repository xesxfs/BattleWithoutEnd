module iPanel {
	export module iScene {
		// export module iPanel {
			export module iWindow {
				export module iTitle {
					export class TitleInnerPanel extends iPanel.InnerPanel {
						private Gap: number = 50;
						private listSprite: egret.Sprite;

						public constructor() {
							super();							
							var _self__: any = this;
							
							var _loc4_: iPanel.iScene.iPanel.iWindow.iTitle.TitleCell = <any>null;
							this.listSprite = new egret.Sprite();
							this.addChild(this.listSprite);
							var _loc1_: Array<iData.iPlayer.Title> = iData.iPlayer.TitleList.list;
							var _loc2_: number = flash.checkInt(_loc1_.length);
							var _loc3_: number = flash.checkInt(0);
							while (_loc3_ < _loc2_) {
								_loc4_ = new iPanel.iScene.iPanel.iWindow.iTitle.TitleCell(_loc1_[_loc3_]);
								this.listSprite.addChild(_loc4_);
								_loc4_.y = this.Gap * _loc3_;
								_loc3_++;
							}
							_self__.addEventListener(tool.MyEvent.Update, flash.bind(this.onUpdate, this), null, true);
						}

						public onUpdate(param1: egret.Event = null) {
							var _loc2_: number = flash.checkInt(0);
							while (_loc2_ < this.listSprite.numChildren) {
								(flash.As3As(this.listSprite.getChildAt(_loc2_), iPanel.iScene.iPanel.iWindow.iTitle.TitleCell)).update();
								_loc2_++;
							}
						}

					}
				}
			}
		}
	}
// }

// flash.extendsClass("iPanel.iScene.iPanel.iWindow.iTitle.TitleInnerPanel", "iPanel.InnerPanel")
