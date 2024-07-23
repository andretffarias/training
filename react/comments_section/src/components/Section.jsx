export default function Section ({comments}) {
    localStorage.setItem("comments", JSON.stringify(comments))
    return (
        <section id="comments">
        {comments.length > 0
          ? (
            comments.map((comment) => (
              <div key={comment.id}>
                <h3>{comment.author}</h3>
                <span>Em {comment.createdAt.toLocaleString()}</span>
                <p>{comment.content}</p>
              </div>
            ))
          )
          : <p>Be the first to comment!!!</p>}
      </section>
    )
}