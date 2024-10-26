export function AddItemForm() {
    return <form className="container mx-auto md:w-2/3">
        <label>Category</label>
        <select>
            <option>Select a category</option>
        </select>

        <label>Title</label>
        <input type="text"/>

        <label>Description</label>
        <textarea rows="4"></textarea>

        <label>Price</label>
        <input type="number"/>

        <label>Photos</label>
        <input type="file"/>

        <label>Location</label>
        <input type="text"/>

        <label>Shipping</label>
        <input type="checkbox"/>
        <p>Available for shipping</p>
    </form>


}