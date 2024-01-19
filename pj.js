let cookieCount = 0;
let cookieImg = document.getElementById('cookie-img');
let clickMessage = document.getElementById('click-message');
let cookieCountElement = document.getElementById('cookie-count');
const cookiesRateElement = document.getElementById('production-rate-value');
let cookieRate = 1;
let autoClickerRate = 1;
let upgrades = [
    { name: 'Upgrade 1', cost: 10, cookiesIncrease: 2 },
    { name: 'Upgrade 2', cost: 20, cookiesIncrease: 3 },
    { name: 'Upgrade 3', cost: 30, cookiesIncrease: 4 }
  ];
  
const buyUpgradeButton = document.getElementById("buy-upgrade")
let upgradesListContainer = document.getElementById('upgrade-list-container');
// Update the initial cookie count and upgrades on page load
updateCookieCount(1);
displayUpgrades(1);

cookieImg.addEventListener('click', function() {
  cookieCount++;
  cookieCountElement.textContent = 'Total Cookies: ' + cookieCount;

  // Provide feedback on each click
  clickMessage.textContent = 'Keep clicking!';

  // Clear the feedback after a short delay
  setTimeout(function() {
    clickMessage.textContent = 'Click the cookie!';
  }, 1000);
});

let cookies = 0; // Start cookies count at zero
setInterval(function () {
  cookies = cookies +1;
  cookieCountElement.textContent = 'Total Cookies: ' + cookieCount;



  console.log("🍪", cookies);
}, 1000); // 1000 milliseconds == 1 second

cookieImg.addEventListener('click', function() {
    if (cookieCount >= 10) {
      cookieCount -= 10;
      cookiecookiesRate += 1;
      updateCookieCount();
    } else {
      alert('Not enough cookies to buy the upgrade!');
    }
  });

  let autoClickerInterval = setInterval(function() {
    cookieCount += autoClickerRate;
    updateCookieCount();
  }, 1000);
  
  function updateCookieCount() {
    cookieCountElement.textContent = cookieCount;
    localStorage.setItem('cookieCount', cookieCount.toString());
  }
  function displayUpgrades() {
    upgradesListContainer.innerHTML = ''; // Clear existing upgrades
  
    upgrades.forEach(function(upgrade) {
      let listItem = document.createElement('li');
      listItem.textContent = `${upgrade.name} - Cost: ${upgrade.cost}, cookies Increase: ${upgrade.cookiesIncrease}`;
      let buyButton = document.createElement('button');
      buyButton.textContent = 'Buy';
      buyButton.addEventListener('click', function() {
        purchaseUpgrade(upgrade);
      });
  
      listItem.appendChild(buyButton);
      upgradesListContainer.appendChild(listItem);
    });
  }
