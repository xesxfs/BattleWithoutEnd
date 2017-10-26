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
                var iTitle;
                (function (iTitle) {
                    var TitleInnerPanel = (function (_super) {
                        __extends(TitleInnerPanel, _super);
                        function TitleInnerPanel() {
                            var _this = this;
                            _this.Gap = 50;
                            _super.prototype.var;
                            _self__: any = _this;
                            ();
                            var _loc4_ = null;
                            _this.listSprite = new egret.Sprite();
                            _this.addChild(_this.listSprite);
                            var _loc1_ = iData.iPlayer.TitleList.list;
                            var _loc2_ = flash.checkInt(_loc1_.length);
                            var _loc3_ = flash.checkInt(0);
                            while (_loc3_ < _loc2_) {
                                _loc4_ = new iPanel.iScene.iPanel.iWindow.iTitle.TitleCell(_loc1_[_loc3_]);
                                _this.listSprite.addChild(_loc4_);
                                _loc4_.y = _this.Gap * _loc3_;
                                _loc3_++;
                            }
                            _self__.addEventListener(tool.MyEvent.Update, flash.bind(_this.onUpdate, _this), null, true);
                            return _this;
                        }
                        TitleInnerPanel.prototype.onUpdate = function (param1) {
                            if (param1 === void 0) { param1 = null; }
                            var _loc2_ = flash.checkInt(0);
                            while (_loc2_ < this.listSprite.numChildren) {
                                (flash.As3As(this.listSprite.getChildAt(_loc2_), iPanel.iScene.iPanel.iWindow.iTitle.TitleCell)).update();
                                _loc2_++;
                            }
                        };
                        return TitleInnerPanel;
                    }(iPanel.InnerPanel));
                    iTitle.TitleInnerPanel = TitleInnerPanel;
                    __reflect(TitleInnerPanel.prototype, "iPanel.iScene.iPanel.iWindow.iTitle.TitleInnerPanel");
                })(iTitle = iWindow.iTitle || (iWindow.iTitle = {}));
            })(iWindow = iPanel.iWindow || (iPanel.iWindow = {}));
        })(iPanel = iScene.iPanel || (iScene.iPanel = {}));
    })(iScene = iPanel_1.iScene || (iPanel_1.iScene = {}));
})(iPanel || (iPanel = {}));
flash.extendsClass("iPanel.iScene.iPanel.iWindow.iTitle.TitleInnerPanel", "iPanel.InnerPanel");
//# sourceMappingURL=TitleInnerPanel.js.map