module iPanel {
	export module iScene {
		// export module iPanel {
			export module iWindow {
				export module iSystem {
					export class ToggleBox extends egret.Sprite {
						private box:egret.Sprite;
						private size:number = 0;
						private text:flash.TextField;
						private isDown:boolean = false;
						public downFunction:Function;
						public upFunction:Function;

						public constructor(param1:string,param2:number,param3:any = true)
						{
							super();
							this.size = flash.checkInt(param2);
							this.text = iGlobal.Global.getTextField(param2);
							this.addChild(this.text);
							this.setText(param1);
							this.box = new egret.Sprite();
							this.addChild(this.box);
							if(param3)
							{
								this.setDown();
							}
							else
							{
								this.setUp();
							}
							this.box.addEventListener(egret.TouchEvent.TOUCH_BEGIN,flash.bind(this.onMouseDown,this),null);
						}

						public setText(param1:string):any
						{
							this.text.width = 300;
							this.text.htmlText = param1;
							this.text.width = this.text.textWidth + 6;
							this.text.x = this.size + 2;
						}

						public setDown():any
						{
							this.isDown = true;
							this.box.graphics.clear();
							this.box.graphics.lineStyle(2,7631988);
							this.box.graphics.beginFill(14922250);
							this.box.graphics.drawRect(0,0,this.size,this.size);
							this.box.graphics.endFill();
							if(this.downFunction)
							{
								this.downFunction();
							}
						}

						public setUp():any
						{
							this.isDown = false;
							this.box.graphics.clear();
							this.box.graphics.beginFill(16777215,0);
							this.box.graphics.lineStyle(2,7631988);
							this.box.graphics.drawRect(0,0,this.size,this.size);
							this.box.graphics.endFill();
							if(this.upFunction)
							{
								this.upFunction();
							}
						}

						private onMouseDown(param1:flash.MouseEvent):any
						{
							if(this.isDown)
							{
								this.setUp();
							}
							else
							{
								this.setDown();
							}
						}

					}
				}
			}
		}
	}
// }

// flash.extendsClass("iPanel.iScene.iPanel.iWindow.iSystem.ToggleBox","egret.Sprite")
