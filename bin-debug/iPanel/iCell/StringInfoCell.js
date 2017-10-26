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
    var iCell;
    (function (iCell) {
        var StringInfoCell = (function (_super) {
            __extends(StringInfoCell, _super);
            function StringInfoCell(param1, param2, param3) {
                if (param3 === void 0) { param3 = 100; }
                var _this = _super.call(this) || this;
                _this.w = 0;
                _this.size = 16;
                _this.infoWindow = iGlobal.Global.stringInfoWindow;
                _this.textField = iGlobal.Global.getTextField(16);
                _this.info = param2;
                _this.w = param3;
                _this.addChild(_this.textField);
                _this.setText(param1);
                // this.addEventListener(egret.TouchEvent.TOUCH_MOVE,flash.bind(this.onMouseMove,this),null);
                // this.addEventListener(flash.MouseEvent.MOUSE_OVER,flash.bind(this.onMouseOver,this),null);
                // this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,flash.bind(this.onMouseOut,this),null);
                _this.touchChildren = false;
                return _this;
            }
            // public onMouseMove(param1:flash.MouseEvent)
            // {
            // 	var _loc2_:egret.Point = flash.localToGlobal(this,new egret.Point(this["mouseX"] + 15,this["mouseY"] + 15));
            // 	this.infoWindow.x = _loc2_.x;
            // 	this.infoWindow.y = _loc2_.y;
            // 	if(this.infoWindow.x + this.infoWindow.width > iGlobal.Global.stage.stageWidth)
            // 	{
            // 		this.infoWindow.x = this.infoWindow.x - this.infoWindow.width - 30;
            // 	}
            // }
            // public onMouseOver(param1:flash.MouseEvent)
            // {
            // 	this.filters = [new flash.GlowFilter(5066061,0.66,13,13)];
            // 	if(this.parent)
            // 	{
            // 		this.parent.addChildAt(this,this.parent.numChildren - 1);
            // 	}
            // 	iGlobal.Global.setStringInfoWindow(this.info);
            // }
            // public onMouseOut(param1:flash.MouseEvent)
            // {
            // 	this.filters = [];
            // 	iGlobal.Global.hideInfoWindow();
            // }
            StringInfoCell.prototype.setInfo = function (param1) {
                this.info = param1;
            };
            StringInfoCell.prototype.setText = function (param1) {
                var _loc2_ = 0;
                this.textField.width = this.w + 100;
                this.textField.text = param1;
                this.textField.width = this.textField.textWidth + 6;
                if (this.textField.width > this.w) {
                    this.removeChild(this.textField);
                    _loc2_ = 1;
                    while (_loc2_ < this.size) {
                        this.textField = iGlobal.Global.getTextField(this.size - _loc2_);
                        this.textField.width = this.w + 100;
                        this.textField.text = param1;
                        this.textField.width = this.textField.textWidth + 6;
                        if (this.textField.width < this.w) {
                            break;
                        }
                        _loc2_++;
                    }
                    this.addChild(this.textField);
                }
                this.graphics.clear();
                this.graphics.beginFill(16777215, 0.95);
                this.graphics.drawRoundRect(0, 0, this.textField.textWidth + 6, this.textField.textHeight + 2, 3);
                this.graphics.endFill();
            };
            return StringInfoCell;
        }(egret.Sprite));
        iCell.StringInfoCell = StringInfoCell;
        __reflect(StringInfoCell.prototype, "iPanel.iCell.StringInfoCell");
    })(iCell = iPanel.iCell || (iPanel.iCell = {}));
})(iPanel || (iPanel = {}));
// flash.extendsClass("iPanel.iCell.StringInfoCell","egret.Sprite")
//# sourceMappingURL=StringInfoCell.js.map