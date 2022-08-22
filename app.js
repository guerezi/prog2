'use strict';

let scheduleBtn = document.querySelector('#schedule')

scheduleBtn?.addEventListener('click', function() {
    window.location.href = "schedule.html"
    return false
})

let homeBtn = document.querySelector('#home')

homeBtn?.addEventListener('click', function() {
    window.location.href = "index.html"
    return false
})


let imageBtn = document.querySelector('#image-uploader')

imageBtn?.addEventListener('change', function() {
    const reader = new FileReader()
    reader.addEventListener("load", () => {
        let uploadedImage = reader.result
        let innerGrid = document.querySelector('.inner-grid')

        var tag = document.createElement("div");
        tag.title = "Clique para apagar"
        tag.id = uploadedImage
        tag.style.backgroundImage = `url(${uploadedImage})`
        tag.style.backgroundSize = "contain"
        tag.style.backgroundRepeat = "no-repeat"
        tag.style.minHeight = "100px"
        tag.style.maxHeight = "300px"

        tag.addEventListener('click', function() {
            innerGrid.removeChild(tag)
        })

        innerGrid.appendChild(tag)
    })

    reader.readAsDataURL(this.files[0])
})



function validateForm() {
    let form = document.forms["scheduleForm"]

    let missingField = []

    if (form["name"].value == "") {
        missingField.push("Nome")
    }
    if (form["phone"].value == "") {
        missingField.push("Telefone")
    }
    if (form["date"].value == "") {
        missingField.push("Data")
    }
    if (form["photos"].value == "") {
        missingField.push("Fotos")
    }

    if (missingField.length) {
        alert("Os campos: " + missingField.join(", ") + " devem ser preenchidos")
        return false
    } else {
        alert("Pedido enviado, entraremos em contato")
        return true
    }
} 
