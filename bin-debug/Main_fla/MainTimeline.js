var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Main_fla;
(function (Main_fla) {
    var MainTimeline = (function (_super) {
        __extends(MainTimeline, _super);
        function MainTimeline() {
            var _this = _super.call(this) || this;
            _this["addFrameScript"](0, flash.bind(_this.frame1, _this), 1, flash.bind(_this.frame2, _this));
            return _this;
        }
        MainTimeline.prototype.loadProgress = function (param1) {
            this.lotxt.text = String(flash.tranint(param1.bytesLoaded / param1.bytesTotal * 100)) + "%";
            this.drawLine(param1.bytesLoaded / param1.bytesTotal);
        };
        MainTimeline.prototype.init = function (param1) {
            var _self__ = this;
            this._this.removeChild(this.lotxt);
            this.line.graphics.clear();
            this._this.removeChild(this.line);
            _self__.gotoAndStop(2);
        };
        MainTimeline.prototype.drawLine = function (param1) {
            this.line.graphics.lineStyle(2, 0);
            this.line.graphics.moveTo(0, 0);
            this.line.graphics.lineTo(param1 * 100, 0);
        };
        MainTimeline.prototype.frame1 = function () {
            var _self__ = this;
            _self__.stop();
            this.root["loaderInfo"].addEventListener(egret.ProgressEvent.PROGRESS, flash.bind(this.loadProgress, this), null, false, 0);
            this.root["loaderInfo"].addEventListener(egret.Event.COMPLETE, flash.bind(this.init, this), null, false, 0);
            this.lotxt = new flash.TextField();
            this.addChild(this.lotxt);
            this.lotxt.x = 390;
            this.lotxt.y = 280;
            this.lotxt.defaultTextFormat = new flash.TextFormat("Nesobrite Cd", "32");
            this._this = this;
            this.line = new egret.Sprite();
            this.line.graphics.lineStyle(2, 15066597);
            this.line.graphics.moveTo(0, 0);
            this.line.graphics.lineTo(100, 0);
            this.addChild(this.line);
            this.line.x = 350;
            this.line.y = 330;
        };
        MainTimeline.prototype.frame2 = function () {
            com.spikything.utils.MouseWheelTrap.setup(this.stage);
            this.myContextMenu = new flash.ContextMenu();
            this.myContextMenu["hideBuiltInItems"]();
            this.contextMenu = this.myContextMenu;
            this.addChild(new Main());
        };
        return MainTimeline;
    }(egret.MovieClip));
    Main_fla.MainTimeline = MainTimeline;
    __reflect(MainTimeline.prototype, "Main_fla.MainTimeline");
})(Main_fla || (Main_fla = {}));
flash.extendsClass("Main_fla.MainTimeline", "egret.MovieClip");
//# sourceMappingURL=MainTimeline.js.map