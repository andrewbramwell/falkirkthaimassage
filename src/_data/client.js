module.exports = {
    "name": "Falkirk Thai Massage",
    "email": "falkkirkthaimassage@gmail.com",
    "phoneForTel": "+447564752559",
    "phoneFormatted": "07564 752559",
    "openingHours": "Mon-Sun: 10am-8pm",
    "onlineBooking": "https://falkirkthaimassage.setmore.com/",
    "address": {
        "lineOne": "118 Main St",
        "lineTwo": "Bainsford",
        "city": "Falkirk",
        "state": "",
        "zip": "FK2 7PA",
        "country": "UK",
        "mapLink": "https://maps.app.goo.gl/hwRRnn2hBEmNaGwX7"
    },
    "socials": {
        "facebook": "",
        "instagram": "",
        "googleReview": "",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    "domain": "https://www.falkirkthaimassage.co.uk",
    "schema": {
        "business": {
            "@context": "https://schema.org",
            "@type": "HealthAndBeautyBusiness",
            "@id": "https://www.falkirkthaimassage.co.uk/#business",
            "name": "Falkirk Thai Massage",
            "image": "https://www.falkirkthaimassage.co.uk/assets/svgs/logo-white.svg",
            "url": "https://www.falkirkthaimassage.co.uk",
            "telephone": "+447564752559",
            "email": "falkkirkthaimassage@gmail.com",
            "priceRange": "££",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "118 Main St, Bainsford",
                "addressLocality": "Falkirk",
                "postalCode": "FK2 7PA",
                "addressCountry": "GB"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "url": "https://maps.app.goo.gl/hwRRnn2hBEmNaGwX7"
            },
            "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "10:00",
                "closes": "20:00"
            }
        },
        "website": {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://www.falkirkthaimassage.co.uk/#website",
            "url": "https://www.falkirkthaimassage.co.uk",
            "name": "Falkirk Thai Massage",
            "publisher": {
                "@id": "https://www.falkirkthaimassage.co.uk/#business"
            }
        }
    }
};
