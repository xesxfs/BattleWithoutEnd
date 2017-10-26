module iPanel {
	export module iScene {
		// export module iPanel {
			export module iWindow {
				export module iTitle {
					export class TitleCell extends iPanel.iCell.BasicCell {
						public infoWindow:iPanel.iCell.ItemInfoWindow;
						public text:iPanel.iCell.StringCell;
						public title:iData.iPlayer.Title;
						protected bg:egret.Sprite;
						protected yellow:number = 14922250;

						public constructor(param1:iData.iPlayer.Title)
						{
							super(200,50);
							this.title = param1;
							this.bg = new egret.Sprite();
							this.bg.graphics.lineStyle(1,13487565,0.8);
							this.bg.graphics.beginFill(16777215,0.95);
							this.bg.graphics.drawRect(0,0,200,50);
							this.bg.graphics.endFill();
							this.addChild(this.bg);
							this.setInfo();
							this.setBg();
							this.addEventListener(flash.MouseEvent.MOUSE_OVER,flash.bind(this.onMouseOver,this),null);
							this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,flash.bind(this.onMouseOut,this),null);
							this.setListener();
						}

						private onMouseDown(param1:flash.MouseEvent)
						{
							var _self__:any = this;
							iGlobal.Player.setTitle(this.title);
							_self__.dispatchEvent(new tool.MyEvent(tool.MyEvent.Update));
						}

						private setListener()
						{
							if(this.title.isGot)
							{
								this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,flash.bind(this.onMouseDown,this),null);
							}
						}

						private setBg()
						{
							if(this.title.isGot)
							{
								this.bg["transform"].colorTransform = new flash.ColorTransform();
							}
							else
							{
								this.bg["transform"].colorTransform = new flash.ColorTransform(0,0,0,0.8,200,200,200);
							}
						}

						public update():any
						{
							if(iGlobal.Player.title == this.title)
							{
								this.bg["transform"].colorTransform = new flash.ColorTransform(0.9,0.7,0,1,0,0,0,0);
								this.text["transform"].colorTransform = new flash.ColorTransform(1,1,1,1,255,255,255,0);
							}
							else
							{
								this.setBg();
								this.text["transform"].colorTransform = new flash.ColorTransform();
							}
							this.setListener();
						}

						private setInfo():any
						{
							this.text = new iPanel.iCell.StringCell(this.title.realName.toUpperCase(),180,24);
							this.addChild(this.text);
							this.text.x = 10;
							this.text.y = 10;
							this.infoWindow = new iPanel.iCell.ItemInfoWindow(this.title.getDescription());
						}

						public onMouseOver(param1:flash.MouseEvent)
						{
							this.filters = [new flash.GlowFilter(5066061,0.66,13,13)];
							if(this.parent)
							{
								this.parent.addChildAt(this,this.parent.numChildren - 1);
							}
							this.addInfoWindow();
						}

						public onMouseOut(param1:flash.MouseEvent)
						{
							this.filters = [];
							this.removeInfoWindow();
						}

						protected addInfoWindow():any
						{
							this.infoWindow = new iPanel.iCell.ItemInfoWindow(this.title.getDescription());
							this.addChild(this.infoWindow);
							this.infoWindow.x = -135;
							this.infoWindow.y = 0;
							var _loc1_:egret.Point = flash.localToGlobal(this,new egret.Point(0,0));
							if(_loc1_.y + this.infoWindow.height > iGlobal.Global.stage.stageHeight)
							{
								_loc1_ = flash.globalToLocal(this,new egret.Point(0,iGlobal.Global.stage.stageHeight - this.infoWindow.height));
								this.infoWindow.y = _loc1_.y;
							}
						}

						protected removeInfoWindow():any
						{
							if(this.contains(this.infoWindow))
							{
								this.removeChild(this.infoWindow);
							}
						}

					}
				}
			}
		// }
	}
}

// flash.extendsClass("iPanel.iScene.iPanel.iWindow.iTitle.TitleCell","iPanel.iCell.BasicCell")
