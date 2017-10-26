module iPanel {
	export class MyScrollBar extends egret.Sprite {
		private scroll: egret.Sprite;
		private total: number = 0;
		private inner: egret.Sprite;
		private _position: number = NaN;
		public isDown: boolean = false;
		private bg: egret.Sprite;
		public percent: number = NaN;

		public constructor(param1: number, param2: egret.Sprite) {
			super();
			// param1 = flash.checkInt(param1);
			this.total = param1;
			this.inner = param2;
			this.scroll = new egret.Sprite();
			this.addChild(this.scroll);
			this.bg = new egret.Sprite();
			this.bg.graphics.beginFill(0, 0);
			this.bg.graphics.drawRect(-10, 0, 20, param1);
			this.bg.graphics.endFill();
			this.addChild(this.bg);
			// this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,flash.bind(this.onMouseDown,this),null);
			// this.addEventListener(egret.TouchEvent.TOUCH_END,flash.bind(this.onMouseUp,this),null);
			// this.addEventListener(egret.TouchEvent.TOUCH_MOVE,flash.bind(this.onMouseMove,this),null);
			this.drawScroll();
		}

		// private onMouseDown(param1:flash.MouseEvent):any
		// {
		// 	param1.stopPropagation();
		// 	this.isDown = true;
		// 	this.onMouseMove(param1);
		// }

		// public onMouseUp(param1:flash.MouseEvent):any
		// {
		// 	param1.stopPropagation();
		// 	this.isDown = false;
		// }

		// public onMouseMove(param1:flash.MouseEvent):any
		// {
		// 	var _self__:any = this;
		// 	param1.stopPropagation();
		// 	if(this.getLength() < 0)
		// 	{
		// 		return ;
		// 	}
		// 	if(this.isDown)
		// 	{
		// 		this.position = this["mouseY"] - this.getLength() / 2;
		// 		_self__.dispatchEvent(new tool.MyEvent(tool.MyEvent.MyScroll));
		// 	}
		// 	this.drawScroll();
		// }

		private set position(param1: number) {
			this._position = param1;
			if (this._position > this.total - this.getLength()) {
				this._position = this.total - this.getLength();
			}
			if (this._position < 0) {
				this._position = 0;
			}
			this.percent = this._position / (this.total - this.getLength());
		}

		public updatePosition(param1: number): any {
			this.percent = param1;
			this.position = this.percent * (this.total - this.getLength());
			this.drawScroll();
		}

		private drawScroll(): any {
			this.scroll.graphics.clear();
			if (this.getLength() < 0) {
				return;
			}
			this.scroll.graphics.beginFill(7631988);
			this.scroll.graphics.drawRoundRect(0, this._position, 3, this.getLength(), 2, 2);
			this.scroll.graphics.endFill();
			var _loc1_: egret.Rectangle = this.getTransformedBounds(this.inner);
			this.x = _loc1_.x + _loc1_.width;
		}

		private getLength(): any {
			var _loc1_: number = this.total / this.inner.height * this.total;
			if (this.inner.height < this.total) {
				_loc1_ = -1;
			}
			else if (_loc1_ < 50) {
				_loc1_ = 50;
			}
			return _loc1_;
		}

	}
}

// flash.extendsClass("iPanel.MyScrollBar", "egret.Sprite")
