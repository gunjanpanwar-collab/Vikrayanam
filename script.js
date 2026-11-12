/* =========================================================
   VIKRAYANAM
   FRONTEND JAVASCRIPT
========================================================= */


/* =========================================================
   DEMO LISTING DATA
=========================================================

   IMPORTANT:

   This is temporary frontend data.

   Later, our Python/Java backend will provide
   this information through an API.

========================================================= */

const listings = [

    {
        id: 1,

        title: "Swaraj 735",

        category: "Tractors",

        price: 400,

        unit: "/hour",

        type: "Rent",

        location: "Rohtak",

        featured: true,

        image:
            "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=900&q=80",

        description:
            "Reliable agricultural tractor available for hourly rental."
    },


    {
        id: 2,

        title: "Mirchi Seeds Packet HYV",

        category: "Seeds",

        price: 260,

        unit: "",

        type: "Sale",

        location: "Hisar",

        featured: true,

        image:
            "https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=900&q=80",

        description:
            "High-yield chilli seeds suitable for agricultural farming."
    },


    {
        id: 3,

        title: "Top Quality Havells Pump",

        category: "Irrigation Tools",

        price: 250,

        unit: "",

        type: "Sale",

        location: "Panipat",

        featured: true,

        image:
            "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=80",

        description:
            "Efficient water pump suitable for irrigation applications."
    },


    {
        id: 4,

        title: "Mahindra Harvester",

        category: "Machines",

        price: 700,

        unit: "/hour",

        type: "Rent",

        location: "Karnal",

        featured: true,

        image:
            "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=900&q=80",

        description:
            "Heavy-duty harvester available for agricultural operations."
    },


    {
        id: 5,

        title: "Disc Harrow",

        category: "Machines",

        price: 550,

        unit: "/hour",

        type: "Rent",

        location: "Sonipat",

        featured: false,

        image:
            "https://images.unsplash.com/photo-1594771804886-a933bb2d609b?auto=format&fit=crop&w=900&q=80",

        description:
            "Agricultural disc harrow for efficient soil preparation."
    },


    {
        id: 6,

        title: "Agricultural Water Motor",

        category: "Irrigation Tools",

        price: 1800,

        unit: "",

        type: "Sale",

        location: "Delhi NCR",

        featured: false,

        image:
            "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=900&q=80",

        description:
            "Water motor suitable for small and medium farms."
    },


    {
        id: 7,

        title: "Automatic Irrigation Timer",

        category: "Irrigation Tools",

        price: 1200,

        unit: "",

        type: "Sale",

        location: "Gurugram",

        featured: false,

        image:
            "https://images.unsplash.com/photo-1586771107445-d3ca888129ce?auto=format&fit=crop&w=900&q=80",

        description:
            "Smart irrigation timer for automated watering."
    },


    {
        id: 8,

        title: "Organic Fertilizer",

        category: "Fertilizers",

        price: 450,

        unit: "/bag",

        type: "Sale",

        location: "Bhiwani",

        featured: false,

        image:
            "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=900&q=80",

        description:
            "Organic fertilizer for improving soil health and crop growth."
    }

];



/* =========================================================
   GET HTML ELEMENTS
========================================================= */

const listingGrid =
    document.getElementById("listingGrid");


const searchInput =
    document.getElementById("searchInput");


const searchButton =
    document.getElementById("searchButton");


const categoryButtons =
    document.querySelectorAll(".category-button");


const noResults =
    document.getElementById("noResults");


const detailsModal =
    document.getElementById("detailsModal");


const sellModal =
    document.getElementById("sellModal");


const sellButton =
    document.getElementById("sellButton");


const closeDetailsModal =
    document.getElementById("closeDetailsModal");


const closeSellModal =
    document.getElementById("closeSellModal");


const sellForm =
    document.getElementById("sellForm");


const notification =
    document.getElementById("notification");


const notificationText =
    document.getElementById("notificationText");



/* =========================================================
   CURRENT CATEGORY
========================================================= */

let currentCategory = "All";



/* =========================================================
   DISPLAY LISTINGS
========================================================= */

function displayListings(items) {

    listingGrid.innerHTML = "";


    if (items.length === 0) {

        noResults.style.display = "block";

        return;

    }


    noResults.style.display = "none";


    items.forEach(item => {

        const card =
            document.createElement("article");


        card.className = "listing-card";


        card.innerHTML = `

            <div class="image-container">

                <img
                    src="${item.image}"
                    alt="${item.title}"
                    loading="lazy"
                >


                <button
                    class="card-plus"
                    data-id="${item.id}"
                    aria-label="View ${item.title}"
                >
                    +
                </button>


                ${
                    item.featured
                    ?
                    `<span class="featured-badge">
                        Featured
                    </span>`
                    :
                    ""
                }

            </div>


            <div class="card-info">

                <div class="price">

                    ₹${item.price}

                    <small>
                        ${item.unit}
                    </small>

                </div>


                <div class="item-title">

                    ${item.title}

                </div>


                <div class="item-location">

                    ⌖ ${item.location}

                </div>


                <span class="item-type">

                    ${item.type}

                </span>

            </div>

        `;


        listingGrid.appendChild(card);

    });


    addCardListeners();

}



/* =========================================================
   CARD BUTTON LISTENERS
========================================================= */

function addCardListeners() {

    const plusButtons =
        document.querySelectorAll(".card-plus");


    plusButtons.forEach(button => {

        button.addEventListener(
            "click",
            function () {

                const id =
                    Number(this.dataset.id);


                openDetails(id);

            }
        );

    });

}



/* =========================================================
   OPEN LISTING DETAILS
========================================================= */

function openDetails(id) {

    const item =
        listings.find(
            listing => listing.id === id
        );


    if (!item) {

        return;

    }


    document.getElementById("modalImage").src =
        item.image;


    document.getElementById("modalImage").alt =
        item.title;


    document.getElementById("modalCategory").textContent =
        item.category;


    document.getElementById("modalTitle").textContent =
        item.title;


    document.getElementById("modalPrice").textContent =
        item.price;


    document.getElementById("modalUnit").textContent =
        item.unit;


    document.getElementById("modalDescription").textContent =
        item.description;


    document.getElementById("modalLocation").textContent =
        item.location;


    detailsModal.classList.add("show");


    /* Store selected item */

    detailsModal.dataset.selectedId =
        item.id;

}



/* =========================================================
   CLOSE DETAILS MODAL
========================================================= */

closeDetailsModal.addEventListener(
    "click",
    function () {

        detailsModal.classList.remove("show");

    }
);



/* =========================================================
   CLOSE MODALS WHEN CLICKING BACKGROUND
========================================================= */

detailsModal.addEventListener(
    "click",
    function (event) {

        if (event.target === detailsModal) {

            detailsModal.classList.remove("show");

        }

    }
);


sellModal.addEventListener(
    "click",
    function (event) {

        if (event.target === sellModal) {

            sellModal.classList.remove("show");

        }

    }
);



/* =========================================================
   SELL BUTTON
========================================================= */

sellButton.addEventListener(
    "click",
    function () {

        sellModal.classList.add("show");

    }
);



/* =========================================================
   CLOSE SELL MODAL
========================================================= */

closeSellModal.addEventListener(
    "click",
    function () {

        sellModal.classList.remove("show");

    }
);



/* =========================================================
   CATEGORY FILTER
========================================================= */

categoryButtons.forEach(button => {

    button.addEventListener(
        "click",
        function () {


            /* Remove active class */

            categoryButtons.forEach(
                btn =>
                    btn.classList.remove("active")
            );


            /* Add active class */

            this.classList.add("active");


            /* Get category */

            currentCategory =
                this.dataset.category;


            filterListings();

        }
    );

});



/* =========================================================
   SEARCH
========================================================= */

searchInput.addEventListener(
    "input",
    filterListings
);


searchButton.addEventListener(
    "click",
    filterListings
);



/* =========================================================
   FILTER LISTINGS
========================================================= */

function filterListings() {

    const searchTerm =
        searchInput.value
        .toLowerCase()
        .trim();


    const filteredListings =
        listings.filter(item => {


            const matchesCategory =
                currentCategory === "All"
                ||
                item.category === currentCategory;


            const matchesSearch =
                item.title
                    .toLowerCase()
                    .includes(searchTerm)
                ||
                item.category
                    .toLowerCase()
                    .includes(searchTerm)
                ||
                item.location
                    .toLowerCase()
                    .includes(searchTerm);


            return (
                matchesCategory
                &&
                matchesSearch
            );

        });


    displayListings(filteredListings);

}



/* =========================================================
   SELL FORM
========================================================= */

sellForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById("itemName").value;


        const category =
            document.getElementById("itemCategory").value;


        const price =
            Number(
                document.getElementById("itemPrice").value
            );


        const type =
            document.getElementById("itemType").value;


        const location =
            document.getElementById("itemLocation").value;


        const newListing = {

            id:
                Date.now(),

            title:
                name,

            category:
                category,

            price:
                price,

            unit:
                type === "Rent"
                ? "/hour"
                : "",

            type:
                type,

            location:
                location,

            featured:
                false,

            image:
                "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=900&q=80",

            description:
                "New agricultural listing added by a farmer."

        };


        listings.unshift(newListing);


        displayListings(listings);


        sellForm.reset();


        sellModal.classList.remove("show");


        showNotification(
            "Your listing has been added!"
        );

    }
);



/* =========================================================
   SEND REQUEST
========================================================= */

document
    .getElementById("requestButton")
    .addEventListener(
        "click",
        function () {

            showNotification(
                "Request sent to the owner!"
            );

        }
    );



/* =========================================================
   CHAT BUTTON
========================================================= */

document
    .getElementById("chatButton")
    .addEventListener(
        "click",
        function () {

            showNotification(
                "Chat feature will connect to the backend."
            );

        }
    );



/* =========================================================
   LOCATION
========================================================= */

document
    .getElementById("locationButton")
    .addEventListener(
        "click",
        function () {


            const location =
                prompt(
                    "Enter your village, town or city:"
                );


            if (location) {

                document.getElementById(
                    "locationText"
                ).textContent = location;


                showNotification(
                    `Location set to ${location}`
                );

            }

        }
    );



/* =========================================================
   LANGUAGE BUTTON
========================================================= */

document
    .getElementById("languageButton")
    .addEventListener(
        "click",
        function () {

            showNotification(
                "Hindi / English language support coming soon."
            );

        }
    );



/* =========================================================
   PROFILE BUTTON
========================================================= */

document
    .getElementById("profileButton")
    .addEventListener(
        "click",
        function () {

            showNotification(
                "Profile section will connect to the backend."
            );

        }
    );



/* =========================================================
   MORE BUTTON
========================================================= */

document
    .getElementById("moreButton")
    .addEventListener(
        "click",
        function () {

            showNotification(
                "More categories coming soon."
            );

        }
    );



/* =========================================================
   HELP BUTTON
========================================================= */

document
    .getElementById("helpButton")
    .addEventListener(
        "click",
        function () {

            showNotification(
                "Need help? Vikrayanam support will be available here."
            );

        }
    );



/* =========================================================
   FILTER BUTTON
========================================================= */

document
    .getElementById("filterButton")
    .addEventListener(
        "click",
        function () {

            showNotification(
                "Advanced filters coming soon."
            );

        }
    );



/* =========================================================
   NOTIFICATION FUNCTION
========================================================= */

function showNotification(message) {

    notificationText.textContent =
        message;


    notification.classList.add("show");


    setTimeout(
        function () {

            notification.classList.remove("show");

        },
        2500
    );

}



/* =========================================================
   INITIALIZE WEBSITE
========================================================= */

displayListings(listings);