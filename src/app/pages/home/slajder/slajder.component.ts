import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slajder',
  templateUrl: './slajder.component.html',
  styleUrls: ['./slajder.component.css']
})
export class SlajderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const slider = document.querySelector(
      ".slider-items-containner"
    ) as HTMLElement;
    const left = document.querySelector("#left") as HTMLElement;
    const right = document.querySelector("#right") as HTMLElement;
    const play = document.querySelector("#play") as HTMLElement;
    
    let position: number = 0;
    let sliderController: boolean = false;
    let timeID: ReturnType<typeof setInterval>;
    
    const leftHandler = (): void => {
      if (position === 0) {
        return;
      } else {
        position += 1000;
        slider.style.left = `${position}px`;
      }
      arrowStyleHandler();
    };
    
    const rightHandler = (): void => {
      if (position <= -4800) {
        position = 0;
      } else {
        position -= 1000;
      }
      slider.style.left = `${position}px`;
      arrowStyleHandler();
    };
    
    function arrowStyleHandler(): void {
      if (position === 0 && sliderController) {
        left.style.opacity = "0";
        left.style.pointerEvents = "none";
      } else if (position === 0) {
        left.style.opacity = "0.5";
      } else if (position < 0 && sliderController) {
        left.style.opacity = "0";
        left.style.pointerEvents = "none";
      } else if (position < 0) {
        left.style.opacity = "1";
      }
    }
    arrowStyleHandler();
    
    const arrowHiddenHandler = () => {
      if (sliderController) {
        left.style.opacity = "0";
        left.style.pointerEvents = "none";
        right.style.pointerEvents = "none";
        right.style.opacity = "0";
      } else {
        left.style.opacity = "1";
        left.style.pointerEvents = "all";
        right.style.pointerEvents = "all";
        right.style.opacity = "1";
      }
    };
    
    const autoStartHandler = (): void => {
      if (sliderController === true) {
        timeID = setInterval(() => {
          rightHandler();
        }, 3000);
      } else {
        clearInterval(timeID);
      }
    };
    autoStartHandler();

   arrowHiddenHandler();
     const playSlideHAndler = (): void => {
      sliderController = !sliderController;
      arrowHiddenHandler();
      autoStartHandler();
      // if (sliderController) {
      //   play.textContent = "Pause";
      // } else if (!sliderController) {
      //   play.textContent = "Play";
      // }
    };
    playSlideHAndler();
    // play.addEventListener("click", playSlideHAndler);
    left.addEventListener("click", leftHandler);
    right.addEventListener("click", rightHandler);
    

  }

}
