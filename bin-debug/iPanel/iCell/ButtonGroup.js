var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var iPanel;
(function (iPanel) {
    var iCell;
    (function (iCell) {
        var ButtonGroup = (function () {
            function ButtonGroup() {
                this.buttonList = new Array();
            }
            ButtonGroup.prototype.addButton = function (param1) {
                var _loc2_ = this.buttonList.length;
                var _loc3_ = 0;
                while (_loc3_ < _loc2_) {
                    if (this.buttonList[_loc3_] == param1) {
                        return false;
                    }
                    _loc3_++;
                }
                this.buttonList.push(param1);
                param1.buttonGroup = this;
                return true;
            };
            ButtonGroup.prototype.setDown = function (param1) {
                var _loc2_ = this.buttonList.length;
                var _loc3_ = 0;
                while (_loc3_ < _loc2_) {
                    if (this.buttonList[_loc3_] == param1) {
                        param1.setDown();
                    }
                    else {
                        this.buttonList[_loc3_].setBefore();
                    }
                    _loc3_++;
                }
            };
            return ButtonGroup;
        }());
        iCell.ButtonGroup = ButtonGroup;
        __reflect(ButtonGroup.prototype, "iPanel.iCell.ButtonGroup");
    })(iCell = iPanel.iCell || (iPanel.iCell = {}));
})(iPanel || (iPanel = {}));
//# sourceMappingURL=ButtonGroup.js.map