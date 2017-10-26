var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var iData;
(function (iData) {
    var iPet;
    (function (iPet) {
        var PetStats = (function () {
            function PetStats(param1, param2, param3, param4, param5, param6, param7, param8, param9, param10) {
                this._hp = NaN;
                this._mp = NaN;
                this._attmin = NaN;
                this._attmax = NaN;
                this._def = NaN;
                this._pro = NaN;
                this._balance = NaN;
                this._cri = NaN;
                this._criMul = NaN;
                this._magAtt = NaN;
                this.hp = param1;
                this.mp = param2;
                this.attmin = param3;
                this.attmax = param4;
                this.def = param5;
                this.pro = param6;
                this.balance = param7;
                this.cri = param8;
                this.criMul = param9;
                this.magAtt = param10;
            }
            PetStats.generatePetStats = function (param1, param2, param3) {
                var _loc4_ = new iData.iPet.PetStats(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                var _loc5_ = 0;
                while (_loc5_ < iData.iPet.PetStats.list.length) {
                    _loc4_[iData.iPet.PetStats.list[_loc5_]] = iData.iPet.PetStats.formula(param1[iData.iPet.PetStats.list[_loc5_]], param2[iData.iPet.PetStats.list[_loc5_]], param3);
                    _loc5_++;
                }
                return _loc4_;
            };
            PetStats.formula = function (param1, param2, param3) {
                return param1 + param2 * param3 * Math.random();
            };
            PetStats.load = function (param1) {
                var _loc2_ = param1.split("%");
                var _loc3_ = new iData.iPet.PetStats(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                var _loc4_ = 0;
                while (_loc4_ < iData.iPet.PetStats.list.length) {
                    _loc3_[iData.iPet.PetStats.list[_loc4_]] = _loc2_[_loc4_];
                    _loc4_++;
                }
                return _loc3_;
            };
            Object.defineProperty(PetStats.prototype, "hp", {
                get: function () {
                    return tool.MyMath.decryptNum(this._hp);
                },
                set: function (param1) {
                    this._hp = tool.MyMath.encryptNum(param1);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PetStats.prototype, "mp", {
                get: function () {
                    return tool.MyMath.decryptNum(this._mp);
                },
                set: function (param1) {
                    this._mp = tool.MyMath.encryptNum(param1);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PetStats.prototype, "attmin", {
                get: function () {
                    return tool.MyMath.decryptNum(this._attmin);
                },
                set: function (param1) {
                    this._attmin = tool.MyMath.encryptNum(param1);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PetStats.prototype, "attmax", {
                get: function () {
                    return tool.MyMath.decryptNum(this._attmax);
                },
                set: function (param1) {
                    this._attmax = tool.MyMath.encryptNum(param1);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PetStats.prototype, "def", {
                get: function () {
                    return tool.MyMath.decryptNum(this._def);
                },
                set: function (param1) {
                    this._def = tool.MyMath.encryptNum(param1);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PetStats.prototype, "pro", {
                get: function () {
                    return tool.MyMath.decryptNum(this._pro);
                },
                set: function (param1) {
                    this._pro = tool.MyMath.encryptNum(param1);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PetStats.prototype, "balance", {
                get: function () {
                    return tool.MyMath.decryptNum(this._balance);
                },
                set: function (param1) {
                    this._balance = tool.MyMath.encryptNum(param1);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PetStats.prototype, "cri", {
                get: function () {
                    return tool.MyMath.decryptNum(this._cri);
                },
                set: function (param1) {
                    this._cri = tool.MyMath.encryptNum(param1);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PetStats.prototype, "criMul", {
                get: function () {
                    return tool.MyMath.decryptNum(this._criMul);
                },
                set: function (param1) {
                    this._criMul = tool.MyMath.encryptNum(param1);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PetStats.prototype, "magAtt", {
                get: function () {
                    return tool.MyMath.decryptNum(this._magAtt);
                },
                set: function (param1) {
                    this._magAtt = tool.MyMath.encryptNum(param1);
                },
                enumerable: true,
                configurable: true
            });
            PetStats.prototype.save = function () {
                var _loc1_ = "";
                var _loc2_ = 0;
                while (_loc2_ < iData.iPet.PetStats.list.length) {
                    _loc1_ = _loc1_ + (this[iData.iPet.PetStats.list[_loc2_]] + "%");
                    _loc2_++;
                }
                return _loc1_;
            };
            return PetStats;
        }());
        iPet.PetStats = PetStats;
        __reflect(PetStats.prototype, "iData.iPet.PetStats");
    })(iPet = iData.iPet || (iData.iPet = {}));
})(iData || (iData = {}));
iData.iPet.PetStats.list = ["hp", "mp", "attmin", "attmax", "def", "pro", "balance", "cri", "criMul", "magAtt"];
//# sourceMappingURL=PetStats.js.map