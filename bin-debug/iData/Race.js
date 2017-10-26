var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var iData;
(function (iData) {
    var Race = (function () {
        function Race(name, initial, ageupList) {
            this.name = name;
            this.initial = initial;
            this.ageupList = ageupList;
        }
        /*通过年龄计算属性值*/
        Race.prototype.caculateStat = function (age) {
            var _loc2_ = this.initial.clone();
            var _loc3_ = age - 25;
            if (age > 25) {
                age = 25;
            }
            var _loc4_ = 10;
            while (_loc4_ < age) {
                _loc2_.hp = _loc2_.hp + (this.ageupList[_loc4_ - 10].hp + 1);
                _loc2_.mp = _loc2_.mp + (this.ageupList[_loc4_ - 10].mp + 1);
                _loc2_.str = _loc2_.str + this.ageupList[_loc4_ - 10].str;
                _loc2_.dex = _loc2_.dex + this.ageupList[_loc4_ - 10].dex;
                _loc2_.will = _loc2_.will + this.ageupList[_loc4_ - 10].will;
                _loc2_.intelligence = _loc2_.intelligence + this.ageupList[_loc4_ - 10].intelligence;
                _loc2_.luck = _loc2_.luck + this.ageupList[_loc4_ - 10].luck;
                _loc4_++;
            }
            /*25岁后只加hp和mp*/
            if (age == 25) {
                _loc2_.hp = _loc2_.hp + _loc3_;
                _loc2_.mp = _loc2_.mp + _loc3_;
            }
            return _loc2_;
        };
        return Race;
    }());
    iData.Race = Race;
    __reflect(Race.prototype, "iData.Race");
})(iData || (iData = {}));
//# sourceMappingURL=Race.js.map