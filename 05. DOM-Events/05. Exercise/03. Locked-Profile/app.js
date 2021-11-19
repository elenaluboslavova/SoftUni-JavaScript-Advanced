function lockedProfile() {
    Array.from(document.querySelectorAll('div.profile button')).forEach(b => b.addEventListener('click', onToggle));

    function onToggle(event) {
        const profile = event.target.parentElement;
        const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;
        if (isActive) {
            const infoDiv = Array
                .from(profile.querySelectorAll('div'))
                .find(d => d.id.includes('HiddenFields'));

            if (event.target.textContent == 'Show more') {
                infoDiv.style.display = 'block';
                event.target.textContent = 'Hide it';
            } else {
                infoDiv.style.display = '';
                event.target.textContent = 'Show more';
            }
        }
    }
}