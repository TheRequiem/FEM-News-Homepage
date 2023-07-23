const showMenu = () => {
    document.querySelector('dialog').showModal();
    document.querySelector('dialog').style.display = "flex";
}

const closeMenu = () => {
    document.querySelector('dialog').close();
    document.querySelector('dialog').style.display = "none";
}