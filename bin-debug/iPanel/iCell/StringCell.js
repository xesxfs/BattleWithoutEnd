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
        var StringCell = (function (_super) {
            __extends(StringCell, _super);
            function StringCell(param1, param2, param3) {
                if (param2 === void 0) { param2 = 100; }
                if (param3 === void 0) { param3 = 16; }
                var _this = _super.call(this, 0, 0) || this;
                _this.size = 0;
                _this.w = 0;
                _this.size = param3;
                _this.w = param2;
                _this.textField = iGlobal.Global.getTextField(param3);
                _this.addChild(_this.textField);
                _this.setText(param1);
                _this.touchChildren = false;
                _this.touchEnabled = false;
                return _this;
            }
            StringCell.prototype.setText = function (param1) {
                var _loc2_ = 0;
                this.graphics.clear();
                if (this.contains(this.textField)) {
                    this.removeChild(this.textField);
                }
                this.textField = iGlobal.Global.getTextField(this.size);
                this.addChild(this.textField);
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
            };
            return StringCell;
        }(iPanel.iCell.BasicCell));
        iCell.StringCell = StringCell;
        __reflect(StringCell.prototype, "iPanel.iCell.StringCell");
    })(iCell = iPanel.iCell || (iPanel.iCell = {}));
})(iPanel || (iPanel = {}));
// flash.extendsClass("iPanel.iCell.StringCell","iPanel.iCell.BasicCell")
//# sourceMappingURL=StringCell.js.map