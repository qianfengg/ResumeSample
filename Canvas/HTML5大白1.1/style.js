d =
    {
        //眼睛间距
        eyeWidth: 150,

        //眼睛大小
        eyeSize: 22,

        //眼睛距离中心位置
        eyeMiddle: -75,

        //眼线粗细
        eyeline: 4.5,

        //眼线位置
        eyelineMiddle: -70,


        //头部宽
        headWidth: 335,

        //头部高
        headHeight: 230,

        //头部位置
        headMiddle: -68,

        //头调整1
        headAdj1: 0.94,

        //头调整2
        headAdj2: 1.028,


        //身体宽
        _bodyWidth: 675,

        //身体高
        _bodyHeight: 460,

        //身体位置
        _bodyMiddle: 178,

        //身体调整
        _bodyAdj: 0.8,


        //手臂宽
        armWidth: 930,

        //手臂高
        armHeight: 390,

        //手臂位置
        armMiddle: 213,

        //手臂调整
        armAdj: 0.84,


        //芯片大小
        chipR: 40,

        //芯片位置X
        chipX: 150,

        //芯片位置Y
        chipY: 180,
    }

//颜色
var headColor1 = ctx.createLinearGradient(0, 0, 0, 230);
headColor1.addColorStop(0.0, light(95));
headColor1.addColorStop(0.3, light(75));
headColor1.addColorStop(1.0, light(75));

var headColor2 = ctx.createRadialGradient(0, -70, 20, 0, -300, 500);
headColor2.addColorStop(0.0, light(98));
headColor2.addColorStop(0.2, light(98));
headColor2.addColorStop(0.3, light(98, 0));
headColor2.addColorStop(1.0, light(98, 0));

var _bodyColor1 = ctx.createLinearGradient(-338, 0, 338, 0);
_bodyColor1.addColorStop(0.0, light(10));
_bodyColor1.addColorStop(0.2, light(80));
_bodyColor1.addColorStop(0.5, light(100));
_bodyColor1.addColorStop(0.8, light(80));
_bodyColor1.addColorStop(1.0, light(10));

var _bodyColor2 = ctx.createRadialGradient(0, -70, 100, 0, -300, 850);
_bodyColor2.addColorStop(0.0, light(100));
_bodyColor2.addColorStop(0.2, light(95, 0.8));
_bodyColor2.addColorStop(1.0, light(80, 0.0));

var _bodyColor3 = ctx.createRadialGradient(0, 350, 280, 0, 350, 480);
_bodyColor3.addColorStop(0.0, light(100, 0.8));
_bodyColor3.addColorStop(1.0, light(90, 0.3));

var armColor = ctx.createRadialGradient(0, -200, 100, 0, 200, 700);
armColor.addColorStop(0.0, light(100));
armColor.addColorStop(0.2, light(95));
armColor.addColorStop(0.3, light(90));
armColor.addColorStop(1.0, light(80));


var chipColor1 = ctx.createRadialGradient(0, 0, 35, 0, 0, 42);
chipColor1.addColorStop(0, light(100));
chipColor1.addColorStop(1, light(50));

var chipColor2 = ctx.createLinearGradient(0, 0, 0, 40);
chipColor2.addColorStop(0.0, light(97, 0.95));
chipColor2.addColorStop(0.2, light(95, 0.90));
chipColor2.addColorStop(0.5, light(94, 0.80));
chipColor2.addColorStop(1.0, light(92, 0.30));







