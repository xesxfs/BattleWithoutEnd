module iPanel {
	export module iScene {
		// export module iPanel {
			export class ComfirmScene extends iPanel.iCell.BasicCell {
				private text:iPanel.iCell.StringCell;

				public constructor(param1:string,param2:Function)
				{
					super(300,200);
					var _this:any = undefined;
					var noDown:Function = <any>null;
					var str:string = param1;
					var behaveFunction:Function = param2;
					noDown = function ():any
					{
						_this.parent.removeChild(_this);
						this["setBefore"]();
					};
					this.graphics.lineStyle(2,7631988);
					this.graphics.drawRect(0,0,300,200);
					this.text = new iPanel.iCell.StringCell(str,250,32);
					this.addChild(this.text);
					this.text.x = 150 - this.text.width / 2;
					this.text.y = 50 - this.text.height / 2;
					var ok:iPanel.iScene.FlickerButton = new iPanel.iScene.FlickerButton("SURE",100,50);
					this.addChild(ok);
					ok.x = 30;
					ok.y = 120;
					ok.downFunction = behaveFunction;
					var no:iPanel.iScene.FlickerButton = new iPanel.iScene.FlickerButton("CANCEL",100,50);
					this.addChild(no);
					no.x = 170;
					no.y = 120;
					no.downFunction = noDown;
					_this = this;
				}

			}
		}
	}
// }

// flash.extendsClass("iPanel.iScene.iPanel.ComfirmScene","iPanel.iCell.BasicCell")
