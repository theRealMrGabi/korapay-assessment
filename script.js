const BookData = [
	{
		availability: "Available",
		title: "The Effective Engineer",
		authorAndYear: "Edmond Lau - 2009",
		genre: "Motivational",
		rating: 4.0,
		comments: 31,
		likes: 29,
		image: "./assets/mobile-books/effective-engineer.svg",
	},
	{
		availability: "Borrowed out",
		title: "Built to Last",
		authorAndYear: "Jim Collins,Jerry I.Porras - 2021",
		genre: "Business, Entrepreneurship",
		rating: 4.0,
		comments: 31,
		likes: 29,
		image: "./assets/mobile-books/built-to-last.svg",
	},
	{
		availability: "Available",
		title: "Big Magic",
		authorAndYear: "Elizabeth Gilbert-2014",
		genre: "Motivational",
		rating: 4.0,
		comments: 31,
		likes: 29,
		image: "./assets/mobile-books/big magic.svg",
	},
	{
		availability: "Available",
		title: "The Lean Startup",
		authorAndYear: "Eric Reis -2005",
		genre: "Motivational",
		rating: 4.0,
		comments: 31,
		likes: 29,
		image: "./assets/mobile-books/the lean startup.svg",
	},
	{
		availability: "Available",
		title: "The Effective Engineer",
		authorAndYear: "Edmond Lau - 2009",
		genre: "Motivational",
		rating: 4.0,
		comments: 31,
		likes: 29,
		image: "./assets/mobile-books/effective-engineer.svg",
	},
	{
		availability: "Borrowed out",
		title: "Built to Last",
		authorAndYear: "Jim Collins,Jerry I.Porras - 2021",
		genre: "Business, Entrepreneurship",
		rating: 4.0,
		comments: 31,
		likes: 29,
		image: "./assets/mobile-books/built-to-last.svg",
	},
	{
		availability: "Available",
		title: "Big Magic",
		authorAndYear: "Elizabeth Gilbert-2014",
		genre: "Motivational",
		rating: 4.0,
		comments: 31,
		likes: 29,
		image: "./assets/mobile-books/big magic.svg",
	},
	{
		availability: "Available",
		title: "The Lean Startup",
		authorAndYear: "Eric Reis -2005",
		genre: "Motivational",
		rating: 4.0,
		comments: 31,
		likes: 29,
		image: "./assets/mobile-books/the lean startup.svg",
	},
];

const elem = document.querySelector(".main-carousel");
const flkty = new Flickity(elem, {
	cellAlign: "left",
	contain: true,
});

const openSidebarBtn = document.querySelector(".hamburger");
const navContainerEl = document.querySelector(".nav-container");
const sidebarEl = document.querySelector(".sidebar");
const closeSidebarBtn = document.querySelector(".close-sidebar");
const openSearchBtn = document.querySelector(".search-icon-only");
const closeSearchBtn = document.querySelector(".close-search");
const searchInput = document.querySelector(".search-desktop");

const singleBookEl = [...document.querySelectorAll(".all-book")];
const allBooksEl = document.querySelector(".all-books");

const carouselEl = document.querySelector(".carousel");
const carouselCellsEl = document.querySelectorAll(".carousel-cell");
const searchedItems = document.querySelector(".searched-items");

function removeOverlay() {
	for (let el of carouselCellsEl) {
		el.classList.remove("show-carousel-book-underlay");
	}
}

//Carousel
carouselEl.addEventListener("click", (e) => {
	if (e.target.classList.contains(".show-details-btn")) {
		const targetCell = e.target.parentElement.parentElement;
		removeOverlay();
		targetCell.classList.add("show-carousel-book-underlay");
		return;
	}
	if (e.target.classList.contains("close-overlay")) {
		removeOverlay();
		return;
	}

	const overlay = e.target.closest(".carousel-book-underlay");
	if (overlay) {
		const target = overlay.parentElement;
		target.classList.remove("show-carousel-book-underlay");
	}
});

// open sidebar
openSidebarBtn.addEventListener("click", (e) => {
	sidebarEl.classList.add("show-sidebar");
});

closeSidebarBtn.addEventListener("click", () => {
	sidebarEl.classList.remove("show-sidebar");
});

// open search
openSearchBtn.addEventListener("click", () => {
	navContainerEl.classList.add("show-search");
	if (sidebarEl.classList.contains("show-sidebar"))
		sidebarEl.classList.remove("show-sidebar");
});

// close search
closeSearchBtn.addEventListener("click", () => {
	navContainerEl.classList.remove("show-search");
	searchInput.value = "";
	searchedItems.style.display = "none";
});

// check window size for sidebars or overlay
window.addEventListener("resize", (e) => {
	searchedItems.style.display = "none";

	if (e.target.innerWidth >= 768) {
		if (navContainerEl.classList.contains("show-search"))
			navContainerEl.classList.remove("show-search");
		searchInput.placeholder = "Search books,genres, authors, etc.";
		removeOverlay();
	} else {
		searchInput.placeholder = "Search...";
	}
});

// search functionality for books
searchInput.addEventListener("input", filterItems);

function filterItems(e) {
	const input = e.target.value.toLowerCase();
	if (input.length >= 1) {
		searchedItems.style.display = "block";
	} else {
		searchedItems.style.display = "none";
	}
	singleBookEl.forEach((book) => {
		const title = book.querySelector(".book-title").textContent.toLowerCase();
		if (title.indexOf(input) != -1) {
			book.style.display = "flex";
		} else {
			book.style.display = "none";
		}
	});
}

const bookContainers = document.querySelectorAll(".section-container");

bookContainers.forEach((bookContainer) => {
	BookData.forEach((book) => {
		// Create a new article element
		const article = document.createElement("article");
		article.className = "book";

		// Create the div for the book image
		const imgContainer = document.createElement("div");
		imgContainer.className = "img-container";
		const img = document.createElement("img");
		img.src = book.image;
		img.alt = book.title;
		imgContainer.appendChild(img);

		// Create the div for book details
		const bookDetails = document.createElement("div");
		bookDetails.className = "book-details";

		// Update the elements for book details
		const bookStatus = document.createElement("h4");
		bookStatus.className = "book-status";
		bookStatus.innerText = book.availability;

		const bookTitle = document.createElement("h3");
		bookTitle.className = "book-title";
		bookTitle.innerText = book.title;

		const bookAuthor = document.createElement("p");
		bookAuthor.className = "book-author";
		bookAuthor.innerText = book.authorAndYear;

		const bookGenre = document.createElement("p");
		bookGenre.className = "book-genre";
		bookGenre.innerText = book.genre;

		// Create the div for book ratings
		const bookRatings = document.createElement("div");
		bookRatings.className = "book-ratings";

		// Create the "rating" section
		const rating = document.createElement("div");
		rating.className = "rating";
		const ratingText = document.createElement("p");
		ratingText.innerText = "Ratings: 4.0";
		const stars = document.createElement("div");
		stars.className = "stars";

		const ratingImg1 = document.createElement("img");
		ratingImg1.src = "./assets/phone/colored-star.svg";
		const ratingImg2 = document.createElement("img");
		ratingImg2.src = "./assets/phone/colored-star.svg";
		const ratingImg3 = document.createElement("img");
		ratingImg3.src = "./assets/phone/colored-star.svg";
		const ratingImg4 = document.createElement("img");
		ratingImg4.src = "./assets/phone/colored-star.svg";
		const ratingImg5 = document.createElement("img");
		ratingImg5.src = "./assets/phone/non-colored-star.svg";

		stars.appendChild(ratingImg1);
		stars.appendChild(ratingImg2);
		stars.appendChild(ratingImg3);
		stars.appendChild(ratingImg4);
		stars.appendChild(ratingImg5);

		// Create the "views" section
		const views = document.createElement("div");
		views.className = "views";
		const viewsIcon = document.createElement("img");
		viewsIcon.src = "./assets/phone/people.svg";
		viewsIcon.alt = "";
		const viewsText = document.createElement("p");
		viewsText.innerText = book.comments;

		// Create the "likes" section
		const likes = document.createElement("div");
		likes.className = "likes";
		const likesIcon = document.createElement("img");
		likesIcon.src = "./assets/phone/love.svg";
		likesIcon.alt = "love icon";
		const likesText = document.createElement("p");
		likesText.innerText = book.likes;

		// Append elements to their respective parents
		rating.appendChild(ratingText);
		rating.appendChild(stars);
		views.appendChild(viewsIcon);
		views.appendChild(viewsText);
		likes.appendChild(likesIcon);
		likes.appendChild(likesText);

		bookRatings.appendChild(rating);
		bookRatings.appendChild(views);
		bookRatings.appendChild(likes);

		// Append the elements to the appropriate parent elements
		bookDetails.appendChild(bookStatus);
		bookDetails.appendChild(bookTitle);
		bookDetails.appendChild(bookAuthor);
		bookDetails.appendChild(bookGenre);
		bookDetails.appendChild(bookRatings);

		// Finally, append the imgContainer and bookDetails to the article
		article.appendChild(imgContainer);
		article.appendChild(bookDetails);

		// Append the article to the bookContainer
		bookContainer.appendChild(article);
	});
});
