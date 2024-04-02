

export default function Feedback() {

    return (
        <section>
            <h1>Feedback</h1>

            <form>
                <label htmlFor="name">Your bane</label>
                <input type="text" id='name' placeholder="Title" className="control" />

                <label htmlFor="description"></label>
                <input type="text" id='description' placeholder="Description" className="control" />
                <label htmlFor="reason"></label>
                <select name="" id="reason"></select>
            </form>
        </section>
    )
}   