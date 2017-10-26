module iPanel {
	export module iCell {
		export class BasicCell extends egret.Sprite {

			public constructor(param1:number,param2:number)
			{
				super();
				// param1 = flash.checkInt(param1);
				// param2 = flash.checkInt(param2);
				this.draw(param1,param2);
			}

			public draw(param1:number,param2:number):any
			{
				// param1 = flash.checkInt(param1);
				// param2 = flash.checkInt(param2);
				this.graphics.beginFill(16777215,0.95);
				this.graphics.drawRect(0,0,param1,param2);
				this.graphics.endFill();
			}

		}
	}
}

// flash.extendsClass("iPanel.iCell.BasicCell","egret.Sprite")
