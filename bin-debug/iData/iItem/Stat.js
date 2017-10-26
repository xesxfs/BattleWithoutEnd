var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var iData;
(function (iData) {
    var iItem;
    (function (iItem) {
        /***单个属性 */
        var Stat = (function () {
            function Stat(name, value) {
                this.value = 0;
                this.name = name;
                this.value = value;
            }
            Stat.generate = function (param1, param2) {
                return new iData.iItem.Stat(param1.name, ((param1.valueMin + param1.changeRange * Math.random() * param2 * Math.random()) * 100 >> 0) / 100);
            };
            /**加载 */
            Stat.load = function (param1) {
                var _loc2_ = param1.split("$");
                return new iData.iItem.Stat(_loc2_[0], _loc2_[1]);
            };
            Stat.prototype.clone = function () {
                return new iData.iItem.Stat(this.name, this.value);
            };
            Stat.prototype.statTranslate = function () {
                switch (this.name) {
                    case iData.iItem.Stat.intelligence:
                        return "智力";
                    case iData.iItem.Stat.attackMin:
                        return "最小攻击";
                    case iData.iItem.Stat.attackMax:
                        return "最大攻击";
                    case iData.iItem.Stat.ATTACK:
                        return "攻击";
                    case iData.iItem.Stat.crit_mul:
                        return "暴击倍数";
                    case iData.iItem.Stat.spellChance:
                        return "释放概率";
                    case iData.iItem.Stat.protectionIgnore:
                        return "无视护甲";
                    case iData.iItem.Stat.protectionReduce:
                        return "降低护甲";
                    case iData.iItem.Stat.magicDamage:
                        return "魔法伤害";
                    case iData.iItem.Stat.str:
                        return "力量";
                    case iData.iItem.Stat.dex:
                        return "敏捷";
                    case iData.iItem.Stat.will:
                        return "意志";
                    case iData.iItem.Stat.luck:
                        return "幸运";
                    case iData.iItem.Stat.balance:
                        return "平衡";
                    case iData.iItem.Stat.crit:
                        return "暴击";
                    case iData.iItem.Stat.defence:
                        return "防御";
                    case iData.iItem.Stat.protection:
                        return "护甲";
                    default:
                        return this.name;
                }
            };
            /**保存 */
            Stat.prototype.save = function () {
                var _loc1_ = "";
                _loc1_ = _loc1_ + (this.name + "$" + this.value);
                return _loc1_;
            };
            return Stat;
        }());
        iItem.Stat = Stat;
        __reflect(Stat.prototype, "iData.iItem.Stat");
    })(iItem = iData.iItem || (iData.iItem = {}));
})(iData || (iData = {}));
iData.iItem.Stat.ATTACK = "ATTACK";
iData.iItem.Stat.hp = "hp";
iData.iItem.Stat.mp = "mp";
iData.iItem.Stat.str = "str";
iData.iItem.Stat.dex = "dex";
iData.iItem.Stat.intelligence = "intelligence";
iData.iItem.Stat.will = "will";
iData.iItem.Stat.luck = "luck";
iData.iItem.Stat.attackMin = "attackMin";
iData.iItem.Stat.attackMax = "attackMax";
iData.iItem.Stat.balance = "balance";
iData.iItem.Stat.crit = "crit";
iData.iItem.Stat.crit_mul = "crit_mul";
iData.iItem.Stat.defence = "defence";
iData.iItem.Stat.protection = "protection";
iData.iItem.Stat.spellChance = "spellChance";
iData.iItem.Stat.manaConsumption = "manaComsuption";
iData.iItem.Stat.protectionIgnore = "protectionIgnore";
iData.iItem.Stat.protectionReduce = "protectionReduce";
iData.iItem.Stat.magicDamage = "magicDamage";
//# sourceMappingURL=Stat.js.map