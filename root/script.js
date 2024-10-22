document.addEventListener('DOMContentLoaded', () => {
    // Initialize VANTA.HALO
    VANTA.HALO({
        el: "#background",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        baseColor: 0x0,
        backgroundColor: 0x0,
        amplitudeFactor: 3.50,
        xOffset: 0.22,
        yOffset: 0.07,
        size: 2.00
    });

    const title = document.getElementById('title');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const privacyButton = document.getElementById('privacy');
    const termsButton = document.getElementById('terms');
    const closeButton = document.getElementById('close');

    // New hover effect for title
    title.addEventListener('mousemove', (e) => {
        const { offsetX, offsetY } = e;
        const { offsetWidth, offsetHeight } = title;
        
        // Calculate rotation based on mouse position
        const rotateX = (offsetY / offsetHeight - 0.5) * 20;
        const rotateY = -(offsetX / offsetWidth - 0.5) * 20;
        
        // Apply 3D rotation and add glow effect
        title.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        title.style.textShadow = `
            0 0 5px rgba(255,255,255,0.5),
            0 0 10px rgba(255,255,255,0.5)
        `;
    });

    title.addEventListener('mouseout', () => {
        title.style.transform = 'scale(1)';
        title.style.textShadow = 'none';
    });

    // Content for privacy policy and terms
    const privacyContent = `
        <h2>Privacy Policy</h2>
        <p>This is a placeholder for the privacy policy. Replace this content with your actual privacy policy.</p>
    `;

    const termsContent = `
        <h2>Terms and Conditions</h2>
        <p>This is a placeholder for the terms and conditions. Replace this content with your actual terms and conditions.</p>
    `;

    // Show content and modal
    function showContent(content) {
        modalContent.innerHTML = content;
        modal.classList.remove('hidden');
    }

    privacyButton.addEventListener('click', () => showContent(privacyContent));
    termsButton.addEventListener('click', () => showContent(termsContent));
    closeButton.addEventListener('click', () => modal.classList.add('hidden'));
});
