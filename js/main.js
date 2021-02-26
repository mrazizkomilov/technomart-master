const ready = function(callback){
    if (document.readyState != "loading") callback;
    else document.addEventListener("DOMContentLoaded", callback);
};

ready(function () {
    const mapTriggerLink = document.querySelector(".contacts__map-link");
    const mapModal = document.querySelector(".map-modal");
    const contactsModal = document.querySelector(".contacts-modal__trigger");
    const contactsModaltrigger = document.querySelector(".contact-modal");
    const buyProductButton = document.querySelectorAll(".product__button--buy");
    const productAddedModal = document.querySelector(".product-added-modal");
    const closeModalButton = document.querySelectorAll(".modal__close");
    const closeProductAddedModal = document.querySelector(".product-added-modal__close");

    if (mapTriggerLink){
        mapTriggerLink.addEventListener("click", function (e) {
            e.preventDefault();
            mapModal.classList.add("modal--shown");
            console.log(this);
        });
    }

    if (contactsModaltrigger){
        contactsModaltrigger.addEventListener("click", function (e) {
            e.preventDefault();
            mapModal.classList.add("modal--shown")
        });
    }

    if (closeProductAddedModal){
        closeProductAddedModal.addEventListener("click", function () {
            productAddedModal.classList.remove("modal--shown");
        });
    }

    for (let i = 0; i <buyProductButton.length; i++) {
        buyProductButton[i].addEventListener("click", function (e) {
            productAddedModal.classList.add("modal--shown");
        })
    }

    if (closeModalButton){
        for (let i = 0; i <closeModalButton.length ; i++) {
            closeModalButton[i].addEventListener("click", function () {
                this.parentNode.classList.remove("modal--shown");
            });
        }
    }
});


