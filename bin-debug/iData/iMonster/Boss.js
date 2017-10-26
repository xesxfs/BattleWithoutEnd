var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var iData;
(function (iData) {
    var iMonster;
    (function (iMonster) {
        /**Boss类 */
        var Boss = (function (_super) {
            __extends(Boss, _super);
            function Boss(param1) {
                var _this = _super.call(this, param1) || this;
                /**boss血量*/
                _this.hpleft = 0;
                _this.hpleft = _this.hp;
                return _this;
            }
            Boss.prototype.generateTitle = function () {
                this.title = iData.iMonster.MonsterTitleList.REGION_BOSS;
                this.addTitleStat();
            };
            Object.defineProperty(Boss.prototype, "CP", {
                get: function () {
                    return this.data.CP * 2;
                },
                enumerable: true,
                configurable: true
            });
            Boss.prototype.dropItem = function () {
                var _loc2_ = null;
                var _loc1_ = iData.iItem.EquipmentList.list[iData.iItem.EquipmentList.list.length * Math.random() >> 0];
                if (_loc1_ instanceof iData.iItem.WeaponData) {
                    //这里
                    var loc1 = _loc1_;
                    _loc2_ = new iData.iItem.Weapon(loc1, this.dropRate, true);
                }
                else {
                    _loc2_ = new iData.iItem.Equipment(_loc1_, this.dropRate, true);
                }
                var _loc3_ = false;
                if (!iGlobal.Global["item" + _loc2_.quality + "_toggle"]) {
                    _loc3_ = true;
                }
                if (!_loc3_) {
                    if ((_loc2_ instanceof iData.iItem.Weapon) || _loc2_.type == iData.iItem.EquipType.ACCESORY) {
                        if (!iGlobal.Global[_loc2_.name + "_toggle"]) {
                            _loc3_ = true;
                        }
                    }
                    else if (!iGlobal.Global[_loc2_.position + "_" + _loc2_.type + "_toggle"]) {
                        _loc3_ = true;
                    }
                }
                if (!_loc3_ && iGlobal.Player.addItem(_loc2_)) {
                    if (iPanel.iScene.MainScene.lootPanel) {
                        switch (_loc2_.quality) {
                            case 0:
                                iPanel.iScene.MainScene.lootPanel.basic++;
                                break;
                            case 1:
                                iPanel.iScene.MainScene.lootPanel.magic++;
                                break;
                            case 2:
                                iPanel.iScene.MainScene.lootPanel.rare++;
                                break;
                            case 3:
                                iPanel.iScene.MainScene.lootPanel.perfect++;
                                break;
                            case 4:
                                iPanel.iScene.MainScene.lootPanel.epic++;
                                break;
                            case 5:
                                iPanel.iScene.MainScene.lootPanel.legendary++;
                        }
                    }
                }
                else {
                    _loc3_ = true;
                }
                if (_loc3_) {
                    iGlobal.Player.addMoney(_loc2_.getMoney());
                }
            };
            Boss.prototype.dropPet = function () {
                var _loc2_ = NaN;
                var _loc3_ = 0;
                var _loc1_ = 20 * (1 + iGlobal.Player.luck / 200);
                if (_loc1_ > 40) {
                    _loc1_ = 40;
                }
                if (Math.random() * 100 < _loc1_) {
                    _loc2_ = iGlobal.Player.luck / 500;
                    if (_loc2_ > 1) {
                        _loc2_ = 1;
                    }
                    _loc3_ = (1 + iGlobal.Global.map.mapData.modifier) * (1 + _loc2_);
                    iGlobal.Player.addPet(new iData.iPet.Pet(iGlobal.Global.map.mapData.petList[iGlobal.Global.map.mapData.petList.length * Math.random() >> 0], _loc3_));
                }
            };
            return Boss;
        }(iData.iMonster.Monster));
        iMonster.Boss = Boss;
        __reflect(Boss.prototype, "iData.iMonster.Boss");
    })(iMonster = iData.iMonster || (iData.iMonster = {}));
})(iData || (iData = {}));
//# sourceMappingURL=Boss.js.map