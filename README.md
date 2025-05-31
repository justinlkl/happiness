# Exploring Happiness in the Digital Age: A Sentiment Analysis and Socioeconomic Correlates Dashboard

## Project Overview

This project investigates the multifaceted nature of public happiness in the digital era. Our central research question is: **How do key social factors, such as physical health, Gross Domestic Product (GDP), life expectancy, educational level, social support, freedom of choice, generosity, and corruption perception, correlate with public happiness as expressed in real-time through sentiment on X (formerly Twitter) regarding contemporary topics?**

We developed an interactive dashboard that combines AI-powered sentiment analysis of X (Twitter) data with robust socioeconomic statistics from the World Bank Open Data and the World Happiness Report 2025. The goal is to provide a dynamic and accessible tool for understanding the complex interplay between broad socioeconomic conditions and individual emotional expression in the digital sphere. This research aims to supplement traditional happiness studies by leveraging computational social science methods to capture real-time, unmediated public sentiment.

## Dashboard

**Access the interactive Happiness Hub Dashboard here:** [https://studio--happiness-hub-o4vop.us-centrall.hosted.app](https://studio--happiness-hub-o4vop.us-centrall.hosted.app)

Our dashboard features:
* Visualizations of correlations between country-level happiness scores and seven key socioeconomic factors.
* Sentiment analysis summaries (positive, negative, neutral) for X posts across 32 diverse groups, including brands and video games.
* Interactive elements allowing users to filter data (e.g., by country) and toggle sentiment views to explore relationships between societal happiness and online sentiment.
* An AI function to perform sentiment analysis on X posts.

## Methodology

1.  **Data Collection:**
    * **Socioeconomic Data:** Sourced from the World Happiness Report 2025, including indicators like GDP per capita, healthy life expectancy, social support, freedom of choice, generosity, corruption perception, and educational level for 143 countries.
    * **Sentiment Data:** Approximately 60,000 X (formerly Twitter) posts related to 32 different groups (e.g., brands like Amazon, Nvidia; games like PUBG, FIFA) were collected from sources including Kaggle and X. This data was processed (not raw) to categorize sentiment.

2.  **Sentiment Analysis:**
    * An AI-powered sentiment analysis tool was used to classify the sentiment of X posts as positive, negative, or neutral. This approach is optimized for short, informal texts like tweets, capable of handling emojis, punctuation, and capitalization.

3.  **Data Integration and Visualization:**
    * The collected socioeconomic data and X sentiment data were integrated into the interactive dashboard.
    * Manual validation was performed to ensure data integrity and accuracy, including reviewing approximated values against reported trends.

## Key Findings

### Happiness Correlations (from World Happiness Report Data):
* **Top Performers:** Nordic countries consistently rank high, excelling in GDP per capita, social support, healthy life expectancy, freedom, and low corruption. This suggests happiness is multidimensional.
* **Low Performers:** Countries like Afghanistan and Lebanon show low happiness scores, correlated with poor social support, lack of freedom, and high corruption, alongside economic and health challenges.
* **Strong Positive Correlations with Happiness:** Social Support, Freedom of Choice.
* **Positive Correlation with Happiness:** Healthy Life Expectancy, GDP per Capita (with diminishing returns), Education Level (context-dependent).
* **Strong Negative Correlation with Happiness:** Corruption Perception.
* **Weak Correlation with Happiness:** Generosity (reflecting cultural variations).
* **Outliers:** Costa Rica demonstrates high happiness despite moderate GDP, attributed to strong social support and freedom. Conversely, Qatar shows lower happiness despite high GDP, linked to weaker social support and freedom.
* **Key Insight:** Social support, freedom, and low corruption are often more critical drivers of happiness than wealth alone.

### X (Twitter) Sentiment Analysis:
* **High Positive Sentiment:** Often seen in gaming communities like PlayerUnknown's Battlegrounds (PUBG), Battlefield, and Fortnite, likely due to community engagement or successful updates.
* **High Negative Sentiment:** Prevalent for some sports games (e.g., MaddenNFL, NBA2K, FIFA), reflecting fan dissatisfaction with aspects like gameplay or monetization.
* **High Neutral Sentiment:** Common for brands like Amazon or informational content, indicating mixed or stable interactions.
* **Key Insight:** Gaming communities exhibit highly polarized and emotionally invested sentiment, while brand interactions tend to be more neutral.

### Synthesis of Happiness and Sentiment:
* **Social Connections:** Crucial for both national happiness (e.g., social support in Iceland) and positive online sentiment (e.g., virtual communities in games like Fortnite).
* **Trust:** Low corruption perception boosts national happiness, while distrust in developers can fuel negative online sentiment in gaming.
* **Context Matters:** Economic prosperity or high brand profile alone does not guarantee happiness or positive sentiment without strong social factors, good service, or cultural resonance.

## Limitations
* **Traditional Data:** Self-reported survey data for happiness can be subject to biases and may not fully capture the multidimensional nature of well-being or cultural nuances.
* **Sentiment Data Scope:** While we analyzed sentiment for 32 groups, this data was not country-specific. Therefore, direct correlations between X sentiment from these specific groups and *country-level* happiness scores were not feasible in this iteration. However, global and group-specific sentiment trends offer valuable insights into online community well-being.
* **Sentiment Analysis Challenges:** Capturing nuanced human expression and dealing with irrelevant content in social media analysis remain ongoing challenges.

## Future Directions
* **Integration of Methods:** Combine computational social science with traditional survey data for a more holistic understanding.
* **Advanced Technologies:** Utilize more advanced Natural Language Processing (NLP) and emotion recognition for finer-grained analysis.
* **Broader Representation:** Include underrepresented populations, especially those with limited internet access, to overcome sampling biases.
* **Longitudinal Studies:** Track how happiness and sentiment evolve alongside societal changes using longitudinal computational social science studies.
* **Ethical Frameworks:** Continuously develop and adhere to ethical guidelines for big data use, prioritizing privacy and consent.

## Team Members & Contributions
* **Research field:** Lam Ka Lim (20958318)
* **Traditional Studies:** Leung Hiu Nam Doreen (20964161)
* **Methods and Data:** Cheung Pak Hin (20961236)
* **Results and interpretation:** Tse Siu Hong (20963117)

## Technologies Used (Suggested - please verify and specify)
* Data Analysis: Python (Pandas, NumPy)
* Sentiment Analysis: [Specify AI/NLP library used, e.g., NLTK, spaCy, Transformers, or a specific API]
* Dashboard: Google Looker Studio (based on the URL)
* Data Sources: X API / Kaggle, World
