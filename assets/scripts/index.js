document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.form-step');
    const nextButtons = document.querySelectorAll('.next-step');
    const prevButtons = document.querySelectorAll('.prev-step');
    const stepIndicators = document.querySelectorAll('.sidebar .step');

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

    function updateStepIndicator(step) {
        stepIndicators.forEach((indicator, index) => {
            if (index === step) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
});
