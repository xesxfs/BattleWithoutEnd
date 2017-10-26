var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var iData;
(function (iData) {
    var iItem;
    (function (iItem) {
        /**装备 */
        var Equipment = (function () {
            function Equipment(equipmentData, ratio, isBoos) {
                if (isBoos === void 0) { isBoos = false; }
                this.sortWeight = 0;
                this.level = 0;
                this.quality = 0;
                /**几率 */
                this.ratio = 0;
                this.isBoss = false;
                this.ratio = (ratio * 100 >> 0) / 100;
                if (this.ratio > 65) {
                    this.ratio = 65;
                }
                this.level = 0;
                this.levelStat = new Array();
                this.isBoss = isBoos;
                this.setData(equipmentData);
                this.generateBasicStat(equipmentData.stat, this.ratio);
                this.generateQuality(this.ratio);
            }
            /**加载装备信息 */
            Equipment.load = function (param1) {
                var _loc3_ = null;
                var _loc4_ = 0;
                var _loc6_ = null;
                var _loc2_ = param1.split("#");
                _loc4_ = 0;
                while (_loc4_ < iData.iItem.EquipmentList.list.length) {
                    if (iData.iItem.EquipmentList.list[_loc4_].name == _loc2_[0]) {
                        //这里
                        if (iData.iItem.EquipmentList.list[_loc4_] instanceof iData.iItem.WeaponData) {
                            //这里
                            var loc4 = iData.iItem.EquipmentList.list[_loc4_];
                            _loc3_ = new iData.iItem.Weapon(loc4, _loc2_[2]);
                        }
                        else {
                            _loc3_ = new iData.iItem.Equipment(iData.iItem.EquipmentList.list[_loc4_], _loc2_[2]);
                        }
                        break;
                    }
                    _loc4_++;
                }
                _loc3_.quality = _loc2_[3];
                _loc3_.basicStat = new Array();
                var _loc5_ = _loc2_[4].split("%");
                _loc4_ = 0;
                while (_loc4_ < _loc5_.length) {
                    if (_loc5_[_loc4_] != "") {
                        _loc3_.basicStat.push(iData.iItem.Stat.load(_loc5_[_loc4_]));
                    }
                    _loc4_++;
                }
                _loc3_.qualityStat = new Array();
                if (_loc3_.quality > 0) {
                    _loc6_ = _loc2_[5].split("%");
                    _loc4_ = 0;
                    while (_loc4_ < _loc6_.length) {
                        if (_loc6_[_loc4_] != "") {
                            _loc3_.qualityStat.push(iData.iItem.Stat.load(_loc6_[_loc4_]));
                        }
                        _loc4_++;
                    }
                }
                _loc3_.setLevel(_loc2_[1]);
                return _loc3_;
            };
            Equipment.prototype.setData = function (equipmentData) {
                this.position = equipmentData.position;
                this.type = equipmentData.type;
                this.name = equipmentData.name;
                this.realName = equipmentData.realName;
                this.sortWeight = equipmentData.sortWeight;
            };
            /**生成基本属性 */
            Equipment.prototype.generateBasicStat = function (rangeStat, ratio) {
                this.basicStat = new Array();
                var leng = rangeStat.length;
                var i = 0;
                while (i < leng) {
                    this.basicStat.push(iData.iItem.Stat.generate(rangeStat[i], ratio));
                    i++;
                }
                if (this.basicStat.length > 0) {
                    if (this.basicStat[0].name == iData.iItem.Stat.attackMin) {
                        if (this.basicStat[0].value > this.basicStat[1].value) {
                            this.basicStat[0] = new iData.iItem.Stat(iData.iItem.Stat.attackMin, this.basicStat[1].value);
                        }
                    }
                }
            };
            /**生成品质 */
            Equipment.prototype.generateQuality = function (ratio) {
                var _loc2_ = 10 + ratio * 10;
                if (iGlobal.Player.basicStatus) {
                    _loc2_ = _loc2_ - iGlobal.Player.combatPower / 30;
                }
                if (_loc2_ > 70) {
                    _loc2_ = 70;
                }
                if (_loc2_ < 20) {
                    _loc2_ = 20;
                }
                this.quality = tool.MyMath.balanceRandom(_loc2_) * 5.1;
                if (this.isBoss) {
                    this.quality = tool.MyMath.balanceRandom(80) * 5.5;
                }
                this.generateQualityStat(ratio);
            };
            /**生成品质属性 */
            Equipment.prototype.generateQualityStat = function (ratio) {
                var _loc3_ = 0;
                var _loc4_ = null;
                var _loc5_ = 0;
                var _loc6_ = null;
                this.qualityStat = new Array();
                var _loc2_ = 0;
                while (_loc2_ < this.quality) {
                    _loc3_ = (iData.iItem.StatList.list.length - 1) * Math.random();
                    if (this.type == iData.iItem.EquipType.ACCESORY) {
                        _loc3_ = (iData.iItem.StatList.list.length - 2) * Math.random();
                    }
                    if (this instanceof iData.iItem.Weapon) {
                        _loc3_ = iData.iItem.StatList.list.length * Math.random();
                    }
                    _loc4_ = iData.iItem.StatList.list[_loc3_];
                    _loc5_ = _loc4_.value * Math.random() * Math.random() * ratio;
                    if (this.quality == 5) {
                        _loc5_ = _loc4_.value * (Math.random() * Math.random() * 0.85 + 0.15) * ratio;
                    }
                    _loc5_++;
                    _loc6_ = new iData.iItem.Stat(_loc4_.name, _loc5_);
                    this.qualityStat.push(_loc6_);
                    _loc2_++;
                }
            };
            /**设置等级 */
            Equipment.prototype.setLevel = function (level) {
                // level = level;
                this.level = level;
                if (level < 0) {
                    this.level = 0;
                    return;
                }
                if (level > 15) {
                    this.level = 15;
                }
                this.generateLevelStat();
            };
            Equipment.prototype.levelup = function () {
                this.level++;
                this.generateLevelStat();
            };
            Equipment.prototype.canLevelup = function () {
                if (iGlobal.Player.gold > this.getMoney() && this.level < 15) {
                    return true;
                }
                return false;
            };
            /**生成等级属性 */
            Equipment.prototype.generateLevelStat = function () {
                var _loc1_ = null;
                var _loc2_ = 0;
                this.levelStat = new Array();
                if (this.level == 0) {
                    return;
                }
                if (this.type != iData.iItem.EquipType.ACCESORY) {
                    if (this instanceof iData.iItem.Weapon) {
                        _loc1_ = iData.iItem.WeaponType[this.type.toUpperCase() + "_BASE"];
                    }
                    else {
                        _loc1_ = iData.iItem.EquipType[this.type.toUpperCase() + "_BASE"];
                    }
                    _loc2_ = 0;
                    while (_loc2_ < _loc1_.length) {
                        if (this instanceof iData.iItem.Weapon) {
                            this.levelStat.push(new iData.iItem.Stat(_loc1_[_loc2_].name, _loc1_[_loc2_].value * Math.pow(1.5, this.level - 1) * (1 + 0.2 * this.quality)));
                        }
                        else {
                            this.levelStat.push(new iData.iItem.Stat(_loc1_[_loc2_].name, _loc1_[_loc2_].value * Math.pow(1.3, this.level - 1) * (1 + 0.2 * this.quality)));
                        }
                        _loc2_++;
                    }
                }
                else {
                    _loc2_ = 0;
                    while (_loc2_ < this.qualityStat.length) {
                        this.levelStat.push(new iData.iItem.Stat(this.qualityStat[_loc2_].name, this.qualityStat[_loc2_].value * Math.pow(1.2, this.level - 1) * (1 + 0.2 * this.quality) * 0.4));
                        _loc2_++;
                    }
                }
            };
            /**转换部位 */
            Equipment.prototype.getPostion = function () {
                switch (this.position) {
                    case iData.iItem.Equipment.HEAD:
                        return "头部";
                    case iData.iItem.Equipment.BODY:
                        return "身体";
                    case iData.iItem.Equipment.FEET:
                        return "脚部";
                    case iData.iItem.Equipment.NECKLACE:
                        return "项链";
                    case iData.iItem.Equipment.RING:
                        return "戒指";
                    case iData.iItem.Weapon.OFFHAND:
                        return "副手";
                    case iData.iItem.Weapon.ONEHAND:
                        return "单手";
                    case iData.iItem.Weapon.TWOHAND:
                        return "双手";
                    default:
                        return this.position;
                }
            };
            /**类型转换 */
            Equipment.prototype.getType = function () {
                switch (this.type) {
                    case iData.iItem.EquipType.ACCESORY:
                        return "饰品";
                    case iData.iItem.EquipType.HEAVY:
                        return "重甲";
                    case iData.iItem.EquipType.MEDIUM:
                        return "中甲";
                    case iData.iItem.EquipType.LIGHT:
                        return "轻甲";
                    case iData.iItem.WeaponType.AXE:
                        return "斧";
                    case iData.iItem.WeaponType.BOW:
                        return "弓";
                    case iData.iItem.WeaponType.CROSSBOW:
                        return "弩";
                    case iData.iItem.WeaponType.DAGGER:
                        return "匕首";
                    case iData.iItem.WeaponType.SCEPTRE:
                        return "权杖";
                    case iData.iItem.WeaponType.SHIELD:
                        return "盾牌";
                    case iData.iItem.WeaponType.STAFF:
                        return "法杖";
                    case iData.iItem.WeaponType.SWORD:
                        return "剑";
                    case iData.iItem.WeaponType.TOME:
                        return "书";
                    default:
                        return this.type;
                }
            };
            /**描述显示 */
            Equipment.prototype.getDescription = function () {
                var _loc2_ = 0;
                var _loc1_ = "<p align=\'center\'>" + this.getNameHTML();
                if (this.level) {
                    _loc1_ = _loc1_ + (" +" + this.level);
                    if (this.level == 15) {
                        _loc1_ = _loc1_ + "(MAX)";
                    }
                }
                _loc1_ = _loc1_ + "</p>";
                _loc1_ = _loc1_ + ("<p align=\'center\'><font size=\'16\'>" + tool.MyMath.FirstLetterToUpper(this.getPostion()) + "," + tool.MyMath.FirstLetterToUpper(this.getType()));
                if (this instanceof iData.iItem.Weapon) {
                    //这里
                    var loc1 = this;
                    _loc1_ = _loc1_ + ("," + tool.MyMath.FirstLetterToUpper(loc1.getCategory()));
                }
                _loc1_ = _loc1_ + "</font></p>";
                _loc1_ = _loc1_ + "<font size=\'20\'>";
                _loc2_ = 0;
                while (_loc2_ < this.basicStat.length) {
                    if (this.basicStat[_loc2_].name == iData.iItem.Stat.attackMin) {
                        _loc1_ = _loc1_ + ("  攻击 " + (this.basicStat[_loc2_].value >> 0) + "~" + (this.basicStat[_loc2_ + 1].value >> 0) + "<br/>");
                        _loc2_++;
                    }
                    else {
                        _loc1_ = _loc1_ + ("  " + tool.MyMath.FirstLetterToUpper(this.basicStat[_loc2_].statTranslate()) + " " + (this.basicStat[_loc2_].value >> 0) + "<br/>");
                    }
                    _loc2_++;
                }
                _loc1_ = _loc1_ + "<font color=\'#00AF64\'>";
                _loc2_ = 0;
                while (_loc2_ < this.qualityStat.length) {
                    _loc1_ = _loc1_ + ("  " + tool.MyMath.FirstLetterToUpper(this.qualityStat[_loc2_].statTranslate()) + " +" + (this.qualityStat[_loc2_].value >> 0) + "<br/>");
                    _loc2_++;
                }
                _loc1_ = _loc1_ + "</font><font color=\'#4b5ed7\'>";
                _loc2_ = 0;
                while (_loc2_ < this.levelStat.length) {
                    _loc1_ = _loc1_ + ("  " + tool.MyMath.FirstLetterToUpper(this.levelStat[_loc2_].statTranslate()) + " +" + (this.levelStat[_loc2_].value >> 0) + "<br/>");
                    _loc2_++;
                }
                _loc1_ = _loc1_ + "</font></font>";
                _loc1_ = _loc1_ + ("<p align=\'right\'>$ " + this.getMoney() + "</p>");
                return _loc1_;
            };
            /***出售描述 */
            Equipment.prototype.getSellDesciption = function () {
                var _loc2_ = 0;
                var _loc1_ = "<p align=\'center\'>" + this.getNameHTML();
                if (this.level) {
                    _loc1_ = _loc1_ + (" +" + this.level);
                }
                _loc1_ = _loc1_ + "</p>";
                _loc1_ = _loc1_ + "<p align=\'center\' ><font color=\'#ff4040\'>FOR SALE</font></p>";
                _loc1_ = _loc1_ + ("<p align=\'center\'><font size=\'16\'>" + tool.MyMath.FirstLetterToUpper(this.getPostion()) + "," + tool.MyMath.FirstLetterToUpper(this.getType()));
                if (this instanceof iData.iItem.Weapon) {
                    //这里
                    var loc1 = this;
                    _loc1_ = _loc1_ + ("," + tool.MyMath.FirstLetterToUpper(loc1.getCategory()));
                }
                _loc1_ = _loc1_ + "</font></p>";
                _loc1_ = _loc1_ + "<font size=\'20\'>";
                _loc2_ = 0;
                while (_loc2_ < this.basicStat.length) {
                    if (this.basicStat[_loc2_].name == iData.iItem.Stat.attackMin) {
                        _loc1_ = _loc1_ + ("  攻击 " + (this.basicStat[_loc2_].value >> 0) + "~" + (this.basicStat[_loc2_ + 1].value >> 0) + "<br/>");
                        _loc2_++;
                    }
                    else {
                        _loc1_ = _loc1_ + ("  " + tool.MyMath.FirstLetterToUpper(this.basicStat[_loc2_].statTranslate()) + " " + (this.basicStat[_loc2_].value >> 0) + "<br/>");
                    }
                    _loc2_++;
                }
                _loc1_ = _loc1_ + "<font color=\'#00AF64\'>";
                _loc2_ = 0;
                while (_loc2_ < this.qualityStat.length) {
                    _loc1_ = _loc1_ + ("  " + tool.MyMath.FirstLetterToUpper(this.qualityStat[_loc2_].statTranslate()) + " +" + (this.qualityStat[_loc2_].value >> 0) + "<br/>");
                    _loc2_++;
                }
                _loc1_ = _loc1_ + "</font><font color=\'#4b5ed7\'>";
                _loc2_ = 0;
                while (_loc2_ < this.levelStat.length) {
                    _loc1_ = _loc1_ + ("  " + tool.MyMath.FirstLetterToUpper(this.levelStat[_loc2_].statTranslate()) + " +" + (this.levelStat[_loc2_].value >> 0) + "<br/>");
                    _loc2_++;
                }
                _loc1_ = _loc1_ + "</font></font>";
                _loc1_ = _loc1_ + ("<p align=\'right\'>$ " + this.getSellMoney() + "</p>");
                return _loc1_;
            };
            Equipment.prototype.getMoney = function () {
                return (this.ratio * 30 >> 0) * (this.level + 1);
            };
            Equipment.prototype.getSellMoney = function () {
                var _loc1_ = this.getMoney() * 10 * (1 + this.quality * this.quality);
                return _loc1_;
            };
            Equipment.prototype.getNameHTML = function () {
                var _loc1_ = null;
                switch (this.quality) {
                    case 1:
                        _loc1_ = iData.iItem.Equipment.GREEN;
                        break;
                    case 2:
                        _loc1_ = iData.iItem.Equipment.BLUE;
                        break;
                    case 3:
                        _loc1_ = iData.iItem.Equipment.YELLOW;
                        break;
                    case 4:
                        _loc1_ = iData.iItem.Equipment.ORANGE;
                        break;
                    case 5:
                        _loc1_ = iData.iItem.Equipment.PURPLE;
                }
                return "<font color=\'" + _loc1_ + "\'>" + tool.MyMath.FirstLetterToUpper(this.realName) + "</font>";
            };
            /**根据品质取得颜色 */
            Equipment.prototype.getColor = function () {
                var _loc1_ = null;
                switch (this.quality) {
                    case 1:
                        _loc1_ = iData.iItem.Equipment.GREEN;
                        break;
                    case 2:
                        _loc1_ = iData.iItem.Equipment.BLUE;
                        break;
                    case 3:
                        _loc1_ = iData.iItem.Equipment.YELLOW;
                        break;
                    case 4:
                        _loc1_ = iData.iItem.Equipment.ORANGE;
                        break;
                    case 5:
                        _loc1_ = iData.iItem.Equipment.PURPLE;
                }
                return _loc1_;
            };
            Equipment.prototype.getColorInHex = function () {
                var _loc1_ = 0;
                switch (this.quality) {
                    case 0:
                        _loc1_ = iData.iItem.Equipment.GRAY_H;
                        break;
                    case 1:
                        _loc1_ = iData.iItem.Equipment.GREEN_H;
                        break;
                    case 2:
                        _loc1_ = iData.iItem.Equipment.BLUE_H;
                        break;
                    case 3:
                        _loc1_ = iData.iItem.Equipment.YELLOW_H;
                        break;
                    case 4:
                        _loc1_ = iData.iItem.Equipment.ORANGE_H;
                        break;
                    case 5:
                        _loc1_ = iData.iItem.Equipment.PURPLE_H;
                }
                return _loc1_;
            };
            /**保存 */
            Equipment.prototype.save = function () {
                var _loc2_ = 0;
                var _loc1_ = "";
                _loc1_ = _loc1_ + (this.name + "#" + this.level + "#" + this.ratio + "#" + this.quality);
                _loc1_ = _loc1_ + "#";
                _loc2_ = 0;
                while (_loc2_ < this.basicStat.length) {
                    _loc1_ = _loc1_ + (this.basicStat[_loc2_].save() + "%");
                    _loc2_++;
                }
                if (this.quality > 0) {
                    _loc1_ = _loc1_ + "#";
                    _loc2_ = 0;
                    while (_loc2_ < this.qualityStat.length) {
                        _loc1_ = _loc1_ + (this.qualityStat[_loc2_].save() + "%");
                        _loc2_++;
                    }
                }
                return _loc1_;
            };
            return Equipment;
        }());
        iItem.Equipment = Equipment;
        __reflect(Equipment.prototype, "iData.iItem.Equipment");
    })(iItem = iData.iItem || (iData.iItem = {}));
})(iData || (iData = {}));
/***装备颜色值 */
iData.iItem.Equipment.HEAD = "head";
iData.iItem.Equipment.BODY = "body";
iData.iItem.Equipment.FEET = "feet";
iData.iItem.Equipment.NECKLACE = "necklace";
iData.iItem.Equipment.RING = "ring";
iData.iItem.Equipment.GREEN = "#4BB814";
iData.iItem.Equipment.BLUE = "#4a60d7";
iData.iItem.Equipment.YELLOW = "#a6a500";
iData.iItem.Equipment.ORANGE = "#ff7100";
iData.iItem.Equipment.PURPLE = "#9840be";
iData.iItem.Equipment.GREEN_H = 4962324;
iData.iItem.Equipment.BLUE_H = 4874455;
iData.iItem.Equipment.YELLOW_H = 10921216;
iData.iItem.Equipment.ORANGE_H = 16740608;
iData.iItem.Equipment.GRAY_H = 7631988;
iData.iItem.Equipment.PURPLE_H = 9978046;
//# sourceMappingURL=Equipment.js.map