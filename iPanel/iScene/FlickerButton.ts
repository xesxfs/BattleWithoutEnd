module iPanel {
	export module iScene {
		export class FlickerButton extends iPanel.iCell.ButtonCell {
			private bg:iPanel.iCell.BasicCell;
			private count:number = 0;
			private flag:boolean = true;
			private flickerTime:number = 30;

			public constructor(param1:string,param2:number,param3:number,param4:number = 32)
			{
				super("flash.display.Sprite","flash.display.Sprite");
				this.bg = new iPanel.iCell.BasicCell(param2,param3);
				this.addChild(this.bg);
				var _loc5_:any = <any>iGlobal.Global.getTextField(param4);
				iGlobal.Global.getTextField(param4).width = param2;
				_loc5_.text = param1;
				this.before.addChild(_loc5_);
				this.before.x = param2 / 2 - _loc5_.textWidth / 2;
				this.before.y = param3 / 2 - _loc5_.textHeight / 2;
				var _loc6_:flash.TextField = iGlobal.Global.getTextField(param4,16777215);
				_loc6_.width = param2;
				_loc6_.text = param1;
				this.after.addChild(_loc6_);
				this.after.x = param2 / 2 - _loc6_.textWidth / 2;
				this.after.y = param3 / 2 - _loc6_.textHeight / 2;
			}

			public setAfter()
			{
				super.setAfter();
				this.addEventListener(egret.Event.ENTER_FRAME,flash.bind(this.overAnimation,this),null);
			}

			private overAnimation(param1:egret.Event)
			{
				if(this.count <= this.flickerTime)
				{
					this.filters = [new flash.GlowFilter(5066061,0.66,13 + this.count,13 + this.count)];
					this.bg["transform"].colorTransform = new flash.ColorTransform(1 - 0.1 / this.flickerTime * this.count,1 - 0.3 / this.flickerTime * this.count,1 - 1 / this.flickerTime * this.count,0.01 + 1 / this.flickerTime * this.count);
				}
				if(this.count > this.flickerTime)
				{
					this.flag = false;
				}
				else if(this.count <= 0)
				{
					this.flag = true;
				}
				if(this.flag)
				{
					this.count++;
				}
				else
				{
					this.count--;
				}
			}

			public setBefore()
			{
				super.setBefore();
				this.removeEventListener(egret.Event.ENTER_FRAME,flash.bind(this.overAnimation,this),null);
				this.count = flash.checkInt(0);
				this.bg["transform"].colorTransform = new flash.ColorTransform();
				this.filters = [];
				if(this.parent)
				{
					this.parent.addChildAt(this,this.parent.numChildren - 1);
				}
			}

			public setDown()
			{
				super.setDown();
				this.removeEventListener(egret.Event.ENTER_FRAME,flash.bind(this.overAnimation,this),null);
			}

		}
	}
}

flash.extendsClass("iPanel.iScene.FlickerButton","iPanel.iCell.ButtonCell")
