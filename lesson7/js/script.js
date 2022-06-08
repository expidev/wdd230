let imagesToLoad = document.querySelectorAll("img[data-src]");
const loadIMages = (image) => {
    image.setAttribute ("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver ((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadIMages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadIMages(img);
    });
};