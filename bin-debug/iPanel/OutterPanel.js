var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var iPanel;
(function (iPanel) {
    var OutterPanel = (function (_super) {
        __extends(OutterPanel, _super);
        function OutterPanel(param1, param2) {
            if (param1 === void 0) { param1 = 400; }
            if (param2 === void 0) { param2 = true; }
            var _this = _super.call(this) || this;
            _this.mousedown = false;
            _this.temp = NaN;
            _this.d = 0;
            _this.H = 400;
            _this.isBlur = false;
            _this.setInnerPanel();
            _this.innerPanel.cacheAsBitmap = true;
            _this.H = param1;
            _this.isBlur = param2;
            _this.coverpanel = new iPanel.CoverPanel(820, _this.H);
            _this.coverpanel.cacheAsBitmap = true;
            _this.coverpanel.x = -400;
            var _loc3_ = new egret.Sprite();
            _loc3_.graphics.beginFill(0, 1);
            _loc3_.graphics.drawRect(0, 0, 400, 300);
            _loc3_.graphics.endFill();
            _loc3_.x = -400;
            _loc3_.y = 300;
            var _loc4_ = new egret.Sprite();
            _loc4_.addChild(_this.coverpanel);
            _loc4_.addChild(_loc3_);
            _this.addChild(_loc4_);
            _loc4_.cacheAsBitmap = true;
            _this.innerPanel.mask = _loc4_;
            _this.scrollBar = new iPanel.MyScrollBar(param1, _this.innerPanel);
            _this.addChild(_this.scrollBar);
            _this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.onMouseDown, _this);
            // this.addEventListener(egret.TouchEvent.TOUCH_END,flash.bind(this.onMouseUp,this),null);
            // this.addEventListener(egret.TouchEvent.TOUCH_MOVE,flash.bind(this.onMouseMove,this),null);
            _this.addEventListener(egret.Event.ENTER_FRAME, _this.onEnterFrame, _this);
            // this.addEventListener(flash.MouseEvent.ROLL_OUT,flash.bind(this.onMouseOut,this),null);
            // this.addEventListener(flash.MouseEvent.MOUSE_WHEEL,flash.bind(this.onMouseWheel,this),null);
            _this.addEventListener(tool.MyEvent.MyScroll, _this.onMyScroll, _this, null);
            if (param2) {
                _this.coverpanel.applyLowerBlur();
            }
            return _this;
        }
        OutterPanel.prototype.onMyScroll = function (param1) {
            this.innerPanel.positionY = -this.scrollBar.percent * (this.innerPanel.height - this.H);
            this.checkPosition();
            this.applyBlur();
        };
        OutterPanel.prototype.setInnerPanel = function () {
            this.innerPanel = new iPanel.InnerPanel();
            this.addChild(this.innerPanel);
        };
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
        OutterPanel.prototype.borderMove = function () {
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
        };
        // private onMouseOut(param1: flash.MouseEvent) {
        // 	console.log("out", param1.target, this["mouseY"], this["mouseX"]);
        // 	this.mousedown = false;
        // 	if (this["mouseY"] < 50 || this["mouseY"] > this.H - 50) {
        // 		this.scrollBar.onMouseUp(param1);
        // 	}
        // }
        OutterPanel.prototype.onEnterFrame = function (param1) {
            if (this.d != 0) {
                this.innerPanel.positionY = this.innerPanel.positionY + (this.d = this.d * 0.9);
                if (Math.abs(this.d) < 1) {
                    this.d = 0;
                }
                this.applyBlur();
            }
            if (!this.mousedown) {
                this.checkPosition();
            }
        };
        OutterPanel.prototype.applyBlur = function () {
            if (this.isBlur) {
                if (this.innerPanel.positionY < 0) {
                    this.coverpanel.applyUpperBlur();
                }
                else {
                    this.coverpanel.removeUpperBlur();
                }
            }
        };
        OutterPanel.prototype.checkPosition = function () {
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
        };
        return OutterPanel;
    }(egret.Sprite));
    iPanel.OutterPanel = OutterPanel;
    __reflect(OutterPanel.prototype, "iPanel.OutterPanel");
})(iPanel || (iPanel = {}));
// flash.extendsClass("iPanel.OutterPanel", "egret.Sprite")
//# sourceMappingURL=OutterPanel.js.map