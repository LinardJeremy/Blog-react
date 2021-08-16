import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog= {title, body, author};
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added');
            history.push('/');
        })
    }

    return (  
        <div className="create">
            <h2>Add a new Blog</h2>
             <form method="POST" onSubmit={handleSubmit}>
                <label>Titre d'article:</label>
                <input type="text" required value={title} onChange={(e)=> setTitle(e.target.value)}/>
             <label>Texte d'article</label>
                <textarea required value={body} onChange={(e)=>setBody(e.target.value)}> </textarea>
                <label>Blog author</label>
                <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                <button>Send</button>
            </form>
        </div>
    );
}
 
export default Create;