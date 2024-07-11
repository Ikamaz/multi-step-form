document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.form-step');
    const nextButtons = document.querySelectorAll('.next-step');
    const prevButtons = document.querySelectorAll('.prev-step');
    const stepIndicators = document.querySelectorAll('.sidebar .step');
    const billingToggle = document.getElementById('billing-toggle');
    const prices = document.querySelectorAll('.price');

    let currentStep = 0;

    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            steps[currentStep].style.display = 'none';
            currentStep++;
            steps[currentStep].style.display = 'block';
            updateStepIndicator(currentStep);
        });
    });

    prevButtons.forEach(button => {
        button.addEventListener('click', () => {
            steps[currentStep].style.display = 'none';
            currentStep--;
            steps[currentStep].style.display = 'block';
            updateStepIndicator(currentStep);
        });
    });

    billingToggle.addEventListener('change', () => {
        prices.forEach(price => {
            if (billingToggle.checked) {
                price.style.display = price.classList.contains('monthly') ? 'block' : 'none';
                document.querySelector('.billing-text').textContent = 'Yearly Billing';
            } else {
                price.style.display = price.classList.contains('yearly') ? 'block' : 'none';
                document.querySelector('.billing-text').textContent = 'Monthly Billing';
            }
        });
    });

    function updateStepIndicator(step) {
        stepIndicators.forEach((indicator, index) => {
            if (index === step) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    prices.forEach(price => {
        if (price.classList.contains('monthly')) {
            price.style.display = 'none';
        }
    });
});
