(function(){"use strict";const n=self;function s(){const t=new OffscreenCanvas(400,400),e=t.getContext("2d");if(!e)throw new Error("Could not create 2d offscreen canvas context");const a=Math.random()*250-125,o=Math.random()*250-125;return e.fillStyle=`lab(50% ${a} ${o})`,e.fillRect(0,0,400,400),t.transferToImageBitmap()}n.addEventListener("message",async()=>{const t=s();n.postMessage(t,[t])})})();
