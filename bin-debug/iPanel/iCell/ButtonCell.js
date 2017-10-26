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
        var ButtonCell = (function (_super) {
            __extends(ButtonCell, _super);
            function ButtonCell(param1, param2) {
                var _this = _super.call(this) || this;
                _this.buttonDown = false;
                _this.before = new (egret.getDefinitionByName(param1))();
                _this.after = new (egret.getDefinitionByName(param2))();
                _this.addChild(_this.before);
                _this.addChild(_this.after);
                _this.after.visible = false;
                return _this;
                // this.addEventListener(flash.MouseEvent.MOUSE_OVER,flash.bind(this.onMouseOver,this),null);
                // this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,flash.bind(this.onMouseOut,this),null);
                // this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,flash.bind(this.onMouseDown,this),null);
            }
            // public onMouseOver(param1:flash.MouseEvent)
            // {
            // 	if(<any>!this.buttonDown)
            // 	{
            // 		this.setAfter();
            // 	}
            // }
            // public onMouseOut(param1:flash.MouseEvent)
            // {
            // 	if(<any>!this.buttonDown)
            // 	{
            // 		this.setBefore();
            // 	}
            // }
            // public onMouseDown(param1:flash.MouseEvent)
            // {
            // 	if(this.buttonGroup)
            // 	{
            // 		this.buttonGroup.setDown(this);
            // 	}
            // 	else
            // 	{
            // 		this.setDown();
            // 	}
            // }
            ButtonCell.prototype.setAfter = function () {
                this.after.visible = true;
            };
            ButtonCell.prototype.setBefore = function () {
                this.after.visible = false;
                this.buttonDown = false;
            };
            ButtonCell.prototype.setDown = function () {
                if (!this.buttonDown) {
                    this.buttonDown = true;
                    if (this.downFunction) {
                        this.downFunction();
                    }
                }
                else {
                    this.buttonDown = false;
                    this.setBefore();
                }
            };
            return ButtonCell;
        }(egret.Sprite));
        iCell.ButtonCell = ButtonCell;
        __reflect(ButtonCell.prototype, "iPanel.iCell.ButtonCell");
    })(iCell = iPanel.iCell || (iPanel.iCell = {}));
})(iPanel || (iPanel = {}));
flash.extendsClass("iPanel.iCell.ButtonCell", "egret.Sprite");
//# sourceMappingURL=ButtonCell.js.map