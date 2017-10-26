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
    var MyScrollBar = (function (_super) {
        __extends(MyScrollBar, _super);
        function MyScrollBar(param1, param2) {
            var _this = _super.call(this) || this;
            _this.total = 0;
            _this._position = NaN;
            _this.isDown = false;
            _this.percent = NaN;
            // param1 = flash.checkInt(param1);
            _this.total = param1;
            _this.inner = param2;
            _this.scroll = new egret.Sprite();
            _this.addChild(_this.scroll);
            _this.bg = new egret.Sprite();
            _this.bg.graphics.beginFill(0, 0);
            _this.bg.graphics.drawRect(-10, 0, 20, param1);
            _this.bg.graphics.endFill();
            _this.addChild(_this.bg);
            // this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,flash.bind(this.onMouseDown,this),null);
            // this.addEventListener(egret.TouchEvent.TOUCH_END,flash.bind(this.onMouseUp,this),null);
            // this.addEventListener(egret.TouchEvent.TOUCH_MOVE,flash.bind(this.onMouseMove,this),null);
            _this.drawScroll();
            return _this;
        }
        Object.defineProperty(MyScrollBar.prototype, "position", {
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
            set: function (param1) {
                this._position = param1;
                if (this._position > this.total - this.getLength()) {
                    this._position = this.total - this.getLength();
                }
                if (this._position < 0) {
                    this._position = 0;
                }
                this.percent = this._position / (this.total - this.getLength());
            },
            enumerable: true,
            configurable: true
        });
        MyScrollBar.prototype.updatePosition = function (param1) {
            this.percent = param1;
            this.position = this.percent * (this.total - this.getLength());
            this.drawScroll();
        };
        MyScrollBar.prototype.drawScroll = function () {
            this.scroll.graphics.clear();
            if (this.getLength() < 0) {
                return;
            }
            this.scroll.graphics.beginFill(7631988);
            this.scroll.graphics.drawRoundRect(0, this._position, 3, this.getLength(), 2, 2);
            this.scroll.graphics.endFill();
            var _loc1_ = this.getTransformedBounds(this.inner);
            this.x = _loc1_.x + _loc1_.width;
        };
        MyScrollBar.prototype.getLength = function () {
            var _loc1_ = this.total / this.inner.height * this.total;
            if (this.inner.height < this.total) {
                _loc1_ = -1;
            }
            else if (_loc1_ < 50) {
                _loc1_ = 50;
            }
            return _loc1_;
        };
        return MyScrollBar;
    }(egret.Sprite));
    iPanel.MyScrollBar = MyScrollBar;
    __reflect(MyScrollBar.prototype, "iPanel.MyScrollBar");
})(iPanel || (iPanel = {}));
// flash.extendsClass("iPanel.MyScrollBar", "egret.Sprite")
//# sourceMappingURL=MyScrollBar.js.map