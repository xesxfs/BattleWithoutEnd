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
            var ComfirmScene = (function (_super) {
                __extends(ComfirmScene, _super);
                function ComfirmScene(param1, param2) {
                    var _this = _super.call(this, 300, 200) || this;
                    var _this = undefined;
                    var noDown = null;
                    var str = param1;
                    var behaveFunction = param2;
                    noDown = function () {
                        _this.parent.removeChild(_this);
                        this["setBefore"]();
                    };
                    _this.graphics.lineStyle(2, 7631988);
                    _this.graphics.drawRect(0, 0, 300, 200);
                    _this.text = new iPanel.iCell.StringCell(str, 250, 32);
                    _this.addChild(_this.text);
                    _this.text.x = 150 - _this.text.width / 2;
                    _this.text.y = 50 - _this.text.height / 2;
                    var ok = new iPanel.iScene.FlickerButton("SURE", 100, 50);
                    _this.addChild(ok);
                    ok.x = 30;
                    ok.y = 120;
                    ok.downFunction = behaveFunction;
                    var no = new iPanel.iScene.FlickerButton("CANCEL", 100, 50);
                    _this.addChild(no);
                    no.x = 170;
                    no.y = 120;
                    no.downFunction = noDown;
                    _this = _this;
                    return _this;
                }
                return ComfirmScene;
            }(iPanel.iCell.BasicCell));
            iPanel.ComfirmScene = ComfirmScene;
            __reflect(ComfirmScene.prototype, "iPanel.iScene.iPanel.ComfirmScene");
        })(iPanel = iScene.iPanel || (iScene.iPanel = {}));
    })(iScene = iPanel_1.iScene || (iPanel_1.iScene = {}));
})(iPanel || (iPanel = {}));
flash.extendsClass("iPanel.iScene.iPanel.ComfirmScene", "iPanel.iCell.BasicCell");
//# sourceMappingURL=ComfirmScene.js.map