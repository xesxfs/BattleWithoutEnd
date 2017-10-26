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
        var EquipButton = (function (_super) {
            __extends(EquipButton, _super);
            function EquipButton(param1) {
                var _this = _super.call(this, "flash.display.Sprite", "flash.display.Sprite") || this;
                _this.FIX = 20;
                return _this;
                // var _loc2_:egret.Sprite = <any>new doubleCircle();
                // _loc2_.width = this.FIX;
                // _loc2_.height = this.FIX;
                // _loc2_["transform"].colorTransform = new flash.ColorTransform(1,1,1,1,255,255,255,0);
                // this.before.addChild(_loc2_);
                // var _loc3_:egret.Sprite = <any>new (<any>flash.getDefinitionByName("mc_" + param1))();
                // this.before.addChild(_loc3_);
                // this.setMcPosition(_loc3_);
                // var _loc4_:egret.Sprite = <any>new doubleCircle();
                // _loc4_.width = this.FIX;
                // _loc4_.height = this.FIX;
                // this.after.addChild(_loc4_);
                // var _loc5_:egret.Sprite = <any>new (<any>flash.getDefinitionByName("mc_" + param1))();
                // _loc5_["transform"].colorTransform = new flash.ColorTransform(1,1,1,1,255,255,255,0);
                // this.after.addChild(_loc5_);
                // this.setMcPosition(_loc5_);
            }
            EquipButton.prototype.setMcPosition = function (param1) {
                var _loc2_ = NaN;
                if (param1.width > param1.height) {
                    _loc2_ = 10 / param1.width;
                }
                else {
                    _loc2_ = 10 / param1.height;
                }
                param1.scaleX = _loc2_;
                param1.scaleY = _loc2_;
                param1.x = this.FIX / 2 - param1.width / 2;
                param1.y = this.FIX / 2 - param1.height / 2;
            };
            return EquipButton;
        }(iPanel.iCell.ButtonCell));
        iCell.EquipButton = EquipButton;
        __reflect(EquipButton.prototype, "iPanel.iCell.EquipButton");
    })(iCell = iPanel.iCell || (iPanel.iCell = {}));
})(iPanel || (iPanel = {}));
// flash.extendsClass("iPanel.iCell.EquipButton","iPanel.iCell.ButtonCell")
//# sourceMappingURL=EquipButton.js.map