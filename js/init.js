var initDB = 'on';
document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
  setInterval(function () {
        checkConnection();
  }, 1000);
    }
  
  function checkConnection() {
    var networkState = navigator.connection.type;
    
    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'none';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'none';
    
    if(states[networkState] === 'none'){
      if (localStorage.mode != 'offline'){
        alert('Offline Mode');
      }
      localStorage.mode='offline';
    }
    else{
      if (localStorage.mode == 'offline' || localStorage.mode == undefined){
        alert('Online Mode');
      }
      localStorage.mode='online';
      if(initDB === 'on'){
        initDatabase();
        initDB = 'off';
      }
    }
  }