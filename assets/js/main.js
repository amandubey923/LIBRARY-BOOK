document.addEventListener('DOMContentLoaded', () => {


const searchInput = document.getElementById('searchInput');
const searchIcon = document.querySelector('.search-icon');
const guessPopup = document.getElementById('guessPopup');

// 📚 BOOK DATA (same names as files)
const books = [
    { name: "1984", link: "pages/1984.html" },                                      //1
    { name: "the great gatsby", link: "pages/thegreatgatsby.html" },                //2
    { name: "crime punishment", link: "pages/crimepunishment.html" },               //3
    { name: "moby dick", link: "pages/mobydick.html" },                             //4
    { name: "one hundred", link: "pages/onehundred.html" },                         //5
    { name: "war and peace", link: "pages/warandpeace.html" },                      //6
    { name: "pride and prejudice", link: "pages/prideandprejudice.html" },          //7
    { name: "lord of ring", link: "pages/lordofring.html" },                        //8
    { name: "mockingbird", link: "pages/mockingbird.html" },                        //9
    { name: "godan", link: "pages/godan.html" },                                    //10
    { name: "gaban", link: "pages/gaban.html" },                                    //11
    { name: "kamayani", link: "pages/kamayani.html" },                              //12
    { name: "madhushala", link: "pages/madhushala.html" },                          //13
    { name: "one hundred", link: "pages/onehundred.html" },                         //14
    { name: "war and peace", link: "pages/warandpeace.html" },                      //15
    { name: "mailaanchal", link: "pages/mailaanchal.html" },                        //16
    { name: "raag darbari", link: "pages/raagdarbari.html" },                       //17
    { name: "itoohadlovestory", link: "pages/itoohadlovesstory.html" },             //18
    { name: "idontloveyou", link: "pages/idontlove.html" },                         //19
];

// 🔍 FUNCTION → SEARCH + REDIRECT
function searchBook() {
    const value = searchInput.value.toLowerCase().trim();

    const found = books.find(book =>
        book.name.includes(value)
    );

    if (found) {
        window.location.href = found.link;
    } else {
        alert("Book not found ❌");
    }
}

// ⌨️ ENTER KEY
searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        searchBook();
    }
});

// 🔍 CLICK ICON
searchIcon.addEventListener("click", () => {
    searchBook();
});

// 📋 SUGGESTIONS
searchInput.addEventListener('input', () => {
    const value = searchInput.value.toLowerCase();
    guessPopup.innerHTML = "";

    if (value === "") {
        guessPopup.style.display = "none";
        return;
    }

    const filtered = books.filter(book =>
        book.name.includes(value)
    );

    filtered.slice(0, 5).forEach(book => {
        const item = document.createElement("div");
        item.textContent = book.name;

        // click suggestion → open page
        item.addEventListener("click", () => {
            window.location.href = book.link;
        });

        guessPopup.appendChild(item);
    });

    guessPopup.style.display = "block";
});

// ❌ click outside close
document.addEventListener("click", (e) => {
    if (!guessPopup.contains(e.target) && e.target !== searchInput) {
        guessPopup.style.display = "none";
    }
});


});
