
// author: baldwin
// date: 20180604

class FailSettlement extends egret.Sprite {
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
        
        
        let x = this._stageWidth / 4;
        let y = this._stageHeight / 10;
        let w = this._stageWidth / 2;
        let h = this._stageHeight / 10;
        let ew = 50;
        let eh = 50;

        this._resultText = new egret.TextField();
        this._resultText.text = "挑战失败";
        this._resultText.textColor = GlobalVariable._GeneralFontColor;
        this._resultText.fontFamily = "微软雅黑";
        this._resultText.x = x;
        this._resultText.y = y + this._stageHeight / 15;
        this._resultText.width = w;
        this._resultText.height = h;
        this._resultText.verticalAlign = egret.VerticalAlign.MIDDLE;
        this._resultText.textAlign = egret.HorizontalAlign.CENTER;
        this._resultText.size = 70;
        this._resultText.bold = true;
        this._resultText.strokeColor = 0xEEEE00;
        this._resultText.stroke = 2;
        this.addChild(this._resultText);

        y += this._stageHeight / 5;
        this._ShareToReviveButton = new egret.Shape();
        this._ShareToReviveButton.graphics.beginFill(GlobalVariable._ButtonHighlightColor, 1);
        this._ShareToReviveButton.graphics.drawRoundRect(x, y, w, h, ew, eh)
        this._ShareToReviveButton.graphics.endFill();
        this.addChild(this._ShareToReviveButton);
        this._ShareToReviveButton.touchEnabled = true;

        this._ShareToReviveButtonText = new egret.TextField();
        this._ShareToReviveButtonText.text = "分享复活";
        this._ShareToReviveButtonText.textColor = GlobalVariable._ButtonFontColor;
        this._ShareToReviveButtonText.fontFamily = "楷体";
        this._ShareToReviveButtonText.x = x;
        this._ShareToReviveButtonText.y = y;
        this._ShareToReviveButtonText.width = w;
        this._ShareToReviveButtonText.height = h;
        this._ShareToReviveButtonText.verticalAlign = egret.VerticalAlign.MIDDLE;
        this._ShareToReviveButtonText.textAlign = egret.HorizontalAlign.CENTER;
        this._ShareToReviveButtonText.size = 40;
        this._ShareToReviveButtonText.bold = true;
        this.addChild(this._ShareToReviveButtonText);


        this._ShareToReviveButton.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.ButtonTouchBegin, this);
        this._ShareToReviveButton.addEventListener(egret.TouchEvent.TOUCH_END, this.ButtonClick, this);

        y += this._stageHeight / 8;
        this._ViewAdToReviveButton = new egret.Shape();
        this._ViewAdToReviveButton.graphics.beginFill(GlobalVariable._ButtonHighlightColor, 1);
        this._ViewAdToReviveButton.graphics.drawRoundRect(x, y, w, h, ew, eh)
        this._ViewAdToReviveButton.graphics.endFill();
        this.addChild(this._ViewAdToReviveButton);
        this._ViewAdToReviveButton.touchEnabled = true;

        this._ViewAdToReviveButtonText = new egret.TextField();
        this._ViewAdToReviveButtonText.text = "看广告复活";
        this._ViewAdToReviveButtonText.textColor = GlobalVariable._ButtonFontColor;
        this._ViewAdToReviveButtonText.fontFamily = "楷体";
        this._ViewAdToReviveButtonText.x = x;
        this._ViewAdToReviveButtonText.y = y;
        this._ViewAdToReviveButtonText.width = w;
        this._ViewAdToReviveButtonText.height = h;
        this._ViewAdToReviveButtonText.verticalAlign = egret.VerticalAlign.MIDDLE;
        this._ViewAdToReviveButtonText.textAlign = egret.HorizontalAlign.CENTER;
        this._ViewAdToReviveButtonText.size = 40;
        this._ViewAdToReviveButtonText.bold = true;
        this.addChild(this._ViewAdToReviveButtonText);


        this._ViewAdToReviveButton.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.ButtonTouchBegin, this);
        this._ViewAdToReviveButton.addEventListener(egret.TouchEvent.TOUCH_END, this.ButtonClick, this);


        y += this._stageHeight / 8;
        this._HomeButton = new egret.Shape();
        this._HomeButton.graphics.beginFill(GlobalVariable._ButtonColor, 1);
        this._HomeButton.graphics.drawRoundRect(x, y, w, h, ew, eh)
        this._HomeButton.graphics.endFill();
        this.addChild(this._HomeButton);
        this._HomeButton.touchEnabled = true;

        this._HomeButtonText = new egret.TextField();
        this._HomeButtonText.text = "主界面";
        this._HomeButtonText.textColor = GlobalVariable._ButtonFontColor;
        this._HomeButtonText.fontFamily = "楷体";
        this._HomeButtonText.x = x;
        this._HomeButtonText.y = y;
        this._HomeButtonText.width = w;
        this._HomeButtonText.height = h;
        this._HomeButtonText.verticalAlign = egret.VerticalAlign.MIDDLE;
        this._HomeButtonText.textAlign = egret.HorizontalAlign.CENTER;
        this._HomeButtonText.size = 50;
        this._HomeButtonText.bold = true;
        this.addChild(this._HomeButtonText);


        this._HomeButton.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.ButtonTouchBegin, this);
        this._HomeButton.addEventListener(egret.TouchEvent.TOUCH_END, this.ButtonClick, this);

        y += this._stageHeight / 8;
        this._ReplayButton = new egret.Shape();
        this._ReplayButton.graphics.beginFill(GlobalVariable._ButtonColor, 1);
        this._ReplayButton.graphics.drawRoundRect(x, y, w, h, ew, eh)
        this._ReplayButton.graphics.endFill();
        this.addChild(this._ReplayButton);
        this._ReplayButton.touchEnabled = true;

        this._ReplayButtonText = new egret.TextField();
        this._ReplayButtonText.text = "重玩";
        this._ReplayButtonText.textColor = GlobalVariable._ButtonFontColor;
        this._ReplayButtonText.fontFamily = "楷体";
        this._ReplayButtonText.x = x;
        this._ReplayButtonText.y = y;
        this._ReplayButtonText.width = w;
        this._ReplayButtonText.height = h;
        this._ReplayButtonText.verticalAlign = egret.VerticalAlign.MIDDLE;
        this._ReplayButtonText.textAlign = egret.HorizontalAlign.CENTER;
        this._ReplayButtonText.size = 50;
        this._ReplayButtonText.bold = true;
        this.addChild(this._ReplayButtonText);


        this._ReplayButton.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.ButtonTouchBegin, this);
        this._ReplayButton.addEventListener(egret.TouchEvent.TOUCH_END, this.ButtonClick, this);

    }

    private ButtonTouchBegin(event: egret.TouchEvent) {
        console.log("ButtonTouchBegin...")
        
    }

    private ButtonClick(event: egret.TouchEvent) {
        console.log("ButtonClick...")
        switch(event.target) {
            case this._HomeButton: {
                let param = new PageHandleParameters;
                param._success2startpage = false;
                PageManager.GetInstance().Handle(PageHandleType.SETTLEMENT_TO_START_PAGE, param)
                break;
            }
        }
    }

    private _stageWidth: number;
    private _stageHeight: number;

    private _backGround: egret.Bitmap;

    private _resultText: egret.TextField;

    private _ShareToReviveButton: egret.Shape;
    private _ShareToReviveButtonText: egret.TextField;

    private _ViewAdToReviveButton: egret.Shape;
    private _ViewAdToReviveButtonText: egret.TextField;

    private _HomeButton: egret.Shape;
    private _HomeButtonText: egret.TextField;

    private _ReplayButton: egret.Shape;
    private _ReplayButtonText: egret.TextField;
}