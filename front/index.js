import { navBar } from "./components/navBar.js";
import { homeDisplay } from "./components/homeDisplay.js";

const CATEGORIES = ['ficción', 'historia', 'recetas', 'cómics'];
let PAGE_TITLE = 'AUREA';

const initialize = () => {
  

  
  navBar(CATEGORIES, PAGE_TITLE);
  homeDisplay();
};

initialize();
