function UserDashboard({ onLogout }) {
    return (
        <div>
            <h2>User Dashboard</h2>
            <p>View profile, orders</p>

            <button onClick={onLogout}>Logout</button>
        </div>
    );
}

export default UserDashboard;
