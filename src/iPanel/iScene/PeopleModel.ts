module iPanel {
	export module iScene {
		export class PeopleModel extends iPanel.iCell.ButtonCell {
			public age:number = 0;
			public bg:iPanel.iCell.BasicCell;
			public bg2:iPanel.iCell.BasicCell;
			public p:egret.Sprite;
			public p2:egret.Sprite;

			public constructor(param1:number)
			{
				super("flash.display.Sprite","flash.display.Sprite");
				param1 = flash.checkInt(param1);
				this.age = flash.checkInt(param1);
				this.bg = new iPanel.iCell.BasicCell(50,100);
				this.bg2 = new iPanel.iCell.BasicCell(50,100);
				this.bg2["transform"].colorTransform = new flash.ColorTransform(0.9,0.7,0,0.95);
				this.init();
			}

			private init()
			{
				this.before.addChild(this.bg);
				this.after.addChild(this.bg2);
				this.p = new egret.Sprite();
				this.p2 = new egret.Sprite();
				this.before.addChild(this.p);
				this.after.addChild(this.p2);
				this.drawPeople(this.p,7631988);
				this.drawPeople(this.p2,16777215);
			}

			private drawPeople(param1:egret.Sprite,param2:number):any
			{
				param2 = flash.checkUint(param2);
				var _loc3_:number = flash.checkInt(this.age - 10);
				param1.y = 15 - _loc3_ * 3;
				param1.graphics.beginFill(param2,1);
				param1.graphics.drawCircle(25,30,10);
				param1.graphics.drawRect(15,40,20,30 + _loc3_);
				param1.graphics.drawRect(15,70 + _loc3_,5,8 + _loc3_ * 2);
				param1.graphics.drawRect(30,70 + _loc3_,5,8 + _loc3_ * 2);
				param1.graphics.drawRect(9,40,5,15 + _loc3_ * 2);
				param1.graphics.drawRect(36,40,5,15 + _loc3_ * 2);
				param1.graphics.endFill();
			}

			public setBefore()
			{
				super.setBefore();
				this.filters = [];
			}

			public setDown()
			{
				super.setDown();
				this.filters = [new flash.GlowFilter(5066061,0.66,13,13)];
				if(this.parent)
				{
					this.parent.addChildAt(this,this.parent.numChildren - 1);
				}
			}

		}
	}
}

flash.extendsClass("iPanel.iScene.PeopleModel","iPanel.iCell.ButtonCell")
