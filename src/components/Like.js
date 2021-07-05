import React,{useState} from 'react'

const Image = (props) =>{
    let [count, setcount] = useState(1)
    let [tumb, settumb] = useState("fas fa-thumbs-up")
    let [button, setbutton] = useState("btn btn-success btn-sm")
    let [comment, setcomment] = useState(false)
    let [commentvalue, setcommentvalue] = useState("")
    const countcon = count >0
    

    const like = () =>{
        if(tumb === "fas fa-thumbs-up"){
            setcount(count + 1)
            settumb ("fas fa-thumbs-down")
            setbutton ("btn btn-danger btn-sm")
        }else{
            setcount(count - 1)
            settumb ("fas fa-thumbs-up")
            setbutton ("btn btn-success btn-sm")
        }
    }
    const commentshow = () =>{  
        if(comment === true){
            setcomment(false)
        }else{
            setcomment(true)
        }
    }
    const showcomment = (event) =>{
        if (event.key === 'Enter') {
            setcommentvalue(event.target.value)
         }
    }
    const style = {
        color:"blue"
    }
    return (
        <div>
            <h1>{props.post}</h1>
            {countcon ?  <div>{count}<i className="fas fa-thumbs-up" style={style}></i></div> :''} 
            <button onClick={like} className="btn btn-success btn-sm"><i className={tumb}></i></button> 
            <button onClick={commentshow} className="btn btn-success btn-sm"><i className="fa fa-comment"></i></button> 
            {comment ===true ? <input type="text" className="form-control" placeholder='Enter comment' value={commentvalue} onKeyDown={showcomment} /> : ''}
            <div>{commentvalue}</div>
        </div> 
    )
}

export default Image