const { createApp } = Vue;

createApp({
    data() {
        return {
            // tutti i nostri dati

            saluto: "Hello World",
            immagine: "https://www.astronomy.com/wp-content/uploads/sites/2/2023/10/the-earth.jpg?fit=2048%2C2048",

        }
    }
}).mount("#app");