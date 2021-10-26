export default function PostListElement({ post }) {
  return (
    <h3>
      {post.id} {post.title}
    </h3>
  );
}
