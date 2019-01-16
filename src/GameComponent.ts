
// 游戏组件
// author: baldwin
// date: 20180602

class GameComponent extends egret.Sprite {
    public constructor(x: number, y: number, stageWidth: number, stageHeight: number, level: GameLevel) {
        super();

        this._gameLevel = level;
        if (this._gameLevel == GameLevel.THREE) {
            this._box_num = 3;
            this._textArr = [
                [8, 5, 4, 6, 1, 3, 2, 7],
                [7, 3, 8, 1, 4, 2, 5, 6],
                [3, 5, 6, 2, 8, 1, 4, 7],
                [6, 4, 3, 5, 2, 1, 8, 7],
                [3, 1, 4, 2, 7, 5, 8, 6],
                [8, 5, 6, 4, 7, 2, 1, 3],
                [3, 2, 5, 1, 8, 6, 7, 4],
                [6, 2, 7, 8, 4, 5, 1, 3],
                [3, 1, 7, 4, 8, 5, 6, 2],
                [5, 7, 1, 8, 2, 4, 3, 6],
            ]
        } else if (this._gameLevel == GameLevel.FOUR) {
            this._box_num = 4;
            this._textArr = [
                [2, 10, 1, 8, 13, 5, 12, 7, 9, 6, 14, 4, 15, 3, 11],
                [15, 9, 12, 11, 7, 13, 1, 14, 8, 4, 2, 3, 6, 5, 10],
                [4, 6, 7, 12, 14, 15, 10, 9, 3, 13, 1, 5, 11, 2, 8],
                [1, 5, 10, 15, 8, 7, 13, 12, 6, 2, 4, 11, 3, 14, 9],
                [14, 2, 7, 3, 10, 9, 15, 12, 1, 4, 5, 11, 8, 6, 13],
                [10, 13, 8, 9, 5, 12, 3, 4, 7, 14, 6, 11, 1, 2, 15],
                [15, 9, 13, 4, 7, 11, 5, 2, 1, 8, 12, 10, 14, 6, 3],
                [15, 6, 8, 3, 4, 12, 5, 9, 13, 10, 7, 11, 2, 1, 14],
                [7, 1, 13, 5, 6, 9, 8, 3, 15, 11, 4, 10, 2, 14, 12],
                [2, 10, 1, 6, 5, 14, 13, 9, 15, 3, 7, 8, 12, 11, 4],
            ]
        } else if (this._gameLevel == GameLevel.FIVE) {
            this._box_num = 5;
            this._textArr = [
                [19, 10, 24, 9, 4, 12, 13, 1, 6, 3, 15, 2, 23, 11, 17, 5, 7, 18, 16, 22, 20, 21, 14, 8],
                [4, 12, 10, 21, 22, 3, 24, 16, 18, 6, 5, 20, 2, 7, 23, 15, 19, 8, 14, 17, 13, 1, 11, 9],
                [11, 6, 2, 18, 12, 15, 7, 9, 23, 17, 4, 13, 14, 21, 10, 22, 19, 5, 24, 3, 20, 1, 16, 8],
                [13, 17, 9, 1, 3, 23, 2, 4, 7, 5, 16, 6, 11, 8, 19, 12, 18, 24, 21, 20, 14, 22, 15, 10],
                [13, 5, 11, 21, 17, 19, 3, 24, 18, 22, 6, 20, 12, 2, 4, 8, 15, 7, 14, 1, 23, 26, 10, 9],
                [16, 1, 2, 19, 18, 3, 5, 12, 8, 15, 17, 7, 24, 20, 11, 10, 22, 6, 9, 23, 21, 13, 4, 14],
                [18, 11, 6, 4, 10, 5, 15, 23, 8, 7, 3, 21, 14, 2, 22, 19, 1, 12, 17, 24, 20, 13, 9, 16],
                [12, 8, 19, 5, 1, 23, 13, 7, 16, 20, 22, 21, 6, 24, 10, 4, 3, 9, 11, 17, 15, 14, 2, 18],
                [24, 23, 22, 8, 20, 18, 3, 4, 7, 19, 12, 14, 17, 21, 15, 10, 11, 5, 16, 9, 1, 2, 13, 6],
                [7, 16, 6, 22, 17, 19, 24, 4, 18, 3, 11, 12, 2, 8, 20, 14, 23, 1, 10, 5, 9, 21, 13, 15],
            ]
        }
        this._stageWidth = stageWidth;
        this._stageHeight = stageHeight;

        this.x = x;
        this.y = y;
        this.width = this._stageWidth * 0.94;
        this.height = this._stageWidth * 0.94;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddedToStage, this);

    }

    private onAddedToStage(event: egret.Event): void {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddedToStage, this);

        this.Init();
    }

    private Init(): void {
        this._backGround = Functions.createBitmapByName("gameback_jpg");
        this._backGround.width = this._stageWidth * 0.94;
        this._backGround.height = this._stageWidth * 0.94;
        this._backGround.x = 0;
        this._backGround.y = 0;
        this.addChild(this._backGround);

        let totalW = this._backGround.width;
        let totalH = this._backGround.height;

        this._boxWidth = totalW / (0.1 + 1.1 * this._box_num);
        this._boxSpace = this._boxWidth / 10;
        let x = this._boxSpace;
        let y = this._boxSpace;
        let arrIndex = 0;
        // 生成0到9的随机数
        let ran = Math.floor(Math.random() * 10);
        console.log("ran: ", ran)
        let arr = this._textArr[ran]

        // 初始化数字方块
        let index = 1;
        this._grid_array = new Array<Array<Box>>(this._box_num);
        for (var row = 0; row < this._box_num; row++) {
            let x1 = x
            this._grid_array[row] = new Array<Box>(this._box_num);
            for (var column = 0; column < this._box_num; column++) {
                if (row == this._box_num - 1 && column == this._box_num - 1) {
                    this._grid_array[row][column] = new Box(true, this._gameLevel, x1, y, this._boxWidth, this._boxWidth, this._box_num * this._box_num)
                    this._emptyBox = this._grid_array[row][column];
                } else {
                    this._grid_array[row][column] = new Box(false, this._gameLevel, x1, y, this._boxWidth, this._boxWidth, arr[arrIndex]);
                    this.addChild(this._grid_array[row][column])
                    this._grid_array[row][column].touchEnabled = true;
                    this._grid_array[row][column].addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.ButtonTouchBegin, this);
                }
                this._grid_array[row][column]._Index = index;
                arrIndex++;
                x1 = x1 + this._boxWidth + this._boxSpace;
                index++;
            }
            y = y + this._boxWidth + this._boxSpace;
        }


    }

    private ButtonTouchBegin(event: egret.TouchEvent) {
        console.log("ButtonTouchBegin event.target: ", event.target)
        if (event.target instanceof Box) {
            let theBox = event.target;
            if ((theBox.x == this._emptyBox.x && (Math.abs(theBox.y - this._emptyBox.y) <= this._boxWidth + this._boxSpace + 0.1 && Math.abs(theBox.y - this._emptyBox.y) >= this._boxWidth + this._boxSpace - 0.1)) ||
                (theBox.y == this._emptyBox.y && (Math.abs(theBox.x - this._emptyBox.x) <= this._boxWidth + this._boxSpace + 0.1 && Math.abs(theBox.x - this._emptyBox.x) >= this._boxWidth + this._boxSpace - 0.1))) {

                let tempIndex = theBox._Index;
                let tempx = theBox.x;
                let tempy = theBox.y;
                let tw = egret.Tween.get(theBox);
                tw.to({ y: this._emptyBox.y, x: this._emptyBox.x }, 200);
                theBox.x = this._emptyBox.x;
                theBox.y = this._emptyBox.y;
                theBox._Index = this._emptyBox._Index;

                this._emptyBox.x = tempx;
                this._emptyBox.y = tempy;
                this._emptyBox._Index = tempIndex;
            }
            // 每移动一下，判断是否成功
            this.JudgeSuccess();
        }
    }

    private JudgeSuccess() {
        let sucess = true;
        if (this._emptyBox._Index == this._box_num * this._box_num) {
            for (var row = 0; row < this._box_num; row++) {
                for (var column = 0; column < this._box_num; column++) {
                    if (this._grid_array[row][column]._text != this._grid_array[row][column]._Index) {
                        sucess = false;
                        break;
                    }
                }
            }
        } else {
            sucess = false;
        }

        if (sucess) {
            console.log("sucess!")
            platform.showSuccessToast();
            let param = new PageHandleParameters;
            param.stageWidth = this._stageWidth;
            param.stageHeight = this._stageHeight;
            param._useTime = 40;
            PageManager.GetInstance().Handle(PageHandleType.MAIN_SECENE_TO_SUCCESS_SETTLEMENT, param)
            // test
            //PageManager.GetInstance().Handle(PageHandleType.MAIN_SECENE_TO_FAIL_SETTLEMENT, param)
        }
    }



    private _gameLevel: GameLevel;
    private _stageWidth: number;
    private _stageHeight: number;
    private _backGround: egret.Bitmap;
    private _grid_array: Array<Array<Box>>;
    private _box_num: number = 3;
    private _textArr: Array<Array<number>>;
    private _emptyBox: Box;
    private _boxSpace: number;
    private _boxWidth: number;
}