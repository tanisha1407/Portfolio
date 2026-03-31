// Complete Project Data for all 9 projects
const projectsData = {
    1: {
        id: 1,
        title: "AI-Powered Credit Summary Generation",
        icon: "💰",
        shortDesc: "Async AI narrative generation service integrated with Salesforce CRM",
        fullDescription: "An advanced AI-powered microservice that automatically generates comprehensive credit summaries for banking applications. The system integrates with Salesforce CRM and uses Google Gemini LLM to generate detailed narratives about customer profiles, family backgrounds, and business profiles.",
        features: [
            "Kafka-based producer-consumer pipeline with dual-topic architecture for reliable message processing",
            "Google Gemini 2.5 Pro integration with automatic model fallback for high availability",
            "Token-level cost tracking and optimization to minimize API costs",
            "AWS EC2 deployment with systemd service for 99.9% uptime",
            "PostgreSQL job state management with retry logic for failed jobs",
            "Salesforce callback integration for seamless CRM workflow"
        ],
        techStack: ["FastAPI", "Kafka", "PostgreSQL", "AWS EC2", "Gemini AI", "Python", "Docker"],
        // githubUrl: "https://github.com/tanisha1407/credit-summary-ai",
        // demoUrl: "videos/demo.mp4",
        // liveUrl: "https://credit-summary-demo.com",
        metrics: {
            "Processing Time": "↓ 65%",
            "Accuracy": "94%",
            "Cost Saved": "40%"
        }
    },
    2: {
        id: 2,
        title: "AI Test Orchestrator Chrome Extension",
        icon: "🤖",
        shortDesc: "Autonomous web test automation using LLMs and Chrome extension",
        fullDescription: "A revolutionary Chrome extension that automates web testing using AI. The tool scans DOM elements, intelligently extracts locators, and generates CodeceptJS tests automatically, reducing manual test creation time by 80%.",
        features: [
            "Dynamic DOM scanning and intelligent locator extraction using LLMs",
            "Automated CodeceptJS test generation with best practices",
            "Multi-agent framework integration for complex test scenarios",
            "Real-time test execution and project setup",
            "Cross-system orchestration between Chrome extension, Flask backend, and native agent",
            "Support for multiple testing frameworks and assertions"
        ],
        techStack: ["Chrome Extensions", "LLMs", "JavaScript", "Flask", "CodeceptJS", "Python", "WebSocket"],
        // githubUrl: "https://github.com/tanisha1407/ai-test-orchestrator",
        demoVideos: [
            { title: "QA Extension Demo", file: "videos/QA_Extension_video.mp4", desc: "Chrome extension in action — DOM scanning, locator extraction and test generation" },
            { title: "User Flow Recording", file: "videos/User_flow_recording.mp4", desc: "Full end-to-end user flow recorded and converted into automated tests" }
        ],
        // liveUrl: "https://chrome.google.com/webstore/detail/ai-test-orchestrator",
        metrics: {
            "Test Creation": "↓ 80% time",
            "Coverage": "95%",
            "Accuracy": "92%"
        }
    },
    3: {
        id: 3,
        title: "Car Price Predictor ML Model",
        icon: "🚗💰",
        shortDesc: "Advanced ML model with 82% R² score for vehicle price prediction",
        fullDescription: "This project predicts the resale price of a car using an XGBoost regression model based on features such as year, fuel type, transmission, seller type, kilometers driven, etc. The model is trained in a Jupyter Notebook and the UI is built using Streamlit, making it easy to interact with and use.",
        features: [
            "Real-time car price prediction with pre-trained XGBoost machine learning model",
            "Feature engineering including vehicle age calculation and categorical encoding",
            "Clean and interactive UI built with Streamlit for seamless user experience",
            "97% improvement in prediction accuracy through hyperparameter tuning",
            "Feature importance analysis revealing key price determinants",
            "Handled missing values in 8+ columns using median/mode imputation"
        ],
        techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "Matplotlib", "Seaborn","Streamlit", "Jupyter Notebook"],
        githubUrl: "https://github.com/tanisha1407/CAR-PRICE-PREDICTOR.git",
        demoUrl: "videos/Car.mp4",
        liveUrl: "https://car-price-predictor-7gn4ru6ca9se4yw3yekyoo.streamlit.app/",
        metrics: {
            "R² Score": "0.82",
            "RMSE": "7.413",
            "MAE": "4.435"
        }
    },
    4: {
        id: 4,
        title: "Real-Time AI Proctoring System",
        icon: "👁️",
        shortDesc: "Web-based exam integrity monitoring with face tracking",
        fullDescription: "A sophisticated proctoring system that ensures exam integrity through real-time monitoring. The system tracks facial movements, detects anomalies, and logs suspicious activities during online examinations.",
        features: [
            "Face, iris, and head movement tracking with MediaPipe",
            "Voice detection and behavioral monitoring",
            "Tab/window activity logging for detecting cheating attempts",
            "Real-time anomaly detection and event logging",
            "Screen recording capabilities for evidence collection",
            "Optimized performance for real-time inference"
        ],
        techStack: ["MediaPipe", "WebRTC", "FastAPI", "JavaScript", "Socket.IO", "OpenCV", "Python"],
        githubUrl: "https://github.com/tanisha1407/Video_proctoring_system.git",
        demoUrl: "videos/Proctoring_video.mp4",
        liveUrl: "https://video-proctoring-system.vercel.app/",
        metrics: {
            "Detection Rate": "98%",
            "Latency": "<100ms",
            "Accuracy": "95%"
        }
    },
    5: {
        id: 5,
        title: "American Sign Language Detection",
        icon: "🤟",
        shortDesc: "Real-time ASL recognition using OpenCV and Random Forest",
        fullDescription: "A real-time American Sign Language recognition system that classifies hand gestures to improve accessibility for hearing-impaired users. The system uses OpenCV for hand tracking and a Random Forest classifier for accurate gesture recognition.",
        features: [
            "Hand gesture recognition using OpenCV and MediaPipe",
            "Random Forest classifier for accurate gesture classification",
            "Real-time inference and visualization",
            "Dataset training with extensive hand gesture samples",
            "Feature extraction optimization for better accuracy",
            "Accessibility-focused design for hearing-impaired users"
        ],
        techStack: ["Python", "OpenCV", "Scikit-learn", "MediaPipe", "NumPy", "Random Forest"],
        githubUrl: "https://github.com/tanisha1407/asl-detection",
        demoUrl: "videos/ASL.mp4",
        liveUrl: "#",
        metrics: {
            "Accuracy": "92%",
            "Gestures": "26+",
            "FPS": "30"
        }
    },
    6: {
        id: 6,
        title: "Restaurant Name Generator",
        icon: "🍴",
        shortDesc: "AI-powered creative restaurant name generator using LLMs",
        fullDescription: "A fun Python-based project that generates creative and unique restaurant names using AI/ML models and randomized techniques. This project is useful for entrepreneurs, developers, and anyone brainstorming new brand ideas.",
        features: [
            "Generates unique restaurant names automatically",
            "Supports multiple styles of names (trendy, classic, funny, modern, etc.)",
            "Ensures no repetition for better creativity",
            "Streamlit web interface for easy interaction",
            "LLM-powered name generation with context awareness",
            "Customizable prompts for different restaurant types"
        ],
        techStack: ["Python", "Streamlit", "LLM", "LangChain", "Prompt Engineering", "OpenAI API"],
        githubUrl: "https://github.com/tanisha1407/restaurant-name-generator",
        demoUrl: "videos/Restaurant_name_generator.mp4",
        liveUrl: "https://restaurant-name-generator-wcny8p9easlafehhqzb4d4.streamlit.app/",
        metrics: {
            "Generation Time": "<2s",
            "Styles": "5+",
            "Names": "Unlimited"
        }
    },
    7: {
        id: 7,
        title: "Customer Purchase Behaviour Analysis",
        icon: "🛒📊",
        shortDesc: "In-depth analysis of customer purchasing patterns using transactional and demographic data",
        fullDescription: "This comprehensive data analysis project explores customer purchasing behavior by combining transactional data with customer demographic information. The analysis identifies top-performing products, loyal customer segments, and provides actionable insights for business strategy optimization.",
        features: [
            "Analysis of 50,000+ transaction records merged with customer demographic data",
            "Identification of top 3 most profitable products generating highest revenue",
            "Loyal customer segmentation based on purchase frequency (top 10% of customers)",
            "Cross-analysis of loyal customers by lifestage and spending category",
            "Data preprocessing handling missing values and data type conversions",
            "Visualization of key insights using matplotlib and seaborn",
            "Export of analysis results to CSV for business reporting"
        ],
        techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook", "Data Analysis", "Statistical Analysis"],
        githubUrl: "https://github.com/tanisha1407/customer-purchase-analysis",
        demoUrl: "videos/customer-purchase-analysis-demo.mp4",
        liveUrl: "#",
        metrics: {
            "Records Analyzed": "50,000+",
            "Top Product Revenue": "$40,352",
            "Loyal Customers": "Top 10%",
            "Segments": "6+"
        },
        visualizations: {
            topProducts: [
                { name: "Dorito Corn Chip Supreme 380g", sales: 40352.0 },
                { name: "Smiths Crinkle Chip Original Big Bag 380g", sales: 36367.6 },
                { name: "Smiths Crinkle Chips Salt & Vinegar 330g", sales: 34804.2 }
            ],
            customerSegments: [
                { segment: "Older Families (Budget)", count: 1250 },
                { segment: "Older Families (Mainstream)", count: 980 },
                { segment: "Young Families (Budget)", count: 890 },
                { segment: "Older Families (Premium)", count: 650 },
                { segment: "Young Families (Premium)", count: 520 }
            ]
        },
        keyInsights: [
            "Dorito Corn Chip Supreme 380g is the highest revenue-generating product with $40,352 in sales",
            "Older Families in Budget segment show the highest loyalty with 1,250 loyal customers",
            "Budget-conscious customers across all age groups show stronger loyalty than premium segments",
            "Chip products dominate the top revenue-generating category",
            "Young Families also represent a strong and valuable customer base across budget and premium segments",
            "Premium customers exist but are fewer in number compared to budget segments"
        ]
    },
    8: {
        id: 8,
        title: "Mobile Price Range Prediction",
        icon: "📱💰",
        shortDesc: "ML model to predict mobile phone price ranges based on specifications with 79% accuracy",
        fullDescription: "This project focuses on predicting the price range of mobile phones using machine learning techniques. The analysis is performed in a Jupyter Notebook and includes comprehensive Exploratory Data Analysis (EDA), data cleaning, feature engineering, and model building. The dataset contains 2000 rows and 21 features representing different specifications of mobile phones, with the target variable being price_range (0=Low Cost, 1=Medium Cost, 2=High Cost, 3=Very High Cost).",
        features: [
            "Comprehensive EDA with visualizations using Seaborn and Matplotlib",
            "Data cleaning and handling of invalid values (replaced zeros with mean values)",
            "Feature engineering creating screen size (sc_size) from screen dimensions",
            "MinMaxScaler normalization for better model performance",
            "Implementation of Logistic Regression with 80/20 train-test split",
            "Achieved 79% test accuracy and 83% training accuracy",
            "Detailed evaluation using confusion matrix and classification report"
        ],
        techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Logistic Regression", "Jupyter Notebook", "MinMaxScaler"],
        githubUrl: "https://github.com/tanisha1407/mobile-price-prediction",
        demoUrl: "videos/mobile-price-prediction-demo.mp4",
        liveUrl: "#",
        metrics: {
            "Test Accuracy": "79%",
            "Train Accuracy": "83%",
            "Dataset Size": "2000 rows",
            "Features": "21"
        },
        visualizations: {
            priceDistribution: [
                { range: "Low Cost (0)", count: 500 },
                { range: "Medium Cost (1)", count: 500 },
                { range: "High Cost (2)", count: 500 },
                { range: "Very High Cost (3)", count: 500 }
            ],
            featureImportance: [
                { feature: "RAM", importance: 0.32 },
                { feature: "Battery Power", importance: 0.24 },
                { feature: "Mobile Weight", importance: 0.12 },
                { feature: "Screen Size", importance: 0.09 },
                { feature: "4G Support", importance: 0.07 },
                { feature: "Dual SIM", importance: 0.05 }
            ],
            correlationMatrix: [
                { feature1: "RAM", feature2: "Price Range", correlation: 0.85 },
                { feature1: "Battery Power", feature2: "Price Range", correlation: 0.62 },
                { feature1: "Mobile Weight", feature2: "Price Range", correlation: -0.45 },
                { feature1: "Screen Size", feature2: "Price Range", correlation: 0.38 }
            ]
        },
        keyInsights: [
            "RAM is the strongest predictor of mobile phone price with 85% correlation to price range",
            "Battery power significantly influences pricing (62% correlation)",
            "Higher-priced phones tend to have more RAM, better battery, and are lighter in weight",
            "Features like front camera (fc) and number of cores (n_cores) have minimal impact on pricing",
            "The dataset is perfectly balanced with 500 phones in each price category",
            "Logistic Regression achieved solid performance with 79% test accuracy",
            "Mobile weight shows inverse correlation - expensive phones are generally lighter",
            "4G and 3G connectivity are standard across all price ranges, not differentiating factors"
        ],
        confusionMatrix: {
            labels: ["Low", "Medium", "High", "Very High"],
            matrix: [
                [82, 12, 4, 2],
                [8, 78, 10, 4],
                [3, 11, 76, 10],
                [2, 5, 9, 84]
            ]
        }
    },
    9: {
        id: 9,
        title: "Invisible Cloak using Python & OpenCV",
        icon: "🧥✨",
        shortDesc: "Recreated Harry Potter's invisibility cloak using computer vision and color detection techniques",
        fullDescription: "This project recreates the famous 'invisibility cloak' effect from Harry Potter using computer vision techniques in Python with OpenCV. By detecting a specific color in the video frame (like red or blue), the code replaces those pixels with the background, making the cloak appear invisible! The project uses real-time video processing to create a magical effect where a colored cloth becomes transparent, revealing the background behind it.",
        features: [
            "Real-time video processing using OpenCV VideoCapture",
            "Static background capture and storage for reference",
            "Color detection using HSV color space for better accuracy",
            "Binary mask creation to identify cloak regions",
            "Morphological operations to remove noise and improve detection",
            "Pixel replacement with background for invisibility effect",
            "Smooth transition and real-time display",
            "Adjustable color range for different cloak colors (red, blue, green)"
        ],
        techStack: ["Python", "OpenCV", "NumPy", "Computer Vision", "HSV Color Space", "Image Processing", "Real-time Video"],
        githubUrl: "https://github.com/tanisha1407/INVISIBLE-CLOAK-.git",
        demoUrl: "videos/Invisible_Cloak.mp4",
        liveUrl: "#",
        metrics: {
            "Frame Rate": "30 FPS",
            "Processing Time": "~15ms/frame",
            "Color Accuracy": "95%",
            "Real-time": "Yes"
        },
        visualizations: {
            steps: [
                { step: "1. Capture Background", description: "Store static background frame" },
                { step: "2. Color Detection", description: "Detect cloak color using HSV range" },
                { step: "3. Mask Creation", description: "Create binary mask of cloak region" },
                { step: "4. Background Replacement", description: "Replace cloak pixels with background" }
            ],
            colorRanges: [
                { color: "Red", lower: "[0, 50, 50]", upper: "[10, 255, 255]" },
                { color: "Blue", lower: "[100, 50, 50]", upper: "[130, 255, 255]" },
                { color: "Green", lower: "[40, 50, 50]", upper: "[80, 255, 255]" }
            ]
        },
        keyInsights: [
            "HSV color space is more effective than RGB for color detection because it separates color information from brightness",
            "Morphological operations (erosion and dilation) significantly improve mask quality by removing noise",
            "The cloak must be a solid, bright color for best results - red or blue works best",
            "Good lighting conditions are crucial for accurate color detection",
            "The background must be static for the effect to work properly",
            "This project demonstrates practical applications of computer vision in entertainment and VFX",
            "Can be extended to create interactive AR experiences and special effects"
        ],
        //         codeExample: `
        // import cv2
        // import numpy as np

        // # Initialize webcam
        // cap = cv2.VideoCapture(0)

        // # Capture background
        // print("Capturing background... Please stand still for 2 seconds.")
        // ret, background = cap.read()
        // cv2.waitKey(2000)

        // while True:
        //     # Read current frame
        //     ret, frame = cap.read()

        //     # Convert to HSV color space
        //     hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)

        //     # Define color range for red cloak
        //     lower_red1 = np.array([0, 50, 50])
        //     upper_red1 = np.array([10, 255, 255])
        //     lower_red2 = np.array([170, 50, 50])
        //     upper_red2 = np.array([180, 255, 255])

        //     # Create mask for red color
        //     mask1 = cv2.inRange(hsv, lower_red1, upper_red1)
        //     mask2 = cv2.inRange(hsv, lower_red2, upper_red2)
        //     mask = mask1 + mask2

        //     # Apply morphological operations to remove noise
        //     mask = cv2.morphologyEx(mask, cv2.MORPH_OPEN, np.ones((3,3)))
        //     mask = cv2.morphologyEx(mask, cv2.MORPH_DILATE, np.ones((3,3)))

        //     # Create inverse mask
        //     mask_inv = cv2.bitwise_not(mask)

        //     # Replace cloak region with background
        //     result = cv2.bitwise_and(background, background, mask=mask)
        //     result += cv2.bitwise_and(frame, frame, mask=mask_inv)

        //     # Display the result
        //     cv2.imshow('Invisible Cloak', result)

        //     # Break loop on 'q' press
        //     if cv2.waitKey(1) & 0xFF == ord('q'):
        //         break

        // # Clean up
        // cap.release()
        // cv2.destroyAllWindows()
        //         `
    },
    10: {
        id: 10,
        title: "Student Score Predictor",
        icon: "📚📈",
        shortDesc: "ML model to predict student scores based on study hours with 85% accuracy",
        fullDescription: "This project predicts a student’s exam score based on multiple factors such as study hours, attendance, parental involvement, sleep, motivation level, and more using a Linear Regression model. The model is deployed with a Streamlit GUI for easy interaction.",
        features: [
            " Predicts student exam scores from 18 input parameters",
            "User - friendly Streamlit web interface",
            "One - hot encoded categorical variables",
            "Trained and saved ML model using Scikit-learn",
            "Model evaluation using Cross-Validated R² score"
        ],
        techStack: ["Python", "Streamlit", "Pandas", "NumPy", "Scikit-learn", "Joblib"],
        githubUrl: "https://github.com/tanisha1407/STUDENT-SCORE-PREDICTION.git",
        demoUrl: "videos/Score_Prediction.mp4",
        liveUrl: "https://student-score-prediction-pnr2pgezcyknrivunvsdpr.streamlit.app/",
        metrics: {
            "Processing Time": "↓ 65%",
            "Accuracy": "85%",
            // "Cost Saved": "40%"
        }
    },
};

// Function to render project details
function renderProjectDetails(projectId) {
    const project = projectsData[projectId];
    if (!project) {
        document.getElementById('projectDetails').innerHTML = '<div class="loading">Project not found</div>';
        return;
    }

    const container = document.getElementById('projectDetails');

    let visualizationsHtml = '';

    // Video gallery for projects with multiple videos
    let videoGalleryHtml = '';
    if (project.demoVideos && project.demoVideos.length > 0) {
        videoGalleryHtml = `
            <div class="project-section">
                <h3><i class="fas fa-film"></i> Demo Videos</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
                    ${project.demoVideos.map((vid, idx) => `
                        <div onclick="openDemo('${vid.file}')" style="cursor:pointer; background: rgba(255,255,255,0.05); border: 1px solid rgba(0,245,212,0.3); border-radius: 15px; overflow: hidden; transition: 0.3s;" onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 10px 30px rgba(0,245,212,0.2)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
                            <div style="position:relative; background: rgba(0,0,0,0.5); aspect-ratio: 16/9; display:flex; align-items:center; justify-content:center; overflow:hidden;">
                                <video src="${vid.file}" style="width:100%; height:100%; object-fit:cover; opacity:0.6;" preload="metadata" muted></video>
                                <div style="position:absolute; width:56px; height:56px; background: linear-gradient(135deg, #ff006e, #00f5d4); border-radius:50%; display:flex; align-items:center; justify-content:center;">
                                    <i class="fas fa-play" style="color:white; font-size:1.2rem; margin-left:3px;"></i>
                                </div>
                            </div>
                            <div style="padding: 1rem;">
                                <h4 style="color: #00f5d4; margin-bottom: 0.4rem;">${vid.title}</h4>
                                <p style="color: rgba(255,255,255,0.6); font-size: 0.85rem; margin: 0;">${vid.desc}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Add visualizations for Customer Purchase Analysis project
    if (project.id === 7 && project.visualizations) {
        visualizationsHtml = `
            <div class="project-section">
                <h3><i class="fas fa-chart-bar"></i> Key Visualizations</h3>
                
                <!-- Top Products Chart -->
                <div style="margin-bottom: 2rem;">
                    <h4 style="color: #00f5d4; margin-bottom: 1rem;">Top 3 Most Profitable Products</h4>
                    <div style="background: rgba(255,255,255,0.05); border-radius: 15px; padding: 1.5rem;">
                        ${project.visualizations.topProducts.map(product => `
                            <div style="margin-bottom: 1rem;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                                    <span>${product.name}</span>
                                    <span style="color: #ff006e;">$${product.sales.toLocaleString()}</span>
                                </div>
                                <div style="background: rgba(255,255,255,0.1); height: 30px; border-radius: 10px; overflow: hidden;">
                                    <div style="width: ${(product.sales / 40352) * 100}%; background: linear-gradient(90deg, #ff006e, #00f5d4); height: 100%; display: flex; align-items: center; padding-left: 10px; color: white; font-weight: bold;">
                                        ${Math.round((product.sales / 40352) * 100)}%
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <!-- Customer Segments Chart -->
                <div>
                    <h4 style="color: #00f5d4; margin-bottom: 1rem;">Loyal Customer Segments by Lifestage & Spending</h4>
                    <div style="background: rgba(255,255,255,0.05); border-radius: 15px; padding: 1.5rem;">
                        ${project.visualizations.customerSegments.map(segment => `
                            <div style="margin-bottom: 1rem;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                                    <span>${segment.segment}</span>
                                    <span style="color: #00f5d4;">${segment.count} customers</span>
                                </div>
                                <div style="background: rgba(255,255,255,0.1); height: 25px; border-radius: 10px; overflow: hidden;">
                                    <div style="width: ${(segment.count / 1250) * 100}%; background: linear-gradient(90deg, #00f5d4, #ff006e); height: 100%; display: flex; align-items: center; padding-left: 10px; color: white; font-size: 0.8rem;">
                                        ${Math.round((segment.count / 1250) * 100)}%
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    // Add visualizations for Mobile Price Prediction project
    if (project.id === 8 && project.visualizations) {
        visualizationsHtml = `
            <div class="project-section">
                <h3><i class="fas fa-chart-bar"></i> Data Analysis & Visualizations</h3>
                
                <!-- Price Distribution -->
                <div style="margin-bottom: 2rem;">
                    <h4 style="color: #00f5d4; margin-bottom: 1rem;">Price Range Distribution</h4>
                    <div style="background: rgba(255,255,255,0.05); border-radius: 15px; padding: 1.5rem;">
                        ${project.visualizations.priceDistribution.map(item => `
                            <div style="margin-bottom: 1rem;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                                    <span>${item.range}</span>
                                    <span style="color: #00f5d4;">${item.count} phones</span>
                                </div>
                                <div style="background: rgba(255,255,255,0.1); height: 25px; border-radius: 10px; overflow: hidden;">
                                    <div style="width: ${(item.count / 500) * 100}%; background: linear-gradient(90deg, #00f5d4, #ff006e); height: 100%; display: flex; align-items: center; padding-left: 10px; color: white;">
                                        ${Math.round((item.count / 500) * 100)}%
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <!-- Feature Importance -->
                <div style="margin-bottom: 2rem;">
                    <h4 style="color: #00f5d4; margin-bottom: 1rem;">Feature Importance Analysis</h4>
                    <div style="background: rgba(255,255,255,0.05); border-radius: 15px; padding: 1.5rem;">
                        ${project.visualizations.featureImportance.map(item => `
                            <div style="margin-bottom: 1rem;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                                    <span>${item.feature}</span>
                                    <span style="color: #ff006e;">${Math.round(item.importance * 100)}%</span>
                                </div>
                                <div style="background: rgba(255,255,255,0.1); height: 30px; border-radius: 10px; overflow: hidden;">
                                    <div style="width: ${item.importance * 100}%; background: linear-gradient(90deg, #ff006e, #00f5d4); height: 100%; display: flex; align-items: center; padding-left: 10px; color: white;">
                                        ${Math.round(item.importance * 100)}%
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <!-- Correlation Matrix -->
                <div style="margin-bottom: 2rem;">
                    <h4 style="color: #00f5d4; margin-bottom: 1rem;">Correlation with Price Range</h4>
                    <div style="background: rgba(255,255,255,0.05); border-radius: 15px; padding: 1.5rem;">
                        ${project.visualizations.correlationMatrix.map(item => `
                            <div style="margin-bottom: 1rem;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                                    <span>${item.feature1} vs ${item.feature2}</span>
                                    <span style="color: ${item.correlation > 0 ? '#00f5d4' : '#ff006e'}">${item.correlation > 0 ? '+' : ''}${item.correlation}</span>
                                </div>
                                <div style="background: rgba(255,255,255,0.1); height: 30px; border-radius: 10px; overflow: hidden;">
                                    <div style="width: ${Math.abs(item.correlation) * 100}%; background: ${item.correlation > 0 ? 'linear-gradient(90deg, #00f5d4, #ff006e)' : 'linear-gradient(90deg, #ff006e, #00f5d4)'}; height: 100%; display: flex; align-items: center; padding-left: 10px; color: white;">
                                        ${Math.round(Math.abs(item.correlation) * 100)}%
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;

        // Add Confusion Matrix
        if (project.confusionMatrix) {
            visualizationsHtml += `
                <div class="project-section">
                    <h3><i class="fas fa-table"></i> Confusion Matrix</h3>
                    <div style="background: rgba(255,255,255,0.05); border-radius: 15px; padding: 1.5rem; overflow-x: auto;">
                        <table style="width: 100%; border-collapse: collapse; text-align: center;">
                            <thead>
                                <tr>
                                    <th style="padding: 10px; background: rgba(0,245,212,0.2);"></th>
                                    ${project.confusionMatrix.labels.map(label => `<th style="padding: 10px; background: rgba(0,245,212,0.2);">Predicted ${label}</th>`).join('')}
                                </tr>
                            </thead>
                            <tbody>
                                ${project.confusionMatrix.labels.map((label, i) => `
                                    <tr>
                                        <th style="padding: 10px; background: rgba(0,245,212,0.2);">Actual ${label}</th>
                                        ${project.confusionMatrix.matrix[i].map(value => `
                                            <td style="padding: 10px; border: 1px solid rgba(0,245,212,0.3); background: ${value > 80 ? 'rgba(0,245,212,0.3)' : 'rgba(255,0,110,0.1)'}">
                                                ${value}
                                            </td>
                                        `).join('')}
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                        <p style="margin-top: 1rem; text-align: center; color: rgba(255,255,255,0.6); font-size: 0.9rem;">
                            <i class="fas fa-info-circle"></i> Diagonal values show correct predictions | Higher values = Better performance
                        </p>
                    </div>
                </div>
            `;
        }
    }

    // Add visualizations for Invisible Cloak project
    if (project.id === 9 && project.visualizations) {
        visualizationsHtml = `
            <div class="project-section">
                <h3><i class="fas fa-magic"></i> How It Works - Step by Step</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
                    ${project.visualizations.steps.map(step => `
                        <div style="background: rgba(0,245,212,0.1); border-radius: 15px; padding: 1.5rem; text-align: center; border: 1px solid rgba(0,245,212,0.3);">
                            <div style="font-size: 2rem; margin-bottom: 1rem;">✨</div>
                            <h4 style="color: #ff006e; margin-bottom: 0.5rem;">${step.step}</h4>
                            <p style="color: rgba(255,255,255,0.7); font-size: 0.9rem;">${step.description}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="project-section">
                <h3><i class="fas fa-palette"></i> Color Detection Ranges (HSV)</h3>
                <div style="background: rgba(255,255,255,0.05); border-radius: 15px; padding: 1.5rem;">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                        ${project.visualizations.colorRanges.map(color => `
                            <div style="text-align: center;">
                                <div style="width: 50px; height: 50px; background: ${color.color === 'Red' ? '#ff006e' : color.color === 'Blue' ? '#00f5d4' : '#00ff00'}; border-radius: 50%; margin: 0 auto 0.5rem; border: 2px solid white;"></div>
                                <h4 style="color: #ff006e;">${color.color}</h4>
                                <p style="font-size: 0.8rem; color: rgba(255,255,255,0.6);">Lower: ${color.lower}</p>
                                <p style="font-size: 0.8rem; color: rgba(255,255,255,0.6);">Upper: ${color.upper}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;

        // Add Code Example for Invisible Cloak
        if (project.codeExample) {
            visualizationsHtml += `
                <div class="project-section">
                    <h3><i class="fas fa-code"></i> Python Code Implementation</h3>
                    <div style="background: #0a0c10; border: 1px solid rgba(0,245,212,0.3); border-radius: 15px; overflow: hidden; margin-top: 1rem;">
                        <div style="background: rgba(0,245,212,0.1); padding: 0.8rem 1rem; border-bottom: 1px solid rgba(0,245,212,0.3);">
                            <i class="fab fa-python" style="color: #00f5d4;"></i> invisible_cloak.py
                        </div>
                        <pre style="padding: 1.5rem; overflow-x: auto; font-family: 'Courier New', monospace; font-size: 0.85rem; color: #00f5d4; margin: 0;">
${project.codeExample}
                        </pre>
                    </div>
                </div>
            `;
        }
    }

    const html = `
        <div class="project-details-card">
            <div class="project-header">
                <div class="project-icon-large">${project.icon}</div>
                <h1 class="project-title-large">${project.title}</h1>
                <div class="project-stats">
                    ${Object.entries(project.metrics).map(([key, value]) => `
                        <div class="stat-badge">
                            <i class="fas fa-chart-line"></i> ${key}: ${value}
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="project-content">
                <div class="project-section">
                    <h3><i class="fas fa-info-circle"></i> Project Overview</h3>
                    <p class="project-description-full">${project.fullDescription}</p>
                </div>
                
                <div class="project-section">
                    <h3><i class="fas fa-list-check"></i> Key Features</h3>
                    <ul class="features-list">
                        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                
                ${visualizationsHtml}
                
                ${videoGalleryHtml}
                
                ${project.keyInsights ? `
                <div class="project-section">
                    <h3><i class="fas fa-lightbulb"></i> Key Insights</h3>
                    <div style="background: rgba(0,245,212,0.1); border-left: 3px solid #00f5d4; padding: 1rem; border-radius: 10px;">
                        <ul class="features-list" style="margin: 0;">
                            ${project.keyInsights.map(insight => `<li>${insight}</li>`).join('')}
                        </ul>
                    </div>
                </div>` : ''}
                
                <div class="project-section">
                    <h3><i class="fas fa-code"></i> Tech Stack</h3>
                    <div class="tech-stack-full">
                        ${project.techStack.map(tech => `<span class="tech-tag-large">${tech}</span>`).join('')}
                    </div>
                </div>
                
                ${(project.githubUrl || project.demoUrl || (project.liveUrl && project.liveUrl !== '#')) ? `
                <div class="project-section">
                    <h3><i class="fas fa-link"></i> Project Links</h3>
                    <div class="project-links-full">
                        ${project.githubUrl ? `
                        <a href="${project.githubUrl}" target="_blank" class="project-link-large github-link">
                            <i class="fab fa-github"></i> View Source Code
                        </a>` : ''}
                        ${project.demoUrl ? `
                        <a href="#" onclick="openDemo('${project.demoUrl}'); return false;" class="project-link-large demo-link">
                            <i class="fas fa-play"></i> Watch Demo
                        </a>` : ''}
                        ${project.liveUrl && project.liveUrl !== '#' ? `
                        <a href="${project.liveUrl}" target="_blank" class="project-link-large live-link">
                            <i class="fas fa-external-link-alt"></i> Live Demo
                        </a>` : ''}
                    </div>
                </div>` : ''}
            </div>
        </div>
        <a href="index.html#projects" class="back-button">
            <i class="fas fa-arrow-left"></i>
        </a>
    `;

    container.innerHTML = html;
}

// Function to show notebook preview
function showNotebookPreview(projectTitle) {
    alert(`📓 ${projectTitle}

This project includes comprehensive analysis with:

✅ Complete Jupyter Notebook implementation
✅ Exploratory Data Analysis (EDA)
✅ Data cleaning and preprocessing
✅ Feature engineering
✅ Model training and evaluation
✅ Performance metrics and visualizations

Check out the GitHub repository for the complete notebook!`);
}

// Function to open demo video modal
function openDemo(videoUrl) {
    const modal = document.getElementById('demoModal');
    const video = document.getElementById('demoVideo');
    video.src = videoUrl;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeDemo() {
    const modal = document.getElementById('demoModal');
    const video = document.getElementById('demoVideo');
    video.pause();
    video.src = '';
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    if (projectId) {
        renderProjectDetails(parseInt(projectId));
    } else {
        document.getElementById('projectDetails').innerHTML = '<div class="loading">No project selected. <a href="index.html#projects" style="color: #00f5d4;">Go back to projects</a></div>';
    }
});

// Close modals on escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeDemo();
    }
});