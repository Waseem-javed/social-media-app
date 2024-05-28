import "./stories.scss";

const Stories = () => {
  const currentUser = {
    id: 1,
    name: "Meesaw",
    profilePic: "https://avatars.githubusercontent.com/u/65248360?v=4",
  };

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Meesaw",
      img: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      name: "Meesaw",
      img: "https://picsum.photos/200/300",
    },
    {
      id: 3,
      name: "Meesaw",
      img: "https://picsum.photos/200/300",
    },
    {
      id: 4,
      name: "Meesaw",
      img: "https://picsum.photos/200/300",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
