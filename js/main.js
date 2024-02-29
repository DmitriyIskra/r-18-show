(()=>{"use strict";class t{constructor(t){this.slider=t,this.slides=this.slider.querySelector(".slider-h__slides-list "),this.arrows=[...this.slider.querySelectorAll(".slider__arrow")],this.paginations=this.slider.querySelector(".slider-h__pagination-list"),this.wrLine=this.slider.querySelector(".slider-h__nav-line"),this.videos=[...this.slider.querySelectorAll("video")],this.line=this.wrLine.children[0],this.amountSlides=this.slides.children.length,this.widthLine=null,this.timingFunc="linear",this.duration="0.3",this.lineCounter=0,this.videoCounter=0,this.initSlider=this.initSlider.bind(this)}initSlider(){if(1===this.amountSlides)return;this.slides.style.width=100*this.amountSlides+"%",this.arrows.forEach((t=>t.style="display: block;")),this.arrows[0].parentElement.style="justify-content: space-between;";const t=this.wrLine.offsetWidth;this.widthLine=t/this.amountSlides/innerWidth*100,this.line.style=`width: ${this.widthLine}vw;`,this.line.style.transition=`transform ${this.duration}s ${this.timingFunc}`,this.videos.forEach(((t,i)=>t.play&&i?t.pause():""))}controlMovie(t){if(this.videos[this.videoCounter].play&&(this.videos[this.videoCounter].pause(),this.videos[this.videoCounter].currentTime=0),"next"===t)return this.videoCounter+=1,this.videoCounter===this.videos.length&&(this.videoCounter=0),void(this.videos[this.videoCounter].paused&&this.videos[this.videoCounter].play());this.videoCounter-=1,this.videoCounter<0&&(this.videoCounter=this.videos.length-1),this.videos[this.videoCounter].paused&&this.videos[this.videoCounter].play()}moveNext(){const t=this.slider.offsetWidth;this.slides.style.transition=`transform ${this.duration}s ${this.timingFunc}`,this.slides.style.transform=`translateX(-${t}px)`,this.slides.addEventListener("transitionend",(()=>{this.slides.style.transition="",this.slides.append(this.slides.children[0]),this.slides.style.transform=""}),{once:!0}),this.moveLineNext(),this.controlMovie("next")}movePrev(){const t=this.slider.offsetWidth,i=this.slides.children.length-1;this.slides.prepend(this.slides.children[i]),this.slides.style.transform=`translateX(-${t}px)`,setTimeout((()=>{this.slides.style.transition=`transform ${this.duration}s ${this.timingFunc}`,this.slides.style.transform=""})),this.slides.addEventListener("transitionend",(()=>{this.slides.style.transition=""}),{once:!0}),this.moveLinePrev(),this.controlMovie(null)}clickPag(t){const i=+t.dataset.num;if(i!==this.lineCounter){if(i>this.lineCounter){const t=i-this.lineCounter;for(let i=0;i<t;i+=1)this.moveNext()}if(i<this.lineCounter){const t=this.lineCounter-i;for(let i=0;i<t;i+=1)this.movePrev()}}}moveLineNext(){if(this.lineCounter+=1,this.lineCounter!==this.amountSlides){const t=this.widthLine*this.lineCounter;this.line.style.transform=`translateX(${t}vw)`}if(this.lineCounter===this.amountSlides){const t=this.widthLine*this.lineCounter;this.line.style.transform=`translateX(${t}vw)`;const i=this.createLine();this.wrLine.prepend(i),i.style.transform=`translateX(-${this.widthLine}vw)`,setTimeout((()=>{i.style.transform=""})),i.addEventListener("transitionend",(()=>{this.wrLine.children[1].remove(),i.style.position="",this.line=this.wrLine.children[0],this.lineCounter=0}),{once:!0})}}moveLinePrev(){if(this.lineCounter-=1,this.lineCounter<0){const t=this.widthLine*this.lineCounter;this.line.style.transform=`translateX(${t}vw)`;const i=this.createLine();this.wrLine.append(i);const e=this.widthLine*this.amountSlides;return i.style.transform=`translateX(${e}vw)`,this.lineCounter=this.amountSlides-1,setTimeout((()=>{const t=e-this.widthLine;i.style.transform=`translateX(${t}vw)`})),void i.addEventListener("transitionend",(()=>{this.wrLine.children[0].remove(),i.style.position="",this.line=this.wrLine.children[0]}),{once:!0})}if(this.lineCounter>=0){const t=this.widthLine*this.lineCounter;this.line.style.transform=`translateX(${t}vw)`}}createLine(){const t=document.createElement("div");return t.style.position="absolute",t.style.transition=`transform ${this.duration}s ${this.timingFunc}`,t.style.width=`${this.widthLine}vw`,t.classList.add("slider-h__nav-line-item"),t}}class i{constructor(t){this.d=t,this.slider=t.slider,this.initSlider=t.initSlider,this.click=this.click.bind(this)}init(){this.d.initSlider(),this.d.slider.addEventListener("click",this.click)}click(t){t.target.closest(".slider__arrow-next")&&this.d.moveNext(),t.target.closest(".slider__arrow-prev")&&this.d.movePrev(),t.target.closest(".slider-h__pagination-item")&&this.d.clickPag(t.target.closest(".slider-h__pagination-item"))}}class e{constructor(t){this.d=t,this.click=this.click.bind(this)}init(){this.d.initSlider(),this.registerEvents()}registerEvents(){this.d.arrow.addEventListener("click",this.click)}click(){this.d.move()}}class s{constructor(t,i){this.slider=t,this.data=i,this.description=this.slider.querySelector(".sl-prod__text-about"),this.wrSlides=this.slider.querySelector(".sl-prod__wr-slides"),this.slides=this.slider.querySelector(".sl-prod__slides"),this.arrow=this.slider.querySelector(".slider__arrow"),this.wrBigImg=this.slider.querySelector(".sl-prod__big-img"),this.bigImg=this.slider.querySelector(".sl-prod__big-img img"),this.amountSlides=this.slides.children.length,this.amountShow=3,this.timeFunc="linear",this.duration=.5,this.durationHalf=this.duration/2,this.oldActiveSlide=null,this.activeSlide=null,this.block=!1}initSlider(){this.data.forEach(((t,i)=>{const e=this.createSlide(t.img,t.title,"#",t.title);e.style.transition=`height ${this.duration}s ${this.timeFunc}, width ${this.duration}s ${this.timeFunc}`,0===i&&(e.classList.add("sl-prod__slide_active"),this.bigImg.src=t.img,this.bigImg.alt=t.title),e.id=t.id,this.slides.append(e)})),this.activeSlide=this.slides.children[0],this.arrow.style="\n        position: absolute;\n        right: 2%;\n        top: 50%;\n\n        display: block;\n\n        transform: translate(0, -50%);\n        ",this.setWidthSliderContainer(),this.fillTextInfo(),this.wrBigImg.style.transition=`opacity ${this.durationHalf}s ${this.timeFunc}`,this.description.style.transition=`opacity ${this.durationHalf}s ${this.timeFunc}`}move(){if(this.block)return;this.block=!0;const t=this.activeSlide.cloneNode(!0);t.classList.remove("sl-prod__slide_active"),this.slides.append(t),this.setWidthSliderContainer(),this.slides.style.transition=`transform ${this.duration}s ${this.timeFunc}`,setTimeout((()=>{const t=(this.activeSlide.offsetWidth+this.getGap())/innerWidth*100;this.slides.style.transform=`translateX(-${t}vw)`,this.oldActiveSlide=this.activeSlide,this.activeSlide=this.slides.children[1],this.activeSlide.classList.add("sl-prod__slide_active")})),this.slides.addEventListener("transitionend",(()=>{this.slides.style.transition="",this.oldActiveSlide.remove(),this.slides.style.transform="",this.block=!1}),{once:!0}),this.changeBigImg(),this.changeTextInfo()}changeBigImg(){this.wrBigImg.classList.remove("sl-prod__big-img_visible"),this.wrBigImg.addEventListener("transitionend",(()=>{const t=this.activeSlide.querySelector("img");this.bigImg.src=t.src,this.wrBigImg.classList.add("sl-prod__big-img_visible")}),{once:!0})}changeTextInfo(){this.description.classList.remove("sl-prod__text-about_visible"),this.description.addEventListener("transitionend",(()=>{this.fillTextInfo(),this.description.classList.add("sl-prod__text-about_visible")}),{once:!0})}fillTextInfo(){const t=this.activeSlide.id,i=this.data.find((i=>i.id===t));Object.keys(i).forEach((t=>{const e=this.description.querySelector(`[data-type="${t}"]`);e&&(e.textContent=i[t])}))}createSlide(t,i,e,s){const n=this.createEl("li","sl-prod__slide"),r=this.createEl("div","sl-prod__wr-img-slide"),l=this.createEl("img","sl-prod__img-slide");l.src=t,r.append(l);const a=this.createEl("div","sl-prod__wr-title-slide"),o=this.createEl("h3","sl-prod__title-slide");o.textContent=i,a.append(o);const d=this.createEl("div","sl-prod__wr-button-slide"),c=this.createEl("a","sl-prod__button-slide");c.href=e,c.title=s,c.textContent="Подробнее";const h=this.createEl("div","sl-prod__wr-button-slide-deco");return h.style.transition=`opacity ${this.duration}s ${this.timeFunc}`,d.append(c),d.append(h),n.append(r),n.append(a),n.append(d),n}createEl(t,i){const e=document.createElement(t);return e.classList.add(i),e}setWidthSliderContainer(){let t=[...this.slides.children].reduce(((t,i,e)=>e<this.amountShow?t+=i.offsetWidth/innerWidth*100:t),0);t+=this.getGap()*this.amountShow/innerWidth*100,this.wrSlides.style=`width: ${t.toFixed(3)}vw;`}getGap(){return parseFloat(getComputedStyle(this.slides).gap)}}const n=JSON.parse('[{"id":"columbia1","title":"colombia andino","taste":"описание вкуса 1","aroma":"описание аромата 1","processing":"мытая","height":"1500-1900м 1","sort":"катурра, колумбия, кастильо","q":"84.75","weight":"1 кг","img":"./img/content/pack_content2.png"},{"id":"columbia2","title":"colombia andino2","taste":"описание вкуса 2","aroma":"описание аромата 2","processing":"мытая","height":"1500-1900м 2","sort":"катурра, колумбия, кастильо","q":"84.75","weight":"1 кг","img":"./img/content/pack_content7.png"},{"id":"columbia3","title":"colombia andino3","taste":"описание вкуса 3","aroma":"описание аромата 3","processing":"не мытая","height":"1500-1900м 3","sort":"катурра, колумбия, кастильо","q":"84.75","weight":"1 кг","img":"./img/content/pack_content2.png"},{"id":"columbia4","title":"colombia andino4","taste":"описание вкуса 4","aroma":"описание аромата 4","processing":"мытая","height":"1500-1900м 4","sort":"катурра, колумбия, кастильо","q":"84.75","weight":"1 кг","img":"./img/content/pack_content7.png"},{"id":"columbia5","title":"colombia andino5","taste":"описание вкуса 5","aroma":"описание аромата 5","processing":"мытая","height":"1500-1900м 5","sort":"катурра, колумбия, кастильо","q":"84.75","weight":"1 кг","img":"./img/content/pack_content2.png"}]'),r=JSON.parse('[{"id":"columbia1","title":"colombia andino","taste":"описание вкуса 1","aroma":"описание аромата 1","processing":"мытая","height":"1500-1900м 1","sort":"катурра, колумбия, кастильо","q":"84.75","weight":"1 кг","img":"./img/content/pack_content2.png"},{"id":"columbia2","title":"colombia andino2","taste":"описание вкуса 2","aroma":"описание аромата 2","processing":"мытая","height":"1500-1900м 2","sort":"катурра, колумбия, кастильо","q":"84.75","weight":"1 кг","img":"./img/content/pack_content7.png"},{"id":"columbia3","title":"colombia andino3","taste":"описание вкуса 3","aroma":"описание аромата 3","processing":"не мытая","height":"1500-1900м 3","sort":"катурра, колумбия, кастильо","q":"84.75","weight":"1 кг","img":"./img/content/pack_content2.png"},{"id":"columbia4","title":"colombia andino4","taste":"описание вкуса 4","aroma":"описание аромата 4","processing":"мытая","height":"1500-1900м 4","sort":"катурра, колумбия, кастильо","q":"84.75","weight":"1 кг","img":"./img/content/pack_content7.png"},{"id":"columbia5","title":"colombia andino5","taste":"описание вкуса 5","aroma":"описание аромата 5","processing":"мытая","height":"1500-1900м 5","sort":"катурра, колумбия, кастильо","q":"84.75","weight":"1 кг","img":"./img/content/pack_content2.png"}]');class l{constructor(t){this.d=t,this.click=this.click.bind(this)}init(){this.d.initSlider(),this.registerEvents()}registerEvents(){this.d.el.addEventListener("click",this.click)}click(t){if(t.target.closest(".slider__arrow-next")&&this.d.next(),t.target.closest(".slider__arrow-prev")&&this.d.prev(),t.target.closest(".sl-p__size-item")&&this.d.choosingSize(t.target.closest(".sl-p__size-item")),t.target.closest(".sl-p__card-slider-pag-item")){const i=+t.target.closest(".sl-p__card-slider-pag-item").dataset.num;this.d.mooveCardSlider(i)}if(t.target.closest(".sl-p__card-slider-color-item")){const i=t.target.closest(".sl-p__card-slider-color-list").dataset.article,e=t.target.closest(".sl-p__card-slider-color-item"),s=e.id,n=e.dataset.color;this.d.changeColor(s,n,i)}}}class a{constructor(t,i){this.el=t,this.data=i,this.arrows=this.el.querySelectorAll(".slider__arrow"),this.cardDecoL=this.el.querySelector(".sl-p__slide-item_l"),this.cardDecoR=this.el.querySelector(".sl-p__slide-item_r"),this.itemsList=null,this.items=null,this.cards=null,this.el.querySelectorAll(".sl-p__card"),this.inSideSliders=this.el.querySelectorAll(".sl-p__card-wr-slider"),this.prevCard=null,this.activeCard=null,this.nextCard=null,this.activeCardSlider=null,this.activeCardSlidesList=null,this.activePaginationList=null,this.activeColorPag=null,this.activeSize=null,this.duration=.5,this.timeF="linear"}initSlider(){this.data.forEach(((t,i)=>{const e=this.patternCard(t);switch(e.style.transition=`\n            left ${this.duration}s ${this.timeF},\n            transform ${this.duration}s ${this.timeF},\n            opacity  ${this.duration}s ${this.timeF}`,i){case 0:this.prevCard=e,this.prevCard.classList.add("sl-p__slide-item_prev");break;case 1:this.activeCard=e,this.activeCard.classList.add("sl-p__slide-item_active");break;case 2:this.nextCard=e,this.nextCard.classList.add("sl-p__slide-item_next")}this.cardDecoR.before(e)})),this.itemsList=this.el.querySelector(".sl-p__slides-list"),this.items=this.el.querySelectorAll(".sl-p__slide-item"),this.cards=this.el.querySelectorAll(".sl-p__card"),this.cards.forEach(((t,i)=>{i<3&&this.setTransitionCard(t)})),this.arrows.forEach((t=>{t.style.display="block"})),this.findActiveSize(),this.findActiveCardSlider()}patternCard(t){const i=document.createElement("li");i.classList.add("sl-p__slide-item");const e=document.createElement("div");e.classList.add("sl-p__card");const s=document.createElement("div");s.classList.add("sl-p__card-wr-slider"),s.style=`\n        transition: width ${this.duration}s ${this.timeF},\n            height ${this.duration}s ${this.timeF}\n        `;const n=document.createElement("div");n.classList.add("sl-p__card-wr-slides");const r=document.createElement("ul");r.classList.add("sl-p__card-slides-list"),r.style.transition=`\n            transform ${this.duration}s ${this.timeF},\n            opacity ${this.duration/1.2}s ${this.timeF}\n        `,r.style.width=100*t.black.img.length+"%",t.black.img.forEach((t=>{const i=document.createElement("li");i.classList.add("sl-p__card-slides-item");const e=document.createElement("img");e.classList.add("sl-p__card-slides-img"),e.src=t,i.append(e),r.append(i)}));const l=document.createElement("ul");l.classList.add("sl-p__card-slider-pag-list");for(let i=0;i<t.black.img.length;i+=1){const t=document.createElement("li");t.classList.add("sl-p__card-slider-pag-item"),t.dataset.num=i,0===i&&t.classList.add("sl-p__card-slider-pag-item_active"),l.append(t)}document.createElement("li").classList.add("sl-p__card-slider-pag-item");const a=document.createElement("ul");a.dataset.article=t.article,a.classList.add("sl-p__card-slider-color-list"),t.colors.forEach(((t,i)=>{const e=document.createElement("li");e.classList.add("sl-p__card-slider-color-item"),e.id=`color${i}`,e.dataset.color=t.name,0===i&&e.classList.add("sl-p__card-slider-color-item_active"),e.style.borderColor=`${t.value}`;const s=document.createElement("div");s.classList.add("sl-p__card-slider-color-circle"),s.style=`background: ${t.value};`,e.append(s),a.append(e)})),n.append(r),s.append(n),s.append(l),s.append(a);const o=document.createElement("div");o.classList.add("sl-p__card-title"),o.textContent=t.title;const d=document.createElement("div");d.classList.add("sl-p__card-wr-content");const c=document.createElement("div");c.classList.add("sl-p__card-content");const h=document.createElement("ul");h.classList.add("sl-p__size-list"),t.black.sizes.forEach(((t,i)=>{const e=document.createElement("li");e.classList.add("sl-p__size-item"),0===i&&e.classList.add("sl-p__size-item_active");const s=document.createElement("div");s.classList.add("sl-p__size-item-num"),s.textContent=t,e.append(s),h.append(e)}));const m=document.createElement("p");m.textContent=t.composition;const p=document.createElement("div");p.classList.add("sl-p__card-wr-link");const _=document.createElement("a");_.classList.add("sl-p__card-link"),_.textContent="Подробнее",_.href=t.link,_.alt=t.title,_.target="_blank",p.append(_),c.append(h),c.append(m),c.append(p),d.append(c);const v=document.createElement("div");return v.classList.add("sl-p__card-mask"),e.append(s),e.append(v),e.append(o),e.append(d),i.append(e),i}next(){const t=this.nextCard.nextElementSibling;t.classList.add("sl-p__slide-item_next-r"),setTimeout((()=>{this.setTransitionCard(t.firstElementChild),t.classList.remove("sl-p__slide-item_next-r"),t.classList.add("sl-p__slide-item_next")})),this.nextCard.classList.remove("sl-p__slide-item_next"),this.nextCard.classList.add("sl-p__slide-item_active"),this.activeCard.classList.remove("sl-p__slide-item_active"),this.activeCard.classList.add("sl-p__slide-item_prev"),this.prevCard.classList.remove("sl-p__slide-item_prev"),this.prevCard.classList.add("sl-p__slide-item_prev-l"),this.mooveCardSlider(0),t.addEventListener("transitionend",(()=>{this.prevCard.classList.remove("sl-p__slide-item_prev-l"),this.prevCard.firstElementChild.style.transition="",this.cardDecoR.before(this.prevCard),this.prevCard=this.activeCard,this.activeCard=this.nextCard,this.nextCard=t,this.findActiveSize(),this.findActiveCardSlider()}),{once:!0})}prev(){const t=this.cardDecoR.previousElementSibling;this.cardDecoL.after(t),t.classList.add("sl-p__slide-item_prev-l"),setTimeout((()=>{this.setTransitionCard(t.firstElementChild),t.classList.remove("sl-p__slide-item_prev-l"),t.classList.add("sl-p__slide-item_prev")})),this.prevCard.classList.remove("sl-p__slide-item_prev"),this.prevCard.classList.add("sl-p__slide-item_active"),this.activeCard.classList.remove("sl-p__slide-item_active"),this.activeCard.classList.add("sl-p__slide-item_next"),this.nextCard.classList.remove("sl-p__slide-item_next"),this.nextCard.classList.add("sl-p__slide-item_next-r"),this.mooveCardSlider(0),t.addEventListener("transitionend",(()=>{this.nextCard.classList.remove("sl-p__slide-item_next-r"),this.nextCard.firstElementChild.style.transition="",this.nextCard=this.activeCard,this.activeCard=this.prevCard,this.prevCard=t,this.findActiveSize(),this.findActiveCardSlider(),console.log()}),{once:!0})}mooveCardSlider(t){const i=this.activeCardSlidesList.children[0].offsetWidth;this.activeCardSlidesList.style.transform=`\n            translateX(-${i/innerWidth*100*t}vw)\n        `,this.activePaginationList.querySelector(".sl-p__card-slider-pag-item_active").classList.remove("sl-p__card-slider-pag-item_active"),this.activePaginationList.querySelector(`[data-num="${t}"]`).classList.add("sl-p__card-slider-pag-item_active")}changeColor(t,i,e){this.activeColorPag.querySelector(".sl-p__card-slider-color-item_active").classList.remove("sl-p__card-slider-color-item_active"),this.activeColorPag.querySelector(`#${t}`).classList.add("sl-p__card-slider-color-item_active");const s=this.activeCardSlidesList.querySelectorAll("img"),n=this.data.find((t=>t.article===e));this.activeCardSlidesList.style.opacity="0",this.activeCardSlidesList.style.transition=`\n            opacity ${this.duration/1.2}s ${this.timeF}\n        `,this.activeCardSlidesList.addEventListener("transitionend",(()=>{this.mooveCardSlider(0),this.activeCardSlidesList.style.opacity="1",[...s].forEach(((t,e)=>{t.src=`${n[i].img[e]}`})),setTimeout((()=>{this.activeCardSlidesList.style.transition=`\n                transform ${this.duration}s ${this.timeF},\n                opacity ${this.duration/1.2}s ${this.timeF}\n            `}))}),{once:!0})}choosingSize(t){this.activeSize.classList.remove("sl-p__size-item_active"),this.activeSize=t,this.activeSize.classList.add("sl-p__size-item_active")}setTransitionCard(t){t.style.transition=`\n        transform ${this.duration}s ${this.timeF},\n        height ${this.duration}s ${this.timeF},\n        width ${this.duration}s ${this.timeF},\n        box-shadow ${this.duration}s ${this.timeF}`}findActiveSize(){this.activeSize=this.el.querySelector(".sl-p__slide-item_active .sl-p__size-item_active")}findActiveCardSlider(){this.activeCardSlider=this.activeCard.querySelector(".sl-p__card-wr-slider"),this.activeCardSlidesList=this.activeCardSlider.querySelector(".sl-p__card-slides-list"),this.activePaginationList=this.activeCardSlider.querySelector(".sl-p__card-slider-pag-list"),this.activeColorPag=this.activeCardSlider.querySelector(".sl-p__card-slider-color-list")}}const o=JSON.parse('[{"article":"0","title":"футболка R18","colors":[{"name":"black","value":"#3F3937"},{"name":"white","value":"#ffffff"}],"white":{"img":["./img/content/t-shirt-white-1-front_content.png","./img/content/t-shirt-white-1-rear_content.png"],"sizes":["42","44","46","48"]},"black":{"img":["./img/content/t-shirt-black-1-front_content.png","./img/content/t-shirt-black-1-rear_content.png"],"sizes":["42","44","46","48"]},"composition":"Хлопок 92%, лайкра 8%","link":"#"},{"article":"1","title":"футболка R18","colors":[{"name":"black","value":"#3F3937"},{"name":"white","value":"#ffffff"}],"white":{"img":["./img/content/t-shirt-white-2-front_content.png","./img/content/t-shirt-white-2-rear_content.png"],"sizes":["42","44","46","48","50","52","54"]},"black":{"img":["./img/content/t-shirt-black-2-front_content.png","./img/content/t-shirt-black-2-rear_content.png"],"sizes":["42","44","46","48","50","52","54"]},"composition":"Хлопок 92%, лайкра 8%","link":"#"},{"article":"2","title":"футболка R18","colors":[{"name":"black","value":"#3F3937"},{"name":"white","value":"#ffffff"}],"white":{"img":["./img/content/t-shirt-white-3-front_content.png","./img/content/t-shirt-white-3-rear_content.png"],"sizes":["42","44","46","48","50","52","54"]},"black":{"img":["./img/content/t-shirt-black-3-front_content.png","./img/content/t-shirt-black-3-rear_content.png"],"sizes":["42","44","46","48","50","52","54"]},"composition":"Хлопок 92%, лайкра 8%","link":"#"},{"article":"3","title":"футболка R18","colors":[{"name":"black","value":"#3F3937"},{"name":"white","value":"#ffffff"}],"white":{"img":["./img/content/t-shirt-white-4-front_content.png","./img/content/t-shirt-white-4-rear_content.png"],"sizes":["42","44","46","48"]},"black":{"img":["./img/content/t-shirt-black-4-front_content.png","./img/content/t-shirt-black-4-rear_content.png"],"sizes":["42","44","46","48"]},"composition":"Хлопок 92%, лайкра 8%","link":"#"},{"article":"4","title":"Худи R18","colors":[{"name":"black","value":"#3F3937"}],"black":{"img":["./img/content/hoodies-black-1-front_content.png","./img/content/hoodies-black-1-rear_content.png"],"sizes":["42","44","46","48"]},"composition":"Хлопок 90%, лайкра 10%.","link":"#"},{"article":"5","title":"Худи R18","colors":[{"name":"black","value":"#3F3937"}],"black":{"img":["./img/content/hoodies-black-2-front_content.png","./img/content/hoodies-black-2-rear_content.png"],"sizes":["42","44","46","48"]},"composition":"Хлопок 90%, лайкра 10%.","link":"#"}]');document.addEventListener("DOMContentLoaded",(d=>{const c=document.querySelector(".slider-h");if(c){const e=new t(c);new i(e).init()}const h=document.querySelector(".coffee__wr-slider-top");if(h){const t=new s(h,n);new e(t).init()}const m=document.querySelector(".coffee__wr-slider-bottom");if(m){const t=new s(m,r);new e(t).init()}const p=document.querySelector(".merch__wr-slider .sl-p");if(p){const t=new a(p,o);new l(t).init()}}))})();
//# sourceMappingURL=main.js.map