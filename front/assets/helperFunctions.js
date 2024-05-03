
export const createInput = (type, name, placeholder, required) => {
    const input = document.createElement('input');
    input.setAttribute('type', type);
    input.setAttribute('name', name);
    input.setAttribute('placeholder', placeholder);
    if(required) {
        input.setAttribute('required', 'true');
    }
    return input;
}

export const appendMultipleChildrens = (parent, childrens) =>{
    childrens.forEach((children)=>{
        parent.appendChild(children); 
    });
}

export const initLoadingAnimation  = () =>{
    const body = document.querySelector("body");
    const loadingAnimationContainer = document.createElement('div')
    loadingAnimationContainer.classList.add('spinner-container');

    const spinner = document.createElement('img');
    spinner.classList.add('spinner')
    spinner.setAttribute('src', './front/assets/animations/Cube@1x-1.0s-200px-200px.gif')

    
    body.prepend(loadingAnimationContainer);
    loadingAnimationContainer.appendChild(spinner);
}

export const closeLoadingAnimation = () =>{
    const loadingAnimationContainer = document.querySelector('.spinner-container');
    if(loadingAnimationContainer){
    loadingAnimationContainer.remove();
    }
} 




    