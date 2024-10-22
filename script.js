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
        <p><em>Last updated: October 17, 2024</em></p>

        <p>Buildingtrap ("we," "us," or "our") operates the iOS application Winter Arc Schedule ("the App"). We are committed to protecting your privacy and ensuring a safe user experience. This Privacy Policy outlines our policies regarding the collection, use, and disclosure of personal information when you use our App.</p>

        <h3>1. Information We Do Not Collect</h3>
        <p>We do not collect, store, or process any personal or sensitive user data through the App. You can use all features of the App without providing any personal information.</p>

        <h3>2. Use of Third-Party Services</h3>
        <p>While we do not collect any data, the App utilizes the OpenAI API to provide certain functionalities. Please be aware that while we do not store any information, the OpenAI API may process data as part of its operations. For details on how OpenAI handles data, please refer to the OpenAI Privacy Policy.</p>

        <h3>3. Data Sharing and Disclosure</h3>
        <p>Since we do not collect any personal data, we do not share any information with third parties.</p>

        <h3>4. International Availability</h3>
        <p>Our App is available globally except in China. By using the App, you consent to the processing of your information (if any) in countries where our servers or third-party service providers are located.</p>

        <h3>5. Children's Privacy</h3>
        <p>There is no minimum age requirement to use our App. However, we encourage parents and guardians to supervise the usage of the App by minors.</p>

        <h3>6. In-App Purchases</h3>
        <p>The App offers in-app subscriptions, including weekly and quarterly options. All transactions are processed through Apple's App Store and are subject to Apple's Privacy Policy and Terms of Service. We do not collect or store any payment information.</p>

        <h3>7. Security</h3>
        <p>Although we do not collect personal data, we are committed to ensuring that any potential interactions with third-party services are secure. However, please be aware that no method of electronic transmission or storage is 100% secure.</p>

        <h3>8. Changes to This Privacy Policy</h3>
        <p>We may update our Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date. We encourage you to review this Privacy Policy periodically.</p>

        <h3>9. Contact Us</h3>
        <p>If you have any questions or concerns about this Privacy Policy, please contact us:</p>
        <ul>
            <li>Email: yinka@buildingtrap.com</li>
            <li>Company: Buildingtrap</li>
            <li>Website: buildingtrap.com</li>
        </ul>
    `;

    const termsContent = `
        <h2>Terms and Conditions</h2>
        <p><em>Last updated: October 17, 2024</em></p>

        <p>Welcome to Winter Arc Schedule ("the App"), operated by Buildingtrap ("we," "us," or "our"). By accessing or using the App, you agree to be bound by these Terms and Conditions ("Terms"). If you disagree with any part of the Terms, you may not access the App.</p>

        <h3>1. Acceptance of Terms</h3>
        <p>By downloading, accessing, or using the App, you agree to be bound by these Terms. These Terms apply to all visitors, users, and others who access or use the App.</p>

        <h3>2. Use of the App</h3>
        <p>The App is provided for your personal, non-commercial use only. You agree not to use the App for any unlawful purpose or in any way that might harm, damage, or disparage any other party.</p>

        <h3>3. In-App Purchases</h3>
        <ul>
            <li>Subscriptions: The App offers in-app subscriptions, including weekly and quarterly options.</li>
            <li>Payment Processing: All payments are processed through Apple's App Store. We do not collect or store any payment information.</li>
            <li>No Refund Policy: All sales are final. We do not offer refunds for in-app purchases, including subscriptions.</li>
        </ul>

        <h3>4. Intellectual Property Rights</h3>
        <p>All content, features, and functionality on the App, including but not limited to text, graphics, logos, and software, are the exclusive property of Buildingtrap and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>

        <h3>5. Limitation of Liability</h3>
        <p>In no event shall Buildingtrap be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses resulting from:</p>
        <ul>
            <li>Your access to or use of or inability to access or use the App.</li>
            <li>Any conduct or content of any third party on the App.</li>
            <li>Any content obtained from the App.</li>
            <li>Unauthorized access, use, or alteration of your transmissions or content.</li>
        </ul>
        <p>We are not liable for any actions you take as a result of using the App.</p>

        <h3>6. Disclaimer of Warranties</h3>
        <p>The App is provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, whether express or implied, regarding the App's operation or the information, content, or materials included therein.</p>

        <h3>7. Indemnification</h3>
        <p>You agree to defend, indemnify, and hold harmless Buildingtrap and its employees, contractors, agents, officers, and directors from and against any liabilities, damages, losses, costs, or expenses arising from your use of the App or violation of these Terms.</p>

        <h3>8. Governing Law</h3>
        <p>These Terms shall be governed and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.</p>

        <h3>9. Changes to Terms</h3>
        <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. Changes will be posted on this page with an updated "Last updated" date. By continuing to access or use our App after any revisions become effective, you agree to be bound by the revised Terms.</p>

        <h3>10. Contact Us</h3>
        <p>If you have any questions about these Terms, please contact us:</p>
        <ul>
            <li>Email: yinka@buildingtrap.com</li>
            <li>Company: Buildingtrap</li>
            <li>Website: buildingtrap.com</li>
        </ul>
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
