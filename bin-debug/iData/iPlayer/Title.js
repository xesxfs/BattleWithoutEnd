var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var iData;
(function (iData) {
    var iPlayer;
    (function (iPlayer) {
        var Title = (function () {
            function Title(name, realName, description, statMulList, maxFix, countFix, behaveFunction) {
                if (maxFix === void 0) { maxFix = 0; }
                if (countFix === void 0) { countFix = 0; }
                if (behaveFunction === void 0) { behaveFunction = null; }
                this.maxFix = 0;
                this.countFix = 0;
                this.max = 0;
                this.count = 0;
                this.isGot = false;
                this.name = name;
                this.realName = realName;
                this.description = description;
                this.statMulList = statMulList;
                this.maxFix = maxFix;
                this.countFix = countFix;
                this.behaveFunction = behaveFunction;
            }
            Title.prototype.setGot = function () {
                if (!this.isGot) {
                    this.isGot = true;
                    if (iPanel.iScene.MainScene.allInfoPanel) {
                        iPanel.iScene.MainScene.allInfoPanel.addText("<font color=\'" + iData.iItem.Equipment.ORANGE + "\'>You get Title &lt;" + this.name + "&gt; </font>");
                    }
                    if (this.behaveFunction) {
                        this.behaveFunction();
                    }
                    if (iPanel.iScene.MainScene.otherPanel) {
                        if (iPanel.iScene.MainScene.otherPanel.titleWindow) {
                            iPanel.iScene.MainScene.otherPanel.titleWindow.update();
                        }
                    }
                }
            };
            Title.prototype.updateInfo = function (max, count) {
                if (max === void 0) { max = 0; }
                if (count === void 0) { count = 0; }
                if (max > this.max) {
                    this.max = max;
                }
                if (count < 0) {
                    this.count = 0;
                }
                else {
                    this.count = this.count + count;
                }
                if (this.isGot) {
                    return;
                }
                if (this.count >= this.countFix && this.max >= this.maxFix) {
                    this.setGot();
                }
            };
            Title.prototype.getDescription = function () {
                var _loc1_ = "";
                _loc1_ = _loc1_ + ("<p align=\'center\'>" + this.description + "</p>");
                _loc1_ = _loc1_ + "--------------<br/>";
                if (this.maxFix != 0) {
                    _loc1_ = _loc1_ + ("记录:" + this.max + "<br/>");
                    _loc1_ = _loc1_ + "--------------<br/>";
                }
                if (this.countFix != 0) {
                    _loc1_ = _loc1_ + ("记录:" + this.count + "<br/>");
                    _loc1_ = _loc1_ + "--------------<br/>";
                }
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
                return _loc1_;
            };
            Title.prototype.save = function () {
                var _loc1_ = "";
                _loc1_ = _loc1_ + (this.max + "#" + this.count + "#");
                if (this.isGot) {
                    _loc1_ = _loc1_ + "1";
                }
                else {
                    _loc1_ = _loc1_ + "0";
                }
                return _loc1_;
            };
            Title.prototype.load = function (loadStr) {
                var _loc2_ = loadStr.split("#");
                this.max = _loc2_[0];
                this.count = _loc2_[1];
                if (_loc2_[2] == 0) {
                    this.isGot = false;
                }
                else {
                    this.isGot = true;
                }
            };
            return Title;
        }());
        iPlayer.Title = Title;
        __reflect(Title.prototype, "iData.iPlayer.Title");
    })(iPlayer = iData.iPlayer || (iData.iPlayer = {}));
})(iData || (iData = {}));
//# sourceMappingURL=Title.js.map