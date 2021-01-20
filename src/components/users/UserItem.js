function UserItem({ user: { login, avatar_url, html_url } }) {
  return (
    <div className="card mt-3">
      <div className="card-body d-flex flex-column text-center align-items-center">
        <img
          src={avatar_url}
          alt=""
          style={{ width: '60px' }}
          className="rounded-circle"
        />
        <h3>{login}</h3>
        <a
          href={html_url}
          className="btn-dark btn-sm rounded"
          style={{ textDecoration: 'none' }}
        >
          More
        </a>
      </div>
    </div>
  );
}

export default UserItem;
