function Card({ id, title, body }) {
    return (
        <div className="card">
            <p className="id">{id}</p>
            <p className="title">{title}</p>
            <p>{body}</p>
        </div>
    )
}
export default Card;