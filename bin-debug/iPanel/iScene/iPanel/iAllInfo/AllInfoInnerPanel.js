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
            var iAllInfo;
            (function (iAllInfo) {
                var AllInfoInnerPanel = (function (_super) {
                    __extends(AllInfoInnerPanel, _super);
                    function AllInfoInnerPanel() {
                        var _this = _super.call(this) || this;
                        _this.init();
                        return _this;
                    }
                    AllInfoInnerPanel.prototype.init = function () {
                        this.list = new Array();
                        this.listSprite = new egret.Sprite();
                        this.bg = new egret.Sprite();
                        this.addChild(this.bg);
                        this.addChild(this.listSprite);
                    };
                    AllInfoInnerPanel.prototype.addText = function (param1) {
                        var _loc2_ = new iPanel.iCell.StringCell(this.getTime() + param1, 385, 16);
                        if (this.list.length > 100) {
                            this.listSprite.removeChild(this.list.shift());
                        }
                        this.list.push(_loc2_);
                        this.listSprite.addChild(_loc2_);
                        this.tidy();
                    };
                    AllInfoInnerPanel.prototype.tidy = function () {
                        var _loc1_ = flash.checkInt(this.list.length);
                        var _loc2_ = flash.checkInt(0);
                        while (_loc2_ < this.list.length) {
                            this.list[_loc2_].y = _loc2_ * 20;
                            this.list[_loc2_].x = 10;
                            _loc2_++;
                        }
                        if (this.height > 360 && this.list.length < 100) {
                            this.y = this.y - 20;
                        }
                        this.drawBg();
                    };
                    AllInfoInnerPanel.prototype.getTime = function () {
                        var _loc1_ = new flash.As3Date();
                        var _loc2_ = "[" + _loc1_.getHours() + ":" + _loc1_.getMinutes() + ":" + _loc1_.getSeconds() + "]";
                        return _loc2_;
                    };
                    AllInfoInnerPanel.prototype.drawBg = function () {
                        this.bg.graphics.clear();
                        this.bg.graphics.beginFill(16777215, 0);
                        this.bg.graphics.drawRect(0, 0, 400, this.height);
                        this.bg.graphics.endFill();
                    };
                    return AllInfoInnerPanel;
                }(iPanel.InnerPanel));
                iAllInfo.AllInfoInnerPanel = AllInfoInnerPanel;
                __reflect(AllInfoInnerPanel.prototype, "iPanel.iScene.iPanel.iAllInfo.AllInfoInnerPanel");
            })(iAllInfo = iPanel.iAllInfo || (iPanel.iAllInfo = {}));
        })(iPanel = iScene.iPanel || (iScene.iPanel = {}));
    })(iScene = iPanel_1.iScene || (iPanel_1.iScene = {}));
})(iPanel || (iPanel = {}));
flash.extendsClass("iPanel.iScene.iPanel.iAllInfo.AllInfoInnerPanel", "iPanel.InnerPanel");
//# sourceMappingURL=AllInfoInnerPanel.js.map