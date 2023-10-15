// export default {
//     mounted() {
//       function clickEffect() {
//         // 您的函数内容
//         function clickEffect() {
//             let balls = [];
//             let longPressed = false;
//             let longPress;
//             let multiplier = 0;
//             let width, height;
//             let origin;
//             let normal;
//             let ctx;
//             const colours = ["#F73859", "#14FFEC", "#00E0FF", "#FF99FE", "#FAF15D"];
//             const canvas = document.createElement("canvas");
//             document.body.appendChild(canvas);
//             canvas.setAttribute("style", "width: 100%; height: 100%; top: 0; left: 0; z-index: 99999; position: fixed; pointer-events: none;");
//             const pointer = document.createElement("span");
//             pointer.classList.add("pointer");
//             document.body.appendChild(pointer);
           
//             if (canvas.getContext && window.addEventListener) {
//               ctx = canvas.getContext("2d");
//               updateSize();
//               window.addEventListener('resize', updateSize, false);
//               loop();
//               window.addEventListener("mousedown", function(e) {
//                 pushBalls(randBetween(10, 20), e.clientX, e.clientY);
//                 document.body.classList.add("is-pressed");
//                 longPress = setTimeout(function(){
//                   document.body.classList.add("is-longpress");
//                   longPressed = true;
//                 }, 500);
//               }, false);
//               window.addEventListener("mouseup", function(e) {
//                 clearInterval(longPress);
//                 if (longPressed == true) {
//                   document.body.classList.remove("is-longpress");
//                   pushBalls(randBetween(50 + Math.ceil(multiplier), 100 + Math.ceil(multiplier)), e.clientX, e.clientY);
//                   longPressed = false;
//                 }
//                 document.body.classList.remove("is-pressed");
//               }, false);
//               window.addEventListener("mousemove", function(e) {
//                 let x = e.clientX;
//                 let y = e.clientY;
//                 pointer.style.top = y + "px";
//                 pointer.style.left = x + "px";
//               }, false);
//             } else {
//               console.log("canvas or addEventListener is unsupported!");
//             }
           
           
//             function updateSize() {
//               canvas.width = window.innerWidth * 2;
//               canvas.height = window.innerHeight * 2;
//               canvas.style.width = window.innerWidth + 'px';
//               canvas.style.height = window.innerHeight + 'px';
//               ctx.scale(2, 2);
//               width = (canvas.width = window.innerWidth);
//               height = (canvas.height = window.innerHeight);
//               origin = {
//                 x: width / 2,
//                 y: height / 2
//               };
//               normal = {
//                 x: width / 2,
//                 y: height / 2
//               };
//             }
//             class Ball {
//               constructor(x = origin.x, y = origin.y) {
//                 this.x = x;
//                 this.y = y;
//                 this.angle = Math.PI * 2 * Math.random();
//                 if (longPressed == true) {
//                   this.multiplier = randBetween(14 + multiplier, 15 + multiplier);
//                 } else {
//                   this.multiplier = randBetween(6, 12);
//                 }
//                 this.vx = (this.multiplier + Math.random() * 0.5) * Math.cos(this.angle);
//                 this.vy = (this.multiplier + Math.random() * 0.5) * Math.sin(this.angle);
//                 this.r = randBetween(8, 12) + 3 * Math.random();
//                 this.color = colours[Math.floor(Math.random() * colours.length)];
//               }
//               update() {
//                 this.x += this.vx - normal.x;
//                 this.y += this.vy - normal.y;
//                 normal.x = -2 / window.innerWidth * Math.sin(this.angle);
//                 normal.y = -2 / window.innerHeight * Math.cos(this.angle);
//                 this.r -= 0.3;
//                 this.vx *= 0.9;
//                 this.vy *= 0.9;
//               }
//             }
           
//             function pushBalls(count = 1, x = origin.x, y = origin.y) {
//               for (let i = 0; i < count; i++) {
//                 balls.push(new Ball(x, y));
//               }
//             }
           
//             function randBetween(min, max) {
//               return Math.floor(Math.random() * max) + min;
//             }
           
//             function loop() {
//               ctx.fillStyle = "rgba(255, 255, 255, 0)";
//               ctx.clearRect(0, 0, canvas.width, canvas.height);
//               for (let i = 0; i < balls.length; i++) {
//                 let b = balls[i];
//                 if (b.r < 0) continue;
//                 ctx.fillStyle = b.color;
//                 ctx.beginPath();
//                 ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2, false);
//                 ctx.fill();
//                 b.update();
//               }
//               if (longPressed == true) {
//                 multiplier += 0.2;
//               } else if (!longPressed && multiplier >= 0) {
//                 multiplier -= 0.4;
//               }
//               removeBall();
//               requestAnimationFrame(loop);
//             }
           
//             function removeBall() {
//               for (let i = 0; i < balls.length; i++) {
//                 let b = balls[i];
//                 if (b.x + b.r < 0 || b.x - b.r > width || b.y + b.r < 0 || b.y - b.r > height || b.r < 0) {
//                   balls.splice(i, 1);
//                 }
//               }
//             }
//           }
//           clickEffect();//调用特效函数
          
//       }
//       clickEffect(); // 调用特效函数
//     },
//   };
  
export default {
    mounted() {
      function clickEffect() {
        const canvas = document.createElement('canvas');
        document.body.appendChild(canvas);
        const ctx = canvas.getContext('2d');
  
        // 设置 canvas 的样式，使其覆盖其他元素
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.zIndex = '1000';
        canvas.style.pointerEvents = 'none'; // 使 canvas 不阻止鼠标事件
  
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
  
        let particlesArray;
        const colors = ['#00bdff', '#4d39ce', '#088eff', '#93278f', '#eaeaea'];
  
        class Particle {
          constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 5 + 1;
            this.speedX = Math.random() * 3 - 1.5;
            this.speedY = Math.random() * 3 - 1.5;
            this.color = colors[Math.floor(Math.random() * colors.length)];
          }
          draw() {
            ctx.fillStyle = this.color;
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
          }
          update() {
            this.x += this.speedX;
            this.y += this.speedY;
  
            if (this.size > 0.2) this.size -= 0.1;
          }
        }
  
        function createParticles(e) {
          const xPos = e.x;
          const yPos = e.y;
  
          for (let i = 0; i < 5; i++) {
            particlesArray.push(new Particle(xPos, yPos));
          }
        }
  
        particlesArray = [];
  
        function animateParticles() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
  
          for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].draw();
            particlesArray[i].update();
  
            if (particlesArray[i].size <= 0.2) {
              particlesArray.splice(i, 1);
              i--;
            }
          }
  
          requestAnimationFrame(animateParticles);
        }
  
        document.addEventListener('click', createParticles);
        animateParticles();
      }
      clickEffect();
    },
  };
  