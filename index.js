let sidebarWrapper=document.querySelector(".mobile-menu-wrapper");
let mobileSidebar=document.querySelector(".mobile-sidebar");
let menuBtn=document.querySelector(".menu-icon")

menuBtn?.addEventListener('click',()=>{
    sidebarWrapper.classList.add('mobile-wrapper-block');
    mobileSidebar.classList.add('mobile-sidebar-block');
})

sidebarWrapper?.addEventListener('click', (event) => {
    // Check if the clicked element is the sidebarWrapper itself, not the sidebar
    if (!mobileSidebar.contains(event.target)) {
        sidebarWrapper.classList.remove('mobile-wrapper-block');
        mobileSidebar.classList.remove('mobile-sidebar-block');
    }
});