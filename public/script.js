document.addEventListener('DOMContentLoaded', () => {
    const userContainer = document.getElementById("user-container");

    async function fetchAndDisplayUsers(){
        try {
            const response = await fetch("http://localhost:3000/api/users");
            const users = await response.json();

            userContainer.innerHTML = "";

            if (users.length === 0) {
                userContainer.innerHTML = "<p>No users found.</p>";
                return;
            }

            users.forEach(user => {
                const card = document.createElement("div");
                card.className = "user-card";

                card.innerHTML = `
                <img src="${user.avatarUrl}" alt="${user.name}'s avatar">
                <h2>${user.name}</h2>
                <p>${user.email}</p>
                `

                userContainer.appendChild(card);
            });
        } catch (error) {
            console.error("Error fetching users:", error);
            userContainer.innerHTML = "<p>Failed to load users.</p>";
        }
    }
})