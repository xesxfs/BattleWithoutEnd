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
    var iItem;
    (function (iItem) {
        var WeaponData = (function (_super) {
            __extends(WeaponData, _super);
            function WeaponData(pos, type, name, realName, stat, category, sortWeight) {
                var _this = _super.call(this, pos, type, name, realName, stat, sortWeight) || this;
                // param7 = param7;
                _this.category = category;
                return _this;
            }
            return WeaponData;
        }(iData.iItem.EquipmentData));
        iItem.WeaponData = WeaponData;
        __reflect(WeaponData.prototype, "iData.iItem.WeaponData");
    })(iItem = iData.iItem || (iData.iItem = {}));
})(iData || (iData = {}));
//# sourceMappingURL=WeaponData.js.map