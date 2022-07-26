//获取 canvas元素
const canvas = document.querySelector('canvas');

//设置 canvas 画布宽高，为浏览器视口宽高

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//用2d的绘图方式
const ctx = canvas.getContext('2d');

//定义花瓣的数量

const ONE_SUM = 30;


const oneArray = [];


//花瓣的类

class One {
    //构造方法
    constructor() {
        //随机生成花瓣的坐标 x，y
        this.x = Math.random() * canvas.width;
        this.y = (Math.random() * canvas.height * 2) - canvas.height;

        this.width = Math.random() * 15 + 25;
        this.height = Math.random() * 15 + 20;

        this.opacity = this.width / 50;

        this.rotate = Math.random();

        this.xSpeed = Math.random() * 2 + 1;
        this.ySpeed = Math.random() + 1.5;
        this.rotateSpeed = Math.random() * 0.02;


        
    }
        //绘制
        draw(){
            if (this.x > canvas.width || this.y > canvas.height) {
                this.x = oneImg.width;
                this.y = (Math.random() * canvas.height * 2) - canvas.height;
                this.rotate = Math.random();
                this.rotate = Math.random();
                this.xSpeed = Math.random() * 2 + 1;
                this.ySpeed = Math.random() + 1.5;
                this.rotateSpeed = Math.random() * 0.02;

            }

            //设置下整个的canvas透明基数
            ctx.globalAlpha = this.opacity;
            ctx.drawImage(

                oneImg,
                this.x,
                this.y,
                this.width*(0.6+(Math.abs(Math.cos(this.rotate))/3)),
                this.height*(0.6+(Math.abs(Math.cos(this.rotate))/4)),


            )
        }

        animeta(){
            this.x +=this.xSpeed + mouseX * 5;
            this.y += this.ySpeed + mouseX * 2;
            this.rotate += this.rotateSpeed;
            this.draw();
        }

    
    }


function render() {
    // 清除矩形内的内容 - 清空屏幕
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    sakuraArray.forEach(sakura => sakura.animate());
    // 该方法会高速浏览器在重绘之前调用指定的函数
    // 这样可以保证在浏览器的刷新频率下去更新动画；
    window.requestAnimationFrame(render);
}


//加载花瓣图片

const oneImg = new Image();
oneImg.src = './image/hana1.png';

oneImg.addEventListener('load', () => {
    for (let i = 0; i < ONE_SUM; i++) {

        oneArray.push(new oneArray())
    }
    render();
}
);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});


let.mouseX = 0;

function touchHandler(e) {
    // clinetX: 客户端区域的水平坐标 (与页面坐标不同)
    mouseX = (e.clientX || e.touches[0].clientX) / window.innerWidth;
}


window.addEventListener('mousemove',touchHandler);
window.addEventListener('touchmove',touchHandler);


