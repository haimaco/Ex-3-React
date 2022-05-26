const AvatarCards = (props) => {
    const getAvatarCards = () => {
      const domArr = props.avatars.map((avatar) => {
        return (
          <div key={avatar.firstName + avatar.age} className="card">
            <h2>{avatar.firstName + " " + avatar.lastName}</h2>
            <div>{avatar.city + ", " + avatar.country}</div>
            <div>{`${avatar.age} years old`}</div>
            <img src={avatar.picture} alt={avatar.firstName} />
          </div>
        );
      });
      return domArr;
    };
  
    return <div className="avatarsCardContainer">{getAvatarCards()}</div>;
  };
  
  export default AvatarCards;