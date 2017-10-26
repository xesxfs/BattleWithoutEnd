module Main_fla {
	export class MainTimeline extends egret.MovieClip {
		public lotxt:flash.TextField;
		public _this:any;
		public line:egret.Sprite;
		public myContextMenu:flash.ContextMenu;

		public constructor()
		{
			super();
			this["addFrameScript"](0,flash.bind(this.frame1,this),1,flash.bind(this.frame2,this));
		}

		public loadProgress(param1:egret.ProgressEvent)
		{
			this.lotxt.text = String(flash.tranint(param1.bytesLoaded / param1.bytesTotal * 100)) + "%";
			this.drawLine(param1.bytesLoaded / param1.bytesTotal);
		}

		public init(param1:egret.Event)
		{
			var _self__:any = this;
			this._this.removeChild(this.lotxt);
			this.line.graphics.clear();
			this._this.removeChild(this.line);
			_self__.gotoAndStop(2);
		}

		public drawLine(param1:number):any
		{
			this.line.graphics.lineStyle(2,0);
			this.line.graphics.moveTo(0,0);
			this.line.graphics.lineTo(param1 * 100,0);
		}

		public frame1():any
		{
			var _self__:any = this;
			_self__.stop();
			this.root["loaderInfo"].addEventListener(egret.ProgressEvent.PROGRESS,flash.bind(this.loadProgress,this),null,false,0);
			this.root["loaderInfo"].addEventListener(egret.Event.COMPLETE,flash.bind(this.init,this),null,false,0);
			this.lotxt = new flash.TextField();
			this.addChild(this.lotxt);
			this.lotxt.x = 390;
			this.lotxt.y = 280;
			this.lotxt.defaultTextFormat = new flash.TextFormat("Nesobrite Cd","32");
			this._this = this;
			this.line = new egret.Sprite();
			this.line.graphics.lineStyle(2,15066597);
			this.line.graphics.moveTo(0,0);
			this.line.graphics.lineTo(100,0);
			this.addChild(this.line);
			this.line.x = 350;
			this.line.y = 330;
		}

		public frame2():any
		{
			com.spikything.utils.MouseWheelTrap.setup(this.stage);
			this.myContextMenu = new flash.ContextMenu();
			this.myContextMenu["hideBuiltInItems"]();
			this.contextMenu = this.myContextMenu;
			this.addChild(new Main());
		}

	}
}

// flash.extendsClass("Main_fla.MainTimeline","egret.MovieClip")
