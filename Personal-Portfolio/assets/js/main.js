const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', () =>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')




gsap.from('.nav_logo', 
{opacity:0, duration: 3, delay: 3.2, y: 25, ease:'expo.out'});

gsap.from('.nav_item', 
{opacity: 0, duration: 3, delay: 3.2, y: 25, ease:'expo.out', stagger: .2});

gsap.from('.T-Animation', 
{opacity: 0, duration: 3, delay: 2.3, y: 25, ease:'expo.out', stagger: .3});


setTimeout(function()
{
    $('body').addClass('loaded');
}, 2000);