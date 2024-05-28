import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Meesaw",
      userId: 1,
      profilePic: "https://avatars.githubusercontent.com/u/65248360?v=4",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://picsum.photos/200",
    },
    {
      id: 2,
      name: "Meesaw",
      userId: 2,
      profilePic: "https://avatars.githubusercontent.com/u/65248360?v=4",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
