module iPanel {
	export module iBar {
		export class Bar extends egret.Sprite {
			public infoWindow:iPanel.iCell.StringInfoWindow;
			private line:egret.Sprite;
			private bg:egret.Sprite;
			private _max:number = NaN;
			private _value:number = 0;
			private _aim:number = 0;
			private RATIO:number = 0.1;
			private w:number = NaN;
			private fcolor:number = 0;
			private text:string;
			private isMouseOver:boolean = false;

			public constructor(param1:number,param2:number,param3:number,param4:string = "")
			{
				super();
				this.infoWindow = iGlobal.Global.stringInfoWindow;
				this.w = param1;
				this._max = param2;
				this.fcolor = param3;
				this.text = param4;
				this.drawBg();
				this.line = new egret.Sprite();
				this.addChild(this.line);
				this.updateMc();
				this.addEventListener(egret.Event.ENTER_FRAME,this.onEnterFrame,this,null);
				// this.addEventListener(flash.MouseEvent.MOUSE_OVER,flash.bind(this.onMouseOver,this),null);
				// this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,flash.bind(this.onMouseOut,this),null);
			}

			// private onMouseOver(param1:flash.MouseEvent)
			// {
			// 	this.filters = [new flash.GlowFilter(this.fcolor,0.66,4,4)];
			// 	var _loc2_:egret.Point = flash.localToGlobal(this,new egret.Point(this["mouseX"] + 15,this["mouseY"] + 15));
			// 	this.infoWindow.x = _loc2_.x;
			// 	this.infoWindow.y = _loc2_.y;
			// 	this.infoWindow.y = _loc2_.y;
			// 	this.isMouseOver = true;
			// 	iGlobal.Global.setStringInfoWindow(this.text + (this._value >> 0) + "/" + this._max);
			// }

			// private onMouseOut(param1:flash.MouseEvent)
			// {
			// 	this.filters = [];
			// 	this.isMouseOver = false;
			// 	iGlobal.Global.hideInfoWindow();
			// }

			private updateMc()
			{
				this.line.graphics.clear();
				this.line.graphics.lineStyle(2,15066597);
				this.line.graphics.moveTo(0,0);
				this.line.graphics.lineTo(this.w,0);
				this.line.graphics.lineStyle(2,this.fcolor);
				this.line.graphics.moveTo(0,0);
				if(this._value < 0)
				{
					this.line.graphics.lineTo(0,0);
				}
				else if(this._value > this._max)
				{
					this.line.graphics.lineTo(this.w,0);
				}
				else
				{
					this.line.graphics.lineTo(this._value / this._max * this.w,0);
				}
			}

			public onEnterFrame(param1:egret.Event)
			{
				if(Math.abs(this._aim - this._value) > this._max / 100)
				{
					this._value = this._value + (this._aim - this._value) * this.RATIO;
				}
				else
				{
					this._value = this._aim;
				}
				this.updateMc();
			}

			public set Max(param1:number)
			{
				this._max = param1;
			}

			public set Value(param1:number)
			{
				this._aim = param1;
				if(this.isMouseOver)
				{
					iGlobal.Global.setStringInfoWindow(this.text + (this._value >> 0) + "/" + this._max);
				}
			}

			public get Value():number
			{
				return this._value;
			}

			private drawBg()
			{
				this.bg = new egret.Sprite();
				this.addChild(this.bg);
				this.bg.graphics.beginFill(4095,0);
				this.bg.graphics.drawRect(-3,0,this.w,8);
				this.bg.graphics.endFill();
			}

		}
	}
}
