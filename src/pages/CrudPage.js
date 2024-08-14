import React, { useState, useEffect } from "react";
import axios from "axios";
import '../App.css';

const CrudPage = () => {
    const [categories, setCategories] = useState([]);
    const [foods, setFoods] = useState([]);
    const [newCategory, setNewCategory] = useState({ emri: "" });
    const [newFood, setNewFood] = useState({ emri: "", kategoriaId: "" });

    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const [selectedFoodId, setSelectedFoodId] = useState(null);

    // Fetch categories on load
    useEffect(() => {
        fetchCategories();
        fetchFoods();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await axios.get("http://localhost:5004/api/Kategoria");
            setCategories(response.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    const fetchFoods = async () => {
        try {
            const response = await axios.get("http://localhost:5004/api/Ushqimi");
            setFoods(response.data);
        } catch (error) {
            console.error("Error fetching foods:", error);
        }
    };

    const handleCategorySubmit = async (e) => {
        e.preventDefault();
        try {
            if (selectedCategoryId) {
                // Update category
                await axios.put(`http://localhost:5004/api/Kategoria/${selectedCategoryId}`, newCategory);
            } else {
                // Create new category
                await axios.post("http://localhost:5004/api/Kategoria", newCategory);
            }
            fetchCategories();
            setNewCategory({ emri: "" });
            setSelectedCategoryId(null);
        } catch (error) {
            console.error("Error saving category:", error);
        }
    };

    const handleFoodSubmit = async (e) => {
        e.preventDefault();
        try {
            if (selectedFoodId) {
                // Update food
                await axios.put(`http://localhost:5004/api/Ushqimi/${selectedFoodId}`, newFood);
            } else {
                // Create new food
                await axios.post("http://localhost:5004/api/Ushqimi", newFood);
            }
            fetchFoods();
            setNewFood({ emri: "", kategoriaId: "" });
            setSelectedFoodId(null);
        } catch (error) {
            console.error("Error saving food:", error);
        }
    };

    const handleCategoryDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5004/api/Kategoria/${id}`);
            fetchCategories();
        } catch (error) {
            console.error("Error deleting category:", error);
        }
    };

    const handleFoodDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5004/api/Ushqimi/${id}`);
            fetchFoods();
        } catch (error) {
            console.error("Error deleting food:", error);
        }
    };

    const handleCategoryEdit = (category) => {
        setNewCategory(category);
        setSelectedCategoryId(category.kategoriaId);
    };

    const handleFoodEdit = (food) => {
        setNewFood(food);
        setSelectedFoodId(food.ushqimiId);
    };

    return (
        <div>
            <h1>Kategoria CRUD</h1>
            <form onSubmit={handleCategorySubmit}>
                <input
                    type="text"
                    placeholder="Emri i Kategorisë"
                    value={newCategory.emri}
                    onChange={(e) => setNewCategory({ ...newCategory, emri: e.target.value })}
                />
                <button type="submit">{selectedCategoryId ? "Përditëso Kategorinë" : "Shto Kategorinë"}</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Emri</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category) => (
                        <tr key={category.kategoriaId}>
                            <td>{category.kategoriaId}</td>
                            <td>{category.emri}</td>
                            <td>
                                <button onClick={() => handleCategoryEdit(category)}>Edit</button>
                                <button onClick={() => handleCategoryDelete(category.kategoriaId)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h1>Ushqimi CRUD</h1>
            <form onSubmit={handleFoodSubmit}>
                <input
                    type="text"
                    placeholder="Emri i Ushqimit"
                    value={newFood.emri}
                    onChange={(e) => setNewFood({ ...newFood, emri: e.target.value })}
                />
                <select
                    value={newFood.kategoriaId}
                    onChange={(e) => setNewFood({ ...newFood, kategoriaId: e.target.value })}
                >
                    <option value="">Zgjidh Kategorinë</option>
                    {categories.map((category) => (
                        <option key={category.kategoriaId} value={category.kategoriaId}>
                            {category.emri}
                        </option>
                    ))}
                </select>
                <button type="submit">{selectedFoodId ? "Përditëso Ushqimin" : "Shto Ushqimin"}</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Emri</th>
                        <th>Kategoria</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
    {foods.map((food) => (
        <tr key={food.ushqimiId}>
            <td>{food.ushqimiId}</td>
            <td>{food.emri}</td>
            <td>{food.kategoriaId ? food.kategoriaId : "Pa kategori"}</td> {/* Ndryshuar për të shfaqur ID-në e kategorisë */}
            <td>
                <button onClick={() => handleFoodEdit(food)}>Edit</button>
                <button onClick={() => handleFoodDelete(food.ushqimiId)}>Delete</button>
            </td>
        </tr>
    ))}
</tbody>

            </table>
        </div>
    );
};

export default CrudPage;
