
// author: baldwin
// date: 20180604

class RankList extends egret.Sprite {
    public constructor(stageWidth: number, stageHeight: number) {
        super();

        this._stageWidth = stageWidth;
        this._stageHeight = stageHeight;
        this.width = this._stageWidth;
        this.height = this._stageHeight;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddedToStage, this);
    }

    private onAddedToStage(event: egret.Event): void {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddedToStage, this);
        this.drawBackGround();
    }

    private drawBackGround(): void {
        this._backGround = Functions.createBitmapByName("bg_jpg");
        this._backGround.width = this._stageWidth;
        this._backGround.height = this._stageHeight;
        this.addChild(this._backGround);
    }

    private _stageWidth: number;
    private _stageHeight: number;

    private _backGround: egret.Bitmap;
}