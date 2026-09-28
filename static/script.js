document.addEventListener('DOMContentLoaded', () => {
    const reviewInput = document.getElementById('reviewInput');
    const analyzeForm = document.getElementById('analyzeForm');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    const btnSpinner = document.getElementById('btnSpinner');
    const loadingOverlay = document.getElementById('loadingOverlay');
    const charCount = document.getElementById('charCount');
    const clearBtn = document.getElementById('clearBtn');
    const exampleBtns = document.querySelectorAll('.example-btn');
    const resultCard = document.getElementById('resultCard');

    // Update character count
    function updateCharCount() {
        if (reviewInput && charCount) {
            const count = reviewInput.value.trim().length;
            charCount.textContent = count;
        }
    }

    if (reviewInput) {
        reviewInput.addEventListener('input', updateCharCount);
        updateCharCount();
    }

    // Clear input button
    if (clearBtn && reviewInput) {
        clearBtn.addEventListener('click', () => {
            reviewInput.value = '';
            reviewInput.focus();
            updateCharCount();
        });
    }

    // Example review buttons
    exampleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const sampleText = btn.getAttribute('data-sample');
            if (sampleText && reviewInput) {
                reviewInput.value = sampleText;
                reviewInput.focus();
                updateCharCount();

                // Highlight animation
                reviewInput.classList.remove('highlight-input');
                void reviewInput.offsetWidth; // Trigger reflow
                reviewInput.classList.add('highlight-input');
            }
        });
    });

    // Form submit loading state
    if (analyzeForm && submitBtn) {
        analyzeForm.addEventListener('submit', (e) => {
            if (!reviewInput.value.trim()) {
                e.preventDefault();
                reviewInput.focus();
                return;
            }

            // Show loading UI
            submitBtn.disabled = true;
            if (btnSpinner) btnSpinner.classList.remove('hidden');
            if (btnText) btnText.textContent = 'กำลังวิเคราะห์ความรู้สึกด้วย AI...';
            if (loadingOverlay) loadingOverlay.classList.remove('hidden');
        });
    }

    // Smooth scroll to result if available
    if (resultCard) {
        setTimeout(() => {
            resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 150);
    }
});
