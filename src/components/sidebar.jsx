const SideBar = () => {
    const sidebarStyles = {
        sidebar: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '250px',
            height: '100vh',
            background: '#e9e6e6',
            color: 'rgb(0, 0, 0)',
            transition: 'width 0.3s ease-in-out',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 10
        },
        sidebarCollapsed: {
            width: '60px'
        },
        logo: {
            position: 'relative',
            width: '100%',
            textAlign: 'center',
            paddingTop: '80px',
            marginBottom: '20px'
        },
        logoImg: {
            width: '40px',
            height: 'auto',
            transition: 'width 0.3s ease-in-out'
        },
        toggleBtn: {
            position: 'fixed',
            top: '10px',
            left: '10px',
            background: '#ffffff',
            color: 'rgb(0, 0, 0)',
            border: 'none',
            padding: '10px',
            cursor: 'pointer',
            zIndex: 999
        },
        ul: {
            listStyle: 'none',
            padding: 0,
            width: '100%',
            marginTop: 0
        },
        li: {
            padding: '15px',
            textAlign: 'center',
            cursor: 'pointer',
            transition: 'background 0.3s',
            '&:hover': {
                background: '#858585'
            }
        },
        icon: {
            fontSize: '24px'
        }
    };
    
    const toggleSidebar = () => {
            document.getElementById('sidebar').classList.toggle('collapsed');
    }

    return (
        <div style={{...sidebarStyles.sidebar, ...(true ? sidebarStyles.sidebarCollapsed : {})}} id="sidebar">
            <div style={sidebarStyles.logo}>
                <img style={sidebarStyles.logoImg} src="../static/img/mark.png" alt="Logo" />
            </div>
            <ul style={sidebarStyles.ul}>
                <li style={sidebarStyles.li}><i style={sidebarStyles.icon} className="bi bi-house"></i><span>首頁</span></li>
                <li style={sidebarStyles.li}><i style={sidebarStyles.icon} className="bi bi-book"></i><span>題庫</span></li>
                <li style={sidebarStyles.li}><i style={sidebarStyles.icon} className="bi bi-pencil"></i><span>模擬測驗</span></li>
                <li style={sidebarStyles.li}><i style={sidebarStyles.icon} className="bi bi-journal-x"></i><span>錯題本</span></li>
            </ul>
            <button style={sidebarStyles.toggleBtn} onClick={() => toggleSidebar()}>☰</button>
        </div>
    )
};

export default SideBar;