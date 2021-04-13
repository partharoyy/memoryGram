import React from 'react'

const Form = () => {

    style = {
        display: "block"
    }

    return (
        <div>
            <h2>MemoryGram</h2>
            <h4>choose your memories..</h4>
            <form>
                <input type="file" />
                <button style={style} type="submit">+</button>
            </form>

        </div>
    )
}

export default Form
