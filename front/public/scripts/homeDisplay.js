import { createInput } from "./helperFunctions.js"

export const homeDisplay = () => {

 
    const displayDiv = document.querySelector('#display-div')

    const homeContainer = document.createElement('div')
    homeContainer.setAttribute('id', 'home')
    displayDiv.appendChild(homeContainer)
  
    const placeholder = document.createElement('div')
    placeholder.setAttribute('id', 'placeholder')
    
  
    const slogan = document.createElement('div')
    slogan.setAttribute('id', 'slogan')
    placeholder.appendChild(slogan)
    slogan.textContent = 'Animate a descubrir a los mejores escritores y obras del mundo'
    
    
    const description = document.createElement('div')
    description.setAttribute('id','description')
    placeholder.appendChild(description)
    description.textContent = 'AUREA es el lugar para encontrar y descubrir todo lo que necesitás, acá.'

    const contactFormIcon = document.createElement('a')
    contactFormIcon.innerHTML = '<span class="material-symbols-outlined">contact_support</span>'
    contactFormIcon.setAttribute('id', 'contact-form-icon')
    contactFormIcon.setAttribute('href', '../../contacto.html')

  
    const footer = document.createElement('div');
    footer.setAttribute("id", "footer");
    footer.innerHTML = `trabajo práctico para Codo a Codo - 2024. Contáctenos`

    
    footer.append(contactFormIcon)

    
    displayDiv.appendChild(homeContainer)
    homeContainer.appendChild(placeholder)
    homeContainer.appendChild(footer)
  
    // const contactForm = () =>{
    //   const form = document.createElement('div')
    //   form.setAttribute('id', 'contact-form')

    //   const nameInput = createInput('name', 'name', 'Nombre', true)

    //   const mailInput = createInput('email', 'email', 'E-mail', true)

    //   const textArea = document.createElement('textarea')
    //   textArea.setAttribute('required', 'true')


    //   const radioSelectOneLabel = document.createElement('label')
    //   radioSelectOneLabel.setAttribute('for', 'particular')
    //   radioSelectOneLabel.innerHTML = 'Particular'

    //   const radioSelectTwoLabel = document.createElement('label')
    //   radioSelectTwoLabel.setAttribute('for', 'company')
    //   radioSelectTwoLabel.innerHTML = 'Empresa'

    //   const radioSelectOne = document.createElement('input')
    //   radioSelectOne.setAttribute('type', 'radio')
    //   radioSelectOne.setAttribute('name', 'particular')
    //   radioSelectOne.setAttribute('value', 'particular')
    //   radioSelectOne.setAttribute('id', 'particular')

    //   const radioSelectTwo = document.createElement('input')
    //   radioSelectTwo.setAttribute('type', 'radio')
    //   radioSelectTwo.setAttribute('name', 'company')
    //   radioSelectTwo.setAttribute('value', 'company')
    //   radioSelectTwo.setAttribute('id', 'company')


    //   const TOScheck = document.createElement('input')
    //   TOScheck.setAttribute('type', 'checkbox')
    //   TOScheck.setAttribute('required', 'true')
    //   TOScheck.setAttribute('id', 'TOScheck')
    //   TOScheck.setAttribute('name', 'TOScheck')
    //   TOScheck.setAttribute('value', 'TOScheck')

    //   const submitButton = document.createElement('button')
    //   submitButton.setAttribute('type', 'submit')
      
    //   form.append(nameInput, mailInput, textArea, radioSelectOneLabel,radioSelectOne, radioSelectTwoLabel, radioSelectTwo, TOScheck, submitButton)
    //   homeContainer.append(form)
    // }
  } 