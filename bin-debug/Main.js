var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this._mochiads_game_id = "0378b66faafd51ef";
        var _self__ = _this;
        if (_this.stage) {
            _this.init();
        }
        else {
            _self__.addEventListener(egret.Event.ADDED_TO_STAGE, _this.init, _this, null);
        }
        return _this;
    }
    Main.prototype.init = function (param1) {
        if (param1 === void 0) { param1 = null; }
        var _self__ = this;
        var mc = null;
        var clickHandle = null;
        var onEnterFrame = null;
        var e = param1;
        clickHandle = function (param1) {
            new egret.URLRequest("http://critgame.net");
        };
        onEnterFrame = function () {
            var scene = null;
            if (mc.currentFrame == mc.totalFrames - 1) {
                var next = function () {
                    mc.parent.removeChild(mc);
                };
                tool.Effect.fadeOut(mc, 20, next);
                scene = new iPanel.iScene.BeginScene();
                iGlobal.Global.stage.addChild(scene);
                tool.Effect.fadeIn(scene);
                mc.removeEventListener(egret.Event.ENTER_FRAME, onEnterFrame, null);
            }
        };
        _self__.removeEventListener(egret.Event.ADDED_TO_STAGE, this.init, this, null);
        iGlobal.Global.init(this.stage);
        mc = new brand_mc();
        this.addChild(mc);
        mc.x = this.stage.stageWidth / 2;
        mc.y = this.stage.stageHeight / 2;
        mc["buttonMode"] = true;
        mc.addEventListener(egret.TouchEvent.TOUCH_TAP, clickHandle, null);
        mc.addEventListener(egret.Event.ENTER_FRAME, onEnterFrame, null);
    };
    return Main;
}(egret.Sprite));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map