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
            var OtherPanel = (function (_super) {
                __extends(OtherPanel, _super);
                function OtherPanel() {
                    var _this = _super.call(this) || this;
                    var bSprite = null;
                    var count = flash.checkInt(0);
                    var max = flash.checkInt(0);
                    var b = flash.checkInt(0);
                    var left = null;
                    var leftDown = null;
                    var right = null;
                    var rightDown = null;
                    var onEnterFrame = null;
                    var cell = null;
                    leftDown = function () {
                        right.visible = true;
                        this["setBefore"]();
                        count++;
                        b = flash.checkInt(count * 40);
                        bSprite.addEventListener(egret.Event.ENTER_FRAME, onEnterFrame, null);
                        if (count == 0) {
                            left.visible = false;
                        }
                    };
                    rightDown = function () {
                        left.visible = true;
                        this["setBefore"]();
                        count--;
                        b = flash.checkInt(count * 40);
                        bSprite.addEventListener(egret.Event.ENTER_FRAME, onEnterFrame, null);
                        if (max + count == 5) {
                            right.visible = false;
                        }
                    };
                    onEnterFrame = function (param1) {
                        bSprite.x = bSprite.x + (b - bSprite.x) * 0.5;
                        if (Math.abs(bSprite.x - b) < 1) {
                            bSprite.x = b;
                            bSprite.removeEventListener(egret.Event.ENTER_FRAME, onEnterFrame, null);
                        }
                    };
                    _this.array = new Array();
                    bSprite = new egret.Sprite();
                    _this.addChild(bSprite);
                    var cover = new egret.Sprite();
                    cover.graphics.beginFill(0, 1);
                    cover.graphics.drawRect(0, -20, 200, 60);
                    cover.graphics.endFill();
                    _this.addChild(cover);
                    bSprite.mask = cover;
                    var buttonGroup = new iPanel.iCell.ButtonGroup();
                    var list = ["item", "equip", "pet", "skill", "title", "system", "info"];
                    var list2 = ["背包", "装备", "宠物", "技能", "称号", "设置", "其他"];
                    var i = flash.checkInt(0);
                    while (i < list.length) {
                        cell = new iPanel.iCell.MenuButton("before_" + list[i], "after_" + list[i], list2[i]);
                        cell.x = i * 40;
                        bSprite.addChild(cell);
                        buttonGroup.addButton(cell);
                        _this.array.push(cell);
                        i++;
                    }
                    count = flash.checkInt(0);
                    max = flash.checkInt(list.length);
                    left = new iPanel.iCell.MenuButton("before_arrow_left", "after_arrow_left", "向左");
                    _this.addChild(left);
                    left.visible = false;
                    left.downFunction = leftDown;
                    right = new iPanel.iCell.MenuButton("before_arrow_right", "after_arrow_right", "向右");
                    _this.addChild(right);
                    right.x = 160;
                    right.downFunction = rightDown;
                    _this.init();
                    _this.setFunction();
                    return _this;
                }
                OtherPanel.prototype.init = function () {
                    this.itemWindow = new iPanel.iScene.iPanel.iWindow.ItemWindow();
                    this.equipWindow = new iPanel.iScene.iPanel.iWindow.EquipWindow();
                    this.petWindow = new iPanel.iScene.iPanel.iWindow.PetWindow();
                    this.skillWindow = new iPanel.iScene.iPanel.iWindow.SkillWindow();
                    this.titleWindow = new iPanel.iScene.iPanel.iWindow.TitleWindow();
                    this.systemWindow = new iPanel.iScene.iPanel.iWindow.SystemWindow();
                    this.otherWindow = new iPanel.iScene.iPanel.iWindow.OtherWindow();
                };
                OtherPanel.prototype.setFunction = function () {
                    var _self__ = this;
                    var _this = undefined;
                    var addWindow0 = null;
                    var addWindow1 = null;
                    var addWindow2 = null;
                    var addWindow3 = null;
                    var addWindow4 = null;
                    var addWindow5 = null;
                    var addWindow6 = null;
                    addWindow0 = function () {
                        removeWindow();
                        _this.window = _self__.itemWindow;
                        addWindow();
                    };
                    addWindow1 = function () {
                        removeWindow();
                        _this.window = _self__.equipWindow;
                        addWindow();
                    };
                    addWindow2 = function () {
                        removeWindow();
                        _this.window = _self__.petWindow;
                        addWindow();
                    };
                    addWindow3 = function () {
                        removeWindow();
                        _this.window = _self__.skillWindow;
                        addWindow();
                    };
                    addWindow4 = function () {
                        removeWindow();
                        _this.window = _self__.titleWindow;
                        addWindow();
                    };
                    addWindow5 = function () {
                        removeWindow();
                        _this.window = _self__.systemWindow;
                        addWindow();
                    };
                    addWindow6 = function () {
                        removeWindow();
                        _this.window = _self__.otherWindow;
                        addWindow();
                    };
                    var removeWindow = function () {
                        if (_this.window) {
                            _this.removeChild(_this.window);
                        }
                    };
                    var addWindow = function () {
                        _this.addChild(_this.window);
                        _this.window.y = 40;
                    };
                    _this = this;
                    this.array[0].downFunction = addWindow0;
                    this.array[1].downFunction = addWindow1;
                    this.array[2].downFunction = addWindow2;
                    this.array[3].downFunction = addWindow3;
                    this.array[4].downFunction = addWindow4;
                    this.array[5].downFunction = addWindow5;
                    this.array[6].downFunction = addWindow6;
                };
                return OtherPanel;
            }(egret.Sprite));
            iPanel.OtherPanel = OtherPanel;
            __reflect(OtherPanel.prototype, "iPanel.iScene.iPanel.OtherPanel");
        })(iPanel = iScene.iPanel || (iScene.iPanel = {}));
    })(iScene = iPanel_1.iScene || (iPanel_1.iScene = {}));
})(iPanel || (iPanel = {}));
flash.extendsClass("iPanel.iScene.iPanel.OtherPanel", "egret.Sprite");
//# sourceMappingURL=OtherPanel.js.map