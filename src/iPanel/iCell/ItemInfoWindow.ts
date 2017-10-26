module iPanel {
	export module iCell {
		export class ItemInfoWindow extends iPanel.iCell.InfoWindow {
			private text:egret.TextField;

			public constructor(param1:string)
			{
				super(0,0);
				this.text = iGlobal.Global.getTextField(24);
				this.text.multiline = true;
				this.addChild(this.text);
				this.text.text = param1;
			}

			public draw(param1:number,param2:number):any
			{
				// param1 = flash.checkInt(param1);
				// param2 = flash.checkInt(param2);
				this.graphics.clear();
				this.text.width = 130;
				super.draw(130,this.text.textHeight + 5);
			}

			public set TEXT(param1:string)
			{
				this.text.text = param1;
				this.draw(0,0);
			}

		}
	}
}

// flash.extendsClass("iPanel.iCell.ItemInfoWindow","iPanel.iCell.InfoWindow")
