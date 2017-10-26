module iData {
	export module iMonster {
		/**Boss类 */
		export class Boss extends iData.iMonster.Monster {
			/**boss血量*/
			public hpleft:number = 0;

			public constructor(param1:iData.iMonster.MonsterData)
			{
				super(param1);
				this.hpleft = this.hp;
			}

			protected generateTitle()
			{
				this.title = iData.iMonster.MonsterTitleList.REGION_BOSS;
				this.addTitleStat();
			}

			public get CP():number
			{
				return this.data.CP * 2;
			}

			public dropItem()
			{
				var _loc2_:iData.iItem.Equipment = <any>null;
				var _loc1_:iData.iItem.EquipmentData = iData.iItem.EquipmentList.list[iData.iItem.EquipmentList.list.length * Math.random() >> 0];
				if(_loc1_ instanceof iData.iItem.WeaponData)
				{
					//这里
					var loc1 = _loc1_ as iData.iItem.WeaponData;
					_loc2_ = new iData.iItem.Weapon(loc1,this.dropRate,true);
				}
				else
				{
					_loc2_ = new iData.iItem.Equipment(_loc1_,this.dropRate,true);
				}
				var _loc3_:boolean = <any>false;
				if(<any>!iGlobal.Global["item" + _loc2_.quality + "_toggle"])
				{
					_loc3_ = true;
				}
				if(<any>!_loc3_)
				{
					if((_loc2_ instanceof iData.iItem.Weapon) || _loc2_.type == iData.iItem.EquipType.ACCESORY)
					{
						if(<any>!iGlobal.Global[_loc2_.name + "_toggle"])
						{
							_loc3_ = true;
						}
					}
					else if(<any>!iGlobal.Global[_loc2_.position + "_" + _loc2_.type + "_toggle"])
					{
						_loc3_ = true;
					}
				}
				if(<any>!_loc3_ && iGlobal.Player.addItem(_loc2_))
				{
					if(iPanel.iScene.MainScene.lootPanel)
					{
						switch(_loc2_.quality)
						{
						case 0 :
							iPanel.iScene.MainScene.lootPanel.basic++;
							break;
						case 1 :
							iPanel.iScene.MainScene.lootPanel.magic++;
							break;
						case 2 :
							iPanel.iScene.MainScene.lootPanel.rare++;
							break;
						case 3 :
							iPanel.iScene.MainScene.lootPanel.perfect++;
							break;
						case 4 :
							iPanel.iScene.MainScene.lootPanel.epic++;
							break;
						case 5 :
							iPanel.iScene.MainScene.lootPanel.legendary++;
						}
					}
				}
				else
				{
					_loc3_ = true;
				}
				if(_loc3_)
				{
					iGlobal.Player.addMoney(_loc2_.getMoney());
				}
			}

			public dropPet()
			{
				var _loc2_:number = <any>NaN;
				var _loc3_:number = 0;
				var _loc1_:number = 20 * (1 + iGlobal.Player.luck / 200);
				if(_loc1_ > 40)
				{
					_loc1_ = 40;
				}
				if(Math.random() * 100 < _loc1_)
				{
					_loc2_ = iGlobal.Player.luck / 500;
					if(_loc2_ > 1)
					{
						_loc2_ = 1;
					}
					_loc3_ = (1 + iGlobal.Global.map.mapData.modifier) * (1 + _loc2_);
					iGlobal.Player.addPet(new iData.iPet.Pet(iGlobal.Global.map.mapData.petList[iGlobal.Global.map.mapData.petList.length * Math.random() >> 0],_loc3_));
				}
			}

		}
	}
}

