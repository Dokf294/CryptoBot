import "./modules/videoController"; 
import "./modules/check";
import Vision from "./inc/vision";
import { splitWords } from "./inc/splitWords";
import AutoClasser from "./inc/autoClasser";

const autoClasser = new AutoClasser({
  items: [
    {
      parent: ".case__inner",
      tags: ["h1","h2", "p", "h3"],
      addClass: "set-anim-type2",
    }
  ],
});

const vision = new Vision({
  items: [
    {
      selector: ".anim",
      addClass: "push-anim-type1",
      removeClass: "",
      once: true,
    },
    {
      selector: ".anim-two",
      addClass: "push-anim-type1",
      removeClass: "",
      once: true,
    },
    {
      selector: ".case p, .case h3, .case h1, .case h2",
      addClass: "push-anim-type2",
      removeClass: "",
      once: true,
    }, 
    {
      selector: ".demonstration-text__header",
      addClass: "push-anim-type2",
      removeClass: "",
      once: true,
    },  
    {
      selector: ".demonstration-text > p span",
      addClass: "push-anim-type3",
      removeClass: "",
      once: true,
    },  
    {
      selector: ".devs__title, .dev-card__name",
      addClass: "push-anim-type2",
      removeClass: "",
      once: true,
    },   
    {
      selector: ".dev-card__content > p span",
      addClass: "push-anim-type3",
      removeClass: "",
      once: true,
    },  
    {
      selector: ".footer__title",
      addClass: "push-anim-type2",
      removeClass: "",
      once: true,
    }, 
    {
      selector: ".footer__text span",
      addClass: "push-anim-type3",
      removeClass: "",
      once: true,
    }, 
  ],
});

autoClasser.init();
splitWords("[split-words]");
vision.init(); 

