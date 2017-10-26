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
        var MenuButton = (function (_super) {
            __extends(MenuButton, _super);
            function MenuButton(param1, param2, param3) {
                var _this = _super.call(this, param1, param2) || this;
                _this.bg = new iPanel.iCell.BasicCell(40, 40);
                _this.infoWindow = iGlobal.Global.stringInfoWindow;
                _this.addChild(_this.bg);
                _this.text = param3;
                return _this;
            }
            // public onMouseOver(param1:flash.MouseEvent)
            // {
            // 	super.onMouseOver(param1);
            // 	var _loc2_:egret.Point = flash.localToGlobal(this,new egret.Point(this["mouseX"] + 15,this["mouseY"] + 15));
            // 	this.infoWindow.x = _loc2_.x;
            // 	this.infoWindow.y = _loc2_.y;
            // 	if(this.infoWindow.x + this.infoWindow.width > iGlobal.Global.stage.stageWidth)
            // 	{
            // 		this.infoWindow.x = this.infoWindow.x - this.infoWindow.width - 10;
            // 	}
            // 	iGlobal.Global.setStringInfoWindow(this.text);
            // }
            // public onMouseOut(param1:flash.MouseEvent)
            // {
            // 	super.onMouseOut(param1);
            // 	iGlobal.Global.hideInfoWindow();
            // }
            MenuButton.prototype.setBefore = function () {
                _super.prototype.setBefore.call(this);
                this.filters = [];
            };
            MenuButton.prototype.setDown = function () {
                _super.prototype.setDown.call(this);
                // this.filters = [new flash.GlowFilter(5066061,0.66,13,13)];
                if (this.parent) {
                    this.parent.addChildAt(this, this.parent.numChildren - 1);
                }
            };
            return MenuButton;
        }(iPanel.iCell.ButtonCell));
        iCell.MenuButton = MenuButton;
        __reflect(MenuButton.prototype, "iPanel.iCell.MenuButton");
    })(iCell = iPanel.iCell || (iPanel.iCell = {}));
})(iPanel || (iPanel = {}));
// flash.extendsClass("iPanel.iCell.MenuButton","iPanel.iCell.ButtonCell")
//# sourceMappingURL=MenuButton.js.map