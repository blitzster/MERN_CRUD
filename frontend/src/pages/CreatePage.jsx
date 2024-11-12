import React from "react";

function CreatePage() {
    return (
        <div>
            <h1>Create a New Product</h1>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Price:
                    <input type="number" name="price" />
                </label>
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default CreatePage;
