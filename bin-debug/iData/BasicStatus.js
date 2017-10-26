var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var iData;
(function (iData) {
    /**基本属性 */
    var BasicStatus = (function () {
        function BasicStatus(param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, param11, param12, param13, param14, param15, param16, param17, param18) {
            if (param8 === void 0) { param8 = 0; }
            if (param9 === void 0) { param9 = 0; }
            if (param10 === void 0) { param10 = 0; }
            if (param11 === void 0) { param11 = 0; }
            if (param12 === void 0) { param12 = 0; }
            if (param13 === void 0) { param13 = 0; }
            if (param14 === void 0) { param14 = 0; }
            if (param15 === void 0) { param15 = 0; }
            if (param16 === void 0) { param16 = 0; }
            if (param17 === void 0) { param17 = 0; }
            if (param18 === void 0) { param18 = 0; }
            /*血*/
            this.hp = 0;
            /*蓝*/
            this.mp = 0;
            /*力量*/
            this.str = 0;
            /*敏捷*/
            this.dex = 0;
            /*智力*/
            this.intelligence = 0;
            /*意志*/
            this.will = 0;
            /*幸运*/
            this.luck = 0;
            /*平衡*/
            this.balance = 0;
            /*暴击*/
            this.crit = 0;
            /*暴击倍数*/
            this.crit_mul = 0;
            /*防御*/
            this.defence = 0;
            /*护甲*/
            this.protection = 0;
            this.spellChance = 0;
            this.manaConsumption = 0;
            /*无视护甲*/
            this.protectionIgnore = 0;
            this.protectionReduce = 0;
            /*魔法伤害*/
            this.magicDamage = 0;
            this.hp = param1;
            this.mp = param2;
            this.str = param3;
            this.dex = param4;
            this.intelligence = param5;
            this.will = param6;
            this.luck = param7;
            this.attack = new iData.iNumber.DamageNumber(param8, param9);
            this.balance = param10;
            this.crit = param11;
            this.crit_mul = param12;
            this.defence = param13;
            this.protection = param14;
            this.spellChance = param15;
            this.protectionIgnore = param16;
            this.protectionReduce = param17;
            this.magicDamage = param18;
        }
        BasicStatus.prototype.clone = function () {
            return new iData.BasicStatus(this.hp, this.mp, this.str, this.dex, this.intelligence, this.will, this.luck, this.attack.min, this.attack.max, this.balance, this.crit, this.crit_mul, this.defence, this.protection, this.spellChance, this.protectionIgnore, this.protectionReduce);
        };
        return BasicStatus;
    }());
    iData.BasicStatus = BasicStatus;
    __reflect(BasicStatus.prototype, "iData.BasicStatus");
})(iData || (iData = {}));
//# sourceMappingURL=BasicStatus.js.map