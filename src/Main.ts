 class Main extends egret.Sprite {
	public _mochiads_game_id:string = "0378b66faafd51ef";

	public constructor()
	{
		super();
		var _self__:any = this;
		if(this.stage)
		{
			this.init();
		}
		else
		{
			_self__.addEventListener(egret.Event.ADDED_TO_STAGE,this.init,this,null);
		}
	}

	private init(param1:egret.Event = null)
	{
		var _self__:any = this;
		var mc:egret.MovieClip = <any>null;
		var clickHandle:Function = <any>null;
		var onEnterFrame:Function = <any>null;
		var e:egret.Event = param1;
		clickHandle = function (param1:egret.Event)
		{
			new egret.URLRequest("http://critgame.net");
		};
		onEnterFrame = function ():any
		{
			var scene:iPanel.iScene.BeginScene = <any>null;
			if(mc.currentFrame == mc.totalFrames - 1)
			{
				var next:Function = <any>function ():any
				{
					mc.parent.removeChild(mc);
				};
				tool.Effect.fadeOut(mc,20,next);
				scene = new iPanel.iScene.BeginScene();
				iGlobal.Global.stage.addChild(scene);
				tool.Effect.fadeIn(scene);
				mc.removeEventListener(egret.Event.ENTER_FRAME,onEnterFrame,null);
			}
		};
		_self__.removeEventListener(egret.Event.ADDED_TO_STAGE,this.init,this,null);
		iGlobal.Global.init(this.stage);
		mc = new brand_mc();
		this.addChild(mc);
		mc.x = this.stage.stageWidth / 2;
		mc.y = this.stage.stageHeight / 2;
		mc["buttonMode"] = true;
		mc.addEventListener(egret.TouchEvent.TOUCH_TAP,clickHandle,null);
		mc.addEventListener(egret.Event.ENTER_FRAME,onEnterFrame,null);
	}
}