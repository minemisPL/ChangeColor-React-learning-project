const AddColorBar = ({ setColor }) => {
    return (
        <div className="addColorBar">
            <form
                className={'addColorForm'}
                onSubmit={event => event.preventDefault()}>
                <label>Add color name:</label>
                <input
                    autoFocus
                    type="text"
                    placeholder="Add color name"
                    onChange={(event => setColor(event.target.value))}
                />
            </form>
        </div>
    );
};

export default AddColorBar;