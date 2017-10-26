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
    var iScene;
    (function (iScene) {
        var BeginScene = (function (_super) {
            __extends(BeginScene, _super);
            function BeginScene() {
                var _this = _super.call(this) || this;
                _this.version = "1.4";
                return _this;
                // var _this:any = undefined;
                // var down: Function = <any>null;
                // var onMouseDown: Function = <any>null;
                // down = function ():any
                // {
                // 	var next:Function = <any>null;
                // 	next = function ():any
                // 	{
                // 		var _loc1_:iPanel.iScene.SaveScene = new iPanel.iScene.SaveScene();
                // 		iGlobal.Global.stage.addChild(_loc1_);
                // 		tool.Effect.fadeIn(_loc1_);
                // 		_this.parent.removeChild(_this);
                // 	};
                // 	tool.Effect.fadeOut(_this,10,next);
                // };
                // onMouseDown = function (param1:flash.MouseEvent):any
                // {
                // 	flash.navigateToURL(new egret.URLRequest("https://www.facebook.com/pages/Crit-Game/492086344181628"),"_blank");
                // };
                // var bg: iPanel.iCell.BasicCell = new iPanel.iCell.BasicCell(800, 600);
                // this.addChild(bg);
                // var cell: egret.MovieClip = <any>new caption_mc();
                // this.addChild(cell);
                // cell.x = -20;
                // cell.y = 10;
                // cell.scaleX = 1.8;
                // cell.scaleY = 1.8;
                // var begin: iPanel.iScene.FlickerButton = new iPanel.iScene.FlickerButton("开始游戏", 200, 80, 40);
                // this.addChild(begin);
                // begin.x = 300;
                // begin.y = 350;
                // begin.downFunction = down;
                // _this = this;
                // var versionCell: iPanel.iCell.StringCell = new iPanel.iCell.StringCell("版本." + this.version, 100, 16);
                // this.addChild(versionCell);
                // versionCell.x = 730;
                // versionCell.y = 570;
                // var facebook: egret.SwfButton = <any>new facebook_button();
                // this.addChild(facebook);
                // facebook.x = 650;
                // facebook.y = 540;
                // facebook.width = 50;
                // facebook.height = 50;
                // facebook.addEventListener(egret.TouchEvent.TOUCH_BEGIN, onMouseDown, null);
            }
            return BeginScene;
        }(egret.Sprite));
        iScene.BeginScene = BeginScene;
        __reflect(BeginScene.prototype, "iPanel.iScene.BeginScene");
    })(iScene = iPanel.iScene || (iPanel.iScene = {}));
})(iPanel || (iPanel = {}));
// flash.extendsClass("iPanel.iScene.BeginScene","egret.Sprite")
//# sourceMappingURL=BeginScene.js.map