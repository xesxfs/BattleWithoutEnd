module iPanel {
	export module iCell {
		export class MenuButton extends iPanel.iCell.ButtonCell {
			private bg:egret.Sprite;
			private text:string;
			private infoWindow:iPanel.iCell.StringInfoWindow;

			public constructor(param1:string,param2:string,param3:string)
			{
				super(param1,param2);
				this.bg = new iPanel.iCell.BasicCell(40,40);
				this.infoWindow = iGlobal.Global.stringInfoWindow;
				this.addChild(this.bg);
				this.text = param3;
			}

			// public onMouseOver(param1:flash.MouseEvent)
			// {
			// 	super.onMouseOver(param1);
			// 	var _loc2_:egret.Point = flash.localToGlobal(this,new egret.Point(this["mouseX"] + 15,this["mouseY"] + 15));
			// 	this.infoWindow.x = _loc2_.x;
			// 	this.infoWindow.y = _loc2_.y;
			// 	if(this.infoWindow.x + this.infoWindow.width > iGlobal.Global.stage.stageWidth)
			// 	{
			// 		this.infoWindow.x = this.infoWindow.x - this.infoWindow.width - 10;
			// 	}
			// 	iGlobal.Global.setStringInfoWindow(this.text);
			// }

			// public onMouseOut(param1:flash.MouseEvent)
			// {
			// 	super.onMouseOut(param1);
			// 	iGlobal.Global.hideInfoWindow();
			// }

			public setBefore()
			{
				super.setBefore();
				this.filters = [];
			}

			public setDown()
			{
				super.setDown();
				// this.filters = [new flash.GlowFilter(5066061,0.66,13,13)];
				if(this.parent)
				{
					this.parent.addChildAt(this,this.parent.numChildren - 1);
				}
			}

		}
	}
}

// flash.extendsClass("iPanel.iCell.MenuButton","iPanel.iCell.ButtonCell")
