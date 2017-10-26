module iPanel {
	export class OutterPanel extends egret.Sprite {
		public innerPanel: iPanel.InnerPanel;
		private coverpanel: iPanel.CoverPanel;
		private mousedown: boolean = false;
		private temp: number = NaN;
		private d: number = 0;
		private H: number = 400;
		private isBlur: boolean = false;
		private scrollBar: iPanel.MyScrollBar;

		public constructor(param1: number = 400, param2: boolean = true) {
			super();
			this.setInnerPanel();
			this.innerPanel.cacheAsBitmap = true;
			this.H = param1;
			this.isBlur = param2;
			this.coverpanel = new iPanel.CoverPanel(820, this.H);
			this.coverpanel.cacheAsBitmap = true;
			this.coverpanel.x = -400;
			var _loc3_: egret.Sprite = new egret.Sprite();
			_loc3_.graphics.beginFill(0, 1);
			_loc3_.graphics.drawRect(0, 0, 400, 300);
			_loc3_.graphics.endFill();
			_loc3_.x = -400;
			_loc3_.y = 300;
			var _loc4_: egret.Sprite = new egret.Sprite();
			_loc4_.addChild(this.coverpanel);
			_loc4_.addChild(_loc3_);
			this.addChild(_loc4_);
			_loc4_.cacheAsBitmap = true;
			this.innerPanel.mask = _loc4_;
			this.scrollBar = new iPanel.MyScrollBar(param1, this.innerPanel);
			this.addChild(this.scrollBar);
			this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onMouseDown, this);
			// this.addEventListener(egret.TouchEvent.TOUCH_END,flash.bind(this.onMouseUp,this),null);
			// this.addEventListener(egret.TouchEvent.TOUCH_MOVE,flash.bind(this.onMouseMove,this),null);
			this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
			// this.addEventListener(flash.MouseEvent.ROLL_OUT,flash.bind(this.onMouseOut,this),null);
			// this.addEventListener(flash.MouseEvent.MOUSE_WHEEL,flash.bind(this.onMouseWheel,this),null);
			this.addEventListener(tool.MyEvent.MyScroll, this.onMyScroll, this, null);
			if (param2) {
				this.coverpanel.applyLowerBlur();
			}
		}

		private onMyScroll(param1: egret.Event): any {
			this.innerPanel.positionY = -this.scrollBar.percent * (this.innerPanel.height - this.H);
			this.checkPosition();
			this.applyBlur();
		}

		protected setInnerPanel(): any {
			this.innerPanel = new iPanel.InnerPanel();
			this.addChild(this.innerPanel);
		}

		// private onMouseWheel(param1: flash.MouseEvent) {
		// 	this.innerPanel.positionY = this.innerPanel.positionY + param1["delta"] * 5;
		// 	param1.updateAfterEvent();
		// 	this.applyBlur();
		// 	this.d = param1["delta"] * 5;
		// }

		// private onMouseDown(param1: flash.MouseEvent) {
		// 	if (<any>!this.mousedown) {
		// 		this.temp = this["mouseY"];
		// 	}
		// 	this.mousedown = true;
		// }

		// private onMouseUp(param1: flash.MouseEvent) {
		// 	this.mousedown = false;
		// 	this.scrollBar.onMouseUp(param1);
		// }

		// private onMouseMove(param1: flash.MouseEvent) {
		// 	if (this.mousedown) {
		// 		this.d = -this.temp + (this.temp = this["mouseY"]);
		// 		this.innerPanel.positionY = this.innerPanel.positionY + this.d;
		// 		param1.updateAfterEvent();
		// 		this.applyBlur();
		// 	}
		// 	else if (this.scrollBar.percent < 90) {
		// 		this.scrollBar.onMouseMove(param1);
		// 	}
		// }

		private borderMove(): any {
			if (this.innerPanel.positionY + this.innerPanel.height < this.H) {
				return;
			}
			if (this.innerPanel.positionY > 0) {
				return;
			}
			if (this["mouseY"] > this.H - 30 && this["mouseY"] < this.H && this["mouseX"] >= 0 && this["mouseX"] < 200) {
				this.d = (this.H - this["mouseY"] - 30) / 5;
				this.innerPanel.positionY = this.innerPanel.positionY + this.d;
				this.applyBlur();
			}
			if (this["mouseY"] < 30 && this["mouseY"] > 0 && this["mouseX"] >= 0 && this["mouseX"] < 200) {
				this.d = (30 - this["mouseY"]) / 5;
				this.innerPanel.positionY = this.innerPanel.positionY + this.d;
				this.applyBlur();
			}
		}

		// private onMouseOut(param1: flash.MouseEvent) {
		// 	console.log("out", param1.target, this["mouseY"], this["mouseX"]);
		// 	this.mousedown = false;
		// 	if (this["mouseY"] < 50 || this["mouseY"] > this.H - 50) {
		// 		this.scrollBar.onMouseUp(param1);
		// 	}
		// }

		private onEnterFrame(param1: egret.Event) {
			if (this.d != 0) {
				this.innerPanel.positionY = this.innerPanel.positionY + (this.d = this.d * 0.9);
				if (Math.abs(this.d) < 1) {
					this.d = 0;
				}
				this.applyBlur();
			}
			if (<any>!this.mousedown) {
				this.checkPosition();
			}
		}

		private applyBlur() {
			if (this.isBlur) {
				if (this.innerPanel.positionY < 0) {
					this.coverpanel.applyUpperBlur();
				}
				else {
					this.coverpanel.removeUpperBlur();
				}
			}
		}

		private checkPosition() {
			if (this.innerPanel.positionY > 0) {
				this.innerPanel.positionY = this.innerPanel.positionY * 0.9;
				if (Math.abs(this.innerPanel.positionY) < 1) {
					this.innerPanel.positionY = 0;
				}
			}
			if (this.innerPanel.height < this.H) {
				if (this.innerPanel.positionY < 0) {
					this.innerPanel.positionY = this.innerPanel.positionY * 0.9;
					if (Math.abs(this.innerPanel.positionY) < 1) {
						this.innerPanel.positionY = 0;
					}
				}
				return;
			}
			if (this.innerPanel.positionY + this.innerPanel.height < this.H) {
				this.innerPanel.positionY = this.innerPanel.positionY - (this.innerPanel.positionY - (-this.innerPanel.height + this.H)) * 0.1;
				if (this.innerPanel.positionY > this.H - this.innerPanel.height) {
					this.innerPanel.positionY = this.H - this.innerPanel.height;
				}
			}
			this.scrollBar.updatePosition(-this.innerPanel.positionY / (this.innerPanel.height - this.H));
		}

	}
}

// flash.extendsClass("iPanel.OutterPanel", "egret.Sprite")
