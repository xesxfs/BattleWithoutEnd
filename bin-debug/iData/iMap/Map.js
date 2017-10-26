var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var iData;
(function (iData) {
    var iMap;
    (function (iMap) {
        var Map = (function () {
            function Map(mapData) {
                this.averageCp = 0;
                this.mapData = mapData;
                this.setAverageCp();
            }
            /**平均战力 */
            Map.prototype.setAverageCp = function () {
                var _loc3_ = 0;
                var _loc1_ = 0;
                var _loc2_ = this.mapData.monsterList.length;
                while (_loc3_ < _loc2_) {
                    _loc1_ = _loc1_ + this.mapData.monsterList[_loc3_].CP;
                    _loc3_++;
                }
                this.averageCp = _loc1_ / _loc2_;
            };
            /**获得一个Boss */
            Map.prototype.getBoss = function () {
                //在当前地图，怪物列表随机一个怪物，生成本地图的Boss
                var _loc1_ = new iData.iMonster.Boss(this.mapData.monsterList[Math.random() * this.mapData.monsterList.length >> 0]);
                return _loc1_;
            };
            return Map;
        }());
        iMap.Map = Map;
        __reflect(Map.prototype, "iData.iMap.Map");
    })(iMap = iData.iMap || (iData.iMap = {}));
})(iData || (iData = {}));
//# sourceMappingURL=Map.js.map