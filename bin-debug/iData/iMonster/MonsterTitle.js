var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var iData;
(function (iData) {
    var iMonster;
    (function (iMonster) {
        var MonsterTitle = (function () {
            function MonsterTitle(name, statMul, xpMul, goldMul, dropMul) {
                this.xpMul = NaN;
                this.goldMul = NaN;
                this.dropMul = NaN;
                this.name = name;
                this.statMulList = statMul;
                this.xpMul = xpMul;
                this.goldMul = goldMul;
                this.dropMul = dropMul;
            }
            Object.defineProperty(MonsterTitle.prototype, "description", {
                get: function () {
                    var _loc1_ = "";
                    var _loc2_ = this.statMulList.length;
                    var _loc3_ = 0;
                    while (_loc3_ < _loc2_) {
                        if (this.statMulList[_loc3_].add > 0) {
                            _loc1_ = _loc1_ + ("<font size=\'20\' color=\'" + iData.iItem.Equipment.GREEN + "\'>  " + tool.MyMath.FirstLetterToUpper(this.statMulList[_loc3_].statTranslate()) + " +" + this.statMulList[_loc3_].add + "</font><br/>");
                        }
                        else if (this.statMulList[_loc3_].add < 0) {
                            _loc1_ = _loc1_ + ("<font size=\'20\' color=\'#ff4040\'>  " + tool.MyMath.FirstLetterToUpper(this.statMulList[_loc3_].statTranslate()) + " " + this.statMulList[_loc3_].add + "</font><br/>");
                        }
                        if (this.statMulList[_loc3_].mul > 1) {
                            _loc1_ = _loc1_ + ("<font size=\'20\' color=\'" + iData.iItem.Equipment.GREEN + "\'>  " + tool.MyMath.FirstLetterToUpper(this.statMulList[_loc3_].statTranslate()) + " x" + this.statMulList[_loc3_].mul + "</font><br/>");
                        }
                        else if (this.statMulList[_loc3_].mul < 1) {
                            _loc1_ = _loc1_ + ("<font size=\'20\' color=\'#ff4040\'>  " + tool.MyMath.FirstLetterToUpper(this.statMulList[_loc3_].statTranslate()) + " x" + this.statMulList[_loc3_].mul + "</font><br/>");
                        }
                        _loc3_++;
                    }
                    if (_loc1_ == "") {
                        _loc1_ = "???";
                    }
                    return _loc1_;
                },
                enumerable: true,
                configurable: true
            });
            return MonsterTitle;
        }());
        iMonster.MonsterTitle = MonsterTitle;
        __reflect(MonsterTitle.prototype, "iData.iMonster.MonsterTitle");
    })(iMonster = iData.iMonster || (iData.iMonster = {}));
})(iData || (iData = {}));
//# sourceMappingURL=MonsterTitle.js.map