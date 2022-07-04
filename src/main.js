document.addEventListener('DOMContentLoaded',()=>{

    const addProject=document.getElementById('add-project');
    const modal=document.querySelector('.modal');
    const closeModal=document.querySelectorAll('.close-modal');
    const form=document.getElementById('addproject');

    //open modal
    addProject.addEventListener('click',()=>{
        modal.classList.remove('hidden');
        addProject.parentNode.style.display="none"
    })
    //close buttons
    for(let i = 0;i<closeModal.length;i++){
        closeModal[i].addEventListener('click',()=>{
            modal.classList.add('hidden');
            addProject.parentNode.style.display="block"
    })}
    //form submision
    form.addEventListener('submit', (event)=>{
        event.preventDefault();
    })


})
