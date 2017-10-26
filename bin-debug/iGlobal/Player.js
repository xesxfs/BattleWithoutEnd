var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var iGlobal;
(function (iGlobal) {
    var Player = (function () {
        function Player() {
        }
        Player.burn = function (age, race) {
            iGlobal.Player.age = age;
            iGlobal.Player.race = race;
            iGlobal.Player.lv = 1;
            iGlobal.Player.caculateInitStat();
            if (!iGlobal.Player.leftHand) {
                iGlobal.Player.equip(new iData.iItem.Weapon(iData.iItem.EquipmentList.list[1], 1));
            }
            iGlobal.Player.addSkill(iData.iSkill.SkillDataList.COMBAT_MASTERY);
            iGlobal.Player.addSkill(iData.iSkill.SkillDataList.SMASH);
            iGlobal.Player.addSkill(iData.iSkill.SkillDataList.CRITICAL_HIT);
            iGlobal.Player.addSkill(iData.iSkill.SkillDataList.COUNTERATTACK);
            iGlobal.Player.addSkill(iData.iSkill.SkillDataList.DEFENCE);
            iGlobal.Player.addSkill(iData.iSkill.SkillDataList.MAGIC_MASTERY);
            iGlobal.Player.addSkill(iData.iSkill.SkillDataList.FIREBOLT);
            iGlobal.Player.addSkill(iData.iSkill.SkillDataList.ICEBOLT);
            iGlobal.Player.addSkill(iData.iSkill.SkillDataList.LIGHTNINGBOLT);
            iGlobal.Player.addSkill(iData.iSkill.SkillDataList.BLACKSMITHING);
            iGlobal.Player.addSkill(iData.iSkill.SkillDataList.RANGE_MASTERY);
            iGlobal.Player.addSkill(iData.iSkill.SkillDataList.MIRAGE_MISSILE);
            iData.iPlayer.TitleList.updateTitleInfo("begin");
            iGlobal.Player.updateAllInfo();
            //iGlobal.Player.save();
        };
        Player.caculateInitStat = function () {
            iGlobal.Player.basicStatus = iGlobal.Player.race.caculateStat(iGlobal.Player.age);
        };
        Player.caculateLevelStat = function () {
        };
        Player.ageup = function () {
            iGlobal.Player.caculate = 0;
            if (iGlobal.Player.age < 25) {
                iGlobal.Player.basicStatus.hp = iGlobal.Player.basicStatus.hp + (iGlobal.Player.race.ageupList[iGlobal.Player.age - 10].hp + 1);
                iGlobal.Player.basicStatus.mp = iGlobal.Player.basicStatus.mp + (iGlobal.Player.race.ageupList[iGlobal.Player.age - 10].mp + 1);
                iGlobal.Player.basicStatus.str = iGlobal.Player.basicStatus.str + iGlobal.Player.race.ageupList[iGlobal.Player.age - 10].str;
                iGlobal.Player.basicStatus.dex = iGlobal.Player.basicStatus.dex + iGlobal.Player.race.ageupList[iGlobal.Player.age - 10].dex;
                iGlobal.Player.basicStatus.will = iGlobal.Player.basicStatus.will + iGlobal.Player.race.ageupList[iGlobal.Player.age - 10].will;
                iGlobal.Player.basicStatus.intelligence = iGlobal.Player.basicStatus.intelligence + iGlobal.Player.race.ageupList[iGlobal.Player.age - 10].intelligence;
                iGlobal.Player.basicStatus.luck = iGlobal.Player.basicStatus.luck + iGlobal.Player.race.ageupList[iGlobal.Player.age - 10].luck;
            }
            else {
                iGlobal.Player.basicStatus.hp = iGlobal.Player.basicStatus.hp + 1;
                iGlobal.Player.basicStatus.mp = iGlobal.Player.basicStatus.mp + 1;
            }
            iGlobal.Player.age++;
            var _loc1_ = 18 - iGlobal.Player.age;
            if (_loc1_ < 1 && iGlobal.Player.age <= 25) {
                _loc1_ = 1;
            }
            if (_loc1_ > 0) {
                iGlobal.Player.addAp(_loc1_);
            }
            iGlobal.Player.updateInfoWindow();
            iPanel.iScene.MainScene.allInfoPanel.addText("<font color=\'#ff4040\'>你长大了! 你现在" + iGlobal.Player.age + "岁了!</font>");
            iData.iPlayer.TitleList.updateTitleInfo("age", iGlobal.Player.age);
            iPanel.iScene.MainScene.otherPanel.otherWindow.updateBirth();
        };
        Object.defineProperty(Player, "combatPower", {
            get: function () {
                var _loc1_ = iGlobal.Player.basicStatus.hp + iGlobal.Player.skillStatus.hp;
                var _loc2_ = iGlobal.Player.basicStatus.mp + iGlobal.Player.skillStatus.mp;
                var _loc3_ = iGlobal.Player.basicStatus.str + iGlobal.Player.skillStatus.str;
                var _loc4_ = iGlobal.Player.basicStatus.intelligence + iGlobal.Player.skillStatus.intelligence;
                var _loc5_ = iGlobal.Player.basicStatus.dex + iGlobal.Player.skillStatus.dex;
                var _loc6_ = iGlobal.Player.basicStatus.will + iGlobal.Player.skillStatus.will;
                var _loc7_ = iGlobal.Player.basicStatus.luck + iGlobal.Player.skillStatus.luck;
                var _loc8_ = _loc1_ + 0.5 * _loc2_ + _loc3_ + 0.2 * _loc4_ + 0.1 * _loc5_ + 0.5 * _loc6_ + 0.1 * _loc7_ + iGlobal.Player.apCost;
                return _loc1_ + 0.5 * _loc2_ + _loc3_ + 0.2 * _loc4_ + 0.1 * _loc5_ + 0.5 * _loc6_ + 0.1 * _loc7_ + iGlobal.Player.apCost;
            },
            enumerable: true,
            configurable: true
        });
        Player.addItem = function (equipmentData) {
            if (iGlobal.Player.itemList.length >= iGlobal.Player.BAGMAX) {
                iPanel.iScene.MainScene.allInfoPanel.addText("背包满了!", iGlobal.Global.item);
                return false;
            }
            iGlobal.Player.itemList.push(equipmentData);
            if (iPanel.iScene.MainScene.allInfoPanel) {
                iPanel.iScene.MainScene.allInfoPanel.addText("你获得了" + equipmentData.getNameHTML() + "!", iGlobal.Global.item);
            }
            if (iPanel.iScene.MainScene.otherPanel) {
                if (iPanel.iScene.MainScene.otherPanel.itemWindow) {
                    iPanel.iScene.MainScene.otherPanel.itemWindow.addOneItem();
                }
            }
            return true;
        };
        Player.addPet = function (param1) {
            if (iGlobal.Player.petList.length >= iGlobal.Player.PETMAX) {
                iPanel.iScene.MainScene.allInfoPanel.addText("宠物栏满了!", iGlobal.Global.item);
                return false;
            }
            iGlobal.Player.petList.push(param1);
            if (iPanel.iScene.MainScene.allInfoPanel) {
                iPanel.iScene.MainScene.allInfoPanel.addText("你获得了" + param1.name + "!", iGlobal.Global.item);
            }
            if (iPanel.iScene.MainScene.otherPanel) {
                iPanel.iScene.MainScene.otherPanel.petWindow.update();
            }
            return true;
        };
        Player.removeItem = function (param1) {
            var _loc2_ = iGlobal.Player.itemList.length;
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                if (iGlobal.Player.itemList[_loc3_] == param1) {
                    iGlobal.Player.itemList.splice(_loc3_, 1);
                    return true;
                }
                _loc3_++;
            }
            return false;
        };
        Player.addSkill = function (param1) {
            var _loc2_ = iGlobal.Player.skillList.length;
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                if (iGlobal.Player.skillList[_loc3_].skillData.name == param1.name) {
                    return;
                }
                _loc3_++;
            }
            if (param1 instanceof iData.iSkill.PassiveSkillData) {
                iGlobal.Player.skillList.push(new iData.iSkill.PassiveSkill(param1));
            }
            else {
                iGlobal.Player.skillList.push(new iData.iSkill.ActiveSkill(param1));
            }
            if (iPanel.iScene.MainScene.allInfoPanel) {
                iPanel.iScene.MainScene.allInfoPanel.addText("你获得了技能<font color=\'#ff4040\'>" + param1.name + "</font>");
            }
        };
        Player.getSkill = function (param1) {
            var _loc2_ = iGlobal.Player.skillList.length;
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                if (iGlobal.Player.skillList[_loc3_].skillData.name == param1.name) {
                    return iGlobal.Player.skillList[_loc3_];
                }
                _loc3_++;
            }
            return null;
        };
        Player.isSkillEquiped = function (param1) {
            var _loc2_ = iGlobal.Player.equipSkillList.length;
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                if (iGlobal.Player.equipSkillList[_loc3_] == param1) {
                    return true;
                }
                _loc3_++;
            }
            return false;
        };
        Player.equipSkill = function (param1) {
            if (iGlobal.Player.isSkillEquiped(param1)) {
                return false;
            }
            var _loc2_ = iGlobal.Player.skillList.length;
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                if (iGlobal.Player.skillList[_loc3_] == param1) {
                    iGlobal.Player.equipSkillList.push(param1);
                    iGlobal.Player.updateBattleSkillWindow();
                    return true;
                }
                _loc3_++;
            }
            return false;
        };
        Player.unequipSkill = function (param1) {
            var _loc2_ = iGlobal.Player.equipSkillList.length;
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                if (iGlobal.Player.equipSkillList[_loc3_] == param1) {
                    iGlobal.Player.equipSkillList.splice(_loc3_, 1);
                    iGlobal.Player.updateBattleSkillWindow();
                    return true;
                }
                _loc3_++;
            }
            return false;
        };
        Object.defineProperty(Player, "attackSkillList", {
            /**人物当前技能列表 */
            get: function () {
                var _loc3_ = null;
                var _loc1_ = new Array();
                var _loc2_ = iGlobal.Player.equipSkillList.length;
                if (iGlobal.Player.leftHand) {
                    _loc3_ = iGlobal.Player.leftHand.category;
                }
                else {
                    _loc3_ = iData.iItem.WeaponCategory.MELEE;
                }
                var _loc4_ = 0;
                while (_loc4_ < _loc2_) {
                    if (iGlobal.Player.equipSkillList[_loc4_].skillData.type == iData.iSkill.SkillType.ATTACK) {
                        if (iGlobal.Player.equipSkillList[_loc4_].skillData.category == iData.iSkill.SkillCategory.ALL || iGlobal.Player.equipSkillList[_loc4_].skillData.category == iData.iSkill.SkillCategory.MAGIC || iGlobal.Player.equipSkillList[_loc4_].skillData.category == _loc3_) {
                            _loc1_.push(iGlobal.Player.equipSkillList[_loc4_]);
                        }
                    }
                    _loc4_++;
                }
                return _loc1_;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "defenceSkillList", {
            get: function () {
                var _loc3_ = null;
                var _loc1_ = new Array();
                var _loc2_ = iGlobal.Player.equipSkillList.length;
                if (iGlobal.Player.leftHand) {
                    _loc3_ = iGlobal.Player.leftHand.category;
                }
                else {
                    _loc3_ = iData.iItem.WeaponCategory.MELEE;
                }
                var _loc4_ = 0;
                while (_loc4_ < _loc2_) {
                    if (iGlobal.Player.equipSkillList[_loc4_].skillData.type == iData.iSkill.SkillType.DEFENCE) {
                        if (iGlobal.Player.equipSkillList[_loc4_].skillData.category == iData.iSkill.SkillCategory.ALL || iGlobal.Player.equipSkillList[_loc4_].skillData.category == iData.iSkill.SkillCategory.MAGIC || iGlobal.Player.equipSkillList[_loc4_].skillData.category == _loc3_) {
                            _loc1_.push(iGlobal.Player.equipSkillList[_loc4_]);
                        }
                    }
                    _loc4_++;
                }
                return _loc1_;
            },
            enumerable: true,
            configurable: true
        });
        Player.equip = function (param1) {
            if (param1) {
                switch (param1.position) {
                    case iData.iItem.Weapon.ONEHAND:
                        iGlobal.Player.unequip("leftHand");
                        iGlobal.Player.leftHand = param1;
                        iGlobal.Player.updateSkillInfo();
                        break;
                    case iData.iItem.Weapon.OFFHAND:
                        iGlobal.Player.unequip("rightHand");
                        if (iGlobal.Player.leftHand && iGlobal.Player.leftHand.position == iData.iItem.Weapon.TWOHAND) {
                            iGlobal.Player.unequip("leftHand");
                        }
                        iGlobal.Player.rightHand = param1;
                        break;
                    case iData.iItem.Weapon.TWOHAND:
                        iGlobal.Player.unequip("leftHand");
                        iGlobal.Player.unequip("rightHand");
                        iGlobal.Player.leftHand = param1;
                        iGlobal.Player.updateSkillInfo();
                }
            }
            else {
                if (iGlobal.Player[param1.position]) {
                    iGlobal.Player.unequip(param1.position);
                }
                iGlobal.Player[param1.position] = param1;
            }
            iGlobal.Player.updateEquipInfo();
            iGlobal.Player.updateBattleSkillWindow();
        };
        Player.unequip = function (param1) {
            if (iGlobal.Player[param1]) {
                iGlobal.Player.addItem(iGlobal.Player[param1]);
                iGlobal.Player[param1] = null;
                iGlobal.Player.updateEquipInfo();
                iGlobal.Player.updateSkillInfo();
            }
            iGlobal.Player.updateBattleSkillWindow();
        };
        Player.addTitle = function (param1) {
            iGlobal.Player.titleList.push(param1);
        };
        Player.setTitle = function (param1) {
            if (iGlobal.Player.title == param1) {
                iGlobal.Player.title = null;
            }
            else {
                iGlobal.Player.title = param1;
            }
            iGlobal.Player.updateInfoWindow();
        };
        Player.setPet = function (param1) {
            if (iGlobal.Player.pet == param1) {
                iGlobal.Player.pet = null;
            }
            else {
                if (iGlobal.Player.pet) {
                    iGlobal.Player.addPet(iGlobal.Player.pet);
                }
                iGlobal.Player.pet = param1;
            }
            iGlobal.Player.updatePetInfoWindow();
            iGlobal.Player.updateEquipWindow();
        };
        Player.removePet = function (param1) {
            var _loc2_ = iGlobal.Player.petList.length;
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                if (iGlobal.Player.petList[_loc3_] == param1) {
                    iGlobal.Player.petList.splice(_loc3_, 1);
                    return true;
                }
                _loc3_++;
            }
            return false;
        };
        Player.addAp = function (param1) {
            iGlobal.Player.ap = iGlobal.Player.ap + param1;
            iGlobal.Player.updateInfoWindow();
            iGlobal.Player.updateSkillPanel();
            if (param1 > 0) {
                iPanel.iScene.MainScene.allInfoPanel.addText("<font color=\'#FF4040\'>你获得了" + param1 + " ap!</font>");
            }
            else {
                iGlobal.Player.apCost = iGlobal.Player.apCost - param1;
            }
        };
        Player.loseMoney = function (param1) {
            iGlobal.Player.gold = iGlobal.Player.gold - param1;
            iPanel.iScene.MainScene.allInfoPanel.addText("你<font color=\'#FF4040\'>失去了" + "$" + param1 + "</font>.", iGlobal.Global.money);
            iGlobal.Player.updateInfoWindow();
            if (iPanel.iScene.MainScene.lootPanel) {
                iPanel.iScene.MainScene.lootPanel.money = iPanel.iScene.MainScene.lootPanel.money - param1;
            }
            if (iGlobal.Global.shopPanel) {
                iGlobal.Global.shopPanel.updateMoneyButton();
            }
            if (iGlobal.Global.specialShopPanel) {
                iGlobal.Global.specialShopPanel.update();
            }
        };
        Player.addMoney = function (param1) {
            if (iGlobal.Player.gold <= 1000000000) {
                iGlobal.Player.gold = iGlobal.Player.gold + param1;
                iPanel.iScene.MainScene.allInfoPanel.addText("你获得了<font color=\'#FFA640\'>" + "$" + param1 + "</font>.", iGlobal.Global.money);
                iGlobal.Player.updateInfoWindow();
                if (iPanel.iScene.MainScene.lootPanel) {
                    iPanel.iScene.MainScene.lootPanel.money = iPanel.iScene.MainScene.lootPanel.money + param1;
                }
            }
            if (iGlobal.Global.shopPanel) {
                iGlobal.Global.shopPanel.updateMoneyButton();
            }
            if (iGlobal.Global.specialShopPanel) {
                iGlobal.Global.specialShopPanel.update();
            }
            if (iGlobal.Global.kongregate) {
                iGlobal.Global.kongregate.stats.submit("Money", iGlobal.Player.gold);
            }
        };
        Player.loseExp = function () {
            var _loc1_ = iGlobal.Player.xp / 100;
            iPanel.iScene.MainScene.allInfoPanel.addText("你<font color=\'#ff4040\'>失去了" + _loc1_ + "</font>经验.", iGlobal.Global.exp);
            iGlobal.Player.xp = iGlobal.Player.xp - _loc1_;
            iGlobal.Player.updateXpBar();
            if (iPanel.iScene.MainScene.lootPanel) {
                iPanel.iScene.MainScene.lootPanel.exp = iPanel.iScene.MainScene.lootPanel.exp - _loc1_;
            }
        };
        Player.addExp = function (param1) {
            if (iGlobal.Player.getLevelExp() < 0) {
                return;
            }
            iGlobal.Player.xp = iGlobal.Player.xp + param1;
            iPanel.iScene.MainScene.allInfoPanel.addText("你获得了<font color=\'#4a60d7\'>" + param1 + "</font>经验.", iGlobal.Global.exp);
            if (iGlobal.Player.xp > iGlobal.Player.getLevelExp()) {
                iGlobal.Player.levelUp();
            }
            iGlobal.Player.updateXpBar();
            if (iPanel.iScene.MainScene.lootPanel) {
                iPanel.iScene.MainScene.lootPanel.exp = iPanel.iScene.MainScene.lootPanel.exp + param1;
            }
        };
        Player.levelUp = function () {
            iGlobal.Player.lv++;
            if (iGlobal.Player.age < 25) {
                iGlobal.Player.basicStatus.hp = iGlobal.Player.basicStatus.hp + (iGlobal.Player.race.ageupList[iGlobal.Player.age - 10].hp / 4 + 1);
                iGlobal.Player.basicStatus.mp = iGlobal.Player.basicStatus.mp + (iGlobal.Player.race.ageupList[iGlobal.Player.age - 10].mp / 4 + 1);
                iGlobal.Player.basicStatus.str = iGlobal.Player.basicStatus.str + iGlobal.Player.race.ageupList[iGlobal.Player.age - 10].str / 4;
                iGlobal.Player.basicStatus.dex = iGlobal.Player.basicStatus.dex + iGlobal.Player.race.ageupList[iGlobal.Player.age - 10].dex / 4;
                iGlobal.Player.basicStatus.will = iGlobal.Player.basicStatus.will + iGlobal.Player.race.ageupList[iGlobal.Player.age - 10].will / 4;
                iGlobal.Player.basicStatus.intelligence = iGlobal.Player.basicStatus.intelligence + iGlobal.Player.race.ageupList[iGlobal.Player.age - 10].intelligence / 4;
                iGlobal.Player.basicStatus.luck = iGlobal.Player.basicStatus.luck + iGlobal.Player.race.ageupList[iGlobal.Player.age - 10].luck / 4;
            }
            else {
                iGlobal.Player.basicStatus.hp = iGlobal.Player.basicStatus.hp + 1;
                iGlobal.Player.basicStatus.mp = iGlobal.Player.basicStatus.mp + 1;
            }
            iGlobal.Player.addAp(1);
            iGlobal.Player.xp = 0;
            if (iPanel.iScene.MainScene.xpBar) {
                iPanel.iScene.MainScene.xpBar.Value = 0;
                iPanel.iScene.MainScene.xpBar.Max = iGlobal.Player.getLevelExp();
            }
            iGlobal.Player.updateInfoWindow();
            iGlobal.Player.updateXpBar();
            iPanel.iScene.MainScene.allInfoPanel.addText("<font color=\'#ff4040\'>升级了! 你现在是 Lv." + iGlobal.Player.lv + "!</font>");
            if (iGlobal.Player.age == 10) {
                iData.iPlayer.TitleList.updateTitleInfo("age10", iGlobal.Player.lv);
            }
            if (iGlobal.Global.kongregate) {
                iGlobal.Global.kongregate.stats.submit("CP", iGlobal.Player.combatPower);
                iGlobal.Global.kongregate.stats.submit("STR", iGlobal.Player.str);
                iGlobal.Global.kongregate.stats.submit("DEX", iGlobal.Player.dex);
                iGlobal.Global.kongregate.stats.submit("INT", iGlobal.Player.intelligence);
                iGlobal.Global.kongregate.stats.submit("WILL", iGlobal.Player.will);
                iGlobal.Global.kongregate.stats.submit("LUCK", iGlobal.Player.luck);
            }
        };
        Player.getLevelExp = function () {
            if (iGlobal.Player.lv >= 200) {
                return -1;
            }
            return iGlobal.Player.lv * iGlobal.Player.lv * ((iGlobal.Player.lv + 1) * (iGlobal.Player.lv + 1) - 13 * (iGlobal.Player.lv + 1) + 82);
        };
        Object.defineProperty(Player, "attack", {
            get: function () {
                var _loc1_ = 0;
                if (iGlobal.Player.attMin > iGlobal.Player.attMax) {
                    _loc1_ = iGlobal.Player.attMax + (iGlobal.Player.attMin - iGlobal.Player.attMax) * tool.MyMath.balanceRandom(iGlobal.Player.balance);
                }
                else {
                    _loc1_ = iGlobal.Player.attMin + (iGlobal.Player.attMax - iGlobal.Player.attMin) * tool.MyMath.balanceRandom(iGlobal.Player.balance);
                }
                return _loc1_;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "attMin", {
            get: function () {
                var _loc2_ = null;
                var _loc1_ = iGlobal.Player.basicStatus.attack.min + iGlobal.Player.skillStatus.attack.min + iGlobal.Player.equipStatus.attack.min + iGlobal.Player.str / 3;
                if (iGlobal.Player.leftHand) {
                    _loc2_ = iGlobal.Player.leftHand.category;
                }
                else {
                    _loc2_ = iData.iItem.WeaponCategory.MELEE;
                }
                if (_loc2_ == iData.iItem.WeaponCategory.RANGED) {
                    _loc1_ = _loc1_ + iGlobal.Player.dex / 3;
                }
                _loc1_ = iGlobal.Player.formula_title_stat(_loc1_, iData.iItem.Stat.ATTACK);
                return _loc1_;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "attMax", {
            get: function () {
                var _loc2_ = null;
                var _loc1_ = iGlobal.Player.basicStatus.attack.max + iGlobal.Player.skillStatus.attack.max + iGlobal.Player.equipStatus.attack.max + iGlobal.Player.str / 2.5;
                if (iGlobal.Player.leftHand) {
                    _loc2_ = iGlobal.Player.leftHand.category;
                }
                else {
                    _loc2_ = iData.iItem.WeaponCategory.MELEE;
                }
                if (_loc2_ == iData.iItem.WeaponCategory.RANGED) {
                    _loc1_ = _loc1_ + iGlobal.Player.dex / 2.5;
                }
                _loc1_ = iGlobal.Player.formula_title_stat(_loc1_, iData.iItem.Stat.ATTACK);
                return _loc1_;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "hp", {
            /**当前人物血量 */
            get: function () {
                return iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.hp), iData.iItem.Stat.hp);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "mp", {
            /**当前人物蓝量 */
            get: function () {
                return iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.mp), iData.iItem.Stat.mp);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "str", {
            get: function () {
                var _loc1_ = iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.str), iData.iItem.Stat.str);
                iData.iPlayer.TitleList.updateTitleInfo(iData.iItem.Stat.str, _loc1_);
                return _loc1_;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "dex", {
            get: function () {
                var _loc1_ = iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.dex), iData.iItem.Stat.dex);
                iData.iPlayer.TitleList.updateTitleInfo(iData.iItem.Stat.dex, _loc1_);
                return _loc1_;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "intelligence", {
            get: function () {
                var _loc1_ = iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.intelligence), iData.iItem.Stat.intelligence);
                iData.iPlayer.TitleList.updateTitleInfo(iData.iItem.Stat.intelligence, _loc1_);
                return _loc1_;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "will", {
            get: function () {
                var _loc1_ = iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.will), iData.iItem.Stat.will);
                iData.iPlayer.TitleList.updateTitleInfo(iData.iItem.Stat.will, _loc1_);
                return _loc1_;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "luck", {
            get: function () {
                var _loc1_ = iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.luck), iData.iItem.Stat.luck);
                iData.iPlayer.TitleList.updateTitleInfo(iData.iItem.Stat.luck, _loc1_);
                return _loc1_;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "defence", {
            get: function () {
                return iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.defence), iData.iItem.Stat.defence);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "protection", {
            get: function () {
                return iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.protection), iData.iItem.Stat.protection);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "balance", {
            get: function () {
                var _loc1_ = iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.balance) + (iGlobal.Player.dex - 10) / 4, iData.iItem.Stat.balance);
                if (_loc1_ > 100) {
                    _loc1_ = 100;
                }
                return _loc1_;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "crit", {
            get: function () {
                return iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.crit) + iGlobal.Player.will / 5 + iGlobal.Player.luck / 5, iData.iItem.Stat.crit);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "crit_mul", {
            get: function () {
                return iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.crit_mul) + 100, iData.iItem.Stat.crit_mul);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "spellChance", {
            /**法术释放几率 */
            get: function () {
                return iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.spellChance) + iGlobal.Player.intelligence / 20, iData.iItem.Stat.spellChance);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "protectionIgnore", {
            get: function () {
                return iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.protectionIgnore), iData.iItem.Stat.protectionIgnore);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "protectionReduce", {
            get: function () {
                return iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.protectionReduce), iData.iItem.Stat.protectionReduce);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "magicDamage", {
            get: function () {
                return iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.magicDamage) + iGlobal.Player.intelligence / 20, iData.iItem.Stat.magicDamage);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "magicBalance", {
            get: function () {
                var _loc1_ = (iGlobal.Player.intelligence - 10) / 4 + 30;
                if (_loc1_ > 99) {
                    _loc1_ = 99;
                }
                return _loc1_;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "basicStr", {
            get: function () {
                return iGlobal.Player.formula_BasicStatAddUp(iData.iItem.Stat.str);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "basicDex", {
            get: function () {
                return iGlobal.Player.formula_BasicStatAddUp(iData.iItem.Stat.dex);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "basicInt", {
            get: function () {
                return iGlobal.Player.formula_BasicStatAddUp(iData.iItem.Stat.intelligence);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "basicWill", {
            get: function () {
                return iGlobal.Player.formula_BasicStatAddUp(iData.iItem.Stat.will);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "basicLuck", {
            get: function () {
                return iGlobal.Player.formula_BasicStatAddUp(iData.iItem.Stat.luck);
            },
            enumerable: true,
            configurable: true
        });
        Player.formula_statAdd = function (param1, param2, param3) {
            return param1[param3] + param2[param3];
        };
        Player.formula_StatAddUp = function (param1) {
            return iGlobal.Player.basicStatus[param1] + iGlobal.Player.skillStatus[param1] + iGlobal.Player.equipStatus[param1];
        };
        Player.formula_title_stat = function (param1, param2) {
            var _loc3_ = 0;
            var _loc4_ = 0;
            if (iGlobal.Player.title) {
                _loc3_ = iGlobal.Player.title.statMulList.length;
                _loc4_ = 0;
                while (_loc4_ < _loc3_) {
                    if (iGlobal.Player.title.statMulList[_loc4_].name == param2) {
                        param1 = param1 * iGlobal.Player.title.statMulList[_loc4_].mul;
                        param1 = param1 + iGlobal.Player.title.statMulList[_loc4_].add;
                        return param1;
                    }
                    _loc4_++;
                }
            }
            return param1;
        };
        Player.formula_BasicStatAddUp = function (param1) {
            return iGlobal.Player.basicStatus[param1] + iGlobal.Player.skillStatus[param1];
        };
        Player.updateInfoWindow = function () {
            if (iPanel.iScene.MainScene.playerInfoPanel) {
                iPanel.iScene.MainScene.playerInfoPanel.upDate();
            }
        };
        Player.updatePetInfoWindow = function () {
            if (iPanel.iScene.MainScene.petInfoPanel) {
                iPanel.iScene.MainScene.petInfoPanel.update();
            }
        };
        Player.updateAllInfo = function () {
            iGlobal.Player.updateSkillInfo();
            iGlobal.Player.updateEquipInfo();
        };
        Player.updateSkillInfo = function () {
            var _loc2_ = null;
            var _loc3_ = 0;
            var _loc5_ = 0;
            iGlobal.Player.skillStatus = new iData.BasicStatus(0, 0, 0, 0, 0, 0, 0);
            var _loc1_ = iGlobal.Player.skillList.length;
            var _loc4_ = 0;
            while (_loc4_ < _loc1_) {
                _loc2_ = iGlobal.Player.skillList[_loc4_].skillData;
                _loc3_ = iGlobal.Player.skillList[_loc4_].level;
                _loc5_ = 0;
                while (_loc5_ < _loc2_.statList[_loc3_].length) {
                    iGlobal.Player.skillStatus[_loc2_.statList[_loc3_][_loc5_].name] = iGlobal.Player.skillStatus[_loc2_.statList[_loc3_][_loc5_].name] + _loc2_.statList[_loc3_][_loc5_].value;
                    _loc5_++;
                }
                if (_loc2_.effectList && iGlobal.Player.leftHand) {
                    if (iGlobal.Player.leftHand.category == _loc2_.category) {
                        _loc5_ = 0;
                        while (_loc5_ < _loc2_.effectList[_loc3_].length) {
                            if (_loc2_.effectList[_loc3_][_loc5_].name == iData.iItem.Stat.attackMin) {
                                iGlobal.Player.skillStatus.attack.min = iGlobal.Player.skillStatus.attack.min + _loc2_.effectList[_loc3_][_loc5_].value;
                            }
                            else if (_loc2_.effectList[_loc3_][_loc5_].name == iData.iItem.Stat.attackMax) {
                                iGlobal.Player.skillStatus.attack.max = iGlobal.Player.skillStatus.attack.max + _loc2_.effectList[_loc3_][_loc5_].value;
                            }
                            else {
                                iGlobal.Player.skillStatus[_loc2_.effectList[_loc3_][_loc5_].name] = iGlobal.Player.skillStatus[_loc2_.effectList[_loc3_][_loc5_].name] + _loc2_.effectList[_loc3_][_loc5_].value;
                            }
                            _loc5_++;
                        }
                    }
                }
                _loc4_++;
            }
            iGlobal.Player.updateInfoWindow();
        };
        Player.updateEquipInfo = function () {
            var _loc3_ = 0;
            var _loc4_ = null;
            var _loc5_ = 0;
            iGlobal.Player.equipStatus = new iData.BasicStatus(0, 0, 0, 0, 0, 0, 0);
            var _loc1_ = ["leftHand", "rightHand", "feet", "head", "necklace", "ring", "body"];
            var _loc2_ = 0;
            while (_loc2_ < _loc1_.length) {
                if (iGlobal.Player[_loc1_[_loc2_]]) {
                    _loc3_ = iGlobal.Player[_loc1_[_loc2_]].basicStat.length;
                    _loc4_ = iGlobal.Player[_loc1_[_loc2_]].basicStat;
                    _loc5_ = 0;
                    while (_loc5_ < _loc3_) {
                        if (_loc4_[_loc5_].name == iData.iItem.Stat.attackMin) {
                            iGlobal.Player.equipStatus.attack.min = iGlobal.Player.equipStatus.attack.min + _loc4_[_loc5_].value;
                        }
                        else if (_loc4_[_loc5_].name == iData.iItem.Stat.attackMax) {
                            iGlobal.Player.equipStatus.attack.max = iGlobal.Player.equipStatus.attack.max + _loc4_[_loc5_].value;
                        }
                        else if (_loc4_[_loc5_].name == iData.iItem.Stat.ATTACK) {
                            iGlobal.Player.equipStatus.attack.min = iGlobal.Player.equipStatus.attack.min + _loc4_[_loc5_].value;
                            iGlobal.Player.equipStatus.attack.max = iGlobal.Player.equipStatus.attack.max + _loc4_[_loc5_].value;
                        }
                        else {
                            iGlobal.Player.equipStatus[_loc4_[_loc5_].name] = iGlobal.Player.equipStatus[_loc4_[_loc5_].name] + _loc4_[_loc5_].value;
                        }
                        _loc5_++;
                    }
                    _loc3_ = iGlobal.Player[_loc1_[_loc2_]].qualityStat.length;
                    _loc4_ = iGlobal.Player[_loc1_[_loc2_]].qualityStat;
                    _loc5_ = 0;
                    while (_loc5_ < _loc3_) {
                        if (_loc4_[_loc5_].name == iData.iItem.Stat.attackMin) {
                            iGlobal.Player.equipStatus.attack.min = iGlobal.Player.equipStatus.attack.min + _loc4_[_loc5_].value;
                        }
                        else if (_loc4_[_loc5_].name == iData.iItem.Stat.attackMax) {
                            iGlobal.Player.equipStatus.attack.max = iGlobal.Player.equipStatus.attack.max + _loc4_[_loc5_].value;
                        }
                        else if (_loc4_[_loc5_].name == iData.iItem.Stat.ATTACK) {
                            iGlobal.Player.equipStatus.attack.min = iGlobal.Player.equipStatus.attack.min + _loc4_[_loc5_].value;
                            iGlobal.Player.equipStatus.attack.max = iGlobal.Player.equipStatus.attack.max + _loc4_[_loc5_].value;
                        }
                        else {
                            iGlobal.Player.equipStatus[_loc4_[_loc5_].name] = iGlobal.Player.equipStatus[_loc4_[_loc5_].name] + _loc4_[_loc5_].value;
                        }
                        _loc5_++;
                    }
                    _loc3_ = iGlobal.Player[_loc1_[_loc2_]].levelStat.length;
                    _loc4_ = iGlobal.Player[_loc1_[_loc2_]].levelStat;
                    _loc5_ = 0;
                    while (_loc5_ < _loc3_) {
                        if (_loc4_[_loc5_].name == iData.iItem.Stat.attackMin) {
                            iGlobal.Player.equipStatus.attack.min = iGlobal.Player.equipStatus.attack.min + _loc4_[_loc5_].value;
                        }
                        else if (_loc4_[_loc5_].name == iData.iItem.Stat.attackMax) {
                            iGlobal.Player.equipStatus.attack.max = iGlobal.Player.equipStatus.attack.max + _loc4_[_loc5_].value;
                        }
                        else if (_loc4_[_loc5_].name == iData.iItem.Stat.ATTACK) {
                            iGlobal.Player.equipStatus.attack.min = iGlobal.Player.equipStatus.attack.min + _loc4_[_loc5_].value;
                            iGlobal.Player.equipStatus.attack.max = iGlobal.Player.equipStatus.attack.max + _loc4_[_loc5_].value;
                        }
                        else {
                            iGlobal.Player.equipStatus[_loc4_[_loc5_].name] = iGlobal.Player.equipStatus[_loc4_[_loc5_].name] + _loc4_[_loc5_].value;
                        }
                        _loc5_++;
                    }
                }
                _loc2_++;
            }
            iGlobal.Player.updateInfoWindow();
            iGlobal.Player.updateEquipWindow();
        };
        Player.updateEquipWindow = function () {
            if (iPanel.iScene.MainScene.otherPanel && iPanel.iScene.MainScene.otherPanel.equipWindow) {
                iPanel.iScene.MainScene.otherPanel.equipWindow.update();
            }
        };
        Player.updateBattleSkillWindow = function () {
            if (iPanel.iScene.MainScene.battleSkillPanel) {
                iPanel.iScene.MainScene.battleSkillPanel.update();
            }
        };
        Player.updateXpBar = function () {
            if (iPanel.iScene.MainScene.playerInfoPanel) {
                iPanel.iScene.MainScene.playerInfoPanel.upDateExp();
            }
        };
        Player.updateSkillPanel = function () {
            if (iPanel.iScene.MainScene.otherPanel && iPanel.iScene.MainScene.otherPanel.skillWindow) {
                iPanel.iScene.MainScene.otherPanel.skillWindow.onUpdate();
            }
        };
        return Player;
    }());
    Player.lv = 0;
    Player.age = 0;
    Player.ap = 0;
    Player.gold = 0;
    Player.xp = 0;
    Player.apCost = 0;
    Player.storeLv = 0;
    iGlobal.Player = Player;
    __reflect(Player.prototype, "iGlobal.Player");
})(iGlobal || (iGlobal = {}));
iGlobal.Player.BAGMAX = 50;
iGlobal.Player.PETMAX = 10;
iGlobal.Player.caculate = 0;
iGlobal.Player.playerName = "Jason";
iGlobal.Player.skillStatus = new iData.BasicStatus(0, 0, 0, 0, 0, 0, 0);
iGlobal.Player.equipStatus = new iData.BasicStatus(0, 0, 0, 0, 0, 0, 0);
iGlobal.Player.skillList = new Array();
iGlobal.Player.equipSkillList = new Array();
iGlobal.Player.itemList = new Array();
iGlobal.Player.titleList = new Array();
iGlobal.Player.petList = new Array();
//# sourceMappingURL=Player.js.map