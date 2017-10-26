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
        var SaveScene = (function (_super) {
            __extends(SaveScene, _super);
            function SaveScene() {
                var _this = _super.call(this) || this;
                _this.Gap = 130;
                _this.startX = 100;
                _this.startY = 50;
                _this.drawSave(1);
                _this.drawSave(2);
                _this.drawSave(3);
                _this.drawSave(4);
                return _this;
            }
            SaveScene.prototype.drawManualButton = function () {
                var _this = undefined;
                var manualDown = null;
                manualDown = function () {
                    var file = null;
                    var selected = null;
                    var on_loaded = null;
                    selected = function (param1) {
                        file["load"]();
                        file["addEventListener"](egret.Event.COMPLETE, on_loaded);
                    };
                    on_loaded = function (param1) {
                        var next = null;
                        var e = param1;
                        next = function () {
                            var _loc1_ = new iScene.iPanel.iScene.MainScene();
                            iGlobal.Global.mainScene = _loc1_;
                            iGlobal.Global.stage.addChild(_loc1_);
                            tool.Effect.fadeIn(_loc1_);
                        };
                        iGlobal.Player.manualLoad(e.target["data"]);
                        tool.Effect.fadeOut(_this, 10, next);
                    };
                    file = new FileReference();
                    file["browse"]();
                    file["addEventListener"](flash.Event.SELECT, selected);
                    this["setBefore"]();
                };
                var manualLoad = new iScene.iPanel.iScene.FlickerButton("Manual Load", 100, 50, 20);
                this.addChild(manualLoad);
                manualLoad.x = 680;
                manualLoad.y = -5;
                manualLoad.downFunction = manualDown;
                _this = this;
            };
            SaveScene.prototype.drawSave = function (param1) {
                param1 = flash.checkInt(param1);
                this.sharedObject = flash.SharedObject.getLocal("slot" + param1);
                if (this.sharedObject.data["userName"]) {
                    this.drawOld(param1);
                }
                else {
                    this.drawNew(param1);
                    this.sharedObject.clear();
                }
            };
            SaveScene.prototype.drawNew = function (param1) {
                param1 = flash.checkInt(param1);
                var text = null;
                var start = null;
                var onIn = null;
                var _this = undefined;
                var down = null;
                var num = flash.checkInt(param1);
                onIn = function (param1) {
                    var _loc2_ = flash.As3As(param1.target, flash.TextField);
                    if (_loc2_.text != "") {
                        start.visible = true;
                    }
                    else {
                        start.visible = false;
                    }
                };
                down = function () {
                    if (iScene.iPanel.iScene.SaveScene.slot == "") {
                        var next = function () {
                            var _loc1_ = new iScene.iPanel.iScene.RaceScene();
                            iGlobal.Global.stage.addChild(_loc1_);
                            tool.Effect.fadeIn(_loc1_);
                        };
                        iScene.iPanel.iScene.SaveScene.slot = "slot" + num;
                        iGlobal.Player.playerName = text.text;
                        tool.Effect.fadeOut(_this, 10, next);
                        _this.parent.removeChild(_this);
                    }
                };
                var sp = new egret.MovieClip();
                sp.graphics.lineStyle(2, 7631988, 1);
                sp.graphics.drawRect(0, 0, 600, 100);
                this.addChild(sp);
                sp.x = this.startX;
                sp.y = this.startY + (num - 1) * this.Gap;
                sp["num"] = num;
                var name = new iScene.iPanel.iCell.StringCell("角色", 150, 32);
                sp.addChild(name);
                name.x = 20;
                name.y = 10;
                text = iGlobal.Global.getTextField();
                text["selectable"] = true;
                text.type = egret.TextFieldType.INPUT;
                text.border = 2;
                text.borderColor = flash.checkUint(7631988);
                sp.addChild(text);
                text.x = 100;
                text.y = 10;
                start = new iScene.iPanel.iScene.FlickerButton("新建", 100, 50);
                sp.addChild(start);
                start.x = 480;
                start.y = 5;
                start.visible = false;
                text.addEventListener(egret.Event.CHANGE, onIn, null);
                start.downFunction = down;
                _this = this;
            };
            SaveScene.prototype.drawOld = function (param1) {
                param1 = flash.checkInt(param1);
                var _self__ = this;
                var sp = null;
                var _this = undefined;
                var down = null;
                var se = null;
                var deDown = null;
                var deleDown = null;
                var num = flash.checkInt(param1);
                down = function () {
                    if (iScene.iPanel.iScene.SaveScene.slot == "") {
                        var next = function () {
                            var _loc1_ = new iScene.iPanel.iScene.MainScene();
                            iGlobal.Global.mainScene = _loc1_;
                            iGlobal.Global.stage.addChild(_loc1_);
                            tool.Effect.fadeIn(_loc1_);
                        };
                        iScene.iPanel.iScene.SaveScene.slot = "slot" + num;
                        iGlobal.Player.load();
                        tool.Effect.fadeOut(_this, 10, next);
                    }
                    this["setBefore"]();
                };
                deDown = function () {
                    _this.addChild(se);
                    se.x = 250;
                    se.y = 150;
                    this["setBefore"]();
                };
                deleDown = function () {
                    _self__.sharedObject = flash.SharedObject.getLocal("slot" + num);
                    _self__.sharedObject.clear();
                    _this.removeChild(sp);
                    _this.drawSave(num);
                    _this.removeChild(se);
                };
                sp = new egret.MovieClip();
                sp.graphics.lineStyle(2, 7631988, 1);
                sp.graphics.drawRect(0, 0, 600, 100);
                this.addChild(sp);
                sp.x = this.startX;
                sp.y = this.startY + (num - 1) * this.Gap;
                sp["num"] = num;
                var name = new iScene.iPanel.iCell.StringCell("角色", 150, 32);
                sp.addChild(name);
                name.x = 20;
                name.y = 10;
                var text = new iScene.iPanel.iCell.StringCell(this.sharedObject.data["userName"], 300, 32);
                sp.addChild(text);
                text.x = 100;
                text.y = 10;
                var time = new iScene.iPanel.iCell.StringCell(this.sharedObject.data["time"], 200, 32);
                sp.addChild(time);
                time.x = 200;
                time.y = 50;
                var load = new iScene.iPanel.iScene.FlickerButton("读取", 100, 40);
                sp.addChild(load);
                load.x = 480;
                load.y = 5;
                load.downFunction = down;
                _this = this;
                var dele = new iScene.iPanel.iScene.FlickerButton("删除", 50, 20, 16);
                sp.addChild(dele);
                dele.x = 540;
                dele.y = 65;
                dele.downFunction = deDown;
                se = new iScene.iPanel.iScene.iPanel.ComfirmScene("确定删除?", deleDown);
                _this = this;
            };
            return SaveScene;
        }(egret.Sprite));
        iScene.SaveScene = SaveScene;
        __reflect(SaveScene.prototype, "iPanel.iScene.SaveScene");
    })(iScene = iPanel.iScene || (iPanel.iScene = {}));
})(iPanel || (iPanel = {}));
iPanel.iScene.SaveScene.slot = "";
flash.extendsClass("iPanel.iScene.SaveScene", "egret.Sprite");
//# sourceMappingURL=SaveScene.js.map