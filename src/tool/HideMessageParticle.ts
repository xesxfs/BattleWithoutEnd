module tool {
	export class HideMessageParticle extends egret.HashObject {
		public x:number = NaN;
		public y:number = NaN;
		public ax:number = NaN;
		public ay:number = NaN;
		public vx:number = NaN;
		public vy:number = NaN;
		public color:number = 0;

		public constructor(param1:number,param2:number,param3:number)
		{
			super();
			super();
			var _loc4_:number = <any>NaN;
			var _loc5_:number = <any>NaN;
			_loc4_ = Math.random() * 5;
			_loc5_ = Math.random() * Math.PI * 2;
			this.ax = Math.cos(_loc5_) * _loc4_;
			this.ay = Math.sin(_loc5_) * _loc4_;
			this.x = param1;
			this.y = param2;
			this.color = flash.checkUint(param3);
			this.vx = 0;
			this.vy = 0;
		}

		public update()
		{
			this.vx = this.vx + this.ax;
			this.vy = this.vy + this.ay;
			this.x = this.x + this.vx;
			this.y = this.y + this.vy;
		}

	}
}

