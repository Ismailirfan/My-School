//# JavaScript (script.js)
```
document.addEventListener('DOMContentLoaded', async () => {
    async function fetchKeys() {
        const response = await fetch('/api/get-keys');
        return await response.json();
    }

    const keys = await fetchKeys();
    const keyboardContainer = document.getElementById('custom-keyboard-container');
    
    keys.forEach(key => {
        const button = document.createElement('button');
        button.classList.add('key');
        button.textContent = key;
        keyboardContainer.appendChild(button);
    });

    document.addEventListener('mousemove', (e) => {
        keyboardContainer.style.top = `${e.clientY + 10}px`;
        keyboardContainer.style.left = `${e.clientX + 10}px`;
    });

    document.getElementById('search-input').addEventListener('focus', () => {
        keyboardContainer.style.display = 'block';
    });

    document.getElementById('search-input').addEventListener('blur', () => {
        setTimeout(() => {
            keyboardContainer.style.display = 'none';
        }, 200);
    });

    document.querySelectorAll('.key').forEach(button => {
        button.addEventListener('click', () => {
            document.getElementById('search-input').textContent = button.textContent;
        });
    });
});
