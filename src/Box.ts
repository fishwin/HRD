
// Author: baldwin
// Date: 20180602

class Box extends egret.Sprite {
    public constructor(empty: boolean, level?: GameLevel, x?: number, y?: number, w?: number, h?: number, text?: number) {
        super();

        this._level = level;
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this._text = text;

        if (this._level == GameLevel.THREE) {
            this._textSize = 70;
        } else if (this._level == GameLevel.FOUR) {
            this._textSize = 50;
        } else if (this._level == GameLevel.FIVE) {
            this._textSize = 40;
        }

        this._empty = empty;



        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddedToStage, this);
    }

    private onAddedToStage(event: egret.Event): void {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddedToStage, this);
        if (!this._empty) {
            this.init();
        }
    }

    private init() {
        this._backGround = Functions.createBitmapByName("box_jpg");
        this._backGround.width = this.width;
        this._backGround.height = this.height;
        this._backGround.x = 0;
        this._backGround.y = 0;
        this.addChild(this._backGround);

        this._textText = new egret.TextField();
        this._textText.text = this._text.toString();
        this._textText.textColor = GlobalVariable._ButtonFontColor;
        this._textText.fontFamily = "微软雅黑";
        this._textText.width = this.width;
        this._textText.height = this.height;
        this._textText.verticalAlign = egret.VerticalAlign.MIDDLE;
        this._textText.textAlign = egret.HorizontalAlign.CENTER;
        this._textText.x = 0;
        this._textText.y = 0;
        this._textText.size = this._textSize;
        this._textText.bold = true;
        this.addChild(this._textText);
    }

    private _empty: boolean;
    public _text: number;
    private _level: GameLevel;
    private _backGround: egret.Bitmap;
    private _textText: egret.TextField;
    private _textSize: number;
    public _Index: number;
}