
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





    