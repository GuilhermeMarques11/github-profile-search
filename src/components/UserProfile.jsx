import styles from './UserProfile.module.css';

const UserProfile = ({ userData, error, fetchCompleted }) => {
  return (
    <>
      {(fetchCompleted || error) && (
        <div className={styles.userProfileBox}>
          {fetchCompleted && (
            <div className={styles.userProfileRow}>
              <div className={styles.userImage}>
                <img src={userData.avatar_url} alt="User image" />
              </div>
              <div className={styles.userInfo}>
                <a href={userData.html_url} target="_blank">
                  <p className={styles.userName}>{userData.name}</p>
                </a>
                <p className={styles.userBio}>{userData.bio}</p>
              </div>
            </div>
          )}
          {error && <p className={styles.errorMessage}>{error}</p>}
        </div>
      )}
    </>
  );
};

export default UserProfile;
