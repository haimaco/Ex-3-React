const AvatarCards = (props) => {
  return (
    <div>
      <input onChange={(e) => props.getValue(e.target.value)} type="text" />
    </div>
  );
};

export default AvatarCards;