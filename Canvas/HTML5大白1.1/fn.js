//工具

//获取位置
function getPosition(w, h) {
    var L, T, M, R, B;
    L = -w / 2, T = -h / 2, M = 0, R = w / 2, B = h / 2;
    p =
        {
            LT: {x: L, y: T},
            MT: {x: M, y: T},
            RT: {x: R, y: T},

            LM: {x: L, y: M},
            MM: {x: M, y: M},
            RM: {x: R, y: M},

            LB: {x: L, y: B},
            MB: {x: M, y: B},
            RB: {x: R, y: B},
        }
}


//路径工具
function path(n1, n2) {
    var n1x = p[n1].x;
    var n1y = p[n1].y;
    if (!n2) return ctx.lineTo(n1x, n1y);
    else {
        var n2x = p[n2].x;
        var n2y = p[n2].y;
        return ctx.quadraticCurveTo(n1x, n1y, n2x, n2y);
    }
}

//设置颜色
function light(n1, n2) {
    if (n2 == 0 || n2) return "hsla(210,9%," + n1 + "%," + n2 + ")";
    else return "hsl(210,9%," + n1 + "%)";
}

//设置阴影
function setShadow(json) {
    for (var attr in json) {
        if (attr == "x") ctx.shadowOffsetX = json[attr];
        else if (attr == "y") ctx.shadowOffsetY = json[attr];
        else if (attr == "color") ctx.shadowColor = json[attr];
        else if (attr == "blur") ctx.shadowBlur = json[attr];
    }
}





