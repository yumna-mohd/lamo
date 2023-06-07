//----------------------Slider for revuelto---------------------------------
const container = document.querySelector(".drag_container");
const slides = document.querySelector(".drag_slides");

// Keep track of user's mouse down and up
let isPressedDown = false;
// X horizontal space of cursor from inner container
let cursorXSpace;

container.addEventListener("mousedown", (e) => {
    isPressedDown = true;
    cursorXSpace = e.offsetX - slides.offsetLeft;
    container.style.cursor = "grabbing";
});

container.addEventListener("mouseup", () => {
    container.style.cursor = "grab";
});

window.addEventListener("mouseup", () => {
    isPressedDown = false;
});

container.addEventListener("mousemove", (e) => {
    if (!isPressedDown) return;
    e.preventDefault();
    slides.style.left = `${e.offsetX - cursorXSpace}px`;
    boundSlides();
});

function boundSlides() {
    const containerRect = container.getBoundingClientRect();
    const slidesRect = slides.getBoundingClientRect();

    if (parseInt(slides.style.left) > 0) {
        slides.style.left = 0;
    } else if (slidesRect.right < containerRect.right) {
        slides.style.left = `-${slidesRect.width - containerRect.width}px`;
    }
}



//-------------------------3 car buttons------------------------------
function toggleText(textNumber) {
    // Hide all text elements
    var texts = document.getElementsByClassName('text');
    for (var i = 0; i < texts.length; i++) {
        texts[i].classList.remove('show');
    }

    // Show the selected text element
    var selectedText = document.getElementById('text' + textNumber);
    selectedText.classList.add('show');
}



//------------------Show content for the TYPES OF HURACAN button------------------
function showContent(contentNumber) {
    // Hide all content elements
    var contents = document.getElementsByClassName('hidden-content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove('show-content');
    }

    // Show the selected content element
    var selectedContent = document.getElementById('content' + contentNumber);
    selectedContent.classList.add('show-content');
}



//------------------Show content for the TYPES OF URUS button----------------------
function showContentUrus(contentNumberUrus) {
    // Hide all content elements
    var contentsUrus = document.getElementsByClassName('hidden-content-urus');
    for (var i = 0; i < contentsUrus.length; i++) {
        contentsUrus[i].classList.remove('show-content-urus');
    }

    // Show the selected content element
    var selectedContent = document.getElementById('content-urus' + contentNumberUrus);
    selectedContent.classList.add('show-content-urus');
}

//--------------image pop up----------------------------
//image popup
document.querySelectorAll('.gallery img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-img').style.display = 'block';
        document.querySelector('.popup-img img').src = image.getAttribute('src');
    }
});
document.querySelector('.popup-img span').onclick = () => {
    document.querySelector('.popup-img').style.display = 'none';
}
