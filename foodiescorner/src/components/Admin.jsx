const Admin = () => {
    const data = [
      { name: 'Orders', value: 400 },
      { name: 'Users', value: 300 },
      { name: 'Reviews', value: 300 },
      { name: 'Restaurants', value: 200 }
    ];
  
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
    return (
      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <div style={{ width: '250px', height: '100vh', backgroundColor: '#1F2937', color: 'white', padding: '20px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Admin Panel</h2>
          <ul style={{ listStyle: 'none', padding: '0' }}>
            <li style={{ margin: '20px 0' }}>
              <a href="/admin" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</a>
            </li>
            <li style={{ margin: '20px 0' }}>
              <a href="/admin/restaurants" style={{ color: 'white', textDecoration: 'none' }}>Manage Restaurants</a>
            </li>
            <li style={{ margin: '20px 0' }}>
              <a href="/admin/orders" style={{ color: 'white', textDecoration: 'none' }}>Orders</a>
            </li>
            <li style={{ margin: '20px 0' }}>
              <a href="/admin/users" style={{ color: 'white', textDecoration: 'none' }}>Users</a>
            </li>
          </ul>
        </div>
  
        {/* Main Content */}
        <div style={{ flex: 1, padding: '20px' }}>
          {/* Navbar */}
          <nav style={{ backgroundColor: 'white', padding: '10px 20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Admin Dashboard</h1>
            <button style={{ backgroundColor: '#3B82F6', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Logout</button>
          </nav>
  
          {/* Dashboard Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
            <div style={{ backgroundColor: 'white', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>Total Orders</h2>
              <p style={{ fontSize: '28px' }}>1200</p>
            </div>
            <div style={{ backgroundColor: 'white', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>Total Users</h2>
              <p style={{ fontSize: '28px' }}>850</p>
            </div>
            <div style={{ backgroundColor: 'white', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>Total Reviews</h2>
              <p style={{ fontSize: '28px' }}>500</p>
            </div>
            <div style={{ backgroundColor: 'white', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>Total Restaurants</h2>
              <p style={{ fontSize: '28px' }}>75</p>
            </div>
          </div>
  
          {/* Overview Chart */}
          <div style={{ backgroundColor: 'white', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '10px', marginTop: '20px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Overview</h2>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
              <svg width="300" height="300">
                {data.map((entry, index) => {
                  const radius = 100;
                  const circumference = 2 * Math.PI * radius;
                  const offset = index === 0 ? 0 : data.slice(0, index).reduce((acc, item) => acc + item.value, 0);
                  const percentage = entry.value / data.reduce((acc, item) => acc + item.value, 0);
                  const dashArray = `${percentage * circumference} ${circumference}`;
                  return (
                    <circle
                      key={index}
                      r={radius}
                      cx="150"
                      cy="150"
                      fill="transparent"
                      stroke={COLORS[index]}
                      strokeWidth="50"
                      strokeDasharray={dashArray}
                      strokeDashoffset={-offset / data.reduce((acc, item) => acc + item.value, 0) * circumference}
                    />
                  );
                })}
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Admin;
  