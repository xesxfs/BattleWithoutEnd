module iPanel {
	export class CoverPanel extends egret.Sprite {
		// private FILTER:flash.BlurFilter;
		private upper:egret.Sprite;
		private lower:egret.Sprite;
		private w:number = NaN;
		private h:number = NaN;
		private isUpper:boolean = false;
		private isLower:boolean = false;

		public constructor(param1:number,param2:number)
		{
			super();
			// param1 = flash.checkInt(param1);
			// param2 = flash.checkInt(param2);
			// this.FILTER = new flash.BlurFilter(0,20,4);
			this.upper = new egret.Sprite();
			this.upper.graphics.beginFill(0);
			this.upper.graphics.drawRect(0,-10,param1,param2 * 3 / 4);
			this.upper.graphics.endFill();
			this.addChild(this.upper);
			this.lower = new egret.Sprite();
			this.lower.graphics.beginFill(0);
			this.lower.graphics.drawRect(0,param2 / 4,param1,param2 * 3 / 4);
			this.lower.graphics.endFill();
			this.addChild(this.lower);
			this.w = param1;
			this.h = param2;
		}

		public applyUpperBlur()
		{
			if(<any>!this.isUpper)
			{
				this.upper.graphics.clear();
				this.upper.graphics.beginFill(0);
				this.upper.graphics.drawRect(0,20,this.w,this.h * 3 / 4);
				this.upper.graphics.endFill();
				// this.upper.filters = [this.FILTER];
				this.isUpper = true;
			}
		}

		public removeUpperBlur()
		{
			if(this.isUpper)
			{
				this.upper.graphics.clear();
				this.upper.graphics.beginFill(0);
				this.upper.graphics.drawRect(0,-10,this.w,this.h * 3 / 4);
				this.upper.graphics.endFill();
				this.upper.filters = [];
				this.isUpper = false;
			}
		}

		public applyLowerBlur()
		{
			this.lower.graphics.clear();
			this.lower.graphics.beginFill(0);
			this.lower.graphics.drawRect(0,this.h / 4 - 20,this.w,this.h * 3 / 4);
			this.lower.graphics.endFill();
			// this.lower.filters = [this.FILTER];
		}

		public removeLowerBlur()
		{
			this.lower.graphics.clear();
			this.lower.graphics.beginFill(0);
			this.lower.graphics.drawRect(0,this.h / 4,this.w,this.h * 3 / 4);
			this.lower.graphics.endFill();
			this.lower.filters = [];
		}

	}
}

// flash.extendsClass("iPanel.CoverPanel","egret.Sprite")
