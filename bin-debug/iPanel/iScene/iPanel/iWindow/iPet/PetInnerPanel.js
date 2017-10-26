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
                    var PetInnerPanel = (function (_super) {
                        __extends(PetInnerPanel, _super);
                        function PetInnerPanel() {
                            var _this = _super.call(this) || this;
                            _this.Gap = 50;
                            _this.update();
                            _this.addEventListener(tool.MyEvent.Update, flash.bind(_this.onUpdate, _this), null, true);
                            return _this;
                        }
                        PetInnerPanel.prototype.onUpdate = function (param1) {
                            this.update();
                        };
                        PetInnerPanel.prototype.update = function () {
                            this.updateList();
                        };
                        PetInnerPanel.prototype.updateList = function () {
                            var _loc3_ = null;
                            if (this.listSprite) {
                                this.removeChild(this.listSprite);
                            }
                            this.listSprite = new egret.Sprite();
                            this.addChild(this.listSprite);
                            this.buttonGroup = new iPanel.iCell.ButtonGroup();
                            var _loc1_ = flash.checkInt(iGlobal.Player.petList.length);
                            var _loc2_ = flash.checkInt(0);
                            while (_loc2_ < _loc1_) {
                                _loc3_ = new iPanel.iScene.iPanel.iWindow.iPet.PetCell(iGlobal.Player.petList[_loc2_]);
                                this.listSprite.addChild(_loc3_);
                                _loc3_.y = _loc2_ * this.Gap;
                                this.buttonGroup.addButton(_loc3_);
                                _loc2_++;
                            }
                        };
                        return PetInnerPanel;
                    }(iPanel.InnerPanel));
                    iPet.PetInnerPanel = PetInnerPanel;
                    __reflect(PetInnerPanel.prototype, "iPanel.iScene.iPanel.iWindow.iPet.PetInnerPanel");
                })(iPet = iWindow.iPet || (iWindow.iPet = {}));
            })(iWindow = iPanel.iWindow || (iPanel.iWindow = {}));
        })(iPanel = iScene.iPanel || (iScene.iPanel = {}));
    })(iScene = iPanel_1.iScene || (iPanel_1.iScene = {}));
})(iPanel || (iPanel = {}));
flash.extendsClass("iPanel.iScene.iPanel.iWindow.iPet.PetInnerPanel", "iPanel.InnerPanel");
//# sourceMappingURL=PetInnerPanel.js.map