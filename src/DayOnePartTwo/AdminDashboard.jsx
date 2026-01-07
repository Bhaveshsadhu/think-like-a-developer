function AdminDashboard({ onLogout }) {
    return (
        <div>
            <h2>Admin Dashboard</h2>
            <p>Manage users, settings, reports</p>

            <button onClick={onLogout}>Logout</button>
        </div>
    );
}

export default AdminDashboard;
