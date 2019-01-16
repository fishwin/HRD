
// 游戏主场景
// author: Baldwin
// date: 20180601

class MainScene extends egret.Sprite {
    public constructor(stageWidth: number, stageHeight: number, level: GameLevel, totalTime: number) {
        super();

        this._stageWidth = stageWidth;
        this._stageHeight = stageHeight;
        this.width = this._stageWidth;
        this.height = this._stageHeight;
        this._level = level;
        this._totalTime = totalTime;
        this._remainTime = totalTime;
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

        let x1 = this._stageWidth / 7;
        let y1 = this._stageHeight / 10;

        this._totalTimeText = new egret.TextField();
        this._totalTimeText.text = "总用时";
        this._totalTimeText.textColor = GlobalVariable._GeneralFontColor;
        this._totalTimeText.fontFamily = "微软雅黑";
        this._totalTimeText.x = x1;
        this._totalTimeText.y = y1;
        this._totalTimeText.size = 50;
        this._totalTimeText.bold = true;
        this._totalTimeText.strokeColor = 0xEEEE00;
        this._totalTimeText.stroke = 2;
        this.addChild(this._totalTimeText);

        this._totalTimeT = new egret.TextField();
        this._totalTimeT.text = this._usedTime.toString();
        this._totalTimeT.textColor = GlobalVariable._GeneralFontColor;
        this._totalTimeT.fontFamily = "微软雅黑";
        this._totalTimeT.x = this._totalTimeText.x + this._stageWidth / 10;
        this._totalTimeT.y = this._totalTimeText.y + this._stageHeight / 20;
        this._totalTimeT.size = 40;
        this._totalTimeT.bold = true;
        this._totalTimeT.strokeColor = 0xEEEE00;
        this._totalTimeT.stroke = 2;
        this.addChild(this._totalTimeT);

        this._ReaminTimeText = new egret.TextField();
        this._ReaminTimeText.text = "剩余时间";
        this._ReaminTimeText.textColor = GlobalVariable._GeneralFontColor;
        this._ReaminTimeText.fontFamily = "微软雅黑";
        this._ReaminTimeText.x = this._totalTimeText.x + this._stageWidth / 3;
        this._ReaminTimeText.y = this._totalTimeText.y;
        this._ReaminTimeText.size = 50;
        this._ReaminTimeText.bold = true;
        this._ReaminTimeText.strokeColor = 0xEEEE00;
        this._ReaminTimeText.stroke = 2;
        this.addChild(this._ReaminTimeText);

        this._RemainTimeT = new egret.TextField();
        this._RemainTimeT.text = this._remainTime.toString();
        this._RemainTimeT.textColor = GlobalVariable._GeneralFontColor;
        this._RemainTimeT.fontFamily = "微软雅黑";
        this._RemainTimeT.x = this._ReaminTimeText.x + this._stageWidth / 10;
        this._RemainTimeT.y = this._ReaminTimeText.y + this._stageHeight / 20;
        this._RemainTimeT.size = 40;
        this._RemainTimeT.bold = true;
        this._RemainTimeT.strokeColor = 0xEEEE00;
        this._RemainTimeT.stroke = 2;
        this.addChild(this._RemainTimeT);

        this._gameCom = new GameComponent(0.03 * this._stageWidth, this._RemainTimeT.y + this._stageHeight / 15, this._stageWidth, this._stageHeight, this._level);
        this.addChild(this._gameCom)

        let x2 = this._stageWidth / 10;
        let y2 = this._RemainTimeT.y + this._stageHeight / 15 + this._stageWidth * 0.9375 + this._stageHeight / 20;
        let w2 = this._stageWidth / 4;
        let h2 = this._stageHeight / 10;
        let ew2 = 50;
        let eh2 = 50;

        this._HomeButton = new egret.Shape();
        this._HomeButton.graphics.beginFill(GlobalVariable._ButtonColor, 1);
        this._HomeButton.graphics.drawRoundRect(x2, y2, w2, h2, ew2, eh2)
        this._HomeButton.graphics.endFill();
        this.addChild(this._HomeButton);
        this._HomeButton.touchEnabled = true;

        this._HomeButtonText = new egret.TextField();
        this._HomeButtonText.text = "主界面";
        this._HomeButtonText.textColor = GlobalVariable._ButtonFontColor;
        this._HomeButtonText.fontFamily = "楷体";
        this._HomeButtonText.x = x2 + w2 / 7;
        this._HomeButtonText.y = y2 + h2 / 3;
        this._HomeButtonText.size = 40;
        this._HomeButtonText.bold = true;
        this.addChild(this._HomeButtonText);

        this._levelNameText = new egret.TextField();
        this._levelNameText.width = w2;
        this._levelNameText.x = x2 + w2;
        this._levelNameText.y = y2 + h2 / 4;
        this._levelNameText.textColor = GlobalVariable._GeneralFontColor;
        if (this._level == GameLevel.THREE) {
            this._levelNameText.text = "3 X 3";
        } else if (this._level == GameLevel.FOUR) {
            this._levelNameText.text = "4 X 4";
        } else if (this._level == GameLevel.FIVE) {
            this._levelNameText.text = "5 X 5";
        } else {
            console.error("level is error", this._level)
        }

        this._levelNameText.size = 50;
        this._levelNameText.bold = true;
        this._levelNameText.italic = true;
        this._levelNameText.fontFamily = "微软雅黑";
        this._levelNameText.textAlign = egret.HorizontalAlign.CENTER;
        this._levelNameText.strokeColor = 0xEEEE00;
        this._levelNameText.stroke = 2;
        this.addChild(this._levelNameText);


        this._ReplayButton = new egret.Shape();
        this._ReplayButton.graphics.beginFill(GlobalVariable._ButtonColor, 1);
        this._ReplayButton.graphics.drawRoundRect(x2 + this._stageWidth / 2, y2, w2, h2, ew2, eh2)
        this._ReplayButton.graphics.endFill();
        this.addChild(this._ReplayButton);
        this._ReplayButton.touchEnabled = true;

        this._ReplayButtonText = new egret.TextField();
        this._ReplayButtonText.text = "重玩";
        this._ReplayButtonText.textColor = GlobalVariable._ButtonFontColor;
        this._ReplayButtonText.fontFamily = "楷体";
        this._ReplayButtonText.x = x2 + this._stageWidth / 2 + w2 / 4;
        this._ReplayButtonText.y = y2 + h2 / 3;
        this._ReplayButtonText.size = 40;
        this._ReplayButtonText.bold = true;
        this.addChild(this._ReplayButtonText);

        //this._HomeButton.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.ButtonTouchBegin, this);
        //this._ReplayButton.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.ButtonTouchBegin, this);

        this._HomeButton.addEventListener(egret.TouchEvent.TOUCH_END, this.ButtonClick, this);
        this._ReplayButton.addEventListener(egret.TouchEvent.TOUCH_END, this.ButtonClick, this);
    }

    private ButtonTouchBegin(event: egret.TouchEvent) {
        let x2 = this._stageWidth / 10;
        let y2 = this._RemainTimeT.y + this._stageHeight / 15 + this._stageHeight * 0.9375 + this._stageHeight / 20;
        let w2 = this._stageWidth / 4;
        let h2 = this._stageHeight / 10;
        let ew2 = 50;
        let eh2 = 50;

        switch (event.target) {
            case this._HomeButton: {
                this._HomeButton.graphics.clear()
                this._HomeButton.graphics.beginFill(GlobalVariable._ButtonColor, 0.5);
                this._HomeButton.graphics.drawRoundRect(x2, y2, w2, h2, ew2, eh2)
                this._HomeButton.graphics.endFill();
                console.log("_HomeButton ButtonTouchBegin")
                break;
            }
            case this._ReplayButton: {
                this._ReplayButton.graphics.clear();
                this._ReplayButton.graphics.beginFill(GlobalVariable._ButtonColor, 0.5);
                this._ReplayButton.graphics.drawRoundRect(x2 + this._stageWidth / 2, y2, w2, h2, ew2, eh2)
                this._ReplayButton.graphics.endFill();
                console.log("_ReplayButton ButtonTouchBegin")
                break;
            }
        }
    }

    private ButtonClick(event: egret.TouchEvent) {
        let x2 = this._stageWidth / 10;
        let y2 = this._RemainTimeT.y + this._stageHeight / 15 + this._stageHeight * 0.9375 + this._stageHeight / 20;
        let w2 = this._stageWidth / 4;
        let h2 = this._stageHeight / 10;
        let ew2 = 50;
        let eh2 = 50;

        console.log("ButtonClick click")

        switch (event.target) {
            case this._HomeButton: {
                this._HomeButton.graphics.clear()
                this._HomeButton.graphics.beginFill(GlobalVariable._ButtonColor, 1);
                this._HomeButton.graphics.drawRoundRect(x2, y2, w2, h2, ew2, eh2)
                this._HomeButton.graphics.endFill();

                console.log("_HomeButton click")

                PageManager.GetInstance().Handle(PageHandleType.MAIN_SECENE_TO_START_PAGE, null)
                break;
            }
            case this._ReplayButton: {
                // this._ReplayButton.graphics.clear();
                // this._ReplayButton.graphics.beginFill(GlobalVariable._ButtonColor, 1);
                // this._ReplayButton.graphics.drawRoundRect(x2 + this._stateWidth / 2, y2, w2, h2, ew2, eh2)
                // this._ReplayButton.graphics.endFill();

                console.log("_ReplayButton click")
                break;
            }
        }
    }

    private _stageWidth: number;
    private _stageHeight: number;
    private _backGround: egret.Bitmap;

    private _totalTimeText: egret.TextField;
    private _totalTimeT: egret.TextField;

    private _ReaminTimeText: egret.TextField;
    private _RemainTimeT: egret.TextField;

    private _gameCom: GameComponent;

    private _HomeButton: egret.Shape;
    private _HomeButtonText: egret.TextField;

    private _ReplayButton: egret.Shape;
    private _ReplayButtonText: egret.TextField;

    private _levelNameText: egret.TextField;
    private _level: GameLevel;
    private _totalTime: number;
    private _usedTime: number = 0;
    private _remainTime: number;
}