module iPanel {
	export module iScene {
	
			export module iWindow {
				export module iItem {
					export class ItemInnerPanel extends iPanel.InnerPanel {
						private Gap:number = 50;
						public selectCell:iPanel.iCell.EquipmentCell;
						public buttonGroup:iPanel.iCell.ButtonGroup;
						private listSprite:egret.Sprite;
						private listSpriteArray:Array<egret.Sprite>;
						private text:flash.TextField;

						public constructor()
						{
							super();
							this.text = iGlobal.Global.getTextField(32,16777215);
							var _loc1_:egret.Sprite = new egret.Sprite();
							_loc1_.graphics.beginFill(0,0);
							_loc1_.graphics.drawRect(0,0,20,20);
							_loc1_.graphics.endFill();
							this.addChild(_loc1_);
							this.text.width = 200;
							this.addChild(this.text);
							this.update();
							this.addEventListener(tool.MyEvent.Update,flash.bind(this.onUpdate,this),null,true);
						}

						private setSelectedCell(param1:iPanel.iCell.EquipmentCell):any
						{
							var _self__:any = this;
							this.selectCell = param1;
							_self__.dispatchEvent(new tool.MyEvent(tool.MyEvent.Change));
						}

						public update():any
						{
							if(iPanel.iScene.MainScene.otherPanel)
							{
								if(iPanel.iScene.MainScene.otherPanel.itemWindow)
								{
									iPanel.iScene.MainScene.otherPanel.itemWindow.removeCurrentItem();
								}
							}
							this.updateList();
						}

						private removeList():any
						{
						}

						public set positionY(param1:number)
						{
							var _loc4_:number = flash.checkInt(0);
							this.y = param1;
							var _loc2_:number = flash.checkInt(-this.y / 50);
							var _loc3_:number = flash.checkInt(this.listSpriteArray.length);
							if(_loc2_ - 2 >= _loc3_)
							{
								return ;
							}
							_loc4_ = flash.checkInt(0);
							while(_loc4_ < _loc2_ - 2)
							{
								if(this.listSprite.contains(this.listSpriteArray[_loc4_]))
								{
									this.listSprite.removeChild(this.listSpriteArray[_loc4_]);
								}
								_loc4_++;
							}
							var _loc5_:number = flash.checkInt(_loc2_ + 12);
							if(_loc5_ >= _loc3_)
							{
								_loc5_ = flash.checkInt(_loc3_ - 1);
							}
							var _loc6_:number = flash.checkInt(_loc2_ - 2);
							if(_loc6_ < 0)
							{
								_loc6_ = flash.checkInt(0);
							}
							_loc4_ = flash.checkInt(_loc6_);
							while(_loc4_ < _loc5_)
							{
								this.listSprite.addChild(this.listSpriteArray[_loc4_]);
								_loc4_++;
							}
							_loc4_ = flash.checkInt(_loc2_ + 12);
							while(_loc4_ < _loc3_)
							{
								if(this.listSprite.contains(this.listSpriteArray[_loc4_]))
								{
									this.listSprite.removeChild(this.listSpriteArray[_loc4_]);
								}
								_loc4_++;
							}
						}

						public get positionY():number{
			return egret.superGetter(iPanel.iScene.iPanel.iWindow.iItem.ItemInnerPanel,this, "positionY");
		}
	
 						private updateList():any
						{
							var _self__:any = this;
							var cell:iPanel.iCell.EquipmentCell = <any>null;
							if(this.listSprite)
							{
								this.removeChild(this.listSprite);
							}
							this.listSprite = new egret.Sprite();
							this.addChild(this.listSprite);
							this.listSpriteArray = new Array<egret.Sprite>();
							this.buttonGroup = new iPanel.iCell.ButtonGroup();
							var length:number = flash.checkInt(iGlobal.Player.itemList.length);
							var i:number = flash.checkInt(0);
							while(i < length)
							{
								var onDown:Function = <any>function ()
								{
									_self__.setSelectedCell(this);
									if(iPanel.iScene.MainScene.otherPanel)
									{
										if(iPanel.iScene.MainScene.otherPanel.itemWindow)
										{
											iPanel.iScene.MainScene.otherPanel.itemWindow.removeCurrentItem();
										}
									}
								};
								cell = new iPanel.iCell.EquipmentCell(iGlobal.Player.itemList[i]);
								this.listSprite.addChild(cell);
								cell.y = i * this.Gap;
								this.buttonGroup.addButton(cell);
								this.listSpriteArray.push(cell);
								cell.downFunction = onDown;
								i++;
							}
						}

						private updateText():any
						{
							this.text.htmlText = "<p align=\'center\'>" + iGlobal.Player.itemList.length + "/" + iGlobal.Player.BAGMAX + "</p>";
							this.text.y = iGlobal.Player.itemList.length * 50;
						}

						public addOneCell():any
						{
							var _self__:any = this;
							var onDown:Function = <any>null;
							onDown = function ()
							{
								_self__.setSelectedCell(this);
							};
							var cell:iPanel.iCell.EquipmentCell = new iPanel.iCell.EquipmentCell(iGlobal.Player.itemList[iGlobal.Player.itemList.length - 1]);
							this.listSprite.addChild(cell);
							cell.y = (iGlobal.Player.itemList.length - 1) * this.Gap;
							this.buttonGroup.addButton(cell);
							cell.downFunction = onDown;
						}

						private onUpdate(param1:egret.Event):any
						{
							this.update();
						}

					}
				
			}
		}
	}
}

flash.extendsClass("iPanel.iScene.iPanel.iWindow.iItem.ItemInnerPanel","iPanel.InnerPanel")
