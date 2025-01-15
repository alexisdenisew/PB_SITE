document.addEventListener("DOMContentLoaded", () => {
    const categoryMap = {
        "face masks": "skincare",
        "cleansers": "skincare",
        "acne": "skincare",
        "moisturizers": "skincare",
        "skincare": "skincare",
        "bags": "bags",
        "accessories": "bags",
        "fashion": "fashion",
        "streetwear": "fashion",
        "apparel": "fashion",
        "tops": "fashion",
        "bottoms": "fashion",
        "pants": "fashion",
        "dresses": "fashion",
        "shirts": "fashion",
        "beauty": "beauty",
        "lipstick": "beauty",
        "blush": "beauty",
        "foundation": "beauty",
        "concealer": "beauty",
        "": ""
    };

    const brandData = {
        small : [
            {
                name: "PLAYA SOCIETY",
                description: "Playa society is a streetwear brand specializing in design + storytelling for women's sports.",
                link: "https://www.playasociety.com/",
            },
            {
                name: "Johnny Nelson",
                description: "JOHNNY NELSON JEWELRY - NEW YORK - Conversation Pieces That Catch The Eye.",
                link: "https://johnnynelson.nyc/",
            },
            {
                name: "Solani",
                description: "Solani is a brand rooted in imagination, individuality, and connection.",
                link: "https://shopsolani.com/",
            }
        ],
        beauty: [
            {
                name: "Fenty Beauty",
                description: "Fenty Beauty redefines inclusive beauty with a wide range of products for all skin tones.",
                link: "https://fentybeauty.com",
            },
            {
                name: "Wyn Beauty",
                description: "WYN BEAUTY was developed by Serena Williams as makeup you can move in.",
                link: "https://www.wynbeauty.com/",
            },
        ],
        skincare: [
            {
                name: "Topicals",
                description: "Topicals offers innovative skincare solutions designed to heal and rejuvenate your skin.",
                link: "https://topicals.com",
            },
            {
                name: "Sweet July Skin",
                description: "Modern skincare enhanced with carribean superfoods.",
                link: "https://sweetjuly.com/pages/home-skin?utm_campaign=Skin-Brand-Terms-Exact&gad_source=1&gclid=Cj0KCQiAs5i8BhDmARIsAGE4xHyK6sN0Hqxmxv-AWL6DWsRhXRt-nZgNWc1rUcchVVpD5tdKO5Xb0SsaAsGwEALw_wcB&sscid=11k9_fxzc0&",
            },
            {
                name: "Fenty Beauty",
                description: "Fenty Beauty redefines inclusive beauty with a wide range of products for all skin tones.",
                link: "https://fentybeauty.com",
            }
        ],
        fashion: [
            {
                name: "Theophilio",
                description: "Theophilio is known for its vibrant use of colors, bold prints, and nostalgia-driven pieces.",
                link: "https://theophilio.com/?srsltid=AfmBOoqnxx2Tz2rCR0COPD3xtXiuze64zNGInBW0CFwFTj55z6idfdDd",
            },
            {
                name: "Diotima",
                description: "Diotima merges Caribbean culture with avant-garde fashion.",
                link: "https://diotima.world/?srsltid=AfmBOoociC_RCBOEv1ZPL2uYCXlSX9l8p7jfT1l0GuV50aHVh9StM-M9",
            },
            {
                name: "Sergio Hudson",
                description: "Sergio Hudson’s brand combines high-fashion and contemporary style, featuring tailored pieces that exude confidence and sophistication.",
                link: "https://sergiohudson.com/",
            },
            {
                name: "LaQuan Smith",
                description: "LaQuan Smith specializes in bold, statement-making designs often seen on celebrities and fashion-forward individuals.",
                link: "https://www.laquansmith.com",
            },
            {
                name: "Pyer Moss",
                description: "Pyer Moss blends storytelling and activism with fashion, creating collections that celebrate Black culture and history.",
                link: "https://www.pyermoss.com",
            },
        ],
        bags: [
            {
                name: "Telfar",
                description: "TELFAR is a unisex line Est. in 2005 in NYC by Telfar Clemens. It's not for you — it's for everyone.",
                link: "https://telfar.net/",
            },
            {
                name: "Brandon Blackwood",
                description: "The Brandon Blackwood philosophy believes in creating pieces that are timeless and classic silhouettes with a trendy edge.",
                link: "https://brandonblackwood.com/",
            },
        ],
        accessories: [
            {
                name: "Brother Vellies",
                description: "Brother Vellies is a Black owned and female led lifestyle and accessories brand redefining luxury.",
                link: "https://brothervellies.com/",
            },
            {
                name: "Telfar",
                description: "TELFAR is a unisex line Est. in 2005 in NYC by Telfar Clemens. It's not for you — it's for everyone.",
                link: "https://telfar.net/",
            },
            {
                name: "Brandon Blackwood",
                description: "The Brandon Blackwood philosophy believes in creating pieces that are timeless and classic silhouettes with a trendy edge.",
                link: "https://brandonblackwood.com/",
            }
        ],
    };

    const searchBar = document.getElementById("search-bar");
    const searchButton = document.getElementById("search-button");
    const resultsContainer = document.getElementById("results-container");
    const mediaContainer = document.createElement("div");
    mediaContainer.className = "custom-media-container";

    const createCard = (brand) => {
        const mediaCard = document.createElement("div");
        mediaCard.className = "custom-media-card";

        const imageContainer = document.createElement("div");
        imageContainer.className = "custom-image-container";

        const img = document.createElement("img");
        img.src = `assets/shops/${brand.name.toLowerCase()}.png`;
        img.alt = brand.name;
        img.className = "custom-image";

        imageContainer.appendChild(img);

        const mediaInfo = document.createElement("div");
        mediaInfo.className = "custom-media-info";

        const title = document.createElement("h4");
        title.className = "custom-media-title";
        const link = document.createElement("a");
        link.href = brand.link;
        link.textContent = brand.name;
        link.target = "_blank";
        title.appendChild(link);

        const description = document.createElement("p");
        description.className = "custom-media-description";
        description.textContent = brand.description;

        mediaInfo.appendChild(title);
        mediaInfo.appendChild(description);

        mediaCard.appendChild(imageContainer);
        mediaCard.appendChild(mediaInfo);

        return mediaCard;
    };

    const renderCards = (category) => {
        mediaContainer.innerHTML = ""; // Clear previous cards in the container
        brandData[category].forEach((brand) => {
            const card = createCard(brand);
            mediaContainer.appendChild(card);
        });
        resultsContainer.appendChild(mediaContainer);
    };

    const renderInitialCards = () => {
        mediaContainer.innerHTML = ""; // Clear container for initial render
        const initialCategories = ["small", "bags"];
        initialCategories.forEach((category) => {
            if (brandData[category]) {
                brandData[category].forEach((brand) => {
                    const card = createCard(brand);
                    mediaContainer.appendChild(card);
                });
            }
        });
        resultsContainer.appendChild(mediaContainer);
    };

    // Function to normalize singular/plural search terms
    const normalizeSearchTerm = (term) => {
        const singular = term.endsWith("s") ? term.slice(0, -1) : term;
        const plural = term.endsWith("s") ? term : `${term}s`;

        // Check if either singular or plural matches a category
        if (categoryMap[singular]) {
            return categoryMap[singular];
        }
        if (categoryMap[plural]) {
            return categoryMap[plural];
        }

        return null;
    };

    const performSearch = () => {
        const query = searchBar.value.toLowerCase().trim();
        resultsContainer.innerHTML = ""; // Clear previous results

        if (query === "") {
            renderInitialCards();
            return;
        }

        const category = normalizeSearchTerm(query);
        if (category && brandData[category]) {
            renderCards(category);
        } else {
            const noResultsMessage = document.createElement("p");
            noResultsMessage.className = "custom-no-results";
            noResultsMessage.textContent = "No brands found for your search.";
            resultsContainer.appendChild(noResultsMessage);
        }
    };

    renderInitialCards();

    searchButton.addEventListener("click", performSearch);
    searchBar.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            performSearch();
        }
    });
});
