
const projectData = {
    'sarcasm': {
        title: 'Sarcasm Detection in Text and Image',
        content: `
            <ul>
                <li>Built a Multimodal Sarcasm Detection system using deep learning (Bi-LSTM + GloVe + ResNet50 with Global Average Pooling), fusing Text, Image, and Attribute modalities via a Hierarchical Attention Fusion architecture on a 21,586-tweet dataset.</li>
                <li>Proposed Hierarchical Attention Model achieved 83% accuracy and 0.81 precision, outperforming the Simple Fusion baseline (82% accuracy, 0.78 precision), with an ROC-AUC of 0.90 — validating dual attention mechanisms for resolving cross-modal semantic incongruity.</li>
                <li>Implemented data sanitization to remove ground-truth leakage keywords, applied GloVe (200D) embeddings with sequence padding, and adapted ResNet50 with GAP to generate compact 2048-dimensional visual feature vectors for computationally efficient multimodal fusion.</li>
            </ul>
        `
    },
    'amazon': {
        title: 'Amazon Recommendation System',
        content: `
            <p><strong>Timeline:</strong> April 2025 – May 2025</p>
            <ul>
                <li>Developed a personalized recommendation system using the Amazon product review dataset containing 10,000+ user reviews, focusing on predicting user preferences and improving product discovery.</li>
                <li>Implemented Collaborative Filtering techniques including user-based and item-based filtering to recommend products based on similarity between users and items.</li>
                <li>Applied Matrix Factorization algorithms such as Singular Value Decomposition (SVD) to decompose the user-item interaction matrix and capture latent relationships between users and products.</li>
                <li>Performed data preprocessing and feature engineering including cleaning review data, creating user-item matrices, handling sparse data, and normalizing rating values.</li>
                <li>Conducted hyperparameter tuning to optimize model parameters such as latent factors, learning rate, and regularization to improve recommendation accuracy.</li>
                <li>Evaluated model performance using RMSE (Root Mean Square Error) for rating prediction and Precision@K metrics to measure recommendation relevance.</li>
                <li>Used Python, Scikit-learn, Pandas, and NumPy for model implementation, data manipulation, and evaluation.</li>
                <li>Generated personalized top-N product recommendations for users, improving the system’s ability to suggest relevant products based on historical interactions.</li>
            </ul>
        `
    },
    'pipeline': {
        title: 'CodePipeline using Terraform & DevSecOps',
        content: `
            <p><strong>Timeline:</strong> June 2025</p>
            <ul>
                <li>Designed and implemented a CI/CD pipeline using AWS CodePipeline for automated application deployment across cloud infrastructure environments.</li>
                <li>Provisioned infrastructure using Terraform Infrastructure as Code (IaC) to automate resource creation, version control infrastructure changes, and ensure reproducible deployments.</li>
                <li>Integrated DevSecOps practices by embedding automated security scanning tools such as tfsec and Trivy within GitHub Actions workflows to detect infrastructure misconfigurations and container vulnerabilities during the build pipeline.</li>
                <li>Implemented GitHub Actions CI pipelines for automated code validation, security checks, and infrastructure provisioning before deployment to AWS services.</li>
                <li>Managed Kubernetes secrets securely using Kubernetes Sealed Secrets, enabling encrypted secret storage in Git repositories while maintaining secure access across multiple namespaces.</li>
                <li>Adopted a GitOps-based deployment workflow, ensuring infrastructure and application configurations were version-controlled, auditable, and automatically synchronized with the Kubernetes cluster.</li>
                <li>Improved pipeline security and deployment reliability by integrating automated vulnerability scanning, encrypted secrets management, and infrastructure automation.</li>
                <li>Strengthened secure cloud deployment practices by combining Terraform, Kubernetes, AWS CodePipeline, GitHub Actions, and container security tools.</li>
            </ul>
        `
    },
    'codepipeline-demo': {
        title: 'AWS CodePipeline Demo',
        content: `
            <p><strong>Timeline:</strong> 2024</p>
            <ul>
                <li>Developed a demonstration project using React and Vite to showcase CI/CD integration with AWS CodePipeline.</li>
                <li>Configured automated build and deployment workflows, ensuring seamless code updates from GitHub to AWS hosting.</li>
                <li>Implemented best practices for modern web development using ESLint and standard React patterns for high-performance frontend applications.</li>
                <li>Focused on exploring Vite's HMR (Hot Module Replacement) and optimized build processes for cloud-native deployment.</li>
            </ul>
        `
    }
};


function openModal(projectId) {
    const modal = document.getElementById('projectModal');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');
    const data = projectData[projectId];

    if (data) {
        title.innerHTML = data.title;
        body.innerHTML = data.content;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Close modal when clicking outside
window.onclick = function (event) {
    const modal = document.getElementById('projectModal');
    if (event.target == modal) {
        closeModal();
    }
};
