var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var iData;
(function (iData) {
    var iMonster;
    (function (iMonster) {
        var Monster = (function () {
            function Monster(monsterData) {
                this.RED = "#ff4040";
                this.BLUE = "#4a60d7";
                this.YELLOW = "#FFA640";
                this.GREEN = "#4BB814";
                this.BROWN = "#bf7130";
                this.PURPLE = "#BC38d3";
                this.PINK = "#EE6b9c";
                this.data = monsterData.clone();
                this.buffList = new Array();
                this.generateTitle();
            }
            Monster.prototype.generateTitle = function () {
                if (Math.random() > 0.8) {
                    this.title = iData.iMonster.MonsterTitleList.list[iData.iMonster.MonsterTitleList.list.length * Math.random() >> 0];
                    this.addTitleStat();
                }
            };
            /**增加称号单位属性 */
            Monster.prototype.addTitleStat = function () {
                var _loc3_ = null;
                var _loc1_ = this.title.statMulList.length;
                var _loc2_ = 0;
                while (_loc2_ < _loc1_) {
                    _loc3_ = this.title.statMulList[_loc2_];
                    if (_loc3_.name == iData.iItem.Stat.attackMin) {
                        this.data.attack = new iData.iNumber.DamageNumber(this.data.attack.min * _loc3_.mul + _loc3_.add, this.data.attack.max);
                    }
                    else if (_loc3_.name == iData.iItem.Stat.attackMax) {
                        this.data.attack = new iData.iNumber.DamageNumber(this.data.attack.min, this.data.attack.max * _loc3_.mul + _loc3_.add);
                    }
                    else if (_loc3_.name == iData.iItem.Stat.ATTACK) {
                        this.data.attack = new iData.iNumber.DamageNumber(this.data.attack.min * _loc3_.mul + _loc3_.add, this.data.attack.max * _loc3_.mul + _loc3_.add);
                    }
                    else {
                        this.data[_loc3_.name] = this.data[_loc3_.name] * _loc3_.mul;
                        this.data[_loc3_.name] = this.data[_loc3_.name] + _loc3_.add;
                    }
                    _loc2_++;
                }
            };
            Monster.prototype.addBuff = function (param1) {
                var _loc2_ = this.isContainBuff(param1.name);
                if (_loc2_ == null) {
                    this.buffList.push(param1);
                }
                else {
                    _loc2_.combine(param1);
                }
                iPanel.iScene.MainScene.monsterInfoPanel.updateBuff();
            };
            Monster.prototype.runBuff = function () {
                var _loc1_ = this.buffList.length;
                var _loc2_ = 0;
                while (_loc2_ < _loc1_) {
                    this.buffList[_loc2_].run();
                    _loc2_++;
                }
                this.removeBuff();
            };
            Monster.prototype.removeBuff = function () {
                var _loc1_ = this.buffList.length;
                var _loc2_ = 0;
                while (_loc2_ < _loc1_) {
                    if (this.buffList[_loc2_].isOver()) {
                        this.buffList.splice(_loc2_, 1);
                        iPanel.iScene.MainScene.monsterInfoPanel.updateBuff();
                        return;
                    }
                    _loc2_++;
                }
            };
            Monster.prototype.isContainBuff = function (param1) {
                var _loc2_ = this.buffList.length;
                var _loc3_ = 0;
                while (_loc3_ < _loc2_) {
                    if (this.buffList[_loc3_].name == param1) {
                        return this.buffList[_loc3_];
                    }
                    _loc3_++;
                }
                return null;
            };
            Object.defineProperty(Monster.prototype, "CP", {
                get: function () {
                    return this.data.CP;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Monster.prototype, "money", {
                get: function () {
                    var _loc1_ = (this.CP / iGlobal.Player.combatPower + iGlobal.Global.map.mapData.modifier) * this.CP / 10 * (1 + iGlobal.Player.luck / 300);
                    if (this.title) {
                        _loc1_ = _loc1_ * this.title.goldMul;
                    }
                    return _loc1_;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Monster.prototype, "exp", {
                get: function () {
                    var _loc1_ = (this.CP / iGlobal.Player.combatPower + iGlobal.Global.map.mapData.modifier) * this.CP * (1 + iGlobal.Player.luck / 300);
                    if (this.title) {
                        _loc1_ = _loc1_ * this.title.xpMul;
                    }
                    return _loc1_;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Monster.prototype, "dropRate", {
                get: function () {
                    var _loc1_ = (this.CP / iGlobal.Player.combatPower + iGlobal.Global.map.mapData.modifier) * (1 + iGlobal.Player.luck / 300);
                    if (this.title) {
                        _loc1_ = _loc1_ * this.title.dropMul;
                    }
                    return _loc1_;
                },
                enumerable: true,
                configurable: true
            });
            Monster.prototype.dropItem = function () {
                var _loc1_ = null;
                var _loc2_ = null;
                var _loc3_ = false;
                if (Math.random() * 100 < 20 * this.dropRate) {
                    _loc1_ = iData.iItem.EquipmentList.list[iData.iItem.EquipmentList.list.length * Math.random() >> 0];
                    if (_loc1_ instanceof iData.iItem.WeaponData) {
                        var loc1 = _loc1_;
                        _loc2_ = new iData.iItem.Weapon(loc1, this.dropRate);
                    }
                    else {
                        _loc2_ = new iData.iItem.Equipment(_loc1_, this.dropRate);
                    }
                    _loc3_ = false;
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
                }
            };
            Monster.prototype.dropPet = function () {
            };
            Object.defineProperty(Monster.prototype, "nameHtml", {
                get: function () {
                    var _loc2_ = null;
                    var _loc3_ = null;
                    var _loc1_ = this.CP / iGlobal.Player.combatPower;
                    if (_loc1_ < 0.8) {
                        _loc2_ = this.PINK;
                        _loc3_ = "WEAKEST";
                    }
                    else if (_loc1_ < 1) {
                        _loc2_ = this.PURPLE;
                        _loc3_ = "WEAK";
                    }
                    else if (_loc1_ < 1.4) {
                        _loc2_ = this.BROWN;
                        _loc3_ = "NORMAL";
                    }
                    else if (_loc1_ < 2) {
                        _loc2_ = this.GREEN;
                        _loc3_ = "STRONG";
                    }
                    else if (_loc1_ < 3) {
                        _loc2_ = this.YELLOW;
                        _loc3_ = "AWFUL";
                    }
                    else {
                        _loc2_ = this.RED;
                        _loc3_ = "BOSS";
                    }
                    return "<font color=\'" + _loc2_ + "\'>" + this.data.realName + "</font>";
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Monster.prototype, "attack", {
                get: function () {
                    return this.data.attack.min + (this.data.attack.max - this.data.attack.min) * tool.MyMath.balanceRandom(this.balance);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Monster.prototype, "hp", {
                get: function () {
                    return this.data.hp;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Monster.prototype, "balance", {
                get: function () {
                    if (this.data.balance > 100) {
                        this.data.balance = 100;
                    }
                    if (this.data.balance < 0) {
                        this.data.balance = 0;
                    }
                    return this.data.balance;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Monster.prototype, "crit", {
                get: function () {
                    return this.data.crit;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Monster.prototype, "crit_mul", {
                get: function () {
                    return this.data.crit_mul;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Monster.prototype, "defence", {
                get: function () {
                    return this.data.defence;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Monster.prototype, "protection", {
                get: function () {
                    var _loc1_ = this.data.protection;
                    var _loc2_ = this.isContainBuff("corrosion");
                    if (_loc2_ != null) {
                        _loc1_ = _loc1_ - _loc2_.count;
                    }
                    return _loc1_;
                },
                enumerable: true,
                configurable: true
            });
            return Monster;
        }());
        iMonster.Monster = Monster;
        __reflect(Monster.prototype, "iData.iMonster.Monster");
    })(iMonster = iData.iMonster || (iData.iMonster = {}));
})(iData || (iData = {}));
//# sourceMappingURL=Monster.js.map