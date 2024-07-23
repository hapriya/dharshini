const accordionItemHeader = document.querySelectorAll(".accordion-item-header");

accordionItemHeader.forEach(accordionItemHeader =>{
    accordionItemHeader.addEventListener("click", () => {
        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if(accordionItemHeader.classList.contains("active")){
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";

        }
        else{
            accordionItemBody.style.maxHeight = 0;
        }
    });
});
