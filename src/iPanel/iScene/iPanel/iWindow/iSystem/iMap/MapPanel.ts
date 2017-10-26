module iPanel {
	export module iScene {
		// export module iPanel {
			export module iWindow {
				export module iSystem {
					export module iMap {
						export class MapPanel extends egret.Sprite {
							private bg:egret.Sprite;

							public constructor()
							{
								super();
								var _this:any = undefined;
								var backDown:Function = <any>null;
								var cell:MapCell = <any>null;
								backDown = function ():any
								{
									_this.parent.removeChild(_this);
									this["setBefore"]();
								};
								this.bg = new iPanel.iCell.BasicCell(800,600);
								this.addChild(this.bg);
								var m:egret.Sprite = <any>new map_mc();
								this.addChild(m);
								var buttonGroup:iPanel.iCell.ButtonGroup = new iPanel.iCell.ButtonGroup();
								var length:number = flash.checkInt(iData.iMap.MapList.list.length);
								var i:number = flash.checkInt(0);
								while(i < length)
								{
									cell = new MapCell(iData.iMap.MapList.list[i]);
									this.addChild(cell);
									buttonGroup.addButton(cell);
									if(iData.iMap.MapList.list[i].name == iGlobal.Global.map.mapData.name)
									{
										cell["setAfter"]();
										cell["onMouseDown"](null);
									}
									i++;
								}
								var backButton:iPanel.iScene.FlickerButton = new iPanel.iScene.FlickerButton("返回",100,50);
								this.addChild(backButton);
								backButton.x = 0;
								backButton.y = 0;
								backButton.downFunction = backDown;
								_this = this;
							}

						}
					// }
				}
			}
		}
	}
}

// flash.extendsClass("iPanel.iScene.iPanel.iWindow.iSystem.iMap.MapPanel","egret.Sprite")
