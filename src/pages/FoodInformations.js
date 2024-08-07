// src/pages/FoodCategories.js
import React, { useState } from 'react';
import './FoodInformations.css'; 

const FoodInformations = () => {
    const [selectedFood, setSelectedFood] = useState(null);

    const categories = {
        Fruits: [
            { name: 'Apple', vitamins: ['Vitamin C', 'Vitamin A'], minerals: ['Potassium'], benefits: 'Boosts immune system', calories: 52 },
            { name: 'Banana', vitamins: ['Vitamin B6', 'Vitamin C'], minerals: ['Potassium'], benefits: 'Good for digestion', calories: 89 },
            { name: 'Orange', vitamins: ['Vitamin C'], minerals: ['Calcium'], benefits: 'Improves skin health', calories: 47 },
            { name: 'Strawberry', vitamins: ['Vitamin C', 'Folate'], minerals: ['Manganese'], benefits: 'Rich in antioxidants', calories: 32 },
            { name: 'Pineapple', vitamins: ['Vitamin C'], minerals: ['Manganese'], benefits: 'Aids digestion', calories: 50 },
            { name: 'Blueberry', vitamins: ['Vitamin C', 'Vitamin K'], minerals: ['Manganese'], benefits: 'Enhances memory', calories: 57 },
            { name: 'Grapes', vitamins: ['Vitamin C', 'Vitamin K'], minerals: ['Potassium'], benefits: 'Good for heart health', calories: 69 },
            { name: 'Mango', vitamins: ['Vitamin A', 'Vitamin C'], minerals: ['Potassium'], benefits: 'Boosts immunity', calories: 60 },
            { name: 'Watermelon', vitamins: ['Vitamin C', 'Vitamin A'], minerals: ['Potassium'], benefits: 'Hydrates body', calories: 30 },
            { name: 'Kiwi', vitamins: ['Vitamin C', 'Vitamin K', 'Vitamin E'], minerals: ['Potassium'], benefits: 'Supports immune system', calories: 61 },
        ],
        Vegetables: [
            { name: 'Carrot', vitamins: ['Vitamin A'], minerals: ['Potassium'], benefits: 'Good for vision', calories: 41 },
            { name: 'Broccoli', vitamins: ['Vitamin C', 'Vitamin K'], minerals: ['Calcium', 'Iron'], benefits: 'Boosts immune system', calories: 55 },
            { name: 'Spinach', vitamins: ['Vitamin K', 'Vitamin A'], minerals: ['Iron', 'Calcium'], benefits: 'Supports bone health', calories: 23 },
            { name: 'Bell Pepper', vitamins: ['Vitamin C', 'Vitamin A'], minerals: ['Potassium'], benefits: 'Rich in antioxidants', calories: 31 },
            { name: 'Tomato', vitamins: ['Vitamin C', 'Vitamin K'], minerals: ['Potassium'], benefits: 'Good for heart health', calories: 18 },
            { name: 'Cucumber', vitamins: ['Vitamin K'], minerals: ['Potassium'], benefits: 'Hydrates body', calories: 16 },
            { name: 'Cauliflower', vitamins: ['Vitamin C', 'Vitamin K'], minerals: ['Calcium'], benefits: 'Supports digestion', calories: 25 },
            { name: 'Zucchini', vitamins: ['Vitamin C', 'Vitamin A'], minerals: ['Potassium'], benefits: 'Aids digestion', calories: 17 },
            { name: 'Brussels Sprouts', vitamins: ['Vitamin C', 'Vitamin K'], minerals: ['Calcium', 'Iron'], benefits: 'Boosts immune system', calories: 43 },
            { name: 'Beetroot', vitamins: ['Folate'], minerals: ['Iron', 'Potassium'], benefits: 'Improves blood flow', calories: 43 },
        ],
        Grains: [
            { name: 'Oats', vitamins: ['Vitamin B1', 'Vitamin B5'], minerals: ['Magnesium', 'Iron'], benefits: 'Aids digestion', calories: 389 },
            { name: 'Rice', vitamins: ['Vitamin B1'], minerals: ['Iron'], benefits: 'Energy source', calories: 130 },
            { name: 'Quinoa', vitamins: ['Vitamin B2', 'Vitamin B6'], minerals: ['Iron', 'Magnesium'], benefits: 'High in protein', calories: 120 },
            { name: 'Barley', vitamins: ['Vitamin B3'], minerals: ['Selenium', 'Magnesium'], benefits: 'Good for heart health', calories: 354 },
            { name: 'Wheat', vitamins: ['Vitamin B1', 'Vitamin B3'], minerals: ['Iron', 'Zinc'], benefits: 'Rich in fiber', calories: 340 },
            { name: 'Corn', vitamins: ['Vitamin B9', 'Vitamin C'], minerals: ['Magnesium'], benefits: 'Supports digestion', calories: 365 },
            { name: 'Rye', vitamins: ['Vitamin B3'], minerals: ['Iron', 'Magnesium'], benefits: 'Supports heart health', calories: 338 },
            { name: 'Millet', vitamins: ['Vitamin B1', 'Vitamin B2'], minerals: ['Iron', 'Magnesium'], benefits: 'High in protein', calories: 378 },
            { name: 'Buckwheat', vitamins: ['Vitamin B6', 'Vitamin B9'], minerals: ['Iron', 'Magnesium'], benefits: 'Supports heart health', calories: 343 },
            { name: 'Farro', vitamins: ['Vitamin B3'], minerals: ['Iron', 'Magnesium'], benefits: 'Rich in fiber', calories: 340 },
        ],
        Proteins: [
            { name: 'Chicken Breast', vitamins: ['Vitamin B6'], minerals: ['Phosphorus', 'Selenium'], benefits: 'High in protein', calories: 165 },
            { name: 'Tofu', vitamins: ['Vitamin B12'], minerals: ['Calcium', 'Iron'], benefits: 'Plant-based protein', calories: 76 },
            { name: 'Salmon', vitamins: ['Vitamin D', 'Vitamin B12'], minerals: ['Selenium', 'Potassium'], benefits: 'Supports brain health', calories: 206 },
            { name: 'Lentils', vitamins: ['Folate', 'Vitamin B6'], minerals: ['Iron', 'Phosphorus'], benefits: 'Good for digestion', calories: 116 },
            { name: 'Eggs', vitamins: ['Vitamin D', 'Vitamin B12'], minerals: ['Selenium', 'Iron'], benefits: 'High in protein', calories: 155 },
            { name: 'Greek Yogurt', vitamins: ['Vitamin B12'], minerals: ['Calcium', 'Phosphorus'], benefits: 'Supports bone health', calories: 59 },
            { name: 'Beef', vitamins: ['Vitamin B12', 'Vitamin B6'], minerals: ['Iron', 'Zinc'], benefits: 'High in protein', calories: 250 },
            { name: 'Pork', vitamins: ['Vitamin B1', 'Vitamin B6'], minerals: ['Phosphorus', 'Zinc'], benefits: 'High in protein', calories: 242 },
            { name: 'Chickpeas', vitamins: ['Folate', 'Vitamin B6'], minerals: ['Iron', 'Phosphorus'], benefits: 'Rich in fiber', calories: 164 },
            { name: 'Turkey', vitamins: ['Vitamin B6', 'Vitamin B12'], minerals: ['Selenium', 'Phosphorus'], benefits: 'High in protein', calories: 135 },
        ],
        Dairy: [
            { name: 'Milk', vitamins: ['Vitamin D', 'Vitamin B12'], minerals: ['Calcium', 'Potassium'], benefits: 'Supports bone health', calories: 42 },
            { name: 'Cheese', vitamins: ['Calcium'], minerals: ['Phosphorus', 'Zinc'], benefits: 'High in calcium', calories: 402 },
            { name: 'Yogurt', vitamins: ['Vitamin B12'], minerals: ['Calcium', 'Phosphorus'], benefits: 'Supports digestion', calories: 59 },
            { name: 'Butter', vitamins: ['Vitamin A'], minerals: ['Calcium'], benefits: 'Rich in fat-soluble vitamins', calories: 717 },
            { name: 'Cottage Cheese', vitamins: ['Calcium'], minerals: ['Phosphorus', 'Sodium'], benefits: 'Low in fat', calories: 98 },
            { name: 'Cream', vitamins: ['Vitamin A'], minerals: ['Calcium', 'Phosphorus'], benefits: 'High in fat', calories: 345 },
            { name: 'Kefir', vitamins: ['Vitamin B12'], minerals: ['Calcium', 'Phosphorus'], benefits: 'Rich in probiotics', calories: 41 },
            { name: 'Ricotta', vitamins: ['Calcium'], minerals: ['Phosphorus', 'Sodium'], benefits: 'Low-fat cheese', calories: 174 },
            { name: 'Gouda', vitamins: ['Calcium'], minerals: ['Phosphorus', 'Zinc'], benefits: 'Rich in calcium', calories: 356 },
            { name: 'Parmesan', vitamins: ['Calcium'], minerals: ['Phosphorus', 'Sodium'], benefits: 'Aged cheese', calories: 431 },
        ],
    };

    const handleFoodClick = (food) => {
        setSelectedFood(food);
    };

    return (
        <div className="food-categories">
            <h2>Foods</h2>
            <div className="categories-container">
                {Object.entries(categories).map(([category, foods]) => (
                    <div key={category} className="category">
                        <h3>{category}</h3>
                        <ul>
                            {foods.map(food => (
                                <li key={food.name} onClick={() => handleFoodClick(food)}>
                                    {food.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            {selectedFood && (
                <div className="food-details">
                    <h3>{selectedFood.name}</h3>
                    <p><strong>Vitamins:</strong> {selectedFood.vitamins.join(', ')}</p>
                    <p><strong>Minerals:</strong> {selectedFood.minerals.join(', ')}</p>
                    <p><strong>Benefits:</strong> {selectedFood.benefits}</p>
                    <p><strong>Calories:</strong> {selectedFood.calories} kcal</p>
                </div>
            )}
        </div>
    );
};

export default FoodInformations;
