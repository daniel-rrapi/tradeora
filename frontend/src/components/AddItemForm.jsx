export function AddItemForm() {
    return <form className="container mx-auto md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-5 px-10 sm:px-0">
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
        <div className="flex gap-3">
            <input type="checkbox"/>
            <p>Available for shipping</p>
        </div>
    </form>


}