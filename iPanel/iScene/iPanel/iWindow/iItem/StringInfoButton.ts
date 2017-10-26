module iPanel {
	export module iScene {

			export module iWindow {
				export module iItem {
					export class StringInfoButton extends iPanel.iCell.StringInfoCell {
						public downFunction:Function;

						public constructor(param1:string,param2:string)
						{
							super(param1,param2);
							this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,flash.bind(this.onMouseDown,this),null);
						}

						public onMouseOver(param1:flash.MouseEvent)
						{
							super.onMouseOver(param1);
							this.graphics.clear();
							this.graphics.beginFill(14922250,0.95);
							this.graphics.drawRoundRect(0,0,this.textField.textWidth + 6,this.textField.textHeight + 2,3);
							this.graphics.endFill();
							this.textField.htmlText = "<font color=\'#ffffff\'>" + this.textField.text + "</font>";
						}

						public onMouseOut(param1:flash.MouseEvent)
						{
							super.onMouseOut(param1);
							this.graphics.clear();
							this.graphics.beginFill(16777215,0.95);
							this.graphics.drawRoundRect(0,0,this.textField.textWidth + 6,this.textField.textHeight + 2,3);
							this.graphics.endFill();
							this.textField.htmlText = "<font color=\'#747474\'>" + this.textField.text + "</font>";
						}

						public onMouseDown(param1:flash.MouseEvent)
						{
							if(this.downFunction)
							{
								this.downFunction();
							}
						}

					
				}
			}
		}
	}
}

// flash.extendsClass("iPanel.iScene.iPanel.iWindow.iItem.StringInfoButton","iPanel.iCell.StringInfoCell")
