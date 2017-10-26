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
                var iItem;
                (function (iItem) {
                    var ItemInnerPanel = (function (_super) {
                        __extends(ItemInnerPanel, _super);
                        function ItemInnerPanel() {
                            var _this = _super.call(this) || this;
                            _this.Gap = 50;
                            _this.text = iGlobal.Global.getTextField(32, 16777215);
                            var _loc1_ = new egret.Sprite();
                            _loc1_.graphics.beginFill(0, 0);
                            _loc1_.graphics.drawRect(0, 0, 20, 20);
                            _loc1_.graphics.endFill();
                            _this.addChild(_loc1_);
                            _this.text.width = 200;
                            _this.addChild(_this.text);
                            _this.update();
                            _this.addEventListener(tool.MyEvent.Update, flash.bind(_this.onUpdate, _this), null, true);
                            return _this;
                        }
                        ItemInnerPanel.prototype.setSelectedCell = function (param1) {
                            var _self__ = this;
                            this.selectCell = param1;
                            _self__.dispatchEvent(new tool.MyEvent(tool.MyEvent.Change));
                        };
                        ItemInnerPanel.prototype.update = function () {
                            if (iPanel.iScene.MainScene.otherPanel) {
                                if (iPanel.iScene.MainScene.otherPanel.itemWindow) {
                                    iPanel.iScene.MainScene.otherPanel.itemWindow.removeCurrentItem();
                                }
                            }
                            this.updateList();
                        };
                        ItemInnerPanel.prototype.removeList = function () {
                        };
                        Object.defineProperty(ItemInnerPanel.prototype, "positionY", {
                            get: function () {
                                return egret.superGetter(iPanel.iScene.iPanel.iWindow.iItem.ItemInnerPanel, this, "positionY");
                            },
                            set: function (param1) {
                                var _loc4_ = flash.checkInt(0);
                                this.y = param1;
                                var _loc2_ = flash.checkInt(-this.y / 50);
                                var _loc3_ = flash.checkInt(this.listSpriteArray.length);
                                if (_loc2_ - 2 >= _loc3_) {
                                    return;
                                }
                                _loc4_ = flash.checkInt(0);
                                while (_loc4_ < _loc2_ - 2) {
                                    if (this.listSprite.contains(this.listSpriteArray[_loc4_])) {
                                        this.listSprite.removeChild(this.listSpriteArray[_loc4_]);
                                    }
                                    _loc4_++;
                                }
                                var _loc5_ = flash.checkInt(_loc2_ + 12);
                                if (_loc5_ >= _loc3_) {
                                    _loc5_ = flash.checkInt(_loc3_ - 1);
                                }
                                var _loc6_ = flash.checkInt(_loc2_ - 2);
                                if (_loc6_ < 0) {
                                    _loc6_ = flash.checkInt(0);
                                }
                                _loc4_ = flash.checkInt(_loc6_);
                                while (_loc4_ < _loc5_) {
                                    this.listSprite.addChild(this.listSpriteArray[_loc4_]);
                                    _loc4_++;
                                }
                                _loc4_ = flash.checkInt(_loc2_ + 12);
                                while (_loc4_ < _loc3_) {
                                    if (this.listSprite.contains(this.listSpriteArray[_loc4_])) {
                                        this.listSprite.removeChild(this.listSpriteArray[_loc4_]);
                                    }
                                    _loc4_++;
                                }
                            },
                            enumerable: true,
                            configurable: true
                        });
                        ItemInnerPanel.prototype.updateList = function () {
                            var _self__ = this;
                            var cell = null;
                            if (this.listSprite) {
                                this.removeChild(this.listSprite);
                            }
                            this.listSprite = new egret.Sprite();
                            this.addChild(this.listSprite);
                            this.listSpriteArray = new Array();
                            this.buttonGroup = new iPanel.iCell.ButtonGroup();
                            var length = flash.checkInt(iGlobal.Player.itemList.length);
                            var i = flash.checkInt(0);
                            while (i < length) {
                                var onDown = function () {
                                    _self__.setSelectedCell(this);
                                    if (iPanel.iScene.MainScene.otherPanel) {
                                        if (iPanel.iScene.MainScene.otherPanel.itemWindow) {
                                            iPanel.iScene.MainScene.otherPanel.itemWindow.removeCurrentItem();
                                        }
                                    }
                                };
                                cell = new iPanel.iCell.EquipmentCell(iGlobal.Player.itemList[i]);
                                this.listSprite.addChild(cell);
                                cell.y = i * this.Gap;
                                this.buttonGroup.addButton(cell);
                                this.listSpriteArray.push(cell);
                                cell.downFunction = onDown;
                                i++;
                            }
                        };
                        ItemInnerPanel.prototype.updateText = function () {
                            this.text.htmlText = "<p align=\'center\'>" + iGlobal.Player.itemList.length + "/" + iGlobal.Player.BAGMAX + "</p>";
                            this.text.y = iGlobal.Player.itemList.length * 50;
                        };
                        ItemInnerPanel.prototype.addOneCell = function () {
                            var _self__ = this;
                            var onDown = null;
                            onDown = function () {
                                _self__.setSelectedCell(this);
                            };
                            var cell = new iPanel.iCell.EquipmentCell(iGlobal.Player.itemList[iGlobal.Player.itemList.length - 1]);
                            this.listSprite.addChild(cell);
                            cell.y = (iGlobal.Player.itemList.length - 1) * this.Gap;
                            this.buttonGroup.addButton(cell);
                            cell.downFunction = onDown;
                        };
                        ItemInnerPanel.prototype.onUpdate = function (param1) {
                            this.update();
                        };
                        return ItemInnerPanel;
                    }(iPanel.InnerPanel));
                    iItem.ItemInnerPanel = ItemInnerPanel;
                    __reflect(ItemInnerPanel.prototype, "iPanel.iScene.iPanel.iWindow.iItem.ItemInnerPanel");
                })(iItem = iWindow.iItem || (iWindow.iItem = {}));
            })(iWindow = iPanel.iWindow || (iPanel.iWindow = {}));
        })(iPanel = iScene.iPanel || (iScene.iPanel = {}));
    })(iScene = iPanel_1.iScene || (iPanel_1.iScene = {}));
})(iPanel || (iPanel = {}));
flash.extendsClass("iPanel.iScene.iPanel.iWindow.iItem.ItemInnerPanel", "iPanel.InnerPanel");
//# sourceMappingURL=ItemInnerPanel.js.map