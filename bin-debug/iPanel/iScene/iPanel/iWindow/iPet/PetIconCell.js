var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var iPanel;
(function (iPanel_1) {
    var iScene;
    (function (iScene) {
        var iPanel;
        (function (iPanel) {
            var iWindow;
            (function (iWindow) {
                var iPet;
                (function (iPet) {
                    var PetIconCell = (function (_super) {
                        __extends(PetIconCell, _super);
                        function PetIconCell(param1) {
                            if (param1 === void 0) { param1 = null; }
                            var _this = _super.call(this, "flash.display.Sprite", "flash.display.Sprite") || this;
                            _this.SIZE = 80;
                            var _loc2_ = null;
                            var _loc3_ = null;
                            if (param1 == null) {
                                _loc2_ = new mc_mode();
                            }
                            else {
                                _loc2_ = new (flash.getDefinitionByName("pet_" + param1.mc_name))();
                            }
                            _this.before.addChild(_loc2_);
                            _loc2_.width = _this.SIZE;
                            _loc2_.height = _this.SIZE;
                            if (param1 == null) {
                                _loc3_ = new mc_mode();
                            }
                            else {
                                _loc3_ = new (flash.getDefinitionByName("pet_" + param1.mc_name))();
                            }
                            _this.after.addChild(_loc3_);
                            _loc3_.width = _this.SIZE;
                            _loc3_.height = _this.SIZE;
                            return _this;
                        }
                        return PetIconCell;
                    }(iPanel.iCell.ButtonCell));
                    iPet.PetIconCell = PetIconCell;
                    __reflect(PetIconCell.prototype, "iPanel.iScene.iPanel.iWindow.iPet.PetIconCell");
                })(iPet = iWindow.iPet || (iWindow.iPet = {}));
            })(iWindow = iPanel.iWindow || (iPanel.iWindow = {}));
        })(iPanel = iScene.iPanel || (iScene.iPanel = {}));
    })(iScene = iPanel_1.iScene || (iPanel_1.iScene = {}));
})(iPanel || (iPanel = {}));
flash.extendsClass("iPanel.iScene.iPanel.iWindow.iPet.PetIconCell", "iPanel.iCell.ButtonCell");
//# sourceMappingURL=PetIconCell.js.map