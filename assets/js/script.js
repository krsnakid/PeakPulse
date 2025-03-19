let sideBarBtn = document.getElementById('sidebar-btn')
let closeBtn = document.querySelector('.close-btn')

function openSidebar() {
    document.getElementById("sidebar").style.left = "0px";
}

function closeSidebar() {
    document.getElementById("sidebar").style.left = "-250px";
}

sideBarBtn.addEventListener('click', openSidebar)
closeBtn.addEventListener('click', closeSidebar)

