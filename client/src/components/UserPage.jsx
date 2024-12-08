import { useParams } from "react-router-dom";

const UserPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>User Profile</h1>
      <p>Viewing profile of user with ID: {id}</p>
    </div>
  );
};

export default UserPage;
