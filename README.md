# NepalMap - Interactive Terminal Map of Nepal

An interactive terminal-based map of Nepal where users can view information about different provinces, cities, and interesting facts. The map allows users to interact with the provinces of Nepal, displaying information like the province's capital, major cities, and fun facts in both Nepali and English.

---

## Features

- **Interactive Terminal Map**: Display the provinces of Nepal with a simple and user-friendly terminal interface.
- **Province Information**: Each province has detailed information, including the capital, cities, and fun facts, available in both Nepali and English.
- **Multilingual Support**: The map supports English and Nepali for all text, making it accessible to a wider audience.
- **Customizable Output**: The terminal output is color-coded and bolded for better readability.

---

## Installation

Follow these steps to install and run the project on your local machine:

### 1. Clone the repository

  ```bash
    git clone https://github.com/ashokrimal/NepalMap.git
  ```

### 2. Navigate into the project directory

  ```bash
    cd NepalMap
  ```

### 3. Install the required dependencies

Make sure you have Node.js installed. You can check by running:

  ```bash
    node -v
  ```

If you don’t have Node.js installed, download it from [here](https://nodejs.org/).

Then, install the dependencies:
  ```bash
    npm install
  ```

### How to Run

To run the interactive Nepal Map in the terminal:
  ```bash
    node NepalMap.js
  ```

The terminal will display a list of language available i.e Nepali and English, Press [ 0, 1, 2 ] to interact.
After choosing the language lists of Provinces are shown and you can interact by typing the number or name of any province.

### How to Interact
  1.	**Display All Provinces**: When you run the app, it will display a list of all provinces with their respective information.

  2.	**Input**: The program will ask for input in the form of a province number or name. You can type any province number (1-7) or name (e.g., “Province 1”, “Madhesh”, “गण्डकी प्रदेश”).
    	
  3.	**Output**: After you enter the province name or number, the terminal will display:
 
         i)  Province name in both Nepali and English.
   
         ii)  Major city with corresponding names.
   
         iii)  Fun facts about the province in both languages.
   
         iv)  Invalid Input: If an invalid input is provided, the program will notify the user and ask for a valid input.
		


### Screenshots

Below are some example screenshots of how the terminal interface looks:

**Example 1**: Displaying Provinces
  🇳🇵 अन्तरक्रियात्मक नेपाल नक्सा (Interactive Map of Nepal)
  ──────────────────────────────────────────────
  ```
   🟪 1️⃣ प्रदेश नं १  ✩ विराटनगर
   🟥 2️⃣ मधेश प्रदेश   ✩ जनकपुर   
   🟦 3️⃣ बाग्मती प्रदेश  ✩ काठमाडौं
   🟩 4️⃣ गण्डकी प्रदेश  ✩ पोखरा
   🟨 5️⃣ लुम्बिनी प्रदेश  ✩ नेपालगञ्ज   
   🟧 6️⃣ कर्णाली प्रदेश  ✩ सुर्खेत   
   🟩 7️⃣ सुदूरपश्चिम प्रदेश  ✩ धनगढी
```

**Example 2**: Province Details
```
ℹ️ बाग्मती प्रदेश (Bagmati Province)

🔸 प्रमुख शहर (City): काठमाडौं (Kathmandu)
📌 जानकारी (Fact): राजधानी काठमाडौं र युनेस्को सम्पदाको घर। (Home to the capital city and many UNESCO heritage sites.)
```

**Example 3**: Invalid Input
```
❌ मान्य इनपुट होइन। कृपया १ देखि ७ वा प्रदेशको नाम लेख्नुहोस्।
```

### License

This project is licensed under the MIT License - see the LICENSE file for details.

### Contributing

If you’d like to contribute to this project, please fork the repository, create a new branch, and submit a pull request. Feel free to suggest new features or report issues in the repository.


### Contact

For any questions or suggestions, feel free to contact me at lamirkohsa@gmail.com.
