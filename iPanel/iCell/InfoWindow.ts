module iPanel {
	export module iCell {
		export class InfoWindow extends iPanel.iCell.BasicCell {

			public constructor(param1:number,param2:number)
			{
				super(param1,param2);
				// param1 = flash.checkInt(param1);
				// param2 = flash.checkInt(param2);
				this.touchEnabled = false;
				this.touchChildren = false;
			}

			public draw(param1:number,param2:number):any
			{
				// param1 = flash.checkInt(param1);
				// param2 = flash.checkInt(param2);
				// this.graphics.lineStyle(1,13487565,0.8);
				// super.draw(param1,param2);
				// this.filters = [new flash.GlowFilter(5066061,0.66,13,13)];
			}

		}
	}
}

// flash.extendsClass("iPanel.iCell.InfoWindow","iPanel.iCell.BasicCell")
