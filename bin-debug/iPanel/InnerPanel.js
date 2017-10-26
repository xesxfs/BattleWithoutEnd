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
    var InnerPanel = (function (_super) {
        __extends(InnerPanel, _super);
        function InnerPanel() {
            return _super.call(this) || this;
        }
        Object.defineProperty(InnerPanel.prototype, "positionY", {
            get: function () {
                return this.y;
            },
            set: function (param1) {
                this.y = param1;
            },
            enumerable: true,
            configurable: true
        });
        return InnerPanel;
    }(egret.Sprite));
    iPanel.InnerPanel = InnerPanel;
    __reflect(InnerPanel.prototype, "iPanel.InnerPanel");
})(iPanel || (iPanel = {}));
// flash.extendsClass("iPanel.InnerPanel","egret.Sprite")
//# sourceMappingURL=InnerPanel.js.map