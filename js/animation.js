const options = {
    threshold: 0.004
}

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry.intersectionRatio);
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })  
}, options);

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));  