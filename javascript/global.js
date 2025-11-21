document.addEventListener('DOMContentLoaded', function() {
    // --- Load Profile Data ---
    function loadProfileData() {
        const savedDisplayName = localStorage.getItem('userDisplayName');
        const savedAvatar = localStorage.getItem('userAvatarUrl');

        const profileAvatar = document.getElementById("profileAvatar");
        const displayProfileName = document.getElementById("displayProfileName");

        if (displayProfileName) {
            if (savedDisplayName) {
                displayProfileName.textContent = savedDisplayName;
            } else {
                displayProfileName.textContent = "Gregorius Olvans";
            }
        }

        if (profileAvatar) {
            if (savedAvatar) {
                profileAvatar.src = savedAvatar;
            } else {
                profileAvatar.src = "https://api.dicebear.com/9.x/avataaars/svg?seed=Greg";
            }
        }
    }
    loadProfileData();
});