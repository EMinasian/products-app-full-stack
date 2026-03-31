import { getCurrentUser } from './actions'

const HomePage = async () => {

  const currentUser = await getCurrentUser()

  return (
    <div>
      <h1>Welcome to the Comments App</h1>
      <p>This is the home page.</p>
      <p>You accessed with user {currentUser.userId}</p>
    </div>
  );
}

export default HomePage