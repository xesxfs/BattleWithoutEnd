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
        var StringInfoWindow = (function (_super) {
            __extends(StringInfoWindow, _super);
            function StringInfoWindow() {
                var _this = _super.call(this, 0, 0) || this;
                _this.textField = iGlobal.Global.getTextField(20);
                // this.textField.textAlign = egret.TextFieldAutoSize.LEFT;
                _this.textField.multiline = true;
                _this.addChild(_this.textField);
                _this.touchChildren = false;
                _this.touchEnabled = false;
                return _this;
            }
            StringInfoWindow.prototype.setText = function (param1) {
                var _loc3_ = 0;
                var _loc4_ = 0;
                this.graphics.clear();
                this.textField.text = param1;
                this.textField.width = 300;
                var _loc2_ = (this.textField.textWidth);
                if (_loc2_ < 200) {
                    _loc3_ = (_loc2_ + 4);
                    _loc4_ = (this.textField.textHeight + 2);
                    this.textField.width = _loc3_ + 2;
                }
                else {
                    this.textField.width = 200;
                    _loc3_ = (204);
                    _loc4_ = (this.textField.height + 2);
                }
                _super.prototype.draw.call(this, _loc3_, _loc4_);
            };
            return StringInfoWindow;
        }(iPanel.iCell.InfoWindow));
        iCell.StringInfoWindow = StringInfoWindow;
        __reflect(StringInfoWindow.prototype, "iPanel.iCell.StringInfoWindow");
    })(iCell = iPanel.iCell || (iPanel.iCell = {}));
})(iPanel || (iPanel = {}));
// flash.extendsClass("iPanel.iCell.StringInfoWindow","iPanel.iCell.InfoWindow")
//# sourceMappingURL=StringInfoWindow.js.map