(()=>{"use strict";class t{constructor(t){this.d=t,this.click=this.click.bind(this)}init(){this.registerEvents(),this.d.initNav()}registerEvents(){this.d.el.addEventListener("click",this.click)}click(t){if(t.preventDefault(),t.target.closest(".nav__item")){const i=t.target.closest(".nav__item").dataset.item;this.d.scrolling(i)}}}class i{constructor(t){this.el=t,this.itemsNav=[...this.el.querySelectorAll(".nav__item")],this.itemsPoints=[]}initNav(){this.itemsNav.forEach((t=>{const i=t.dataset.item,e=document.querySelector(`.${i}`);this.itemsPoints.push(e)}))}scrolling(t){this.itemsPoints.find((i=>i.matches(`.${t}`))).scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}}class e{constructor(t){this.slider=t,this.slides=this.slider.querySelector(".slider-h__slides-list "),this.arrows=[...this.slider.querySelectorAll(".slider__arrow")],this.paginations=this.slider.querySelector(".slider-h__pagination-list"),this.wrLine=this.slider.querySelector(".slider-h__nav-line"),this.videos=[...this.slider.querySelectorAll("video")],this.line=this.wrLine.children[0],this.amountSlides=this.slides.children.length,this.widthLine=null,this.timingFunc="ease-out",this.duration="0.5",this.lineCounter=0,this.videoCounter=0,this.activeVideo=this.videos[0],this.touchStart=null,this.touchEnd=null,this.stoped=null,this.initSlider=this.initSlider.bind(this)}initSlider(){if(1===this.amountSlides)return;this.slides.style.width=100*this.amountSlides+"%",innerWidth>961&&(this.arrows.forEach((t=>t.style="display: block;")),this.arrows[0].parentElement.style="justify-content: space-between;"),innerWidth<=961&&this.arrows.forEach((t=>t.style="\n                display: block;\n                visibility: hidden;\n            "));const t=this.wrLine.offsetWidth;this.widthLine=t/this.amountSlides/innerWidth*100,this.line.style=`width: ${this.widthLine}vw;`,this.line.style.transition=`transform ${this.duration}s ${this.timingFunc}`,this.videos.forEach(((t,i)=>t.play&&i?t.pause():"")),this.addListenerMovie()}addListenerMovie(){this.videos.forEach((t=>{t.addEventListener("ended",(()=>{this.moveNext()}),!1)}))}controllMovie(t){if(this.videos[this.videoCounter].play&&(this.videos[this.videoCounter].pause(),this.videos[this.videoCounter].currentTime=0),"next"===t)return this.videoCounter+=1,this.videoCounter===this.videos.length&&(this.videoCounter=0),void(this.videos[this.videoCounter].paused&&this.videos[this.videoCounter].play());this.videoCounter-=1,this.videoCounter<0&&(this.videoCounter=this.videos.length-1),this.videos[this.videoCounter].paused&&this.videos[this.videoCounter].play()}changeVideoWithSwipe(){this.touchStart>this.touchEnd?this.arrows[1].click():this.touchStart<this.touchEnd&&this.arrows[0].click()}moveNext(){if(this.stoped)return;this.stoped=!0;const t=this.slider.offsetWidth;this.slides.style.transform=`translateX(-${t}px)`,this.slides.append(this.slides.children[0]),this.slides.style.transform="",this.moveLineNext(),this.controllMovie("next")}movePrev(){if(this.stoped)return;this.stoped=!0;const t=this.slider.offsetWidth,i=this.slides.children.length-1;this.slides.prepend(this.slides.children[i]),this.slides.style.transform=`translateX(-${t}px)`,setTimeout((()=>{this.slides.style.transform=""})),this.moveLinePrev(),this.controllMovie(null)}clickPag(t){if(this.stoped)return;const i=+t.dataset.num;if(i!==this.lineCounter){if(i>this.lineCounter){const t=i-this.lineCounter;for(let i=0;i<t;i+=1)this.stoped=!1,this.moveNext()}if(i<this.lineCounter){const t=this.lineCounter-i;for(let i=0;i<t;i+=1)this.stoped=!1,this.movePrev()}}}moveLineNext(){if(this.lineCounter+=1,this.unBlockClick(),this.lineCounter!==this.amountSlides){const t=this.widthLine*this.lineCounter;this.line.style.transform=`translateX(${t}vw)`}if(this.lineCounter===this.amountSlides){const t=this.widthLine*this.lineCounter;this.line.style.transform=`translateX(${t}vw)`;const i=this.createLine();this.wrLine.prepend(i);const e=this.wrLine.children[0];e.style.transform=`translateX(-${this.widthLine}vw)`,setTimeout((()=>{e.style.transform=""}),3),e.addEventListener("transitionend",(()=>{this.wrLine.children[1].remove(),this.line=e}),{once:!0}),this.lineCounter=0}}moveLinePrev(){if(this.lineCounter-=1,this.unBlockClick(),this.lineCounter<0){const t=this.widthLine*this.lineCounter;this.line.style.transform=`translateX(${t}vw)`;const i=this.createLine();this.wrLine.append(i);const e=this.widthLine*this.amountSlides;return i.style.transform=`translateX(${e}vw)`,this.lineCounter=this.amountSlides-1,setTimeout((()=>{const t=e-this.widthLine;i.style.transform=`translateX(${t}vw)`}),3),void i.addEventListener("transitionend",(()=>{this.wrLine.children[0].remove(),this.line=this.wrLine.children[0]}),{once:!0})}if(this.lineCounter>=0){const t=this.widthLine*this.lineCounter;this.line.style.transform=`translateX(${t}vw)`}}createLine(){const t=document.createElement("div");return t.style.transition=`transform ${this.duration}s ${this.timingFunc}`,t.style.width=`${this.widthLine}vw`,t.classList.add("slider-h__nav-line-item"),t}unBlockClick(){this.line.addEventListener("transitionend",(()=>{this.stoped=!1}),{once:!0})}}class s{constructor(t){this.d=t,this.slider=t.slider,this.initSlider=t.initSlider,this.click=this.click.bind(this),this.touchStart=this.touchStart.bind(this),this.touchEnd=this.touchEnd.bind(this)}init(){this.d.initSlider(),this.d.slider.addEventListener("click",this.click),this.d.slider.addEventListener("touchstart",this.touchStart,{passive:!0}),this.d.slider.addEventListener("touchend",this.touchEnd,{passive:!0})}click(t){t.target.closest(".slider__arrow-next")&&this.d.moveNext(),t.target.closest(".slider__arrow-prev")&&this.d.movePrev(),t.target.closest(".slider-h__pagination-item")&&this.d.clickPag(t.target.closest(".slider-h__pagination-item"))}touchStart(t){this.d.touchStart=t.targetTouches[0].clientX}touchEnd(t){this.d.touchEnd=t.changedTouches[0].clientX,this.d.changeVideoWithSwipe()}}class n{constructor(t){this.d=t,this.click=this.click.bind(this),this.touchMoove=this.touchMoove.bind(this),this.touchStart=this.touchStart.bind(this),this.touchEnd=this.touchEnd.bind(this)}init(){this.d.initSlider(),this.registerEvents()}registerEvents(){this.d.slider.addEventListener("click",this.click),this.d.wrSlides.addEventListener("touchstart",this.touchStart,{passive:!0}),this.d.wrSlides.addEventListener("touchmove",this.touchMoove,{passive:!0}),this.d.wrSlides.addEventListener("touchend",this.touchEnd,{passive:!0})}click(t){t.target.closest(".slider__arrow-next")&&this.d.moveNext(),t.target.closest(".slider__arrow-prev")&&this.d.movePrev()}touchStart(t){this.d.touchStart(t.changedTouches[0].clientX)}touchMoove(t){this.d.swipe(t.changedTouches[0].clientX)}touchEnd(t){this.d.touchEnd(t.changedTouches[0].clientX)}}class r{constructor(t,i){this.slider=t,this.data=i,this.description=this.slider.querySelector(".sl-prod__text-about"),this.wrSlides=this.slider.querySelector(".sl-prod__wr-slides"),this.slides=this.slider.querySelector(".sl-prod__slides"),this.wrBigImg=this.slider.querySelector(".sl-prod__wr-big-img"),this.bigImg=this.wrBigImg.querySelector("img"),this.amountSlides=null,this.amountShowDesc=3,this.timeFunc="ease-out",this.duration=.7,this.durationChangeTextInfo=this.duration,this.durationHalf=this.duration/2,this.oldActiveSlide=null,this.activeSlide=null,this.swipeStart=null,this.touchMoved=null,this.relocated=!1,this.currentOffset=null,this.startTimeStamp=null,this.endTimeStamp=null,this.sizeOffset=null,this.block=!1}initSlider(){this.data.forEach(((t,i)=>{const e=this.createSlide(t.img,t.title,"#",t.title);e.style.transition=`height ${this.duration}s ${this.timeFunc}, width ${this.duration}s ${this.timeFunc}`,0===i&&innerWidth>961&&(e.classList.add("sl-prod__slide_active"),this.bigImg.src=t.img,this.bigImg.alt=t.title),e.id=t.id,this.slides.append(e)})),this.activeSlide=this.slides.children[0],this.amountSlides=this.slides.children.length,this.setWidthSliderContainer(),this.fillTextInfo(),this.bigImg.style.transition=`opacity ${this.duration}s ${this.timeFunc}`,this.description.style.transition=`opacity ${this.durationHalf}s ${this.timeFunc}`}moveNext(){if(!this.block){if(this.block=!0,innerWidth>961){const t=this.activeSlide.cloneNode(!0);t.classList.remove("sl-prod__slide_active"),this.slides.append(t),this.setWidthSliderContainer(),this.slides.style.transition=`transform ${this.duration}s ${this.timeFunc}`,this.oldActiveSlide=this.activeSlide,this.activeSlide=this.slides.children[1],this.activeSlide.classList.add("sl-prod__slide_active"),setTimeout((()=>{const t=(this.oldActiveSlide.offsetWidth+this.getGap())/innerWidth*100;this.slides.style.transform=`translateX(-${t}vw)`})),this.slides.addEventListener("transitionend",(()=>{this.slides.style.transition="",this.oldActiveSlide.remove(),this.slides.style.transform=""}),{once:!0}),this.changeBigImg(),this.changeTextInfo()}if(innerWidth<=961){const t=this.slides.children[0].offsetWidth/innerWidth*100;this.slides.style.transition=`transform ${this.duration}s ${this.timeFunc}`,this.activeSlide=this.slides.children[1],setTimeout((()=>{this.slides.style.transform=`translateX(-${t}vw)`})),this.slides.addEventListener("transitionend",(()=>{this.slides.style.transition="",this.slides.append(this.slides.children[0]),this.slides.style.transform=""}),{once:!0}),this.changeTextInfo()}}}movePrev(){if(this.block)return;this.block=!0;const t=this.slides.children[this.slides.children.length-1];this.slides.prepend(t);const i=this.slides.children[0].offsetWidth/innerWidth*100;console.log(i),this.slides.style.transform=`translateX(-${i}vw)`,this.activeSlide=this.slides.children[0],setTimeout((()=>{this.slides.style.transition=`transform ${this.duration}s ${this.timeFunc}`,this.slides.style.transform=""}),20),this.slides.addEventListener("transitionend",(()=>{this.slides.style.transition=""}),{once:!0}),this.changeTextInfo()}touchStart(t){this.swipeStart=t,this.getWidthOffset(),this.currentOffset=this.slides.getBoundingClientRect().x,this.startTimeStamp=(new Date).getTime()}swipe(t){this.block||(this.touchMoved=this.swipeStart-t,!this.relocated&&this.touchMoved<0&&(this.slides.prepend(this.slides.children[this.slides.children.length-1]),this.slides.style.transform=`translateX(-${this.sizeOffset}px)`,this.currentOffset=this.slides.getBoundingClientRect().x,this.relocated=!0),this.slides.style.transform=`translateX(${this.currentOffset-this.touchMoved}px)`)}touchEnd(t){if(this.block)return;this.block=!0;const i=(new Date).getTime()-this.startTimeStamp,e=this.sizeOffset-this.touchMoved;let s=i/Math.abs(this.touchMoved)*e/1e3;if(s=s>.3?.3:s,this.slides.style.transition=`\n            transform ${s}s ${this.timeFunc}\n        `,this.durationChangeTextInfo=s,Math.abs(this.touchMoved)<=this.sizeOffset/3.5){const t=this.relocated?-1*this.sizeOffset:0;return this.slides.style.transform=`\n                    translateX(${t}px)\n                `,void this.slides.addEventListener("transitionend",(()=>{this.slides.style.transition="",this.relocated&&(this.slides.append(this.slides.children[0]),this.slides.style.transform="",this.relocated=!1),this.block=!1}),{once:!0})}this.swipeStart>t&&(this.currentOffset=this.slides.getBoundingClientRect().x,setTimeout((()=>{this.slides.style.transform=`translateX(-${Math.abs(this.currentOffset)+e}px)`}),10),this.activeSlide=this.slides.children[1],this.slides.addEventListener("transitionend",(()=>{this.slides.style.transition="",this.slides.append(this.slides.children[0]),this.relocated&&(this.slides.append(this.slides.children[0]),this.relocated=!1),this.slides.style.transform=""}),{once:!0})),this.swipeStart<t&&(setTimeout((()=>{this.slides.style.transform=""}),10),this.activeSlide=this.slides.children[0],this.slides.addEventListener("transitionend",(()=>{this.slides.style.transition="",this.relocated&&(this.relocated=!1)}),{once:!0})),this.changeTextInfo()}changeBigImg(){const t=this.createEl("img","sl-prod__big-img");t.style=`\n            position: absolute;\n            left: 0;\n            transition: opacity ${this.duration}s ${this.timeFunc};\n        `;const i=this.oldActiveSlide.nextSibling.children[0].children[0];t.src=i.src,this.wrBigImg.append(t),setTimeout((()=>{this.wrBigImg.lastElementChild.classList.add("sl-prod__big-img_visible"),this.bigImg.classList.remove("sl-prod__big-img_visible")})),this.bigImg.addEventListener("transitionend",(()=>{this.bigImg.remove(),this.bigImg=this.wrBigImg.lastElementChild,this.bigImg.style.position="relative"}),{once:!0})}changeTextInfo(){const t=this.activeSlide.id,i=this.data.find((i=>i.id===t));Object.keys(i).forEach((t=>{const e=this.description.querySelector(`[data-type="${t}"]`);if(e){const s=this.createEl(e.localName,e.className);s.dataset.type=e.dataset.type,s.textContent=i[t],s.style=`\n                    position: absolute;\n                    top: 0;\n                    ${"title"===e.dataset.type||"taste"===e.dataset.type||"aroma"===e.dataset.type?"left: 0;":"right: 0;"}\n                    opacity: 0;\n                    transition:\n                     opacity\n                     ${this.durationChangeTextInfo}s\n                     ${this.timeFunc}\n                    ;\n                `,e.style=`transition: opacity ${this.duration}s ${this.timeFunc};`,e.after(s),setTimeout((()=>{e.style.opacity="0",s.style.opacity="1"}),20),e.addEventListener("transitionend",(()=>{e.remove(),s.style="opacity: 1;",this.durationChangeTextInfo=this.duration,this.block=!1}),{once:!0})}}))}fillTextInfo(){const t=this.activeSlide.id,i=this.data.find((i=>i.id===t));Object.keys(i).forEach((t=>{const e=this.description.querySelector(`[data-type="${t}"]`);e&&(e.textContent=i[t])}))}createSlide(t,i,e,s){const n=this.createEl("li","sl-prod__slide"),r=this.createEl("div","sl-prod__wr-img-slide"),l=this.createEl("img","sl-prod__img-slide"),o=this.createEl("div","sl-prod__img-slide-deco");l.src=t,r.append(l),r.append(o);const a=this.createEl("div","sl-prod__wr-title-slide"),c=this.createEl("h3","sl-prod__title-slide");c.textContent=i,a.append(c);const d=this.createEl("div","sl-prod__wr-button-slide"),h=this.createEl("a","sl-prod__button-slide");h.href=e,h.title=s,h.textContent="Заказать";const m=this.createEl("div","sl-prod__wr-button-slide-deco");return m.style.transition=`opacity ${this.duration}s ${this.timeFunc}`,d.append(h),d.append(m),n.append(r),n.append(a),n.append(d),n}createEl(t,i){const e=document.createElement(t);return e.classList.add(i),e}setWidthSliderContainer(){if(innerWidth>961){let t=[...this.slides.children].reduce(((t,i,e)=>e<this.amountShowDesc?t+=i.offsetWidth/innerWidth*100:t),0);t+=this.getGap()*this.amountShowDesc/innerWidth*100,this.wrSlides.style=`width: ${t.toFixed(3)}vw;`}if(innerWidth<=961){const t=100*this.amountSlides;this.slides.style.width=`${t}%`}}getWidthOffset(){this.sizeOffset=this.slides.children[0].offsetWidth}getGap(){return parseFloat(getComputedStyle(this.slides).gap)}}const l=JSON.parse('[{"id":"columbia1","title":"colombia andino","taste":"описание вкуса 1","aroma":"описание аромата 1","processing":"мытая","height":"1500-1900м 1","sort":"катурра, колумбия, кастильо, , кастильо","q":"84.75","weight":"1 кг","img":"./img/content/pack_content2.png"},{"id":"columbia2","title":"colombia andino2","taste":"описание вкуса 2, описание вкуса 2","aroma":"описание аромата 2, описание аромата 2","processing":"мытая","height":"1500-1900м 2","sort":"катурра, колумбия, кастильо, колумбия","q":"84.75","weight":"1 кг","img":"./img/content/pack_content7.png"},{"id":"columbia3","title":"colombia andino3","taste":"описание вкуса 3","aroma":"описание аромата 3","processing":"не мытая","height":"1500-1900м 3","sort":"катурра, колумбия","q":"84.75","weight":"1 кг","img":"./img/content/pack_content2.png"},{"id":"columbia4","title":"colombia andino4","taste":"описание вкуса 4","aroma":"описание аромата 4","processing":"мытая","height":"1500-1900м 4","sort":"катурра, колумбия, кастильо, катурра, катурра","q":"84.75","weight":"1 кг","img":"./img/content/pack_content7.png"},{"id":"columbia5","title":"colombia andino5","taste":"описание вкуса 5","aroma":"описание аромата 5","processing":"мытая","height":"1500-1900м 5","sort":"катурра, колумбия, кастильо","q":"84.75","weight":"1 кг","img":"./img/content/pack_content2.png"}]'),o=JSON.parse('[{"id":"columbia1","title":"colombia andino","taste":"описание вкуса 1","aroma":"описание аромата 1","processing":"мытая","height":"1500-1900м 1","sort":"катурра, колумбия, кастильо","q":"84.75","weight":"1 кг","img":"./img/content/pack_content2.png"},{"id":"columbia2","title":"colombia andino2","taste":"описание вкуса 2","aroma":"описание аромата 2","processing":"мытая","height":"1500-1900м 2","sort":"катурра, колумбия, кастильо","q":"84.75","weight":"1 кг","img":"./img/content/pack_content7.png"},{"id":"columbia3","title":"colombia andino3","taste":"описание вкуса 3","aroma":"описание аромата 3","processing":"не мытая","height":"1500-1900м 3","sort":"катурра, колумбия, кастильо","q":"84.75","weight":"1 кг","img":"./img/content/pack_content2.png"},{"id":"columbia4","title":"colombia andino4","taste":"описание вкуса 4","aroma":"описание аромата 4","processing":"мытая","height":"1500-1900м 4","sort":"катурра, колумбия, кастильо","q":"84.75","weight":"1 кг","img":"./img/content/pack_content7.png"},{"id":"columbia5","title":"colombia andino5","taste":"описание вкуса 5","aroma":"описание аромата 5","processing":"мытая","height":"1500-1900м 5","sort":"катурра, колумбия, кастильо","q":"84.75","weight":"1 кг","img":"./img/content/pack_content2.png"}]');class a{constructor(t){this.d=t,this.click=this.click.bind(this)}init(){this.d.initSlider(),this.registerEvents()}registerEvents(){this.d.el.addEventListener("click",this.click)}click(t){if(t.target.closest(".slider__arrow-next")&&this.d.next(),t.target.closest(".slider__arrow-prev")&&this.d.prev(),t.target.closest(".sl-p__size-item")&&this.d.choosingSize(t.target.closest(".sl-p__size-item")),t.target.closest(".sl-p__card-slider-pag-item")){const i=+t.target.closest(".sl-p__card-slider-pag-item").dataset.num;this.d.mooveCardSlider(i)}if(t.target.closest(".sl-p__card-slider-color-item")){const i=t.target.closest(".sl-p__card-slider-color-list").dataset.article,e=t.target.closest(".sl-p__card-slider-color-item"),s=e.id,n=e.dataset.color;this.d.changeColor(s,n,i)}}}class c{constructor(t,i){this.el=t,this.data=i,this.arrows=this.el.querySelectorAll(".slider__arrow"),this.cardDecoL=this.el.querySelector(".sl-p__slide-item_l"),this.cardDecoR=this.el.querySelector(".sl-p__slide-item_r"),this.itemsList=null,this.items=null,this.cards=null,this.inSideSliders=this.el.querySelectorAll(".sl-p__card-wr-slider"),this.prevCard=null,this.activeCard=null,this.nextCard=null,this.activeCardSlider=null,this.activeCardSlidesList=null,this.activePaginationList=null,this.activeColorPag=null,this.activeSize=null,this.duration=.5,this.timeF="linear",this.stoped=!1}initSlider(){this.data.forEach(((t,i)=>{const e=this.patternCard(t);switch(e.style.transition=`\n            left ${this.duration}s ${this.timeF},\n            transform ${this.duration}s ${this.timeF},\n            opacity  ${this.duration}s ${this.timeF}`,i){case 0:this.prevCard=e,this.prevCard.classList.add("sl-p__slide-item_prev");break;case 1:this.activeCard=e,this.activeCard.classList.add("sl-p__slide-item_active");break;case 2:this.nextCard=e,this.nextCard.classList.add("sl-p__slide-item_next")}this.cardDecoR.before(e)})),this.itemsList=this.el.querySelector(".sl-p__slides-list"),this.items=this.el.querySelectorAll(".sl-p__slide-item"),this.cards=this.el.querySelectorAll(".sl-p__card"),this.cards.forEach(((t,i)=>{i<3&&this.setTransitionCard(t)})),this.arrows.forEach((t=>{t.style.display="block"})),this.findActiveSize(),this.findActiveCardSlider()}next(){if(this.stoped)return;this.stoped=!0;const t=this.nextCard.nextElementSibling;t.classList.add("sl-p__slide-item_next-r"),setTimeout((()=>{this.setTransitionCard(t.firstElementChild),t.classList.remove("sl-p__slide-item_next-r"),t.classList.add("sl-p__slide-item_next")})),this.nextCard.classList.remove("sl-p__slide-item_next"),this.nextCard.classList.add("sl-p__slide-item_active"),this.activeCard.classList.remove("sl-p__slide-item_active"),this.activeCard.classList.add("sl-p__slide-item_prev"),this.prevCard.classList.remove("sl-p__slide-item_prev"),this.prevCard.classList.add("sl-p__slide-item_prev-l"),this.mooveCardSlider(0),t.addEventListener("transitionend",(()=>{this.prevCard.classList.remove("sl-p__slide-item_prev-l"),this.prevCard.firstElementChild.style.transition="",this.cardDecoR.before(this.prevCard),this.prevCard=this.activeCard,this.activeCard=this.nextCard,this.nextCard=t,this.findActiveSize(),this.findActiveCardSlider(),this.stoped=!1}),{once:!0})}prev(){if(this.stoped)return;this.stoped=!0;const t=this.cardDecoR.previousElementSibling;this.cardDecoL.after(t),t.classList.add("sl-p__slide-item_prev-l"),setTimeout((()=>{this.setTransitionCard(t.firstElementChild),t.classList.remove("sl-p__slide-item_prev-l"),t.classList.add("sl-p__slide-item_prev")})),this.prevCard.classList.remove("sl-p__slide-item_prev"),this.prevCard.classList.add("sl-p__slide-item_active"),this.activeCard.classList.remove("sl-p__slide-item_active"),this.activeCard.classList.add("sl-p__slide-item_next"),this.nextCard.classList.remove("sl-p__slide-item_next"),this.nextCard.classList.add("sl-p__slide-item_next-r"),this.mooveCardSlider(0),t.addEventListener("transitionend",(()=>{this.nextCard.classList.remove("sl-p__slide-item_next-r"),this.nextCard.firstElementChild.style.transition="",this.nextCard=this.activeCard,this.activeCard=this.prevCard,this.prevCard=t,this.findActiveSize(),this.findActiveCardSlider(),this.stoped=!1}),{once:!0})}mooveCardSlider(t){const i=this.activeCardSlidesList.children[0].offsetWidth;this.activeCardSlidesList.style.transform=`\n            translateX(-${i/innerWidth*100*t}vw)\n        `,this.activePaginationList.querySelector(".sl-p__card-slider-pag-item_active").classList.remove("sl-p__card-slider-pag-item_active"),this.activePaginationList.querySelector(`[data-num="${t}"]`).classList.add("sl-p__card-slider-pag-item_active")}changeColor(t,i,e){this.activeColorPag.querySelector(".sl-p__card-slider-color-item_active").classList.remove("sl-p__card-slider-color-item_active"),this.activeColorPag.querySelector(`#${t}`).classList.add("sl-p__card-slider-color-item_active");const s=this.activeCardSlidesList.querySelectorAll("img"),n=this.data.find((t=>t.article===e));this.activeCardSlidesList.style.opacity="0",this.activeCardSlidesList.style.transition="",this.mooveCardSlider(0),this.activeCardSlidesList.style.opacity="1",[...s].forEach(((t,e)=>{t.src=`${n[i].img[e]}`})),setTimeout((()=>{this.activeCardSlidesList.style.transition=`\n                transform ${this.duration}s ${this.timeF}\n            `}))}choosingSize(t){this.activeSize.classList.remove("sl-p__size-item_active"),this.activeSize=t,this.activeSize.classList.add("sl-p__size-item_active")}setTransitionCard(t){t.style.transition=`\n        transform ${this.duration}s ${this.timeF},\n        height ${this.duration}s ${this.timeF},\n        width ${this.duration}s ${this.timeF},\n        box-shadow ${this.duration}s ${this.timeF}`}findActiveSize(){this.activeSize=this.el.querySelector(".sl-p__slide-item_active .sl-p__size-item_active")}findActiveCardSlider(){this.activeCardSlider=this.activeCard.querySelector(".sl-p__card-wr-slider"),this.activeCardSlidesList=this.activeCardSlider.querySelector(".sl-p__card-slides-list"),this.activePaginationList=this.activeCardSlider.querySelector(".sl-p__card-slider-pag-list"),this.activeColorPag=this.activeCardSlider.querySelector(".sl-p__card-slider-color-list")}patternCard(t){const i=this.createEl("li","sl-p__slide-item"),e=this.createEl("div","sl-p__card"),s=this.createEl("div","sl-p__card-price");s.style.transition=`opacity ${this.duration}s ${this.timeF}`,s.textContent=t.price;const n=this.createEl("span","");n.textContent="p.",s.append(n);const r=this.createEl("div","sl-p__card-wr-slider");r.style=`\n        transition: width ${this.duration}s ${this.timeF},\n            height ${this.duration}s ${this.timeF}\n        `;const l=this.createEl("div","sl-p__card-wr-slides"),o=this.createEl("ul","sl-p__card-slides-list");o.style.transition=`\n            transform ${this.duration}s ${this.timeF}\n        `,o.style.width=100*t.black.img.length+"%",t.black.img.forEach((t=>{const i=this.createEl("li","sl-p__card-slides-item"),e=this.createEl("img","sl-p__card-slides-img");e.src=t,i.append(e),o.append(i)}));const a=this.createEl("ul","sl-p__card-slider-pag-list");for(let i=0;i<t.black.img.length;i+=1){const t=this.createEl("li","sl-p__card-slider-pag-item");t.dataset.num=i,0===i&&t.classList.add("sl-p__card-slider-pag-item_active"),a.append(t)}const c=this.createEl("ul","sl-p__card-slider-color-list");c.dataset.article=t.article,t.colors.forEach(((t,i)=>{const e=this.createEl("li","sl-p__card-slider-color-item");e.id=`color${i}`,e.dataset.color=t.name,0===i&&e.classList.add("sl-p__card-slider-color-item_active"),e.style.borderColor=`${t.value}`;const s=this.createEl("div","sl-p__card-slider-color-circle");s.style=`background: ${t.value};`,e.append(s),c.append(e)})),l.append(o),r.append(l),r.append(a),r.append(c);const d=this.createEl("div","sl-p__card-title");d.textContent=t.title;const h=this.createEl("div","sl-p__card-wr-content"),m=this.createEl("div","sl-p__card-content"),p=this.createEl("ul","sl-p__size-list");t.black.sizes.forEach(((t,i,e)=>{const s=this.createEl("li","sl-p__size-item");0===i&&s.classList.add("sl-p__size-item_active");const n=this.createEl("div","sl-p__size-item-num");n.textContent=t,s.append(n),p.append(s)}));const v=this.createEl("p","");t.composition.forEach((t=>{const i=this.createEl("span","");i.textContent=t,v.append(i)}));const u=this.createEl("div","sl-p__card-wr-link");t.composition.length>1&&(u.style.marginTop="0.5vw");const g=this.createEl("a","sl-p__card-link");g.textContent="Купить",g.href=t.link,g.alt=t.title,g.target="_blank",u.append(g),m.append(p),m.append(v),m.append(u),h.append(m);const _=this.createEl("div","sl-p__card-mask");return e.append(r),e.append(_),e.append(s),e.append(d),e.append(h),i.append(e),i}createEl(t,i){const e=document.createElement(t);return i&&e.classList.add(i),e}}const d=JSON.parse('[{"article":"0","title":"футболка R18","colors":[{"name":"black","value":"#3F3937"},{"name":"white","value":"#ffffff"}],"white":{"img":["./img/content/t-shirt-white-1-front_content.png","./img/content/t-shirt-white-1-rear_content.png"],"sizes":["M","L","XL","XXL"]},"black":{"img":["./img/content/t-shirt-black-1-front_content.png","./img/content/t-shirt-black-1-rear_content.png"],"sizes":["M","L","XL","XXL"]},"price":"2 500","composition":["Хлопок 92%, лайкра 8%"],"link":"#"},{"article":"1","title":"футболка R18","colors":[{"name":"black","value":"#3F3937"},{"name":"white","value":"#ffffff"}],"white":{"img":["./img/content/t-shirt-white-2-front_content.png","./img/content/t-shirt-white-2-rear_content.png"],"sizes":["M","L","XL","XXL"]},"black":{"img":["./img/content/t-shirt-black-2-front_content.png","./img/content/t-shirt-black-2-rear_content.png"],"sizes":["M","L","XL","XXL"]},"price":"2 500","composition":["Хлопок 92%, лайкра 8%"],"link":"#"},{"article":"2","title":"футболка R18","colors":[{"name":"black","value":"#3F3937"},{"name":"white","value":"#ffffff"}],"white":{"img":["./img/content/t-shirt-white-3-front_content.png","./img/content/t-shirt-white-3-rear_content.png"],"sizes":["M","L","XL","XXL"]},"black":{"img":["./img/content/t-shirt-black-3-front_content.png","./img/content/t-shirt-black-3-rear_content.png"],"sizes":["M","L","XL","XXL"]},"price":"2 500","composition":["Хлопок 92%, лайкра 8%"],"link":"#"},{"article":"3","title":"футболка R18","colors":[{"name":"black","value":"#3F3937"},{"name":"white","value":"#ffffff"}],"white":{"img":["./img/content/t-shirt-white-4-front_content.png","./img/content/t-shirt-white-4-rear_content.png"],"sizes":["M","L","XL","XXL"]},"black":{"img":["./img/content/t-shirt-black-4-front_content.png","./img/content/t-shirt-black-4-rear_content.png"],"sizes":["M","L","XL","XXL"]},"price":"2 500","composition":["Хлопок 92%, лайкра 8%"],"link":"#"},{"article":"4","title":"Худи R18","colors":[{"name":"black","value":"#3F3937"}],"black":{"img":["./img/content/hoodies-black-1-front_content.png","./img/content/hoodies-black-1-rear_content.png"],"sizes":["M","L","XL","XXL"]},"price":"2 500","composition":["Хлопок 90%, лайкра 10%."],"link":"#"},{"article":"5","title":"Худи R18","colors":[{"name":"black","value":"#3F3937"}],"black":{"img":["./img/content/hoodies-black-2-front_content.png","./img/content/hoodies-black-2-rear_content.png"],"sizes":["M","L","XL","XXL"]},"price":"2 500","composition":["Хлопок 90%, лайкра 10%."],"link":"#"}]'),h=JSON.parse('[{"article":"0","title":"Салфетка R18","colors":[{"name":"black","value":"#3F3937"},{"name":"white","value":"#ffffff"}],"white":{"img":["./img/content/serviette-white-1-front_content.png","./img/content/serviette-white-1-rear_content.png"],"sizes":["30x30см"]},"black":{"img":["./img/content/serviette-black-1-front_content.png","./img/content/serviette-black-1-rear_content.png"],"sizes":["30x30см"]},"price":"2 500","composition":["Хлопок 90%, лайкра 10%.","3шт в комплекте"],"link":"#"},{"article":"1","title":"салфетка R18","colors":[{"name":"black","value":"#3F3937"},{"name":"white","value":"#ffffff"}],"white":{"img":["./img/content/serviette-white-2-front_content.png","./img/content/serviette-white-2-rear_content.png"],"sizes":["30x30см"]},"black":{"img":["./img/content/serviette-black-2-front_content.png","./img/content/serviette-black-2-rear_content.png"],"sizes":["30x30см"]},"price":"2 500","composition":["Хлопок 90%, лайкра 10%.","3шт в комплекте"],"link":"#"},{"article":"2","title":"салфетка R18","colors":[{"name":"black","value":"#3F3937"},{"name":"white","value":"#ffffff"}],"white":{"img":["./img/content/serviette-white-3-front_content.png","./img/content/serviette-white-3-rear_content.png"],"sizes":["30x30см"]},"black":{"img":["./img/content/serviette-black-3-front_content.png","./img/content/serviette-black-3-rear_content.png"],"sizes":["30x30см"]},"price":"2 500","composition":["Хлопок 90%, лайкра 10%.","3шт в комплекте"],"link":"#"},{"article":"3","title":"салфетка R18","colors":[{"name":"black","value":"#3F3937"},{"name":"white","value":"#ffffff"}],"white":{"img":["./img/content/serviette-white-4-front_content.png","./img/content/serviette-white-4-rear_content.png"],"sizes":["30x30см"]},"black":{"img":["./img/content/serviette-black-4-front_content.png","./img/content/serviette-black-4-rear_content.png"],"sizes":["30x30см"]},"price":"2 500","composition":["Хлопок 90%, лайкра 10%.","3шт в комплекте"],"link":"#"},{"article":"4","title":"салфетка R18","colors":[{"name":"black","value":"#3F3937"}],"white":{"img":["./img/content/serviette-white-5-front_content.png","./img/content/serviette-white-5-rear_content.png"],"sizes":["30x30см"]},"black":{"img":["./img/content/serviette-black-5-front_content.png","./img/content/serviette-black-5-rear_content.png"],"sizes":["30x30см"]},"price":"2 500","composition":["Хлопок 90%, лайкра 10%.","3шт в комплекте"],"link":"#"}]');window.addEventListener("load",(()=>{const m=document.querySelector(".slider-h");if(m){const t=new e(m);new s(t).init()}const p=document.querySelector(".coffee__wr-slider-top");if(p){const t=new r(p,l);new n(t).init()}const v=document.querySelector(".coffee__wr-slider-bottom");if(v){const t=new r(v,o);new n(t).init()}const u=document.querySelector(".merch__wr-slider .sl-p");if(u){const t=new c(u,d);new a(t).init()}const g=document.querySelector(".accessories__wr-slider .sl-p");if(g){const t=new c(g,h);new a(t).init()}const _=document.querySelector(".button-to-top");_&&_.addEventListener("click",(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}));const f=document.querySelector(".nav");if(f){const e=new i(f);new t(e).init()}const w=document.querySelector(".footer nav");if(w){const e=new i(w);new t(e).init()}}))})();
//# sourceMappingURL=main.js.map