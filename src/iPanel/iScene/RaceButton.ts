module iPanel {
	export module iScene {
		export class RaceButton extends iPanel.iCell.ButtonCell {
			private PX:number = 50;
			private bg:egret.Sprite;
			private count:number = 0;
			public race:iData.Race;
			private text:flash.TextField;

			public constructor(param1:string,param2:string,param3:iData.Race)
			{
				super(param1,param2);
				this.bg = new egret.Sprite();
				this.race = param3;
				this.addChild(this.bg);
				this.before.width = this.PX;
				this.before.height = this.PX;
				this.after.height = this.PX;
				this.after.width = this.PX;
				this.setText();
			}

			private setText()
			{
				this.text = iGlobal.Global.getTextField(32,16777215);
				this.text.width = 200;
				this.text.text = this.race.name.toUpperCase();
				this.addChild(this.text);
				this.text.x = 100;
				this.text.y = 5;
				this.text.visible = false;
			}

			public setAfter()
			{
				super.setAfter();
				this.addEventListener(egret.Event.ENTER_FRAME,flash.bind(this.overAnimation,this),null);
			}

			private overAnimation(param1:egret.Event)
			{
				if(this.count <= 10)
				{
					this.bg.graphics.clear();
					this.bg.graphics.beginFill(16777215,0.95);
					this.bg.graphics.drawRect(0 - this.count,0 - this.count,this.PX + this.count * 2,this.PX + this.count * 2);
					this.bg.graphics.endFill();
					this.bg.filters = [new flash.GlowFilter(5066061,0.66,13,13)];
					this.bg["transform"].colorTransform = new flash.ColorTransform(1 - 0.01 * this.count,1 - 0.03 * this.count,1 - 0.1 * this.count,0.1 * this.count);
				}
				if(this.count > 10)
				{
					this.bg.graphics.clear();
					this.bg.graphics.beginFill(16777215,0.95);
					this.bg.graphics.drawRect(-10,-10,this.PX + 20 + 20 * (this.count - 10),this.PX + 20);
					this.bg.graphics.endFill();
					this.bg.filters = [new flash.GlowFilter(5066061,0.66,13 + (this.count - 10) * 1,13 + (this.count - 10) * 1)];
					this.bg["transform"].colorTransform = new flash.ColorTransform(0.9,0.7,0,0.95);
					this.text.visible = true;
					this.text.alpha = (this.count - 10) * 0.1;
					this.text.filters = [new flash.GlowFilter(16777215,0.66,13 + (this.count - 10) * 1,13 + (this.count - 10) * 1)];
				}
				this.count++;
				if(this.count > 20)
				{
					this.removeEventListener(egret.Event.ENTER_FRAME,flash.bind(this.overAnimation,this),null);
				}
			}

			public setBefore()
			{
				super.setBefore();
				this.bg.graphics.clear();
				this.removeEventListener(egret.Event.ENTER_FRAME,flash.bind(this.overAnimation,this),null);
				this.count = flash.checkInt(0);
				this.filters = [];
				this.text.visible = false;
			}

			public setDown()
			{
				super.setDown();
				this.filters = [new flash.GlowFilter(10027008,0.66,23,23)];
			}

		}
	}
}

flash.extendsClass("iPanel.iScene.RaceButton","iPanel.iCell.ButtonCell")
