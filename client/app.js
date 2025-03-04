const app = new PIXI.Application();
await app.init({  
    width: window.innerWidth, 
    height: window.innerHeight, 
    autoResize: true  
})
document.body.appendChild(app.canvas);


await PIXI.Assets.load('penguin.png');
let sprite = PIXI.Sprite.from('penguin.png');
app.stage.addChild(sprite);

sprite.scale.set(0.15)

let elapsed = 0.0;
let targetX = sprite.x; 
let targetY = sprite.y;

app.view.addEventListener('click', (event) => {
    const mouseX = event.offsetX;
    const mouseY = event.offsetY;

    targetX = mouseX - sprite.width / 2;  
    targetY = mouseY - sprite.height / 2;
});

app.ticker.add((ticker) => {
    elapsed += ticker.deltaTime;

    sprite.x += (targetX - sprite.x) * 0.05;  
    sprite.y += (targetY - sprite.y) * 0.05;  
});